// Sample product database for refrigerator and dishwasher parts
const products = [
  // Refrigerator Parts - Ice Makers
  {
    partNumber: "PS11752778",
    name: "Ice Maker Assembly",
    category: "Refrigerator",
    subcategory: "Ice Maker",
    brand: "Whirlpool",
    description: "Complete ice maker assembly for Whirlpool refrigerators. Includes mounting bracket and wire harness. Produces crescent-shaped ice cubes.",
    price: 89.99,
    inStock: true,
    rating: 4.5,
    reviews: 324,
    imageUrl: "/images/products/ice-maker-assembly.jpg",
    tags: ["ice maker", "whirlpool", "refrigerator", "ice", "assembly"],
    specifications: {
      voltage: "120V",
      material: "Plastic and Metal",
      dimensions: "10 x 6 x 4 inches",
      weight: "2 lbs"
    },
    installationDifficulty: "Moderate",
    installationTime: "30-45 minutes",
    warrantyMonths: 12
  },
  {
    partNumber: "PS2370946",
    name: "Ice Maker Module",
    category: "Refrigerator",
    subcategory: "Ice Maker",
    brand: "Whirlpool",
    description: "Replacement ice maker control module. Compatible with multiple Whirlpool and Maytag models.",
    price: 124.50,
    inStock: true,
    rating: 4.7,
    reviews: 189,
    imageUrl: "/images/products/ice-maker-module.jpg",
    tags: ["ice maker", "whirlpool", "maytag", "control", "module"],
    specifications: {
      voltage: "120V",
      material: "Plastic",
      dimensions: "5 x 4 x 3 inches"
    },
    installationDifficulty: "Easy",
    installationTime: "15-20 minutes",
    warrantyMonths: 12
  },
  
  // Refrigerator Parts - Water Filters
  {
    partNumber: "PS11770269",
    name: "Water Filter Cartridge",
    category: "Refrigerator",
    subcategory: "Water Filter",
    brand: "EveryDrop",
    description: "Premium water filter that reduces chlorine taste and odor, plus contaminants. NSF certified. Replace every 6 months.",
    price: 49.99,
    inStock: true,
    rating: 4.8,
    reviews: 1523,
    imageUrl: "/images/products/water-filter.jpg",
    tags: ["water filter", "everyDrop", "refrigerator", "filter", "water"],
    specifications: {
      filterLife: "6 months",
      certification: "NSF 42, 53, 401",
      flowRate: "0.5 GPM"
    },
    installationDifficulty: "Very Easy",
    installationTime: "5 minutes",
    warrantyMonths: 6
  },
  
  // Refrigerator Parts - Door Seals
  {
    partNumber: "PS11739785",
    name: "Door Gasket Seal",
    category: "Refrigerator",
    subcategory: "Door Seal",
    brand: "Whirlpool",
    description: "Magnetic door gasket for refrigerator. Ensures proper seal to maintain temperature and energy efficiency.",
    price: 67.25,
    inStock: true,
    rating: 4.3,
    reviews: 256,
    imageUrl: "/images/products/door-gasket.jpg",
    tags: ["door seal", "gasket", "refrigerator", "whirlpool", "magnetic"],
    specifications: {
      material: "Magnetic vinyl",
      color: "Gray",
      length: "72 inches"
    },
    installationDifficulty: "Moderate",
    installationTime: "45-60 minutes",
    warrantyMonths: 12
  },
  
  // Refrigerator Parts - Thermostats
  {
    partNumber: "PS11741111",
    name: "Temperature Control Thermostat",
    category: "Refrigerator",
    subcategory: "Thermostat",
    brand: "Whirlpool",
    description: "Cold control thermostat regulates refrigerator temperature. Essential for proper cooling.",
    price: 38.75,
    inStock: true,
    rating: 4.6,
    reviews: 412,
    imageUrl: "/images/products/thermostat.jpg",
    tags: ["thermostat", "temperature control", "refrigerator", "whirlpool"],
    specifications: {
      voltage: "120V",
      temperatureRange: "0-50°F"
    },
    installationDifficulty: "Moderate",
    installationTime: "30 minutes",
    warrantyMonths: 12
  },
  
  // Refrigerator Parts - Defrost Components
  {
    partNumber: "PS11743423",
    name: "Defrost Timer",
    category: "Refrigerator",
    subcategory: "Defrost",
    brand: "Whirlpool",
    description: "Defrost timer controls the defrost cycle. Prevents frost buildup in freezer.",
    price: 42.99,
    inStock: true,
    rating: 4.4,
    reviews: 198,
    imageUrl: "/images/products/defrost-timer.jpg",
    tags: ["defrost", "timer", "refrigerator", "whirlpool", "frost"],
    installationDifficulty: "Moderate",
    installationTime: "30-40 minutes",
    warrantyMonths: 12
  },
  
  // Dishwasher Parts - Spray Arms
  {
    partNumber: "PS11722114",
    name: "Lower Spray Arm",
    category: "Dishwasher",
    subcategory: "Spray Arm",
    brand: "Whirlpool",
    description: "Lower spray arm assembly for dishwashers. Rotates to distribute water throughout the tub for effective cleaning.",
    price: 32.50,
    inStock: true,
    rating: 4.5,
    reviews: 287,
    imageUrl: "/images/products/spray-arm-lower.jpg",
    tags: ["spray arm", "dishwasher", "whirlpool", "lower", "water"],
    specifications: {
      material: "High-impact plastic",
      diameter: "9 inches",
      holes: "Multiple spray jets"
    },
    installationDifficulty: "Easy",
    installationTime: "10 minutes",
    warrantyMonths: 12
  },
  {
    partNumber: "PS11722115",
    name: "Upper Spray Arm",
    category: "Dishwasher",
    subcategory: "Spray Arm",
    brand: "Whirlpool",
    description: "Upper spray arm for dishwasher top rack. Ensures thorough cleaning of dishes on upper level.",
    price: 28.99,
    inStock: true,
    rating: 4.6,
    reviews: 203,
    imageUrl: "/images/products/spray-arm-upper.jpg",
    tags: ["spray arm", "dishwasher", "whirlpool", "upper", "water"],
    installationDifficulty: "Easy",
    installationTime: "10 minutes",
    warrantyMonths: 12
  },
  
  // Dishwasher Parts - Racks
  {
    partNumber: "PS11757754",
    name: "Lower Dishrack Assembly",
    category: "Dishwasher",
    subcategory: "Rack",
    brand: "Whirlpool",
    description: "Complete lower dishrack with wheels. Gray color with adjustable tines for flexible loading.",
    price: 156.75,
    inStock: true,
    rating: 4.7,
    reviews: 145,
    imageUrl: "/images/products/lower-rack.jpg",
    tags: ["rack", "dishwasher", "whirlpool", "lower", "dishrack"],
    specifications: {
      color: "Gray",
      material: "Coated steel",
      features: "Adjustable tines, rolling wheels"
    },
    installationDifficulty: "Very Easy",
    installationTime: "2 minutes",
    warrantyMonths: 12
  },
  
  // Dishwasher Parts - Heating Elements
  {
    partNumber: "PS11728956",
    name: "Heating Element",
    category: "Dishwasher",
    subcategory: "Heating Element",
    brand: "Whirlpool",
    description: "Dishwasher heating element heats water during wash and dry cycles. Essential for proper cleaning and drying.",
    price: 54.25,
    inStock: true,
    rating: 4.4,
    reviews: 312,
    imageUrl: "/images/products/heating-element.jpg",
    tags: ["heating element", "dishwasher", "whirlpool", "heater", "dry"],
    specifications: {
      wattage: "1000W",
      voltage: "120V",
      material: "Stainless steel"
    },
    installationDifficulty: "Moderate",
    installationTime: "45 minutes",
    warrantyMonths: 12
  },
  
  // Dishwasher Parts - Pumps
  {
    partNumber: "PS11731956",
    name: "Drain Pump and Motor",
    category: "Dishwasher",
    subcategory: "Pump",
    brand: "Whirlpool",
    description: "Drain pump removes water from dishwasher during drain cycle. Includes motor assembly.",
    price: 89.99,
    inStock: true,
    rating: 4.6,
    reviews: 267,
    imageUrl: "/images/products/drain-pump.jpg",
    tags: ["pump", "drain", "dishwasher", "whirlpool", "motor"],
    specifications: {
      voltage: "120V",
      power: "60W",
      flowRate: "1.2 GPM"
    },
    installationDifficulty: "Moderate",
    installationTime: "60 minutes",
    warrantyMonths: 12
  },
  
  // Dishwasher Parts - Control Boards
  {
    partNumber: "PS11755896",
    name: "Electronic Control Board",
    category: "Dishwasher",
    subcategory: "Control Board",
    brand: "Whirlpool",
    description: "Main electronic control board manages all dishwasher functions and cycles.",
    price: 178.50,
    inStock: true,
    rating: 4.3,
    reviews: 89,
    imageUrl: "/images/products/control-board.jpg",
    tags: ["control board", "electronic", "dishwasher", "whirlpool", "circuit"],
    specifications: {
      voltage: "120V",
      type: "Electronic"
    },
    installationDifficulty: "Difficult",
    installationTime: "60-90 minutes",
    warrantyMonths: 12
  },
  
  // Refrigerator Parts - Compressors and Motors
  {
    partNumber: "PS11744533",
    name: "Evaporator Fan Motor",
    category: "Refrigerator",
    subcategory: "Motor",
    brand: "Whirlpool",
    description: "Evaporator fan motor circulates cold air throughout refrigerator and freezer compartments.",
    price: 67.99,
    inStock: true,
    rating: 4.5,
    reviews: 234,
    imageUrl: "/images/products/fan-motor.jpg",
    tags: ["fan motor", "evaporator", "refrigerator", "whirlpool", "cooling"],
    specifications: {
      voltage: "120V",
      RPM: "1550",
      direction: "Reversible"
    },
    installationDifficulty: "Moderate",
    installationTime: "45 minutes",
    warrantyMonths: 12
  },
  
  // Dishwasher Parts - Door Components
  {
    partNumber: "PS11750339",
    name: "Door Latch Assembly",
    category: "Dishwasher",
    subcategory: "Door Latch",
    brand: "Whirlpool",
    description: "Door latch and strike assembly keeps door securely closed during operation.",
    price: 43.75,
    inStock: true,
    rating: 4.7,
    reviews: 178,
    imageUrl: "/images/products/door-latch.jpg",
    tags: ["door latch", "latch", "dishwasher", "whirlpool", "lock"],
    installationDifficulty: "Easy",
    installationTime: "20 minutes",
    warrantyMonths: 12
  },
  
  // Refrigerator Parts - Water System
  {
    partNumber: "PS11747979",
    name: "Water Inlet Valve",
    category: "Refrigerator",
    subcategory: "Water Valve",
    brand: "Whirlpool",
    description: "Water inlet valve controls water flow to ice maker and dispenser.",
    price: 56.25,
    inStock: true,
    rating: 4.6,
    reviews: 342,
    imageUrl: "/images/products/water-valve.jpg",
    tags: ["water valve", "inlet valve", "refrigerator", "whirlpool", "water"],
    specifications: {
      voltage: "120V",
      pressure: "20-120 PSI",
      connections: "1/4 inch"
    },
    installationDifficulty: "Moderate",
    installationTime: "30-45 minutes",
    warrantyMonths: 12
  }
];

module.exports = products;
