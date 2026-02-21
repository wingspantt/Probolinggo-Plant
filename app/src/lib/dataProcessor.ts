import type {
  ProductionData,
  ChartDataPoint,
  InventoryItem,
  ReactorStatus,
  KPIData,
} from '@/types/production';

export function processProductionData(data: ProductionData): {
  kpiData: KPIData[];
  chartData: ChartDataPoint[];
  inventoryData: InventoryItem[];
  reactorData: ReactorStatus[];
  recentProduction: Array<{
    date: string;
    type: string;
    rawMaterial: string;
    input: number | null;
    output: number | null;
    efficiency: number | null;
    status: string;
  }>;
} {
  const { summary, briquetteProduction, biocharProduction, sawdustProduction } = data;

  // KPI Data
  const kpiData: KPIData[] = [
    {
      title: 'Total Briquette Production',
      value: summary.totalBriquette,
      change: 12,
      changeType: 'positive',
      icon: 'Package',
      color: 'primary',
      suffix: 'kg',
    },
    {
      title: 'Biochar Output',
      value: summary.totalBiochar,
      change: 8,
      changeType: 'positive',
      icon: 'Flame',
      color: 'secondary',
      suffix: 'kg',
    },
    {
      title: 'Sawdust Production',
      value: summary.totalSawdust,
      change: -3,
      changeType: 'negative',
      icon: 'Wind',
      color: 'accent',
      suffix: 'kg',
    },
    {
      title: 'Material Efficiency',
      value: summary.avgEfficiency,
      change: 2.3,
      changeType: 'positive',
      icon: 'TrendingUp',
      color: 'success',
      suffix: '%',
    },
  ];

  // Chart Data - combine all production by date
  const dateMap = new Map<string, ChartDataPoint>();

  // Process briquette data
  briquetteProduction.forEach((item) => {
    if (item.totalProduction) {
      const existing = dateMap.get(item.date) || { date: item.date };
      dateMap.set(item.date, {
        ...existing,
        date: item.date,
        briquette: item.totalProduction,
        input: item.rawMaterialUsed || 0,
      });
    }
  });

  // Process biochar data
  biocharProduction.forEach((item) => {
    if (item.productionYield) {
      const existing = dateMap.get(item.date) || { date: item.date };
      dateMap.set(item.date, {
        ...existing,
        date: item.date,
        biochar: (existing.biochar || 0) + item.productionYield,
      });
    }
  });

  // Process sawdust data
  sawdustProduction.forEach((item) => {
    if (item.sawdustCrusherResult) {
      const existing = dateMap.get(item.date) || { date: item.date };
      dateMap.set(item.date, {
        ...existing,
        date: item.date,
        sawdust: item.sawdustCrusherResult,
      });
    }
  });

  const chartData = Array.from(dateMap.values()).sort((a, b) => {
    // Simple date sorting for Indonesian date format
    const dateA = a.date.split(' ');
    const dateB = b.date.split(' ');
    const monthA = getMonthNumber(dateA[1]);
    const monthB = getMonthNumber(dateB[1]);
    if (monthA !== monthB) return monthA - monthB;
    return parseInt(dateA[0]) - parseInt(dateB[0]);
  });

  // Inventory Data
  const inventoryData: InventoryItem[] = [
    {
      name: 'Veneer Hitam',
      current: summary.materialUsage.veneerHitam,
      max: 2000,
      unit: 'kg',
      percentage: Math.min((summary.materialUsage.veneerHitam / 2000) * 100, 100),
      status: summary.materialUsage.veneerHitam > 1000 ? 'good' : summary.materialUsage.veneerHitam > 500 ? 'medium' : 'low',
    },
    {
      name: 'Briket',
      current: summary.materialUsage.briket,
      max: 6000,
      unit: 'kg',
      percentage: Math.min((summary.materialUsage.briket / 6000) * 100, 100),
      status: summary.materialUsage.briket > 3000 ? 'good' : summary.materialUsage.briket > 1500 ? 'medium' : 'low',
    },
    {
      name: 'Pellet',
      current: summary.materialUsage.pellet,
      max: 2000,
      unit: 'kg',
      percentage: Math.min((summary.materialUsage.pellet / 2000) * 100, 100),
      status: summary.materialUsage.pellet > 1000 ? 'good' : summary.materialUsage.pellet > 500 ? 'medium' : 'low',
    },
    {
      name: 'Serbuk',
      current: summary.materialUsage.serbuk,
      max: 1000,
      unit: 'kg',
      percentage: Math.min((summary.materialUsage.serbuk / 1000) * 100, 100),
      status: summary.materialUsage.serbuk > 500 ? 'good' : summary.materialUsage.serbuk > 250 ? 'medium' : 'low',
    },
  ];

  // Reactor Data
  const reactorData: ReactorStatus[] = [
    {
      name: 'Vertikal Reactor',
      status: 'standby',
      lastUsed: '10 Februari 2026',
      totalRuns: summary.reactorStats.vertikal,
    },
    {
      name: 'Horizontal Reactor',
      status: 'active',
      lastUsed: '20 Februari 2026',
      totalRuns: summary.reactorStats.horizontal,
    },
  ];

  // Recent Production
  const recentProduction: Array<{
    date: string;
    type: string;
    rawMaterial: string;
    input: number | null;
    output: number | null;
    efficiency: number | null;
    status: string;
  }> = [];

  // Add recent briquette production
  briquetteProduction
    .filter((item) => item.totalProduction && item.status === 'completed')
    .slice(-5)
    .forEach((item) => {
      const output = item.totalProduction!;
      recentProduction.push({
        date: item.date,
        type: 'Briquette',
        rawMaterial: item.rawMaterial,
        input: item.rawMaterialUsed,
        output: output,
        efficiency: item.rawMaterialUsed
          ? Math.round((output / item.rawMaterialUsed) * 100 * 10) / 10
          : null,
        status: item.status,
      });
    });

  // Add recent biochar production
  biocharProduction
    .filter((item) => item.productionYield)
    .slice(-5)
    .forEach((item) => {
      const output = item.productionYield!;
      recentProduction.push({
        date: item.date,
        type: 'Biochar',
        rawMaterial: item.rawMaterial,
        input: item.totalRawMaterial,
        output: output,
        efficiency: item.totalRawMaterial
          ? Math.round((output / item.totalRawMaterial) * 100 * 10) / 10
          : null,
        status: 'completed',
      });
    });

  // Add recent sawdust production
  sawdustProduction
    .filter((item) => item.sawdustCrusherResult && item.status === 'completed')
    .slice(-5)
    .forEach((item) => {
      const output = item.sawdustCrusherResult!;
      recentProduction.push({
        date: item.date,
        type: 'Sawdust',
        rawMaterial: item.rawMaterial,
        input: item.rawMaterialAmount,
        output: output,
        efficiency: item.rawMaterialAmount
          ? Math.round((output / item.rawMaterialAmount) * 100 * 10) / 10
          : null,
        status: item.status,
      });
    });

  // Sort by date (most recent first)
  recentProduction.sort((a, b) => {
    const dateA = a.date.split(' ');
    const dateB = b.date.split(' ');
    const monthA = getMonthNumber(dateA[1]);
    const monthB = getMonthNumber(dateB[1]);
    if (monthA !== monthB) return monthB - monthA;
    return parseInt(dateB[0]) - parseInt(dateA[0]);
  });

  return {
    kpiData,
    chartData,
    inventoryData,
    reactorData,
    recentProduction: recentProduction.slice(0, 10),
  };
}

function getMonthNumber(monthName: string): number {
  const months: Record<string, number> = {
    Januari: 1,
    Februari: 2,
    Maret: 3,
    April: 4,
    Mei: 5,
    Juni: 6,
    Juli: 7,
    Agustus: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Desember: 12,
  };
  return months[monthName] || 0;
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'completed':
    case 'Sudah':
      return 'bg-emerald-100 text-emerald-700 border-emerald-300';
    case 'pending':
    case 'Belum':
      return 'bg-amber-100 text-amber-700 border-amber-300';
    case 'maintenance':
      return 'bg-blue-100 text-blue-700 border-blue-300';
    case 'holiday':
      return 'bg-slate-100 text-slate-700 border-slate-300';
    default:
      return 'bg-slate-100 text-slate-700 border-slate-300';
  }
}

export function getStatusLabel(status: string): string {
  switch (status) {
    case 'completed':
    case 'Sudah':
      return 'Completed';
    case 'pending':
    case 'Belum':
      return 'Pending';
    case 'maintenance':
      return 'Maintenance';
    case 'holiday':
      return 'Holiday';
    default:
      return status;
  }
}

export default processProductionData;
