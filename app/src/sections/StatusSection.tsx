import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Package, Flame, Wind } from 'lucide-react';
import type { ProductionSummary } from '@/types/production';

interface StatusSectionProps {
  summary: ProductionSummary;
}

const productionLines = [
  {
    key: 'briquette',
    title: 'Briquette Production',
    icon: Package,
    color: 'blue',
    getValue: (s: ProductionSummary) => s.totalBriquette,
    getEfficiency: (s: ProductionSummary) => s.avgEfficiency,
    getStatus: () => 'Active' as const,
    lastProduction: 'Feb 10, 2026',
  },
  {
    key: 'biochar',
    title: 'Biochar Production',
    icon: Flame,
    color: 'emerald',
    getValue: (s: ProductionSummary) => s.totalBiochar,
    getEfficiency: () => 42,
    getStatus: () => 'Active' as const,
    lastProduction: 'Feb 20, 2026',
  },
  {
    key: 'sawdust',
    title: 'Sawdust Production',
    icon: Wind,
    color: 'amber',
    getValue: (s: ProductionSummary) => s.totalSawdust,
    getEfficiency: () => 68,
    getStatus: () => 'Maintenance' as const,
    lastProduction: 'Feb 10, 2026',
  },
];

const statusConfig = {
  Active: {
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    pulseColor: 'bg-emerald-500',
    label: 'Active',
  },
  Maintenance: {
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    pulseColor: 'bg-amber-500',
    label: 'Maintenance',
  },
  Standby: {
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-600',
    borderColor: 'border-slate-200',
    pulseColor: 'bg-slate-500',
    label: 'Standby',
  },
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-200',
  },
};

export function StatusSection({ summary }: StatusSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="p-5 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          Production Status Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {productionLines.map((line, index) => {
            const Icon = line.icon;
            const colors = colorMap[line.color];
            const status = line.getStatus();
            const statusConfig_item = statusConfig[status];

            return (
              <motion.div
                key={line.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`p-4 rounded-xl border ${colors.border} ${colors.bg}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg ${colors.bg} ${colors.text} flex items-center justify-center border ${colors.border}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${statusConfig_item.bgColor} ${statusConfig_item.textColor}`}>
                    <span className={`relative flex h-1.5 w-1.5`}>
                      {status === 'Active' && (
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${statusConfig_item.pulseColor} opacity-75`} />
                      )}
                      <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${statusConfig_item.pulseColor}`} />
                    </span>
                    {status}
                  </div>
                </div>

                <h4 className="font-semibold text-slate-800 mb-1">{line.title}</h4>
                
                <div className="space-y-2 mt-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Total Output</span>
                    <span className="font-medium text-slate-700 tabular-nums">
                      {line.getValue(summary).toLocaleString()} kg
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Efficiency</span>
                    <span className="font-medium text-slate-700 tabular-nums">
                      {line.getEfficiency(summary)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Last Production</span>
                    <span className="font-medium text-slate-700">{line.lastProduction}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Card>
    </motion.section>
  );
}

export default StatusSection;
