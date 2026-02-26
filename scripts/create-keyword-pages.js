const fs = require('fs');
const path = require('path');

const seoKeywords = [
  // Core AC Services (25)
  { slug: "ac-repair", title: "AC Repair", description: "Professional AC repair service", category: "Core" },
  { slug: "ac-service", title: "AC Service", description: "Complete AC service and maintenance", category: "Core" },
  { slug: "ac-installation", title: "AC Installation", description: "Expert AC installation service", category: "Core" },
  { slug: "ac-repair-near-me", title: "AC Repair Near Me", description: "Find AC repair service near you", category: "Core" },
  { slug: "ac-service-near-me", title: "AC Service Near Me", description: "AC service near your location", category: "Core" },
  { slug: "ac-gas-filling", title: "AC Gas Filling", description: "AC gas refilling service", category: "Core" },
  { slug: "ac-amc", title: "AC AMC", description: "Annual AC maintenance contract", category: "Core" },
  { slug: "ac-cleaning", title: "AC Cleaning", description: "Professional AC cleaning service", category: "Core" },
  { slug: "ac-technician", title: "AC Technician", description: "Expert AC technicians", category: "Core" },
  { slug: "best-ac-service", title: "Best AC Service", description: "Top rated AC service", category: "Core" },
  { slug: "best-ac-repair", title: "Best AC Repair", description: "Best AC repair service", category: "Core" },
  { slug: "ac-maintenance", title: "AC Maintenance", description: "Regular AC maintenance", category: "Core" },
  { slug: "annual-ac-maintenance", title: "Annual AC Maintenance", description: "Yearly AC maintenance service", category: "Core" },
  { slug: "ac-checkup", title: "AC Checkup", description: "AC inspection and checkup", category: "Core" },
  { slug: "ac-tune-up", title: "AC Tune Up", description: "AC performance tune up", category: "Core" },
  { slug: "local-ac-technician", title: "Local AC Technician", description: "Local AC repair experts", category: "Core" },
  { slug: "ac-contractor", title: "AC Contractor", description: "Professional AC contractor", category: "Core" },
  { slug: "hvac-contractor", title: "HVAC Contractor", description: "HVAC contractor services", category: "Core" },
  { slug: "ac-gas-refill-cost", title: "AC Gas Refill Cost", description: "AC gas refilling charges", category: "Core" },
  { slug: "ac-installation-charges", title: "AC Installation Charges", description: "AC installation cost", category: "Core" },
  { slug: "ac-repair-cost", title: "AC Repair Cost", description: "AC repair charges", category: "Core" },
  { slug: "ac-warranty-service", title: "AC Warranty Service", description: "AC warranty claim service", category: "Core" },
  { slug: "out-of-warranty-ac", title: "Out of Warranty AC", description: "Out of warranty AC repair", category: "Core" },
  { slug: "ac-near-me", title: "AC Near Me", description: "AC service near your location", category: "Core" },
  { slug: "vadodara-ac-near-me", title: "Vadodara AC Near Me", description: "AC repair near you in Vadodara", category: "Core" },

  // AC Types (20)
  { slug: "split-ac-repair", title: "Split AC Repair", description: "Split AC repair service", category: "ACTypes" },
  { slug: "window-ac-repair", title: "Window AC Repair", description: "Window AC repair service", category: "ACTypes" },
  { slug: "cassette-ac-repair", title: "Cassette AC Repair", description: "Cassette AC repair service", category: "ACTypes" },
  { slug: "cassette-ac-service", title: "Cassette AC Service", description: "Cassette AC maintenance", category: "ACTypes" },
  { slug: "ductable-ac", title: "Ductable AC", description: "Ductable AC repair and service", category: "ACTypes" },
  { slug: "package-ac", title: "Package AC", description: "Package AC repair service", category: "ACTypes" },
  { slug: "tower-ac", title: "Tower AC", description: "Tower AC repair service", category: "ACTypes" },
  { slug: "tower-ac-installation", title: "Tower AC Installation", description: "Tower AC installation service", category: "ACTypes" },
  { slug: "central-ac-repair", title: "Central AC Repair", description: "Central AC repair service", category: "ACTypes" },
  { slug: "portable-ac-service", title: "Portable AC Service", description: "Portable AC repair", category: "ACTypes" },
  { slug: "portable-ac-repair", title: "Portable AC Repair", description: "Portable AC repair service", category: "ACTypes" },
  { slug: "ductless-ac", title: "Ductless AC", description: "Ductless AC service", category: "ACTypes" },
  { slug: "multi-split-ac-service", title: "Multi Split AC Service", description: "Multi split AC repair", category: "ACTypes" },
  { slug: "inverter-ac-service", title: "Inverter AC Service", description: "Inverter AC repair and service", category: "ACTypes" },
  { slug: "inverter-ac-repair", title: "Inverter AC Repair", description: "Inverter AC repair specialist", category: "ACTypes" },
  { slug: "non-inverter-ac-repair", title: "Non-Inverter AC Repair", description: "Non-inverter AC repair", category: "ACTypes" },
  { slug: "5-star-ac-service", title: "5 Star AC Service", description: "5 star inverter AC service", category: "ACTypes" },
  { slug: "3-star-ac-repair", title: "3 Star AC Repair", description: "3 star AC repair", category: "ACTypes" },
  { slug: "split-ac-installation", title: "Split AC Installation", description: "Split AC installation", category: "ACTypes" },
  { slug: "lg-split-ac-repair", title: "LG Split AC Repair", description: "LG split AC repair service", category: "ACTypes" },

  // AC Tonnage (10)
  { slug: "1-ton-ac-repair", title: "1 Ton AC Repair", description: "1 ton AC repair service", category: "Tonnage" },
  { slug: "1-ton-ac-service", title: "1 Ton AC Service", description: "1 ton AC service", category: "Tonnage" },
  { slug: "1-5-ton-ac", title: "1.5 Ton AC", description: "1.5 ton AC repair service", category: "Tonnage" },
  { slug: "1-5-ton-ac-service", title: "1.5 Ton AC Service", description: "1.5 ton AC service", category: "Tonnage" },
  { slug: "2-ton-ac-service", title: "2 Ton AC Service", description: "2 ton AC repair service", category: "Tonnage" },
  { slug: "2-ton-ac-repair", title: "2 Ton AC Repair", description: "2 ton AC repair", category: "Tonnage" },
  { slug: "3-ton-ac-service", title: "3 Ton AC Service", description: "3 ton AC service", category: "Tonnage" },
  { slug: "4-ton-ac-service", title: "4 Ton AC Service", description: "4 ton AC service", category: "Tonnage" },
  { slug: "5-ton-ac-service", title: "5 Ton AC Service", description: "5 ton AC service", category: "Tonnage" },
  { slug: "large-capacity-ac", title: "Large Capacity AC", description: "Large capacity AC service", category: "Tonnage" },

  // AC Brands Service (25)
  { slug: "bluestar-ac-service", title: "Bluestar AC Service", description: "Blue Star AC repair and service", category: "Brands" },
  { slug: "bluestar-ac-repair", title: "Bluestar AC Repair", description: "Blue Star AC repair", category: "Brands" },
  { slug: "lg-ac-service", title: "LG AC Service", description: "LG AC repair and service", category: "Brands" },
  { slug: "lg-ac-repair", title: "LG AC Repair", description: "LG AC repair service", category: "Brands" },
  { slug: "voltas-ac-service", title: "Voltas AC Service", description: "Voltas AC service center", category: "Brands" },
  { slug: "voltas-ac-repair", title: "Voltas AC Repair", description: "Voltas AC repair service", category: "Brands" },
  { slug: "voltas-ac-installation", title: "Voltas AC Installation", description: "Voltas AC installation", category: "Brands" },
  { slug: "hitachi-ac", title: "Hitachi AC", description: "Hitachi AC service", category: "Brands" },
  { slug: "hitachi-ac-repair", title: "Hitachi AC Repair", description: "Hitachi AC repair service", category: "Brands" },
  { slug: "hitachi-inverter-ac-service", title: "Hitachi Inverter AC Service", description: "Hitachi inverter AC service", category: "Brands" },
  { slug: "daikin-service", title: "Daikin Service", description: "Daikin AC service", category: "Brands" },
  { slug: "daikin-ac", title: "Daikin AC", description: "Daikin AC repair", category: "Brands" },
  { slug: "daikin-ac-gas-refill", title: "Daikin AC Gas Refill", description: "Daikin AC gas refilling", category: "Brands" },
  { slug: "carrier-ac", title: "Carrier AC", description: "Carrier AC service", category: "Brands" },
  { slug: "carrier-ac-repair", title: "Carrier AC Repair", description: "Carrier AC repair", category: "Brands" },
  { slug: "godrej-ac", title: "Godrej AC", description: "Godrej AC service", category: "Brands" },
  { slug: "haier-ac-service", title: "Haier AC Service", description: "Haier AC repair", category: "Brands" },
  { slug: "panasonic-ac-installation", title: "Panasonic AC Installation", description: "Panasonic AC installation", category: "Brands" },
  { slug: "sharp-ac-repair", title: "Sharp AC Repair", description: "Sharp AC repair service", category: "Brands" },
  { slug: "samsung-ac-service", title: "Samsung AC Service", description: "Samsung AC repair", category: "Brands" },
  { slug: "whirlpool-ac-service", title: "Whirlpool AC Service", description: "Whirlpool AC service", category: "Brands" },
  { slug: "mitsubishi-ac-service", title: "Mitsubishi AC Service", description: "Mitsubishi AC repair", category: "Brands" },
  { slug: "ogeneral-ac-service", title: "O General AC Service", description: "O General AC repair", category: "Brands" },
  { slug: "lg-service-center", title: "LG Service Center", description: "LG AC service center", category: "Brands" },
  { slug: "hitachi-authorized-service", title: "Hitachi Authorized Service", description: "Hitachi authorized service", category: "Brands" },

  // AC Problems (30)
  { slug: "ac-not-cooling", title: "AC Not Cooling", description: "AC not cooling properly fix", category: "Problems" },
  { slug: "low-cooling-ac", title: "Low Cooling AC", description: "Fix low cooling AC", category: "Problems" },
  { slug: "low-cooling-ac-fix", title: "Low Cooling AC Fix", description: "AC low cooling repair", category: "Problems" },
  { slug: "ac-water-leakage-repair", title: "AC Water Leakage Repair", description: "Fix AC water leakage", category: "Problems" },
  { slug: "ac-water-leakage-fix", title: "AC Water Leakage Fix", description: "AC water leak solution", category: "Problems" },
  { slug: "ac-leak-repair", title: "AC Leak Repair", description: "AC leakage repair service", category: "Problems" },
  { slug: "ac-gas-leak-repair", title: "AC Gas Leak Repair", description: "AC gas leak detection and repair", category: "Problems" },
  { slug: "noisy-ac-repair", title: "Noisy AC Repair", description: "Fix noisy AC compressor", category: "Problems" },
  { slug: "noisy-ac-compressor", title: "Noisy AC Compressor", description: "AC compressor noise fix", category: "Problems" },
  { slug: "ac-compressor", title: "AC Compressor", description: "AC compressor repair", category: "Problems" },
  { slug: "ac-compressor-replacement", title: "AC Compressor Replacement", description: "AC compressor replacement", category: "Problems" },
  { slug: "ac-pcb-repair", title: "AC PCB Repair", description: "AC circuit board repair", category: "Problems" },
  { slug: "ac-fan-motor", title: "AC Fan Motor", description: "AC fan motor repair", category: "Problems" },
  { slug: "ac-fan-motor-replacement", title: "AC Fan Motor Replacement", description: "AC fan motor replacement", category: "Problems" },
  { slug: "ac-filter-change", title: "AC Filter Change", description: "AC filter replacement", category: "Problems" },
  { slug: "ac-filter-replacement", title: "AC Filter Replacement", description: "AC filter change service", category: "Problems" },
  { slug: "ac-drainage-issue", title: "AC Drainage Issue", description: "AC drain pipe problem fix", category: "Problems" },
  { slug: "thermostat-repair-ac", title: "Thermostat Repair AC", description: "AC thermostat repair", category: "Problems" },
  { slug: "ac-timer-problem", title: "AC Timer Problem", description: "AC timer issue fix", category: "Problems" },
  { slug: "ac-remote-repair", title: "AC Remote Repair", description: "AC remote repair service", category: "Problems" },
  { slug: "ac-vibration-fix", title: "AC Vibration Fix", description: "AC vibration repair", category: "Problems" },
  { slug: "ac-outdoor-unit-cleaning", title: "AC Outdoor Unit Cleaning", description: "Outdoor unit cleaning", category: "Problems" },
  { slug: "indoor-coil-cleaning", title: "Indoor Coil Cleaning", description: "AC indoor coil cleaning", category: "Problems" },
  { slug: "ac-coil-cleaning", title: "AC Coil Cleaning", description: "AC coil cleaning service", category: "Problems" },
  { slug: "ac-duct-cleaning", title: "AC Duct Cleaning", description: "AC duct cleaning service", category: "Problems" },
  { slug: "ac-ice-formation", title: "AC Ice Formation", description: "Fix AC freezing issue", category: "Problems" },
  { slug: "ac-tripping-mcb", title: "AC Tripping MCB", description: "AC electrical trip fix", category: "Problems" },
  { slug: "ac-sensor-problem", title: "AC Sensor Problem", description: "AC sensor repair", category: "Problems" },
  { slug: "ac-swing-not-working", title: "AC Swing Not Working", description: "AC louver repair", category: "Problems" },
  { slug: "ac-bad-smell", title: "AC Bad Smell", description: "Remove AC odor", category: "Problems" },

  // Commercial & Industrial (35)
  { slug: "commercial-ac-repair", title: "Commercial AC Repair", description: "Commercial AC repair service", category: "Commercial" },
  { slug: "industrial-ac", title: "Industrial AC", description: "Industrial AC service", category: "Commercial" },
  { slug: "industrial-ac-service", title: "Industrial AC Service", description: "Industrial AC repair", category: "Commercial" },
  { slug: "office-ac-service", title: "Office AC Service", description: "Office AC maintenance", category: "Commercial" },
  { slug: "hotel-ac-maintenance", title: "Hotel AC Maintenance", description: "Hotel AC service", category: "Commercial" },
  { slug: "hospital-hvac", title: "Hospital HVAC", description: "Hospital HVAC service", category: "Commercial" },
  { slug: "mall-ac-service", title: "Mall AC Service", description: "Shopping mall AC service", category: "Commercial" },
  { slug: "factory-chiller-repair", title: "Factory Chiller Repair", description: "Factory chiller service", category: "Commercial" },
  { slug: "warehouse-cooling", title: "Warehouse Cooling", description: "Warehouse AC service", category: "Commercial" },
  { slug: "server-room-cooling", title: "Server Room Cooling", description: "Server room AC", category: "Commercial" },
  { slug: "server-room-ac", title: "Server Room AC", description: "Precision AC for servers", category: "Commercial" },
  { slug: "data-center-ac", title: "Data Center AC", description: "Data center cooling", category: "Commercial" },
  { slug: "cold-room-service", title: "Cold Room Service", description: "Cold room AC service", category: "Commercial" },
  { slug: "walk-in-cooler", title: "Walk In Cooler", description: "Walk in cooler repair", category: "Commercial" },
  { slug: "ice-cream-parlor-ac", title: "Ice Cream Parlor AC", description: "Ice cream parlor cooling", category: "Commercial" },
  { slug: "restaurant-ac-service", title: "Restaurant AC Service", description: "Restaurant AC", category: "Commercial" },
  { slug: "panel-ac-service", title: "Panel AC Service", description: "Panel AC repair", category: "Commercial" },
  { slug: "panel-ac-repair", title: "Panel AC Repair", description: "Electrical panel AC", category: "Commercial" },
  { slug: "precision-ac-service", title: "Precision AC Service", description: "Precision AC for critical areas", category: "Commercial" },
  { slug: "gidc-ac-service", title: "GIDC AC Service", description: "GIDC industrial AC", category: "Commercial" },
  { slug: "epabx-ac-service", title: "EPABX AC Service", description: "EPABX room AC", category: "Commercial" },
  { slug: "energy-saving-ac", title: "Energy Saving AC", description: "Energy efficient AC service", category: "Commercial" },
  { slug: "packaged-ac-service", title: "Packaged AC Service", description: "Packaged unit service", category: "Commercial" },
  { slug: "package-unit-repair", title: "Package Unit Repair", description: "Package AC unit repair", category: "Commercial" },
  { slug: "ahu-repair", title: "AHU Repair", description: "Air handling unit repair", category: "Commercial" },
  { slug: "air-handling-unit-repair", title: "Air Handling Unit Repair", description: "AHU service", category: "Commercial" },
  { slug: "fcu-cleaning", title: "FCU Cleaning", description: "Fan coil unit cleaning", category: "Commercial" },
  { slug: "fcu-coil-cleaning", title: "FCU Coil Cleaning", description: "FCU coil service", category: "Commercial" },
  { slug: "cooling-tower-service", title: "Cooling Tower Service", description: "Cooling tower maintenance", category: "Commercial" },
  { slug: "chiller-plant-service", title: "Chiller Plant Service", description: "Chiller plant maintenance", category: "Commercial" },
  { slug: "water-chiller-repair", title: "Water Chiller Repair", description: "Water chiller service", category: "Commercial" },
  { slug: "screw-chiller-service", title: "Screw Chiller Service", description: "Screw chiller repair", category: "Commercial" },
  { slug: "scroll-chiller-repair", title: "Scroll Chiller Repair", description: "Scroll chiller service", category: "Commercial" },
  { slug: "centrifugal-chiller", title: "Centrifugal Chiller", description: "Centrifugal chiller service", category: "Commercial" },
  { slug: "absorption-chiller", title: "Absorption Chiller", description: "Absorption chiller repair", category: "Commercial" },

  // HVAC & VRF (25)
  { slug: "hvac-repair", title: "HVAC Repair", description: "HVAC system repair", category: "HVAC" },
  { slug: "hvac-service", title: "HVAC Service", description: "HVAC maintenance service", category: "HVAC" },
  { slug: "hvac-maintenance", title: "HVAC Maintenance", description: "HVAC system maintenance", category: "HVAC" },
  { slug: "hvac-ducting", title: "HVAC Ducting", description: "HVAC duct work", category: "HVAC" },
  { slug: "hvac-ducting-repair", title: "HVAC Ducting Repair", description: "HVAC duct repair", category: "HVAC" },
  { slug: "ducting-work", title: "Ducting Work", description: "AC duct installation", category: "HVAC" },
  { slug: "ducting-service", title: "Ducting Service", description: "Duct cleaning and repair", category: "HVAC" },
  { slug: "hvac-design", title: "HVAC Design", description: "HVAC system design", category: "HVAC" },
  { slug: "hvac-piping", title: "HVAC Piping", description: "HVAC piping work", category: "HVAC" },
  { slug: "vrf-system-repair", title: "VRF System Repair", description: "VRF AC system repair", category: "HVAC" },
  { slug: "vrf-ac-repair", title: "VRF AC Repair", description: "VRF system service", category: "HVAC" },
  { slug: "vrf-installation", title: "VRF Installation", description: "VRF system installation", category: "HVAC" },
  { slug: "vrv-system-service", title: "VRV System Service", description: "VRV system repair", category: "HVAC" },
  { slug: "vrv-system", title: "VRV System", description: "VRV AC service", category: "HVAC" },
  { slug: "false-ceiling-ac-ducting", title: "False Ceiling AC Ducting", description: "Concealed AC duct", category: "HVAC" },
  { slug: "duct-fabrication", title: "Duct Fabrication", description: "Duct manufacturing", category: "HVAC" },
  { slug: "gi-duct-fabrication", title: "GI Duct Fabrication", description: "GI duct work", category: "HVAC" },
  { slug: "aluminium-duct", title: "Aluminium Duct", description: "Aluminium duct work", category: "HVAC" },
  { slug: "grp-ducting", title: "GRP Ducting", description: "GRP duct work", category: "HVAC" },
  { slug: "ppr-piping-hvac", title: "PPR Piping HVAC", description: "PPR piping for HVAC", category: "HVAC" },
  { slug: "fresh-air-ducting", title: "Fresh Air Ducting", description: "Fresh air duct work", category: "HVAC" },
  { slug: "hvac-grill", title: "HVAC Grill", description: "HVAC grill installation", category: "HVAC" },
  { slug: "ac-diffuser", title: "AC Diffuser", description: "AC diffuser installation", category: "HVAC" },
  { slug: "linear-slot-diffuser", title: "Linear Slot Diffuser", description: "Slot diffuser fitting", category: "HVAC" },
  { slug: "return-air-grill", title: "Return Air Grill", description: "Return air grill fitting", category: "HVAC" },

  // Emergency Services (15)
  { slug: "emergency-ac-repair", title: "Emergency AC Repair", description: "24x7 emergency AC repair", category: "Emergency" },
  { slug: "24x7-ac-service", title: "24x7 AC Service", description: "Round the clock AC service", category: "Emergency" },
  { slug: "24-hour-ac-service", title: "24 Hour AC Service", description: "24 hour AC repair", category: "Emergency" },
  { slug: "same-day-ac-repair", title: "Same Day AC Repair", description: "Same day service", category: "Emergency" },
  { slug: "urgent-ac-repair", title: "Urgent AC Repair", description: "Urgent AC service", category: "Emergency" },
  { slug: "weekend-ac-service", title: "Weekend AC Service", description: "Weekend AC repair", category: "Emergency" },
  { slug: "night-ac-repair", title: "Night AC Repair", description: "Night time AC repair", category: "Emergency" },
  { slug: "holiday-ac-service", title: "Holiday AC Service", description: "Holiday AC repair", category: "Emergency" },
  { slug: "express-ac-service", title: "Express AC Service", description: "Express AC repair", category: "Emergency" },
  { slug: "quick-ac-repair", title: "Quick AC Repair", description: "Quick AC service", category: "Emergency" },
  { slug: "fast-ac-service", title: "Fast AC Service", description: "Fast AC repair", category: "Emergency" },
  { slug: "instant-ac-repair", title: "Instant AC Repair", description: "Instant AC service", category: "Emergency" },
  { slug: "on-call-ac-service", title: "On Call AC Service", description: "On call AC technician", category: "Emergency" },
  { slug: "doorstep-ac-service", title: "Doorstep AC Service", description: "AC service at home", category: "Emergency" },
  { slug: "home-ac-service", title: "Home AC Service", description: "Home AC repair", category: "Emergency" },

  // Refrigeration (20)
  { slug: "refrigerator-repair", title: "Refrigerator Repair", description: "Fridge repair service", category: "Refrigeration" },
  { slug: "fridge-repair", title: "Fridge Repair", description: "Refrigerator service", category: "Refrigeration" },
  { slug: "fridge-service", title: "Fridge Service", description: "Fridge maintenance", category: "Refrigeration" },
  { slug: "fridge-repair-charges", title: "Fridge Repair Charges", description: "Refrigerator repair cost", category: "Refrigeration" },
  { slug: "french-door-fridge", title: "French Door Fridge", description: "French door fridge repair", category: "Refrigeration" },
  { slug: "side-by-side-refrigerator-repair", title: "Side by Side Refrigerator Repair", description: "Side by side fridge service", category: "Refrigeration" },
  { slug: "double-door-fridge-service", title: "Double Door Fridge Service", description: "Double door fridge repair", category: "Refrigeration" },
  { slug: "single-door-fridge", title: "Single Door Fridge", description: "Single door fridge repair", category: "Refrigeration" },
  { slug: "samsung-refrigerator-repair", title: "Samsung Refrigerator Repair", description: "Samsung fridge service", category: "Refrigeration" },
  { slug: "whirlpool-fridge-service", title: "Whirlpool Fridge Service", description: "Whirlpool fridge repair", category: "Refrigeration" },
  { slug: "lg-fridge-repair", title: "LG Fridge Repair", description: "LG refrigerator service", category: "Refrigeration" },
  { slug: "godrej-fridge-service", title: "Godrej Fridge Service", description: "Godrej fridge repair", category: "Refrigeration" },
  { slug: "refrigeration-repair", title: "Refrigeration Repair", description: "Refrigeration service", category: "Refrigeration" },
  { slug: "refrigeration-compressor-repair", title: "Refrigeration Compressor Repair", description: "Fridge compressor repair", category: "Refrigeration" },
  { slug: "deep-freezer-service", title: "Deep Freezer Service", description: "Deep freezer repair", category: "Refrigeration" },
  { slug: "deep-freezer-repair", title: "Deep Freezer Repair", description: "Deep freezer service", category: "Refrigeration" },
  { slug: "water-cooler-repair", title: "Water Cooler Repair", description: "Water cooler service", category: "Refrigeration" },
  { slug: "water-dispenser-repair", title: "Water Dispenser Repair", description: "Water dispenser service", category: "Refrigeration" },
  { slug: "mini-fridge-repair", title: "Mini Fridge Repair", description: "Mini fridge service", category: "Refrigeration" },
  { slug: "commercial-refrigerator-repair", title: "Commercial Refrigerator Repair", description: "Commercial fridge service", category: "Refrigeration" },

  // Parts & Components (20)
  { slug: "ac-spare-parts", title: "AC Spare Parts", description: "Genuine AC spare parts", category: "Parts" },
  { slug: "ac-copper-pipe", title: "AC Copper Pipe", description: "AC copper pipe fitting", category: "Parts" },
  { slug: "ac-insulation", title: "AC Insulation", description: "AC pipe insulation", category: "Parts" },
  { slug: "ac-gas-pipe", title: "AC Gas Pipe", description: "AC gas pipe service", category: "Parts" },
  { slug: "ac-drain-pipe", title: "AC Drain Pipe", description: "AC drain pipe fitting", category: "Parts" },
  { slug: "ac-stabilizer-installation", title: "AC Stabilizer Installation", description: "AC stabilizer fitting", category: "Parts" },
  { slug: "ac-stand-installation", title: "AC Stand Installation", description: "AC stand fitting", category: "Parts" },
  { slug: "ac-mounting-bracket", title: "AC Mounting Bracket", description: "AC bracket fitting", category: "Parts" },
  { slug: "ac-wiring-service", title: "AC Wiring Service", description: "AC electrical wiring", category: "Parts" },
  { slug: "ac-mcb-installation", title: "AC MCB Installation", description: "AC MCB fitting", category: "Parts" },
  { slug: "fire-damper-hvac", title: "Fire Damper HVAC", description: "Fire damper installation", category: "Parts" },
  { slug: "volume-control-damper", title: "Volume Control Damper", description: "VCD installation", category: "Parts" },
  { slug: "ac-vibration-isolator", title: "AC Vibration Isolator", description: "Vibration isolator fitting", category: "Parts" },
  { slug: "sound-attenuator", title: "Sound Attenuator", description: "Sound attenuator installation", category: "Parts" },
  { slug: "exhaust-fan-repair", title: "Exhaust Fan Repair", description: "Exhaust fan service", category: "Parts" },
  { slug: "inline-fan-service", title: "Inline Fan Service", description: "Inline fan repair", category: "Parts" },
  { slug: "axial-fan-hvac", title: "Axial Fan HVAC", description: "Axial fan service", category: "Parts" },
  { slug: "blower-repair", title: "Blower Repair", description: "AC blower repair", category: "Parts" },
  { slug: "condenser-repair", title: "Condenser Repair", description: "AC condenser service", category: "Parts" },
  { slug: "evaporator-repair", title: "Evaporator Repair", description: "AC evaporator service", category: "Parts" },

  // Relocation & Installation (10)
  { slug: "ac-relocation", title: "AC Relocation", description: "AC shifting service", category: "Installation" },
  { slug: "ac-shifting", title: "AC Shifting", description: "AC relocation service", category: "Installation" },
  { slug: "ac-uninstallation-service", title: "AC Uninstallation Service", description: "AC removal", category: "Installation" },
  { slug: "ac-reinstallation", title: "AC Reinstallation", description: "AC reinstall service", category: "Installation" },
  { slug: "new-ac-installation", title: "New AC Installation", description: "New AC fitting", category: "Installation" },
  { slug: "ac-fitting", title: "AC Fitting", description: "AC installation service", category: "Installation" },
  { slug: "ac-mounting", title: "AC Mounting", description: "AC mounting service", category: "Installation" },
  { slug: "split-ac-fitting", title: "Split AC Fitting", description: "Split AC installation", category: "Installation" },
  { slug: "window-ac-installation", title: "Window AC Installation", description: "Window AC fitting", category: "Installation" },
  { slug: "cassette-ac-installation", title: "Cassette AC Installation", description: "Cassette AC fitting", category: "Installation" },

  // Area Specific (30)
  { slug: "ac-repair-alkapuri", title: "AC Repair Alkapuri", description: "AC repair in Alkapuri", category: "Area" },
  { slug: "ac-service-manjusar", title: "AC Service Manjusar", description: "AC service in Manjusar", category: "Area" },
  { slug: "fridge-repair-waghodia", title: "Fridge Repair Waghodia", description: "Fridge repair Waghodia", category: "Area" },
  { slug: "hvac-nandesari", title: "HVAC Nandesari", description: "HVAC service Nandesari", category: "Area" },
  { slug: "ac-por-ramangamdi", title: "AC Por Ramangamdi", description: "AC service in Por", category: "Area" },
  { slug: "ac-repair-por", title: "AC Repair Por", description: "AC repair in Por", category: "Area" },
  { slug: "ac-service-karjan", title: "AC Service Karjan", description: "AC service in Karjan", category: "Area" },
  { slug: "ac-repair-karjan", title: "AC Repair Karjan", description: "AC repair Karjan", category: "Area" },
  { slug: "bluestar-savli", title: "Bluestar Savli", description: "Blue Star AC service Savli", category: "Area" },
  { slug: "bluestar-ac-repair-savli", title: "Bluestar AC Repair Savli", description: "Blue Star repair Savli", category: "Area" },
  { slug: "hvac-ajwa-road", title: "HVAC Ajwa Road", description: "HVAC service Ajwa Road", category: "Area" },
  { slug: "ac-service-ajwa-road", title: "AC Service Ajwa Road", description: "AC service Ajwa", category: "Area" },
  { slug: "ac-repair-gotri", title: "AC Repair Gotri", description: "AC repair in Gotri", category: "Area" },
  { slug: "ac-service-fatehgunj", title: "AC Service Fatehgunj", description: "AC service Fatehgunj", category: "Area" },
  { slug: "ac-amc-manjalpur", title: "AC AMC Manjalpur", description: "AC AMC in Manjalpur", category: "Area" },
  { slug: "fridge-repair-akota", title: "Fridge Repair Akota", description: "Fridge repair Akota", category: "Area" },
  { slug: "ac-installation-chhani", title: "AC Installation Chhani", description: "AC installation Chhani", category: "Area" },
  { slug: "hvac-karelibaug", title: "HVAC Karelibaug", description: "HVAC service Karelibaug", category: "Area" },
  { slug: "ac-repair-itola", title: "AC Repair Itola", description: "AC repair in Itola", category: "Area" },
  { slug: "ac-service-haridham", title: "AC Service Haridham", description: "AC service Haridham", category: "Area" },
  { slug: "soma-talav-ac", title: "Soma Talav AC", description: "AC service Soma Talav", category: "Area" },
  { slug: "fridge-repair-manjalpur", title: "Fridge Repair Manjalpur", description: "Fridge repair Manjalpur", category: "Area" },
  { slug: "ac-installation-akota", title: "AC Installation Akota", description: "AC installation Akota", category: "Area" },
  { slug: "hvac-waghodia", title: "HVAC Waghodia", description: "HVAC service Waghodia", category: "Area" },
  { slug: "desar-ac-service", title: "Desar AC Service", description: "AC service in Desar", category: "Area" },
  { slug: "chhani-road-ac", title: "Chhani Road AC", description: "AC service Chhani Road", category: "Area" },
  { slug: "karelibaug-refrigeration", title: "Karelibaug Refrigeration", description: "Refrigeration Karelibaug", category: "Area" },
  { slug: "sangama-vadodara-ac", title: "Sangama Vadodara AC", description: "AC service Sangama", category: "Area" },
  { slug: "new-vadodara-ac", title: "New Vadodara AC", description: "New Vadodara AC service", category: "Area" },
  { slug: "alkapuri-bluestar", title: "Alkapuri Bluestar", description: "Blue Star service Alkapuri", category: "Area" },

  // Outside Vadodara (20)
  { slug: "ac-repair-anand", title: "AC Repair Anand", description: "AC repair service in Anand", category: "OutCity" },
  { slug: "anand-ac-service", title: "Anand AC Service", description: "AC service in Anand", category: "OutCity" },
  { slug: "hvac-halol", title: "HVAC Halol", description: "HVAC service in Halol", category: "OutCity" },
  { slug: "ac-service-halol", title: "AC Service Halol", description: "AC service in Halol", category: "OutCity" },
  { slug: "ac-service-bharuch", title: "AC Service Bharuch", description: "AC service in Bharuch", category: "OutCity" },
  { slug: "bharuch-ac-repair", title: "Bharuch AC Repair", description: "AC repair in Bharuch", category: "OutCity" },
  { slug: "ac-repair-padra", title: "AC Repair Padra", description: "AC repair in Padra", category: "OutCity" },
  { slug: "padra-ac-installation", title: "Padra AC Installation", description: "AC installation Padra", category: "OutCity" },
  { slug: "ac-service-vasad", title: "AC Service Vasad", description: "AC service in Vasad", category: "OutCity" },
  { slug: "godhra-hvac", title: "Godhra HVAC", description: "HVAC service in Godhra", category: "OutCity" },
  { slug: "ac-repair-dabhoi", title: "AC Repair Dabhoi", description: "AC repair in Dabhoi", category: "OutCity" },
  { slug: "dahej-hvac", title: "Dahej HVAC", description: "HVAC service in Dahej", category: "OutCity" },
  { slug: "dahej-ac-installation", title: "Dahej AC Installation", description: "AC installation Dahej", category: "OutCity" },
  { slug: "ankleshwar-refrigeration", title: "Ankleshwar Refrigeration", description: "Refrigeration Ankleshwar", category: "OutCity" },
  { slug: "ankleshwar-ac-service", title: "Ankleshwar AC Service", description: "AC service Ankleshwar", category: "OutCity" },
  { slug: "gujarat-ac-repair", title: "Gujarat AC Repair", description: "AC repair in Gujarat", category: "OutCity" },
  { slug: "gandhinagar-ac-service", title: "Gandhinagar AC Service", description: "AC service Gandhinagar", category: "OutCity" },
  { slug: "mehsana-ac-repair", title: "Mehsana AC Repair", description: "AC repair Mehsana", category: "OutCity" },
  { slug: "rajkot-ac-service", title: "Rajkot AC Service", description: "AC service Rajkot", category: "OutCity" },
  { slug: "surat-ac-repair", title: "Surat AC Repair", description: "AC repair Surat", category: "OutCity" },

  // Atlas Brand (10)
  { slug: "atlas-ac", title: "Atlas AC", description: "Atlas AC service", category: "Brand" },
  { slug: "atlas-ac-repair", title: "Atlas AC Repair", description: "Atlas Aircon repair", category: "Brand" },
  { slug: "atlas-ac-service", title: "Atlas AC Service", description: "Atlas Aircon service", category: "Brand" },
  { slug: "atlasaircons", title: "Atlasaircons", description: "Atlas Aircon Vadodara", category: "Brand" },
  { slug: "atlas-aircon-service", title: "Atlas Aircon Service", description: "Atlas Aircon", category: "Brand" },
  { slug: "vadodara-ac-amc", title: "Vadodara AC AMC", description: "AC AMC in Vadodara", category: "Brand" },
  { slug: "vadodara-ac-contractor", title: "Vadodara AC Contractor", description: "AC contractor Vadodara", category: "Brand" },
  { slug: "vadodara-hvac", title: "Vadodara HVAC", description: "HVAC service Vadodara", category: "Brand" },
  { slug: "vadodara-chiller", title: "Vadodara Chiller", description: "Chiller service Vadodara", category: "Brand" },
  { slug: "vadodara-vrf", title: "Vadodara VRF", description: "VRF service Vadodara", category: "Brand" },

  // Specialized Services (15)
  { slug: "hvac-commissioning", title: "HVAC Commissioning", description: "HVAC system commissioning", category: "Specialized" },
  { slug: "energy-audit-ac", title: "Energy Audit AC", description: "AC energy audit", category: "Specialized" },
  { slug: "bms-hvac", title: "BMS HVAC", description: "Building management HVAC", category: "Specialized" },
  { slug: "autocad-duct-design", title: "AutoCAD Duct Design", description: "Duct design service", category: "Specialized" },
  { slug: "hap-load-calculation", title: "HAP Load Calculation", description: "AC load calculation", category: "Specialized" },
  { slug: "ac-brands", title: "AC Brands", description: "All AC brands service", category: "Specialized" },
  { slug: "second-hand-ac-repair", title: "Second Hand AC Repair", description: "Used AC repair", category: "Specialized" },
  { slug: "refurbished-ac", title: "Refurbished AC", description: "Refurbished AC service", category: "Specialized" },
  { slug: "old-ac-repair", title: "Old AC Repair", description: "Old model AC repair", category: "Specialized" },
  { slug: "annual-maintenance-contract", title: "Annual Maintenance Contract", description: "AC AMC service", category: "Specialized" },
  { slug: "comprehensive-amc", title: "Comprehensive AMC", description: "Full AC AMC", category: "Specialized" },
  { slug: "non-comprehensive-amc", title: "Non Comprehensive AMC", description: "Basic AC AMC", category: "Specialized" },
  { slug: "preventive-maintenance", title: "Preventive Maintenance", description: "Preventive AC maintenance", category: "Specialized" },
  { slug: "breakdown-maintenance", title: "Breakdown Maintenance", description: "AC breakdown service", category: "Specialized" },
  { slug: "ac-rental-service", title: "AC Rental Service", description: "AC on rent", category: "Specialized" },
];

const appDir = path.join(__dirname, '..', 'app');

seoKeywords.forEach(kw => {
  const folderPath = path.join(appDir, kw.slug + '-vadodara');
  fs.mkdirSync(folderPath, { recursive: true });
  
  let funcName = kw.title.replace(/[^a-zA-Z0-9]/g, '') + 'Page';
  // Prefix with 'AC' if function name starts with a number (invalid JS identifier)
  if (/^[0-9]/.test(funcName)) {
    funcName = 'AC' + funcName;
  }
  
  const content = `import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, Star, Clock, Shield, Award, MapPin, ArrowRight, Wrench, AlertTriangle, Zap, ThermometerSnowflake, Settings } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "${kw.title} in Vadodara | Installation, Service & Repair | Atlas Aircon",
  description: "${kw.description} in Vadodara. Expert AC installation, service & repair. 20+ years experience, 90-day warranty. Call +91 97272 57141",
  keywords: [
    "${kw.title} Vadodara",
    "${kw.slug.replace(/-/g, ' ')}",
    "${kw.title} installation",
    "${kw.title} service",
    "${kw.title} repair",
    "best ${kw.title} service",
  ],
  alternates: {
    canonical: "https://atlasaircons.com/${kw.slug}-vadodara",
  },
};

const keywordData = {
  title: "${kw.title}",
  slug: "${kw.slug}",
  description: "${kw.description}",
  category: "${kw.category}"
};

const getCategoryIcon = () => {
  switch (keywordData.category) {
    case "Problems": return AlertTriangle;
    case "Commercial": return Wrench;
    case "Emergency": return Zap;
    default: return ThermometerSnowflake;
  }
};

const CategoryIcon = getCategoryIcon();

export default function ${funcName}() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <CategoryIcon className="w-4 h-4" />
                <span>{keywordData.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-yellow-400">{keywordData.title}</span> in Vadodara
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {keywordData.description} in Vadodara. Expert AC installation, service & repair by certified technicians. 
                Same-day service, genuine parts, 90-day warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+919727257141"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <Phone size={22} />
                  +91 97272 57141
                </a>
                <a
                  href="https://wa.me/919727257141"
                  className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Repair</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <BookingForm title={\`Book \${keywordData.title} Service\`} />
            </div>
          </div>
        </div>
      </section>

      {/* AC Installation, Service & Repair */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {keywordData.title} - Installation, Service & Repair
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Complete AC solutions including installation, service and repair for {keywordData.title.toLowerCase()} in Vadodara
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-green-300 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <ThermometerSnowflake className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Installation</h3>
              <p className="text-gray-600 mb-4">
                Professional {keywordData.title.toLowerCase()} installation in Vadodara. Expert installation with proper site inspection, quality materials, and perfect setup.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Site survey & consultation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Quality copper piping</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Proper electrical wiring</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Gas charging & testing</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Service</h3>
              <p className="text-gray-600 mb-4">
                Regular {keywordData.title.toLowerCase()} service and maintenance in Vadodara. Keep your AC running efficiently with professional cleaning and tune-up.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Deep filter cleaning</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Coil cleaning & sanitization</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Gas pressure check</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Performance optimization</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-red-300 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Repair</h3>
              <p className="text-gray-600 mb-4">
                Expert {keywordData.title.toLowerCase()} repair in Vadodara. We fix all AC problems with genuine spare parts and 90-day warranty on repairs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> Cooling issue repair</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> Gas leak detection & fix</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> Compressor repair</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> Electrical fault repair</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Atlas Aircon for {keywordData.title}?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">20+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Trusted since 2004</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">90 Days Warranty</h3>
              <p className="text-gray-600 text-sm">On all repairs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Same Day Service</h3>
              <p className="text-gray-600 text-sm">Quick response</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">5000+ Customers</h3>
              <p className="text-gray-600 text-sm">Happy customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {keywordData.title} Price in Vadodara
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Transparent pricing with no hidden charges
          </p>
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="text-left py-4 px-6">Service</th>
                  <th className="text-right py-4 px-6">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">AC Installation (Split/Window)</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹1,499 - ₹2,999</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="py-4 px-6">AC Service (Basic)</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹399 - ₹599</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6">AC Deep Cleaning</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹799 - ₹1,199</td>
                </tr>
                <tr className="border-b border-gray-200 bg-white">
                  <td className="py-4 px-6">AC Repair</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹500 - ₹5,000</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">AC Gas Refilling</td>
                  <td className="py-4 px-6 text-right font-semibold text-blue-600">₹1,500 - ₹3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need {keywordData.title} Service in Vadodara?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Expert AC installation, service & repair for {keywordData.title.toLowerCase()} in Vadodara.
            Same-day service available. Call now!
          </p>
          <a
            href="tel:+919727257141"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition"
          >
            <Phone size={22} />
            Call +91 97272 57141
          </a>
        </div>
      </section>
    </>
  );
}
`;
  
  fs.writeFileSync(path.join(folderPath, 'page.tsx'), content);
});

console.log('Created ' + seoKeywords.length + ' keyword page folders');
