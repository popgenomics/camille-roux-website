export type ProjectParticipant = {
  name: string;
  affiliation: string;
  url?: string;
};

export type BiologicalModel = {
  name: string;
  image: string;
  alt: string;
  description: string;
};

export type WorkPackage = {
  id: string;
  title: string;
  description: string;
};

export const radiaspe = {
  slug: "radiaspe",
  title: "RadiaSpe: Exploring drivers of reproductive isolation in plant evolutionary radiations",
  funding: "ANR PRCI project, co-led by Camille Roux and Ovidiu Paun.",
  question:
    "RadiaSpe asks whether plant evolutionary radiations are accompanied by faster accumulation of reproductive barriers, and which ecological and genomic mechanisms contribute to this acceleration.",
  summary:
    "Evolutionary radiations generate striking bursts of species diversity, but it remains unclear whether they also correspond to faster accumulation of barriers to gene flow. RadiaSpe addresses this question in two plant genera, Diospyros and Tillandsia, where radiating and non-radiating clades can be compared within the same evolutionary framework.",
  workPackages: [
    {
      id: "wp1",
      title: "WP1: Gene flow and reproductive barriers",
      description:
        "Compare radiating and non-radiating clades to test whether reproductive barriers accumulate faster during evolutionary radiations.",
    },
    {
      id: "wp2",
      title: "WP2: Ecological determinants",
      description:
        "Assess whether pollinators, soil chemistry, climate, morphology, and other ecological factors help explain divergence among closely related species.",
    },
    {
      id: "wp3",
      title: "WP3: Genomic determinants",
      description:
        "Characterize selection, structural variation, transposable elements, and other genomic features that may contribute to diversification.",
    },
  ] satisfies WorkPackage[],
  models: [
    {
      name: "Diospyros",
      image: "/images/RadiaSpe/Diospyros.jpg",
      alt: "Diospyros, a genus used in RadiaSpe to compare radiating and non-radiating lineages",
      description:
        "Diospyros includes a rapid New Caledonian radiation alongside non-radiating relatives, providing a comparative framework to study the genomic and ecological drivers of diversification.",
    },
    {
      name: "Tillandsia",
      image: "/images/RadiaSpe/Tillandsia.jpeg",
      alt: "Tillandsia, a diverse bromeliad genus studied in RadiaSpe",
      description:
        "Tillandsia is a diverse bromeliad genus with strong variation in ecology, morphology, photosynthetic strategies, and pollination-related traits.",
    },
  ] satisfies BiologicalModel[],
  participants: [
    {
      name: "Camille Roux",
      affiliation:
        "CNRS, Institut des Sciences de l'Évolution de Montpellier (ISEM)",
    },
    {
      name: "Ovidiu Paun",
      affiliation: "University of Vienna, Department of Botany and Biodiversity Research",
      url: "https://plantgenomics.univie.ac.at/about-us/group-members/ovidiu-paun/",
    },
    {
      name: "Bert Van Bocxlaer",
      affiliation: "CNRS, Université de Lille",
      url: "https://eep.univ-lille.fr/user/bert.van-bocxlaer/",
    },
    {
      name: "Thibault Leroy",
      affiliation: "INRAE, GenPhySE, Toulouse",
      url: "https://thibaultleroyfr.github.io/CV.html",
    },
    {
      name: "Christelle Fraïsse",
      affiliation:
        "CNRS, Institut des Sciences de l'Évolution de Montpellier (ISEM)",
      url: "https://sites.google.com/view/cfraisserios/home",
    },
  ] satisfies ProjectParticipant[],
};
