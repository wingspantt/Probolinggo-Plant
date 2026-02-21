import { motion } from 'framer-motion';
import type { InventoryItem } from '@/types/production';
import { AlertCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

interface InventoryBarProps {
  item: InventoryItem;
  index: number;
}

const statusConfig = {
  good: {
    icon: CheckCircle2,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-500',
    progressColor: 'bg-emerald-100',
    label: 'Good',
  },
  medium: {
    icon: AlertTriangle,
    color: 'text-amber-600',
    bgColor: 'bg-amber-500',
    progressColor: 'bg-amber-100',
    label: 'Medium',
  },
  low: {
    icon: AlertCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-500',
    progressColor: 'bg-red-100',
    label: 'Low',
  },
};

export function InventoryBar({ item, index }: InventoryBarProps) {
  const config = statusConfig[item.status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">{item.name}</span>
            <span className={`text-xs ${config.color} flex items-center gap-1`}>
              <config.icon className="w-3 h-3" />
              {config.label}
            </span>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold text-slate-800 tabular-nums">
              {item.current.toLocaleString()}
            </span>
            <span className="text-xs text-slate-500 ml-1">
              / {item.max.toLocaleString()} {item.unit}
            </span>
          </div>
        </div>
        <div className={`h-2.5 w-full rounded-full ${config.progressColor} overflow-hidden`}>
          <motion.div
            className={`h-full rounded-full ${config.bgColor}`}
            initial={{ width: 0 }}
            animate={{ width: `${item.percentage}%` }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default InventoryBar;
