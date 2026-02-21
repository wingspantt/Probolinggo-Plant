import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import type { ReactorStatus } from '@/types/production';
import { Activity, Power, Wrench, Clock, Zap } from 'lucide-react';

interface ReactorCardProps {
  reactor: ReactorStatus;
  index: number;
}

const statusConfig = {
  active: {
    icon: Activity,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    pulseColor: 'bg-emerald-500',
    label: 'Active',
  },
  standby: {
    icon: Power,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    pulseColor: 'bg-amber-500',
    label: 'Standby',
  },
  maintenance: {
    icon: Wrench,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    pulseColor: 'bg-blue-500',
    label: 'Maintenance',
  },
};

export function ReactorCard({ reactor, index }: ReactorCardProps) {
  const config = statusConfig[reactor.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Card className="p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border border-slate-200">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-lg ${config.bgColor} ${config.color} flex items-center justify-center border ${config.borderColor}`}
            >
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">{reactor.name}</h4>
              <div className="flex items-center gap-2 mt-0.5">
                <span className={`relative flex h-2 w-2`}>
                  {reactor.status === 'active' && (
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.pulseColor} opacity-75`}
                    />
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-2 w-2 ${config.pulseColor}`}
                  />
                </span>
                <span className={`text-xs font-medium ${config.color}`}>
                  {config.label}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Last Used
            </span>
            <span className="font-medium text-slate-700">{reactor.lastUsed}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              Total Runs
            </span>
            <span className="font-medium text-slate-700 tabular-nums">
              {reactor.totalRuns}
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default ReactorCard;
