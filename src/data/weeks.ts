export type CourseDocument = {
  kind: "PPT profesor" | "Trabajo realizado";
  title: string;
  fileName: string;
  href: string;
  expectedPath: string;
};

export type Week = {
  number: number;
  slug: string;
  title: string;
  folder: string;
  documents: CourseDocument[];
};

export const student = {
  name: "Daniela Ariana Valer Alfaro",
  course: "Razonamiento y argumentación jurídica",
  profileImage: "/images/profile-dan.jpeg",
};

const weekNames = Array.from({ length: 15 }, (_, index) => {
  const number = index + 1;
  return {
    number,
    slug: `semana-${String(number).padStart(2, "0")}`,
    title: `Semana ${number}`,
    folder: `semana-${String(number).padStart(2, "0")}`,
  };
});

const buildDocuments = (folder: string): CourseDocument[] => [
  {
    kind: "PPT profesor",
    title: "PPT del profesor",
    fileName: "ppt-profesor.pdf",
    href: `/documentos/${folder}/ppt-profesor.pdf`,
    expectedPath: `public/documentos/${folder}/ppt-profesor.pdf`,
  },
  {
    kind: "Trabajo realizado",
    title: "Trabajo realizado",
    fileName: "trabajo.pdf",
    href: `/documentos/${folder}/trabajo.pdf`,
    expectedPath: `public/documentos/${folder}/trabajo.pdf`,
  },
];

export const weeks: Week[] = weekNames.map((week) => ({
  ...week,
  documents: buildDocuments(week.folder),
}));

export const courseStats = [
  { label: "Semanas", value: "15" },
  { label: "Documentos", value: "PPT + trabajo" },
  { label: "Formato", value: "PDF" },
];
