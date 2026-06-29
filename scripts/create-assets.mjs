import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = new URL("../public/images/", import.meta.url);
mkdirSync(outDir, { recursive: true });

const crcTable = new Uint32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  return c >>> 0;
});

function crc32(buffer) {
  let c = 0xffffffff;
  for (const byte of buffer) {
    c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  const crc = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function writePng(name, width, height, paint) {
  const rows = [];
  for (let y = 0; y < height; y += 1) {
    const row = Buffer.alloc(1 + width * 4);
    row[0] = 0;
    for (let x = 0; x < width; x += 1) {
      const [r, g, b, a] = paint(x, y, width, height);
      const offset = 1 + x * 4;
      row[offset] = r;
      row[offset + 1] = g;
      row[offset + 2] = b;
      row[offset + 3] = a;
    }
    rows.push(row);
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 6;

  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(Buffer.concat(rows), { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);

  writeFileSync(new URL(name, outDir), png);
}

function mix(a, b, amount) {
  return Math.round(a + (b - a) * amount);
}

function rect(x, y, left, top, right, bottom) {
  return x >= left && x <= right && y >= top && y <= bottom;
}

function circle(x, y, cx, cy, radius) {
  return (x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2;
}

writePng("legal-study-hero.png", 1280, 840, (x, y, width, height) => {
  const gx = x / width;
  const gy = y / height;
  const light = 0.55 + 0.45 * (1 - Math.hypot(gx - 0.22, gy - 0.18));
  let color = [
    mix(236, 162, light * 0.48),
    mix(226, 124, light * 0.36),
    mix(208, 82, light * 0.24),
    255,
  ];

  if (rect(x, y, 108, 112, 528, 678)) color = [74, 38, 40, 255];
  if (rect(x, y, 145, 152, 502, 641)) color = [235, 223, 202, 255];
  if (rect(x, y, 178, 205, 466, 221) || rect(x, y, 178, 273, 466, 289) || rect(x, y, 178, 341, 466, 357)) {
    color = [132, 54, 63, 255];
  }
  if (rect(x, y, 708, 164, 1015, 635)) color = [36, 44, 45, 255];
  if (rect(x, y, 746, 194, 986, 608)) color = [238, 230, 215, 255];
  if (rect(x, y, 780, 245, 956, 258) || rect(x, y, 780, 317, 956, 330) || rect(x, y, 780, 389, 956, 402)) {
    color = [23, 108, 115, 255];
  }
  if (circle(x, y, 603, 412, 115)) color = [196, 147, 69, 255];
  if (circle(x, y, 603, 412, 80)) color = [246, 240, 231, 255];
  if (rect(x, y, 585, 292, 621, 520)) color = [125, 31, 42, 255];
  if (rect(x, y, 514, 398, 692, 434)) color = [125, 31, 42, 255];
  if (circle(x, y, 603, 412, 17)) color = [32, 32, 31, 255];
  if (rect(x, y, 192, 705, 1108, 744)) color = [32, 32, 31, 255];
  if (rect(x, y, 878, 640, 1130, 695)) color = [125, 31, 42, 255];
  if (rect(x, y, 903, 607, 1155, 654)) color = [196, 147, 69, 255];
  if ((x + y) % 17 === 0) {
    color = [Math.max(0, color[0] - 5), Math.max(0, color[1] - 5), Math.max(0, color[2] - 5), 255];
  }
  return color;
});

writePng("profile-placeholder.png", 900, 1125, (x, y, width, height) => {
  const gx = x / width;
  const gy = y / height;
  const base = [
    mix(246, 239, gy * 0.8),
    mix(240, 226, gy * 0.55),
    mix(231, 204, gy * 0.45),
    255,
  ];

  if (circle(x, y, width * 0.5, height * 0.35, width * 0.16)) return [125, 31, 42, 255];
  if (circle(x, y, width * 0.5, height * 0.68, width * 0.28)) return [32, 32, 31, 255];
  if (circle(x, y, width * 0.5, height * 0.35, width * 0.11)) return [246, 240, 231, 255];
  if (circle(x, y, width * 0.5, height * 0.68, width * 0.22)) return [125, 31, 42, 255];
  if (x < 18 || x > width - 19 || y < 18 || y > height - 19) return [196, 147, 69, 255];
  if ((Math.round(gx * 20) + Math.round(gy * 24)) % 9 === 0) return [232, 219, 199, 255];
  return base;
});

console.log("Assets created in public/images");
