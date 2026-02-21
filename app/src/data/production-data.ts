import type { ProductionData } from '@/types/production';

export const productionData: ProductionData = {
  "company": "PT. Tricakra Tunggal Karsa",
  "lastUpdated": "20 Februari 2026",
  "summary": {
    "totalBriquette": 942.5,
    "totalBiochar": 1587.8,
    "totalSawdust": 939.0,
    "avgEfficiency": 78.7,
    "totalInput": 1197.5,
    "materialUsage": {
      "veneerHitam": 1197.5,
      "briket": 4450.5,
      "pellet": 807.5,
      "serbuk": 407.5
    },
    "reactorStats": {
      "horizontal": 9,
      "vertikal": 5
    }
  },
  "briquetteProduction": [
    {"id": 1, "date": "2 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialUsed": 182.0, "totalProduction": 112.5, "biocharConsumption": null, "remainingRawMaterial": null, "status": "completed"},
    {"id": 2, "date": "3 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialUsed": 153.0, "totalProduction": 173.5, "biocharConsumption": null, "remainingRawMaterial": null, "status": "completed"},
    {"id": 3, "date": "4 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialUsed": 144.5, "totalProduction": 90.5, "biocharConsumption": null, "remainingRawMaterial": null, "status": "pending"},
    {"id": 4, "date": "5 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialUsed": 374.0, "totalProduction": 284.0, "biocharConsumption": null, "remainingRawMaterial": null, "status": "pending"},
    {"id": 5, "date": "6 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialUsed": 129.0, "totalProduction": 101.5, "biocharConsumption": null, "remainingRawMaterial": null, "status": "pending"},
    {"id": 6, "date": "7 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialUsed": 52.5, "totalProduction": 33.5, "biocharConsumption": null, "remainingRawMaterial": null, "status": "pending"},
    {"id": 7, "date": "8 Februari 2026", "rawMaterial": "Libur", "rawMaterialUsed": null, "totalProduction": null, "biocharConsumption": null, "remainingRawMaterial": null, "status": "holiday"},
    {"id": 8, "date": "9 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialUsed": 85.0, "totalProduction": 75.5, "biocharConsumption": null, "remainingRawMaterial": null, "status": "pending"},
    {"id": 9, "date": "10 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialUsed": 77.5, "totalProduction": 71.5, "biocharConsumption": null, "remainingRawMaterial": null, "status": "pending"},
    {"id": 10, "date": "11 Februari 2026", "rawMaterial": "Maintenance", "rawMaterialUsed": null, "totalProduction": null, "biocharConsumption": null, "remainingRawMaterial": null, "status": "maintenance"},
    {"id": 11, "date": "12 Februari 2026", "rawMaterial": "Maintenance", "rawMaterialUsed": null, "totalProduction": null, "biocharConsumption": null, "remainingRawMaterial": 323.5, "status": "maintenance"},
    {"id": 12, "date": "13 Februari 2026", "rawMaterial": "Maintenance", "rawMaterialUsed": null, "totalProduction": null, "biocharConsumption": null, "remainingRawMaterial": null, "status": "maintenance"}
  ],
  "biocharProduction": [
    {"id": 1, "date": "19 Januari 2026", "reactor": "Vertikal", "rawMaterial": "Briket", "rawMaterial1Used": null, "rawMaterial2Used": null, "totalRawMaterial": 0, "fuelVeneer": null, "fuelPellet": null, "unfinishedBiochar": null, "productionYield": 25.8, "bioOil": 25.8, "kempuLevel": null, "grease": null, "notes": null},
    {"id": 2, "date": "20 Januari 2026", "reactor": "Vertikal", "rawMaterial": "Briket", "rawMaterial1Used": 300.0, "rawMaterial2Used": null, "totalRawMaterial": 300.0, "fuelVeneer": null, "fuelPellet": 53.0, "unfinishedBiochar": null, "productionYield": null, "bioOil": 0.0, "kempuLevel": null, "grease": null, "notes": null},
    {"id": 3, "date": "24 Januari 2026", "reactor": "Vertikal", "rawMaterial": "Briket", "rawMaterial1Used": 400.0, "rawMaterial2Used": null, "totalRawMaterial": 400.0, "fuelVeneer": null, "fuelPellet": null, "unfinishedBiochar": null, "productionYield": 132.0, "bioOil": 132.0, "kempuLevel": null, "grease": null, "notes": null},
    {"id": 4, "date": "27 Januari 2026", "reactor": "Horizontal", "rawMaterial": "Briket Horizontal", "rawMaterial1Used": 601.0, "rawMaterial2Used": null, "totalRawMaterial": 601.0, "fuelVeneer": 166.4, "fuelPellet": 0.0, "unfinishedBiochar": 30.0, "productionYield": 234.5, "bioOil": 234.5, "kempuLevel": 0.0, "grease": 760.0, "notes": null},
    {"id": 5, "date": "31 Januari 2026", "reactor": "Horizontal", "rawMaterial": "Briket Horizontal", "rawMaterial1Used": 434.0, "rawMaterial2Used": null, "totalRawMaterial": 434.0, "fuelVeneer": 180.0, "fuelPellet": 0.0, "unfinishedBiochar": 26.0, "productionYield": 182.5, "bioOil": 182.5, "kempuLevel": 0.0, "grease": 760.0, "notes": "1760"},
    {"id": 6, "date": "2 Februari 2026", "reactor": "Horizontal", "rawMaterial": "Veneer Hitam", "rawMaterial1Used": 200.0, "rawMaterial2Used": null, "totalRawMaterial": 200.0, "fuelVeneer": 400.0, "fuelPellet": 0.0, "unfinishedBiochar": 130.5, "productionYield": 45.0, "bioOil": 45.0, "kempuLevel": null, "grease": 760.0, "notes": null},
    {"id": 7, "date": "4 Februari 2026", "reactor": "Horizontal", "rawMaterial": "Briket + Pellet", "rawMaterial1Used": 801.5, "rawMaterial2Used": 57.0, "totalRawMaterial": 858.5, "fuelVeneer": 636.0, "fuelPellet": null, "unfinishedBiochar": 113.5, "productionYield": 302.5, "bioOil": 302.5, "kempuLevel": null, "grease": null, "notes": null},
    {"id": 8, "date": "7 Februari 2026", "reactor": "Horizontal", "rawMaterial": "Briket + Pellet", "rawMaterial1Used": 435.0, "rawMaterial2Used": 210.0, "totalRawMaterial": 645.0, "fuelVeneer": null, "fuelPellet": null, "unfinishedBiochar": 126.0, "productionYield": 198.0, "bioOil": 349.5, "kempuLevel": null, "grease": null, "notes": null},
    {"id": 9, "date": "9 Februari 2026", "reactor": "Vertikal", "rawMaterial": "Briket + Pellet", "rawMaterial1Used": 402.0, "rawMaterial2Used": 110.5, "totalRawMaterial": 512.5, "fuelVeneer": 266.0, "fuelPellet": 48.0, "unfinishedBiochar": 94.5, "productionYield": 267.0, "bioOil": 351.5, "kempuLevel": null, "grease": null, "notes": null},
    {"id": 10, "date": "10 Februari 2026", "reactor": "Vertikal", "rawMaterial": "Briket", "rawMaterial1Used": 300.0, "rawMaterial2Used": 0.0, "totalRawMaterial": 300.0, "fuelVeneer": null, "fuelPellet": null, "unfinishedBiochar": null, "productionYield": 123.5, "bioOil": 123.5, "kempuLevel": null, "grease": null, "notes": null},
    {"id": 11, "date": "11 Februari", "reactor": null, "rawMaterial": "Maintenance", "rawMaterial1Used": null, "rawMaterial2Used": null, "totalRawMaterial": 0, "fuelVeneer": null, "fuelPellet": null, "unfinishedBiochar": null, "productionYield": null, "bioOil": null, "kempuLevel": null, "grease": null, "notes": null},
    {"id": 12, "date": "14 Februari 2026", "reactor": "Horizontal", "rawMaterial": "Briket+Veneer", "rawMaterial1Used": 244.5, "rawMaterial2Used": 155.0, "totalRawMaterial": 399.5, "fuelVeneer": null, "fuelPellet": null, "unfinishedBiochar": 132.0, "productionYield": 77.0, "bioOil": 231.5, "kempuLevel": null, "grease": null, "notes": null},
    {"id": 13, "date": "16 Februari 2026", "reactor": "Horizontal", "rawMaterial": "Serbuk", "rawMaterial1Used": 407.5, "rawMaterial2Used": null, "totalRawMaterial": 407.5, "fuelVeneer": null, "fuelPellet": 50.0, "unfinishedBiochar": null, "productionYield": null, "bioOil": null, "kempuLevel": null, "grease": null, "notes": null},
    {"id": 14, "date": "18 Februari 2026", "reactor": "Horizontal", "rawMaterial": "Veneer + Serbuk", "rawMaterial1Used": 126.5, "rawMaterial2Used": 275.0, "totalRawMaterial": 401.5, "fuelVeneer": 244.0, "fuelPellet": 51.5, "unfinishedBiochar": 90.0, "productionYield": null, "bioOil": null, "kempuLevel": null, "grease": null, "notes": null},
    {"id": 15, "date": "20 Februari 2026", "reactor": "Horizontal", "rawMaterial": "Kayu", "rawMaterial1Used": 400.0, "rawMaterial2Used": null, "totalRawMaterial": 400.0, "fuelVeneer": null, "fuelPellet": null, "unfinishedBiochar": null, "productionYield": null, "bioOil": null, "kempuLevel": null, "grease": null, "notes": null}
  ],
  "sawdustProduction": [
    {"id": 2, "date": "2 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialAmount": 100.0, "fuelVeneer": 8.0, "sawdustCrusherResult": 72.0, "status": "completed"},
    {"id": 3, "date": "3 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialAmount": 104.5, "fuelVeneer": 9.0, "sawdustCrusherResult": 74.5, "status": "completed"},
    {"id": 4, "date": "4 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialAmount": 116.0, "fuelVeneer": 10.0, "sawdustCrusherResult": 88.5, "status": "pending"},
    {"id": 5, "date": "5 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialAmount": 426.5, "fuelVeneer": 40.0, "sawdustCrusherResult": 267.5, "status": "pending"},
    {"id": 6, "date": "6 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialAmount": 220.0, "fuelVeneer": 20.0, "sawdustCrusherResult": 95.0, "status": "pending"},
    {"id": 7, "date": "7 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialAmount": 285.0, "fuelVeneer": 30.0, "sawdustCrusherResult": 159.0, "status": "pending"},
    {"id": 8, "date": "8 Februari 2026", "rawMaterial": "Libur", "rawMaterialAmount": null, "fuelVeneer": null, "sawdustCrusherResult": null, "status": "holiday"},
    {"id": 9, "date": "9 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialAmount": 222.5, "fuelVeneer": 20.0, "sawdustCrusherResult": 85.0, "status": "pending"},
    {"id": 10, "date": "10 Februari 2026", "rawMaterial": "Veneer Hitam", "rawMaterialAmount": 235.5, "fuelVeneer": 25.0, "sawdustCrusherResult": 97.5, "status": "pending"},
    {"id": 11, "date": "11 Februari 2026", "rawMaterial": "Maintenance", "rawMaterialAmount": null, "fuelVeneer": null, "sawdustCrusherResult": null, "status": "maintenance"},
    {"id": 12, "date": "12 Februari 2026", "rawMaterial": "Maintenance", "rawMaterialAmount": null, "fuelVeneer": null, "sawdustCrusherResult": null, "status": "maintenance"},
    {"id": 13, "date": "13 Februari 2026", "rawMaterial": "Maintenance", "rawMaterialAmount": null, "fuelVeneer": null, "sawdustCrusherResult": null, "status": "maintenance"},
    {"id": 14, "date": "14 Februari 2026", "rawMaterial": "Maintenance", "rawMaterialAmount": null, "fuelVeneer": null, "sawdustCrusherResult": null, "status": "maintenance"},
    {"id": 15, "date": "15 Februari 2026", "rawMaterial": "Libur", "rawMaterialAmount": null, "fuelVeneer": null, "sawdustCrusherResult": null, "status": "holiday"}
  ]
};

export default productionData;
