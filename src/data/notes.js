// Add more chapters here — every subject follows the same shape:
// { chapter: "Name", points: ["short point 1", "short point 2", ...] }

export const notesData = {
  10: {
    Maths: [
      {
        chapter: 'Real Numbers',
        points: [
          "Euclid's Division Lemma: a = bq + r, where 0 ≤ r < b",
          'HCF by Euclid algorithm; LCM × HCF = product of two numbers',
          'Fundamental Theorem of Arithmetic: every composite number is a unique product of primes',
          '√2, √3, √5 etc. are irrational — proved by contradiction',
        ],
      },
      {
        chapter: 'Polynomials',
        points: [
          'Degree of polynomial = highest power of variable',
          'Zeroes of a quadratic ax² + bx + c: sum = −b/a, product = c/a',
          'Linear polynomial has 1 zero, quadratic has at most 2, cubic at most 3',
          'Division algorithm: p(x) = g(x)·q(x) + r(x)',
        ],
      },
    ],
    Science: [
      {
        chapter: 'Chemical Reactions & Equations',
        points: [
          'Balanced equation: atoms of each element equal on both sides',
          'Types: combination, decomposition, displacement, double displacement, redox',
          'Corrosion and rancidity are everyday oxidation reactions',
          'Exothermic reactions release heat; endothermic absorb heat',
        ],
      },
      {
        chapter: 'Life Processes',
        points: [
          'Nutrition: autotrophic (photosynthesis) vs heterotrophic',
          'Respiration: aerobic (with O₂) releases more energy than anaerobic',
          'Transportation: heart, blood vessels, double circulation in humans',
          'Excretion: kidneys form urine via filtration, reabsorption, secretion',
        ],
      },
    ],
    'Social Science': [
      {
        chapter: 'Nationalism in India',
        points: [
          'Non-Cooperation Movement launched in 1920 by Gandhi',
          'Rowlatt Act (1919) and Jallianwala Bagh massacre fuelled unrest',
          'Civil Disobedience Movement began with the Salt March, 1930',
          'Different social groups joined the movement with different aims',
        ],
      },
      {
        chapter: 'Resources and Development',
        points: [
          'Resources classified as renewable/non-renewable, natural/human-made',
          'Land degradation caused by deforestation, overgrazing, mining',
          'Soil types in India: alluvial, black, red, laterite, arid, forest',
          'Sustainable development balances growth with resource conservation',
        ],
      },
    ],
    English: [
      {
        chapter: 'A Letter to God (First Flight)',
        points: [
          'Lencho has unwavering faith that God will help him',
          'His crops are destroyed by hailstorm; he writes a letter asking for money',
          'Postmaster and staff collect money to keep his faith alive',
          'Lencho asks for more money next time, suspecting the post office kept some',
        ],
      },
    ],
  },

  11: {
    Physics: [
      {
        chapter: 'Units and Measurements',
        points: [
          'SI base units: metre, kilogram, second, ampere, kelvin, mole, candela',
          'Significant figures indicate precision of a measurement',
          'Dimensional analysis checks correctness of physical equations',
          'Errors: systematic (consistent) vs random (unpredictable)',
        ],
      },
      {
        chapter: 'Laws of Motion',
        points: [
          "Newton's First Law: inertia — object resists change in motion",
          'Second Law: F = ma (rate of change of momentum)',
          'Third Law: every action has an equal and opposite reaction',
          'Friction opposes relative motion between surfaces',
        ],
      },
    ],
    Chemistry: [
      {
        chapter: 'Some Basic Concepts of Chemistry',
        points: [
          'Mole concept: 1 mole = 6.022 × 10²³ particles (Avogadro number)',
          'Law of conservation of mass: mass is neither created nor destroyed',
          'Empirical formula shows simplest ratio; molecular formula shows actual ratio',
          'Limiting reagent decides the maximum product formed in a reaction',
        ],
      },
      {
        chapter: 'Structure of Atom',
        points: [
          "Bohr's model: electrons revolve in fixed energy shells (n = 1, 2, 3...)",
          'Quantum numbers: n (shell), l (subshell), m (orientation), s (spin)',
          "Pauli's Exclusion Principle: no two electrons have identical quantum numbers",
          "Hund's Rule: electrons fill orbitals singly before pairing",
        ],
      },
    ],
    Maths: [
      {
        chapter: 'Sets',
        points: [
          'Set: well-defined collection of distinct objects',
          'Union (A∪B), Intersection (A∩B), Difference (A−B) operations',
          'Venn diagrams visually represent set relationships',
          'Power set of a set with n elements has 2ⁿ subsets',
        ],
      },
      {
        chapter: 'Trigonometric Functions',
        points: [
          'Radian measure: π radians = 180°',
          'sin, cos, tan values repeat periodically (periodic functions)',
          'sin²θ + cos²θ = 1 is the fundamental identity',
          'Signs of trig ratios change across the four quadrants',
        ],
      },
    ],
    Biology: [
      {
        chapter: 'The Living World',
        points: [
          'Taxonomy: classification of organisms based on similarities/differences',
          "Binomial nomenclature (given by Linnaeus): Genus + species, italicised",
          'Hierarchy: Kingdom → Phylum → Class → Order → Family → Genus → Species',
          'Taxonomic keys and herbaria assist identification and study',
        ],
      },
      {
        chapter: 'Cell: The Unit of Life',
        points: [
          'Cell theory: all living organisms are made of cells',
          'Prokaryotic cells lack a nuclear membrane; eukaryotic cells have one',
          'Mitochondria: site of aerobic respiration ("powerhouse of the cell")',
          'Cell wall (plants) provides rigidity; absent in animal cells',
        ],
      },
    ],
  },

  12: {
    Physics: [
      {
        chapter: 'Electric Charges and Fields',
        points: [
          "Coulomb's Law: F = kq₁q₂/r² between two point charges",
          'Electric field: force experienced per unit positive charge',
          "Gauss's Law relates electric flux to enclosed charge",
          'Field lines never intersect; denser lines mean stronger field',
        ],
      },
      {
        chapter: 'Current Electricity',
        points: [
          "Ohm's Law: V = IR, valid for ohmic conductors",
          'Resistors in series: R = R₁+R₂...; in parallel: 1/R = 1/R₁+1/R₂...',
          "Kirchhoff's Laws: junction rule (charge) and loop rule (energy)",
          'Resistivity depends on material and temperature, not on shape',
        ],
      },
    ],
    Chemistry: [
      {
        chapter: 'Solutions',
        points: [
          "Raoult's Law: partial pressure ∝ mole fraction of the component",
          'Molarity, molality, mole fraction — common concentration terms',
          'Colligative properties depend only on number of solute particles',
          'Van’t Hoff factor (i) corrects for dissociation/association in solution',
        ],
      },
      {
        chapter: 'Electrochemistry',
        points: [
          'Galvanic cells convert chemical energy into electrical energy',
          'Standard electrode potential predicts feasibility of redox reactions',
          "Nernst equation relates cell potential to concentration",
          "Kohlrausch's Law used to find limiting molar conductivity",
        ],
      },
    ],
    Maths: [
      {
        chapter: 'Relations and Functions',
        points: [
          'Relation: subset of A × B; Function: each input has exactly one output',
          'Types: one-one (injective), onto (surjective), bijective',
          'Composition of functions: (fog)(x) = f(g(x))',
          'Inverse of a function exists only if it is bijective',
        ],
      },
      {
        chapter: 'Continuity and Differentiability',
        points: [
          'A function is continuous at a point if limit = value at that point',
          'Differentiability implies continuity, but not vice versa',
          'Chain rule: derivative of composite function f(g(x)) = f′(g(x))·g′(x)',
          'Logarithmic differentiation simplifies differentiating products/powers',
        ],
      },
    ],
    Biology: [
      {
        chapter: 'Reproduction in Organisms',
        points: [
          'Asexual reproduction: single parent, offspring genetically identical',
          'Sexual reproduction: involves gametes from two parents, more variation',
          'Life span varies greatly across species, independent of body size',
          'Reproduction ensures continuity of species across generations',
        ],
      },
      {
        chapter: 'Principles of Inheritance and Variation',
        points: [
          "Mendel's Laws: dominance, independent assortment, segregation",
          'Monohybrid cross gives 3:1 phenotypic ratio in F2 generation',
          'Incomplete dominance and co-dominance are exceptions to simple dominance',
          'Linkage and crossing over affect inheritance of genes on same chromosome',
        ],
      },
    ],
  },
}

export const classList = [10, 11, 12]
