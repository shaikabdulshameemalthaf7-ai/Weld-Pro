import { Project, Service, BeforeAfterPair, StatItem } from '../types';

import heroImg from '../assets/images/hero_welder_arc_1790934393947.jpg';
import staircaseImg from '../assets/images/staircase_railing_1790934408789.jpg';
import steelStructureImg from '../assets/images/steel_structure_1790934420284.jpg';
import mainGateImg from '../assets/images/main_gate_1790934431910.jpg';
import industrialFabImg from '../assets/images/industrial_fab_1790934446256.jpg';
import metalFurnitureImg from '../assets/images/metal_furniture_1790934457594.jpg';
import balconyRailingImg from '../assets/images/balcony_railing_1790934519624.jpg';
import workshopImg from '../assets/images/welding_workshop_1790934475938.jpg';
import weldBeforeImg from '../assets/images/weld_before_1790934493766.jpg';
import weldAfterImg from '../assets/images/weld_after_1790934506775.jpg';

export {
  heroImg,
  staircaseImg,
  steelStructureImg,
  mainGateImg,
  industrialFabImg,
  metalFurnitureImg,
  balconyRailingImg,
  workshopImg,
  weldBeforeImg,
  weldAfterImg
};

export const PROJECTS: Project[] = [
  {
    id: 'staircase-railing',
    title: 'Staircase Railing',
    category: 'railings',
    categoryLabel: 'Railings',
    clientType: 'Residential',
    image: staircaseImg,
    description: 'Precision fabricated modern geometric steel balustrades with continuous welded grab rails and concealed anchors.',
    fullDetails: 'Engineered for a high-end contemporary residence. Designed to meet strict building codes with zero visible fasteners, welded seamlessly on-site, and finished with a durable matte black architectural powder coat.',
    specs: {
      material: 'Cold-Rolled Carbon Steel & Solid Flat Bar',
      process: 'TIG & MIG Welding',
      finish: 'Electrostatic Matte Black Powder Coat',
      timeline: '2 Weeks Turnaround'
    },
    featured: true
  },
  {
    id: 'steel-structure',
    title: 'Steel Structure',
    category: 'structures',
    categoryLabel: 'Structures',
    clientType: 'Commercial',
    image: steelStructureImg,
    description: 'Heavy structural frame with engineered I-beams, load-bearing cross trusses, and certified moment-resisting connections.',
    fullDetails: 'Certified fabrication of a 4,500 sq. ft. commercial mezzanine framework. Precision drilled and certified stick and flux-cored welds inspected according to AWS D1.1 structural standards.',
    specs: {
      material: 'ASTM A992 Structural Wide Flange Beams',
      process: 'SMAW & FCAW Heavy Structural',
      finish: 'Industrial Zinc-Rich Epoxy Primer',
      timeline: '4 Weeks Fabrication'
    },
    featured: true
  },
  {
    id: 'main-gate',
    title: 'Main Gate',
    category: 'gates',
    categoryLabel: 'Gates',
    clientType: 'Residential',
    image: mainGateImg,
    description: 'Automated driveway entrance security gate featuring horizontal steel louvers and central decorative laser lattice.',
    fullDetails: 'Custom automated bi-parting driveway gate built with heavy gauge rectangular tubing, internal wiring channels for motor actuators, anti-sag adjustable hinges, and hot-dip galvanized rust proofing.',
    specs: {
      material: 'Heavy Gauge Mild Steel Tubing & Laser Plate',
      process: 'MIG Pulsed Welding',
      finish: 'Hot-Dip Galvanized + Textured Black Topcoat',
      timeline: '10 Days Turnaround'
    },
    featured: true
  },
  {
    id: 'industrial-fabrication',
    title: 'Industrial Fabrication',
    category: 'industrial',
    categoryLabel: 'Industrial',
    clientType: 'Industrial',
    image: industrialFabImg,
    description: 'High-pressure process piping manifold and flange assemblies built to ASME Section IX boiler and pressure vessel codes.',
    fullDetails: 'Specialized fabrication of process piping manifolds for fluid transport. 100% radiographically tested welds, purged stainless steel root passes, and defect-free penetrations.',
    specs: {
      material: '316L Stainless Steel & Carbon Pipe',
      process: 'Sanitary Orbital TIG & Stick',
      finish: 'Passivated & Acid Pickled Seams',
      timeline: '3 Weeks Production'
    },
    featured: true
  },
  {
    id: 'custom-metal-furniture',
    title: 'Custom Metal Furniture',
    category: 'furniture',
    categoryLabel: 'Furniture',
    clientType: 'Residential',
    image: metalFurnitureImg,
    description: 'Bespoke architectural dining table base featuring trapezoidal hollow steel sections and seamless ground welds.',
    fullDetails: 'Commissioned metalwork for a luxury loft interior. Fully ground invisible joints, engineered weight distribution for a 200kg walnut slab, and brass leveling glides.',
    specs: {
      material: 'Architectural Box Section & Brass Inlays',
      process: 'High-Detail TIG Welding',
      finish: 'Hand-Rubbed Black Patina + Clear Lacquer',
      timeline: '1 Week Fabrication'
    },
    featured: true
  },
  {
    id: 'balcony-railing',
    title: 'Balcony Railing',
    category: 'railings',
    categoryLabel: 'Railings',
    clientType: 'Residential',
    image: balconyRailingImg,
    description: 'Marine-grade outdoor perimeter railing system with horizontal safety bars and weatherproof core-drilled posts.',
    fullDetails: 'Modern exterior balcony enclosure designed to withstand seaside weather conditions. Fabricated with tight tolerances, clean TIG puddle lines, and anti-corrosion barrier coatings.',
    specs: {
      material: '304 Stainless Steel & Coated Tube',
      process: 'Precision TIG Welding',
      finish: 'Exterior Grade Thermoset Powder Coat',
      timeline: '12 Days Turnaround'
    },
    featured: true
  }
];

export const SERVICES: Service[] = [
  {
    id: 'mig',
    title: 'MIG Welding',
    subtitle: 'Clean & strong finish',
    shortDesc: 'Gas Metal Arc Welding for rapid, robust joins in structural steel, aluminum, and sheet metal.',
    description: 'Our high-amperage pulsed MIG systems ensure deep penetration, minimal spatter, and superior deposition rates. Ideal for production runs, automotive frames, heavy equipment repairs, and architectural metalwork.',
    badge: 'GMAW Certified',
    features: [
      'High deposition rate for rapid turnaround',
      'Pulsed spray transfer for zero spatter',
      'High strength joint penetration',
      'Suitable for carbon steel & aluminum'
    ],
    materials: ['Mild Steel', 'Structural A36', 'Aluminum 5052/6061', 'Stainless Sheet'],
    suitableFor: 'Structural framing, gate construction, trailers, heavy machinery repair'
  },
  {
    id: 'tig',
    title: 'TIG Welding',
    subtitle: 'Precision for delicate work',
    shortDesc: 'Gas Tungsten Arc Welding offering surgical precision, stack-of-dimes aesthetics, and spotless integrity.',
    description: 'When weld aesthetics and metallurgy cannot be compromised. We specialize in high-purity TIG welding for stainless steel sanitary piping, exotic alloys, visible architectural railings, and luxury furniture.',
    badge: 'GTAW High-Purity',
    features: [
      'Flawless stack-of-dimes bead aesthetics',
      'Pinpoint heat control with minimal warping',
      'Back-purged sanitary internal root passes',
      'Exotic metal capabilities (Chromoly, Titanium)'
    ],
    materials: ['Stainless 304/316L', 'Aluminum 6061-T6', 'Chromoly 4130', 'Copper & Brass'],
    suitableFor: 'Architectural stairs, luxury furniture, sanitary food-grade piping, exhaust manifolds'
  },
  {
    id: 'stick',
    title: 'Stick Welding',
    subtitle: 'Reliable & durable',
    shortDesc: 'Shielded Metal Arc Welding designed for high-stress outdoor, heavy civil, and all-weather field repairs.',
    description: 'The proven choice for heavy structural steel and demanding on-site welding where wind and environmental factors challenge gas shielding. Certified 7018 low-hydrogen electrodes for extreme load-bearing joints.',
    badge: 'SMAW Structural D1.1',
    features: [
      'All-weather outdoor field welding',
      'Deep penetration on rusty or thick sections',
      'AWS D1.1 certified high-tensile electrodes',
      'Mobile rig available for emergency on-site repairs'
    ],
    materials: ['Heavy Plate Steel', 'Cast Iron', 'High-Tensile Alloys', 'Weathering Cor-Ten'],
    suitableFor: 'Building frames, heavy industrial plants, excavator buckets, bridge joints'
  },
  {
    id: 'custom-fab',
    title: 'Custom Fabrication',
    subtitle: 'Your design, my skill',
    shortDesc: 'Turnkey metal design, CNC plasma cutting, tube bending, and bespoke metal assembly.',
    description: 'From an initial sketch on a napkin or formal CAD blueprints, our shop handles full fabrication lifecycle: cutting, notching, rolling, welding, and surface treatment for custom one-off commissions.',
    badge: 'Turnkey Craftsmanship',
    features: [
      'CAD design & blueprint translation',
      'Precision tube bending & CNC plasma cutting',
      'Fixture table fit-up within 0.5mm tolerances',
      'Complete powder coating & galvanizing options'
    ],
    materials: ['Carbon Steel', 'Stainless Steel', 'Aluminum Alloys', 'Perforated Sheets'],
    suitableFor: 'Custom furniture, bespoke entrance gates, spiral staircases, industrial machinery'
  },
  {
    id: 'steel-structures',
    title: 'Steel Structures',
    subtitle: 'Heavy load engineering',
    shortDesc: 'Commercial building framing, mezzanine platforms, roof trusses, and industrial seismic supports.',
    description: 'Comprehensive structural metalwork engineered to support massive static and dynamic loads. We collaborate directly with structural engineers, architects, and general contractors.',
    badge: 'Commercial Certified',
    features: [
      'Engineered load-bearing calculations',
      'Pre-fabricated modular components',
      'Certified crane-hoist fit-up',
      'Full nondestructive weld testing (NDT/UT)'
    ],
    materials: ['Wide Flange Beams (W-Shapes)', 'HSS Hollow Sections', 'Channel & Angle Iron'],
    suitableFor: 'Warehouses, mezzanine floors, commercial canopies, equipment skids'
  },
  {
    id: 'gates-railings',
    title: 'Gate & Railing Fabrication',
    subtitle: 'Architectural security & style',
    shortDesc: 'Custom motorized driveway gates, modern staircase railings, security grilles, and balustrades.',
    description: 'Elevate residential and commercial properties with custom metalwork that blends high-security strength with sleek contemporary design. Compliant with IBC and local safety railings standards.',
    badge: 'Architectural Grade',
    features: [
      'Smooth automated motor integrations',
      'Concealed welds and hardware mounts',
      'Anti-sag internal truss geometry',
      'Multi-stage corrosion protection'
    ],
    materials: ['Ornamental Iron', 'Extruded Aluminum', 'Brushed Stainless', 'Glass-Metal Hybrids'],
    suitableFor: 'Private estates, commercial office buildings, luxury apartment complexes, decks'
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterPair = {
  id: 'weld-joint-restoration',
  title: 'Weld Seam Quality Comparison',
  description: 'Drag the slider to compare a cracked, corroded industrial steel joint with our aerospace-standard TIG weld reconstruction.',
  beforeImage: weldBeforeImg,
  afterImage: weldAfterImg,
  beforeLabel: 'Defective Joint (Before)',
  afterLabel: 'Precision TIG Weld (After)',
  details: 'Notice the razor-sharp uniformity, consistent puddle width, zero undercut, and complete root fusion achieved with pulsed TIG shielding.'
};

export const STATS: StatItem[] = [
  {
    value: 15,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Master craftsmen with deep metallurgical knowledge'
  },
  {
    value: 850,
    suffix: '+',
    label: 'Completed Projects',
    description: 'Spanning residential gates to industrial factories'
  },
  {
    value: 99.4,
    suffix: '%',
    label: 'Customer Satisfaction',
    description: 'Based on 500+ verified client testimonials'
  },
  {
    value: 100,
    suffix: '%',
    label: 'AWS & ASME Compliant',
    description: 'Certified to highest American Welding Society codes'
  }
];

export const TRUST_POINTS = [
  {
    title: 'High Quality',
    description: 'Precision in every weld',
    detail: 'Zero porosity, full penetration, and rigorous NDT quality control.'
  },
  {
    title: 'Modern Equipment',
    description: 'Advanced tools & technology',
    detail: 'Digital pulse synergic inverters, laser cutting, and 3D precision jigs.'
  },
  {
    title: 'On-Time Delivery',
    description: 'Your time matters',
    detail: 'Strict milestone commitments, proactive dispatch, and dedicated project management.'
  },
  {
    title: 'Customer Satisfaction',
    description: 'Built on trust',
    detail: 'Lifetime structural weld warranty and clear upfront transparent pricing.'
  }
];
