export type SupervisionEntry = {
  period: string;
  name: string;
  programme?: string;
  supervisors: string;
};

export type PeopleLevel = {
  id: string;
  title: string;
  entries: SupervisionEntry[];
  emptyNote?: string;
};

/** Supervision from CV_CRoux_v2 (supervision section). */
export const peopleLevels: PeopleLevel[] = [
  {
    id: "master",
    title: "Master",
    entries: [
      {
        period: "2026",
        name: "Evan Frigout",
        programme: "Master-1",
        supervisors: "Camille Roux",
      },
      {
        period: "2024",
        name: "Arthur Boddaert",
        programme: "Master-2 Research",
        supervisors: "Camille Roux",
      },
      {
        period: "2024",
        name: "Clément Puchaczewski",
        programme: "Master-2 Research",
        supervisors: "Camille Roux and Quentin Helleu",
      },
      {
        period: "2021",
        name: "Lucas Bihel",
        programme: "Master-1",
        supervisors: "Camille Roux",
      },
      {
        period: "2021",
        name: "Guillaume Lan-Fong",
        programme: "Master-2 Research",
        supervisors: "Camille Roux",
      },
      {
        period: "2020",
        name: "François Monnet",
        programme: "Master-2 Research",
        supervisors: "Jonathan Romiguier and Camille Roux",
      },
      {
        period: "2020",
        name: "Morgan Lodé",
        programme: "Master-2 Research",
        supervisors: "Camille Roux and Jonathan Romiguier",
      },
      {
        period: "2020",
        name: "Elisabeth Authier",
        programme: "Master-2 Research",
        supervisors: "Camille Roux and Violaine Llaurens",
      },
    ],
  },
  {
    id: "doctorat",
    title: "Doctorat",
    entries: [
      {
        period: "2024–2027",
        name: "Arthur Boddaert",
        supervisors: "Bert Van Bocxlaer and Camille Roux",
      },
      {
        period: "2024–2027",
        name: "Alice Ha",
        supervisors: "Jonathan Romiguier and Camille Roux",
      },
      {
        period: "2022–2025",
        name: "Achille Langlin",
        supervisors: "Bert Van Bocxlaer and Camille Roux",
      },
      {
        period: "2021–2024",
        name: "Guillaume Lan-Fong",
        supervisors: "Camille Roux and Xavier Vekemans",
      },
      {
        period: "2020–2023",
        name: "François Monnet",
        supervisors: "Camille Roux, Xavier Vekemans and Yves Van De Peer",
      },
    ],
  },
  {
    id: "postdoc",
    title: "Post-doctorat",
    entries: [
      {
        period: "2024–2025",
        name: "Clara Groot Crego",
        supervisors: "Camille Roux",
      },
      {
        period: "2020–2022",
        name: "Ana Catarina Afonso Silva",
        supervisors: "Camille Roux and Jonathan Romiguier",
      },
    ],
  },
];
