import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ReactorCard } from '@/components/ReactorCard';
import type { ReactorStatus } from '@/types/production';
import { Zap } from 'lucide-react';

interface ReactorSectionProps {
  data: ReactorStatus[];
}

export function ReactorSection({ data }: ReactorSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="p-5 border border-slate-200">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-200">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800">Reactor Status</h3>
            <p className="text-sm text-slate-500">Monitor reactor activity and usage</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.map((reactor, index) => (
            <ReactorCard key={reactor.name} reactor={reactor} index={index} />
          ))}
        </div>
      </Card>
    </motion.section>
  );
}

export default ReactorSection;
