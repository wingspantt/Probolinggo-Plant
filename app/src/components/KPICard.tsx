import { motion } from 'framer-motion';
import { Package, Flame, Wind, TrendingUp, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useCountUp } from '@/hooks/useCountUp';
import type { KPIData } from '@/types/production';

const iconMap: Record<string, React.ElementType> = {
  Package,
  Flame,
  Wind,
  TrendingUp,
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  primary: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
  },
  secondary: {
    bg: 'bg-teal-50',
    text: 'text-teal-600',
    border: 'border-teal-200',
  },
  accent: {
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-200',
  },
  success: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
  },
};

interface KPICardProps {
  data: KPIData;
  index: number;
}

export function KPICard({ data, index }: KPICardProps) {
  const Icon = iconMap[data.icon] || Package;
  const colors = colorMap[data.color] || colorMap.primary;
  const animatedValue = useCountUp(data.value, { duration: 1500, delay: index * 100 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Card className="p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer border border-slate-200">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-500 mb-1">{data.title}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-800 tabular-nums">
                {animatedValue.toLocaleString()}
              </span>
              {data.suffix && (
                <span className="text-sm font-medium text-slate-500">{data.suffix}</span>
              )}
            </div>
            <div className="flex items-center gap-1 mt-2">
              {data.change !== 0 && (
                <span
                  className={`flex items-center text-xs font-medium ${
                    data.changeType === 'positive'
                      ? 'text-emerald-600'
                      : data.changeType === 'negative'
                      ? 'text-red-600'
                      : 'text-slate-500'
                  }`}
                >
                  {data.changeType === 'positive' ? (
                    <ArrowUp className="w-3 h-3 mr-0.5" />
                  ) : data.changeType === 'negative' ? (
                    <ArrowDown className="w-3 h-3 mr-0.5" />
                  ) : (
                    <Minus className="w-3 h-3 mr-0.5" />
                  )}
                  {Math.abs(data.change)}%
                </span>
              )}
              <span className="text-xs text-slate-400">from last week</span>
            </div>
          </div>
          <div
            className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center border ${colors.border}`}
          >
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default KPICard;
