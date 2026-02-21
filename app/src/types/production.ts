export interface BriquetteProduction {
  id: number;
  date: string;
  rawMaterial: string;
  rawMaterialUsed: number | null;
  totalProduction: number | null;
  biocharConsumption: number | null;
  remainingRawMaterial: number | null;
  status: 'completed' | 'pending' | 'maintenance' | 'holiday';
}

export interface BiocharProduction {
  id: number;
  date: string;
  reactor: 'Vertikal' | 'Horizontal' | null;
  rawMaterial: string;
  rawMaterial1Used: number | null;
  rawMaterial2Used: number | null;
  totalRawMaterial: number;
  fuelVeneer: number | null;
  fuelPellet: number | null;
  unfinishedBiochar: number | null;
  productionYield: number | null;
  bioOil: number | null;
  kempuLevel: number | null;
  grease: number | null;
  notes: string | null;
}

export interface SawdustProduction {
  id: number;
  date: string;
  rawMaterial: string;
  rawMaterialAmount: number | null;
  fuelVeneer: number | null;
  sawdustCrusherResult: number | null;
  status: 'completed' | 'pending' | 'maintenance' | 'holiday';
}

export interface MaterialUsage {
  veneerHitam: number;
  briket: number;
  pellet: number;
  serbuk: number;
}

export interface ReactorStats {
  horizontal: number;
  vertikal: number;
}

export interface ProductionSummary {
  totalBriquette: number;
  totalBiochar: number;
  totalSawdust: number;
  avgEfficiency: number;
  totalInput: number;
  materialUsage: MaterialUsage;
  reactorStats: ReactorStats;
}

export interface ProductionData {
  company: string;
  lastUpdated: string;
  summary: ProductionSummary;
  briquetteProduction: BriquetteProduction[];
  biocharProduction: BiocharProduction[];
  sawdustProduction: SawdustProduction[];
}

export type ProductionType = 'briquette' | 'biochar' | 'sawdust';

export interface KPIData {
  title: string;
  value: number;
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: string;
  color: string;
  suffix?: string;
}

export interface ChartDataPoint {
  date: string;
  briquette?: number;
  biochar?: number;
  sawdust?: number;
  input?: number;
  efficiency?: number;
}

export interface InventoryItem {
  name: string;
  current: number;
  max: number;
  unit: string;
  percentage: number;
  status: 'good' | 'medium' | 'low';
}

export interface ReactorStatus {
  name: string;
  status: 'active' | 'standby' | 'maintenance';
  lastUsed: string;
  totalRuns: number;
}
