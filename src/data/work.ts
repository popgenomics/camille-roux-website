export type WorkRole = "first-author" | "last-author" | "coauthor";

export type WorkEntry = {
  slug: string;
  year: string;
  journal: string;
  title: string;
  url: string;
  image: string;
  role: WorkRole;
  description: string;
  alt: string;
  type?: "book-chapter";
};

export const workEntries: WorkEntry[] = [
  {
    slug: "science-2025",
    year: "2025",
    journal: "Science",
    title: "Rapid establishment of species barriers in plants compared with that in animals",
    url: "https://doi.org/10.1126/science.adl2356",
    image: "/images/work/science-2025.png",
    role: "last-author",
    description:
      "We show that plants tend to lose genetic connectivity faster than animals at comparable levels of genomic divergence, suggesting faster establishment of species barriers in plants.",
    alt: "Comparative curve showing genetic connectivity declining with net divergence in animals and plants",
  },
  {
    slug: "nature-2025",
    year: "2025",
    journal: "Nature",
    title: "One mother for two species via obligate cross-species cloning in ants",
    url: "https://doi.org/10.1038/s41586-025-09425-w",
    image: "/images/work/nature-2025.png",
    role: "coauthor",
    description:
      "Juvé et al. reveal an extraordinary reproductive system in Messor ants, where M. ibericus queens produce males of another species and require their sperm to generate workers.",
    alt: "Diagram and photographs illustrating cross-species cloning in Messor ants",
  },
  {
    slug: "plant-cell-physiology-2025",
    year: "2025",
    journal: "Plant and Cell Physiology",
    title: "Genetic Isolation among Four Lineages of Silene nutans",
    url: "https://doi.org/10.1093/pcp/pcae110",
    image: "/images/work/plant-cell-physiology-2025.png",
    role: "coauthor",
    description:
      "Postel et al. use DILS and transcriptomic data to show that four Silene nutans lineages diverged in strict isolation, with rapid reproductive isolation possibly linked to plastid–nuclear incompatibilities.",
    alt: "Demographic models used to infer genetic isolation among Silene nutans lineages",
  },
  {
    slug: "evolution-letters-2025",
    year: "2025",
    journal: "Evolution Letters",
    title: "Diverging Arabidopsis populations quickly accumulate pollen-acting genetic incompatibilities",
    url: "https://doi.org/10.1093/evlett/qraf013",
    image: "/images/work/evolution-letters-2025.png",
    role: "coauthor",
    description:
      "Condon et al. show that pollen-acting segregation distortion can arise rapidly within and between Arabidopsis lineages, suggesting that haploid-stage incompatibilities may contribute early to reproductive isolation.",
    alt: "Likelihood profiles for pollen-acting genetic incompatibilities in Arabidopsis",
  },
  {
    slug: "peer-community-journal-2024-termites",
    year: "2024",
    journal: "Peer Community Journal",
    title: "The impact of social complexity on the efficacy of natural selection in termites",
    url: "https://doi.org/10.24072/pcjournal.476",
    image: "/images/work/peer-community-journal-2024-termites.png",
    role: "first-author",
    description:
      "We show that termites have elevated dN/dS compared with other Blattodea, suggesting that eusociality and social complexity reduce the genome-wide efficacy of natural selection.",
    alt: "Phylogenetic tree of Blattodea with dN/dS estimates highlighting termites",
  },
  {
    slug: "journal-biogeography-2024",
    year: "2024",
    journal: "Journal of Biogeography",
    title: "Holocene climate change promoted allopatric divergence and disjunct geographic distribution in a bee orchid species",
    url: "https://doi.org/10.1111/jbi.14998",
    image: "/images/work/journal-biogeography-2024.png",
    role: "coauthor",
    description:
      "Gibert et al. combine population genomics and ecological niche modelling to show that Holocene climate change promoted recent allopatric divergence between disjunct Ophrys aveyronensis populations.",
    alt: "Effective population size through time for several Ophrys aveyronensis populations",
  },
  {
    slug: "methods-molecular-biology-2023",
    year: "2023",
    journal: "Methods in Molecular Biology",
    title: "Inferring the Demographic History and Inheritance Mode of Tetraploid Species Using ABC",
    url: "https://doi.org/10.1007/978-1-0716-2561-3_17",
    image: "/images/work/methods-molecular-biology-2023.png",
    role: "first-author",
    type: "book-chapter",
    description:
      "We present an ABC framework to infer the demographic history, origin, and inheritance mode of tetraploid species from population genomic data.",
    alt: "Conceptual models of polyploid origin and inheritance mode",
  },
  {
    slug: "pnas-2022-fire-ant-supergene",
    year: "2022",
    journal: "PNAS",
    title: "Radiation and hybridization underpin the spread of the fire ant social supergene",
    url: "https://doi.org/10.1073/pnas.2201040119",
    image: "/images/work/pnas-2022-fire-ant-supergene.png",
    role: "coauthor",
    description:
      "Helleu et al. reconstruct the evolutionary history of the fire ant social supergene, showing that it assembled through sequential inversions before spreading across species boundaries by introgression.",
    alt: "Evolutionary scenario for the spread of the fire ant social supergene",
  },
  {
    slug: "peer-community-journal-2022-ciona",
    year: "2022",
    journal: "Peer Community Journal",
    title: "Introgression between highly divergent sea squirt genomes: an adaptive breakthrough?",
    url: "https://doi.org/10.24072/pcjournal.172",
    image: "/images/work/peer-community-journal-2022-ciona.png",
    role: "coauthor",
    description:
      "Fraïsse et al. show that introgression between highly divergent Ciona genomes is rare overall but concentrated in a chromosome 5 hotspot, with signatures consistent with recent positive selection.",
    alt: "Genomic scan showing a localized introgression hotspot in Ciona",
  },
  {
    slug: "diversity-distributions-2022",
    year: "2022",
    journal: "Diversity and Distributions",
    title: "Population genomics reveal multiple introductions and admixture of Sonchus oleraceus in Australia",
    url: "https://doi.org/10.1111/ddi.13597",
    image: "/images/work/diversity-distributions-2022.png",
    role: "coauthor",
    description:
      "Encinas-Viso et al. reconstruct the invasion history of Sonchus oleraceus in Australia, revealing multiple introductions, admixture, and a more complex demographic history than a single recent colonization.",
    alt: "Population graph showing migration and admixture among Sonchus oleraceus populations",
  },
  {
    slug: "heredity-2022",
    year: "2022",
    journal: "Heredity",
    title: "Searching for genetic evidence of demographic decline in an arctic seabird: beware of overlapping generations",
    url: "https://doi.org/10.1038/s41437-022-00515-3",
    image: "/images/work/heredity-2022.png",
    role: "coauthor",
    description:
      "Charbonnel et al. test for genetic signatures of demographic decline in the ivory gull and show that overlapping generations can delay or weaken bottleneck signals in long-lived species.",
    alt: "Map of Arctic sampling sites for an ivory gull demographic study",
  },
  {
    slug: "molecolres-2021",
    year: "2021",
    journal: "Molecular Ecology Resources",
    title: "DILS: Demographic inferences with linked selection by using ABC",
    url: "https://doi.org/10.1111/1755-0998.13323",
    image: "/images/work/molecolres-2021.png",
    role: "last-author",
    description:
      "We present DILS, a statistical platform for demographic inference from population genomic data, designed to compare models of divergence, gene flow, linked selection, and genomic heterogeneity.",
    alt: "Map and divergence plot illustrating demographic inference with DILS",
  },
  {
    slug: "molecol-2021",
    year: "2021",
    journal: "Molecular Ecology",
    title: "Population collapse in viviparid gastropods of the Lake Victoria ecoregion started before the Last Glacial Maximum",
    url: "https://doi.org/10.1111/mec.15599",
    image: "/images/work/molecol-2021.png",
    role: "coauthor",
    description:
      "Van Bocxlaer et al. use microsatellites and ABC to show that viviparid gastropods in the Lake Victoria ecoregion experienced a severe population decline that began well before the Last Glacial Maximum.",
    alt: "Population structure and shell diversity in viviparid gastropods of the Lake Victoria ecoregion",
  },
  {
    slug: "nature-communications-2021",
    year: "2021",
    journal: "Nature Communications",
    title: "Convergent morphology and divergent phenology promote the coexistence of Morpho butterfly species",
    url: "https://doi.org/10.1038/s41467-021-27549-1",
    image: "/images/work/nature-communications-2021.png",
    role: "coauthor",
    description:
      "Le Roy et al. show that closely related Morpho butterflies can remain genetically isolated despite convergent wing patterns, partly through temporal segregation in male flight activity.",
    alt: "Three-dimensional flight tracks of Morpho butterflies around male and female dummies",
  },
  {
    slug: "new-phytologist-2019-tristyly",
    year: "2019",
    journal: "New Phytologist",
    title: "The opposing effects of genetic drift and Haldane’s sieve on floral-morph frequencies in tristylous metapopulations",
    url: "https://doi.org/10.1111/nph.16187",
    image: "/images/work/new-phytologist-2019-tristyly.png",
    role: "first-author",
    description:
      "We use simulations of tristylous metapopulations to show how genetic drift and Haldane’s sieve can have opposing effects on floral morph frequencies.",
    alt: "Diagram of the three floral morphs in a tristylous plant system",
  },
  {
    slug: "mbe-2018",
    year: "2018",
    journal: "Molecular Biology and Evolution",
    title: "Codon Usage Bias in Animals: Disentangling the Effects of Natural Selection, Effective Population Size, and GC-Biased Gene Conversion",
    url: "https://doi.org/10.1093/molbev/msy015",
    image: "/images/work/mbe-2018.png",
    role: "coauthor",
    description:
      "Galtier et al. disentangle translational selection from GC-biased gene conversion across 30 animal species, showing that codon usage is shaped by selection mainly in large-Ne species.",
    alt: "Relationship between propagule size and the number of preferred codons in animals",
  },
  {
    slug: "jeb-2018",
    year: "2018",
    journal: "Journal of Evolutionary Biology",
    title: "The divergence history of the perennial plant Linaria cavanillesii confirms a recent loss of self-incompatibility",
    url: "https://doi.org/10.1111/jeb.13209",
    image: "/images/work/jeb-2018.png",
    role: "coauthor",
    description:
      "Voillemot et al. use ABC to show that the self-compatible population of Linaria cavanillesii diverged recently from self-incompatible populations, suggesting an intermediate stage in the transition toward selfing.",
    alt: "Demographic model and parameter estimates for divergence in Linaria cavanillesii",
  },
  {
    slug: "genes-2018",
    year: "2018",
    journal: "Genes",
    title: "Size and Content of the Sex-Determining Region of the Y Chromosome in Dioecious Mercurialis annua, a Plant with Homomorphic Sex Chromosomes",
    url: "https://doi.org/10.3390/genes9060277",
    image: "/images/work/genes-2018.png",
    role: "coauthor",
    description:
      "Veltsos et al. characterize the sex-determining region of the Y chromosome in Mercurialis annua, showing that a plant with homomorphic sex chromosomes can nevertheless carry a large non-recombining region.",
    alt: "Workflow for candidate Y-linked marker identification and confirmation in Mercurialis annua",
  },
  {
    slug: "peerj-2018-mytilus-abc",
    year: "2018",
    journal: "PeerJ",
    title: "The divergence history of European blue mussel species reconstructed from Approximate Bayesian Computation: the effects of sequencing techniques and sampling strategies",
    url: "https://doi.org/10.7717/peerj.5198",
    image: "/images/work/peerj-2018-mytilus-abc.png",
    role: "coauthor",
    description:
      "Fraïsse et al. evaluate ABC demographic inference in European blue mussels, showing that conclusions depend strongly on how genomic data are summarized and modelled.",
    alt: "Joint site frequency spectrum summaries used for ABC inference in blue mussels",
  },
  {
    slug: "new-phytologist-2017",
    year: "2017",
    journal: "New Phytologist",
    title: "Extensive recent secondary contacts between four European white oak species",
    url: "https://doi.org/10.1111/nph.14413",
    image: "/images/work/new-phytologist-2017.png",
    role: "coauthor",
    description:
      "Leroy et al. show that four European white oak species evolved largely in isolation before recent secondary contacts, leaving genomes shaped by both introgression and barriers to gene flow.",
    alt: "Circular phylogenetic tree showing relationships among European white oak species",
  },
  {
    slug: "frontiers-2017",
    year: "2017",
    journal: "Frontiers in Genetics",
    title: "Analytical Biases Associated with GC-Content in Molecular Evolution",
    url: "https://doi.org/10.3389/fgene.2017.00016",
    image: "/images/work/frontiers-2017.png",
    role: "last-author",
    description:
      "We review how GC-content heterogeneity and GC-biased gene conversion can bias phylogenetic reconstruction, tests of positive selection, and estimates of codon usage.",
    alt: "Diagram summarizing analytical biases associated with GC-content and GC-biased gene conversion",
  },
  {
    slug: "plos-biology-2016-grey-zone",
    year: "2016",
    journal: "PLOS Biology",
    title: "Shedding Light on the Grey Zone of Speciation along a Continuum of Genomic Divergence",
    url: "https://doi.org/10.1371/journal.pbio.2000234",
    image: "/images/work/plos-biology-2016-grey-zone.png",
    role: "first-author",
    description:
      "We show that the grey zone of speciation in animals spans roughly 0.5–2% net synonymous divergence, where many lineages are semi-isolated and exchange genes at some loci but not others.",
    alt: "Plot showing the grey zone of speciation along a continuum of genomic divergence",
  },
  {
    slug: "peerj-2016-lampreys",
    year: "2016",
    journal: "PeerJ",
    title: "Reconstructing the demographic history of divergence between European river and brook lampreys using approximate Bayesian computations",
    url: "https://doi.org/10.7717/peerj.1910",
    image: "/images/work/peerj-2016-lampreys.png",
    role: "coauthor",
    description:
      "Rougemont et al. use ABC and random forests to compare divergence-with-gene-flow and secondary-contact scenarios in European river and brook lampreys.",
    alt: "Map of European river and brook lamprey sampling sites",
  },
  {
    slug: "molecol-reinforcement-2015",
    year: "2015",
    journal: "Molecular Ecology",
    title: "Seeking signatures of reinforcement at the genetic level: a hitchhiking mapping and candidate gene approach in the house mouse",
    url: "https://doi.org/10.1111/mec.13301",
    image: "/images/work/molecol-reinforcement-2015.png",
    role: "coauthor",
    description:
      "Smadja et al. search for genetic signatures of reinforcement in the house mouse hybrid zone, using candidate regions linked to assortative mating and olfactory preference.",
    alt: "Genome-wide scan of SNP weights used to detect candidate regions for reinforcement in house mice",
  },
  {
    slug: "molecol-polyploidy-2015",
    year: "2015",
    journal: "Molecular Ecology",
    title: "Inferring the mode of origin of polyploid species from next-generation sequence data",
    url: "https://doi.org/10.1111/mec.13078",
    image: "/images/work/molecol-polyploidy-2015.png",
    role: "first-author",
    description:
      "We show that ABC can infer the origin and inheritance mode of polyploid species from sequence data, and support an allopolyploid origin of Capsella bursa-pastoris.",
    alt: "Models of polyploid speciation and inheritance modes",
  },
  {
    slug: "nature-2014",
    year: "2014",
    journal: "Nature",
    title: "Comparative population genomics in animals uncovers the determinants of genetic diversity",
    url: "https://doi.org/10.1038/nature13685",
    image: "/images/work/nature-2014.png",
    role: "coauthor",
    description:
      "Romiguier et al. show across 76 non-model animal species that genetic diversity is strongly associated with life-history traits, especially the trade-off between offspring quantity and quality.",
    alt: "Relationship between fecundity, propagule size, and genetic diversity across animals",
  },
  {
    slug: "jeb-2014",
    year: "2014",
    journal: "Journal of Evolutionary Biology",
    title: "Can we continue to neglect genomic variation in introgression rates when inferring the history of speciation? A case study in a Mytilus hybrid zone",
    url: "https://doi.org/10.1111/jeb.12425",
    image: "/images/work/jeb-2014.png",
    role: "first-author",
    description:
      "We show that accounting for heterogeneity in introgression rates across loci changes the inferred history of the Mytilus hybrid zone, supporting secondary contact after a long period of allopatric divergence.",
    alt: "Posterior distributions of migration rates across loci in a Mytilus hybrid zone",
  },
  {
    slug: "mbe-2013",
    year: "2013",
    journal: "Molecular Biology and Evolution",
    title: "Crossing the Species Barrier: Genomic Hotspots of Introgression between Two Highly Divergent Ciona intestinalis Species",
    url: "https://doi.org/10.1093/molbev/mst066",
    image: "/images/work/mbe-2013.png",
    role: "first-author",
    description:
      "We detect recent secondary introgression between two highly divergent Ciona intestinalis species and identify genomic hotspots of gene flow across an otherwise strong species barrier.",
    alt: "Chromosome map showing genomic hotspots of introgression in Ciona",
  },
  {
    slug: "mbe-2012",
    year: "2012",
    journal: "Molecular Biology and Evolution",
    title: "Recent and Ancient Signature of Balancing Selection around the S-Locus in Arabidopsis halleri and A. lyrata",
    url: "https://doi.org/10.1093/molbev/mss246",
    image: "/images/work/mbe-2012.png",
    role: "first-author",
    description:
      "We show that balancing selection at the self-incompatibility S-locus leaves both recent and ancient signatures in nearby genes, but that recombination rapidly confines this effect to a narrow genomic region.",
    alt: "Nucleotide diversity and divergence patterns around the S-locus in Arabidopsis",
  },
  {
    slug: "plos-one-2011-arabidopsis-hma4",
    year: "2011",
    journal: "PLOS ONE",
    title: "Does Speciation between Arabidopsis halleri and Arabidopsis lyrata Coincide with Major Changes in a Molecular Target of Adaptation?",
    url: "https://doi.org/10.1371/journal.pone.0026872",
    image: "/images/work/plos-one-2011-arabidopsis-hma4.png",
    role: "first-author",
    description:
      "We show that major changes at the metal-homeostasis gene HMA4 in Arabidopsis halleri likely coincided with the split from A. lyrata, suggesting that adaptation to heavy metals was linked to speciation history.",
    alt: "Estimated timing of Arabidopsis halleri HMA4 duplication relative to species divergence",
  },
];

export const roleLabels: Record<WorkRole, string> = {
  "first-author": "First author",
  "last-author": "Last author",
  coauthor: "Co-author",
};
