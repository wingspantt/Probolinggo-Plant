import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { InventoryBar } from '@/components/InventoryBar';
import type { InventoryItem } from '@/types/production';
import { Package } from 'lucide-react';

interface InventorySectionProps {
  data: InventoryItem[];
}

export function InventorySection({ data }: InventorySectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="p-5 border border-slate-200">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-200">
            <Package className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800">Material Inventory</h3>
            <p className="text-sm text-slate-500">Current stock levels and usage</p>
          </div>
        </div>

        <div className="space-y-5">
          {data.map((item, index) => (
            <InventoryBar key={item.name} item={item} index={index} />
          ))}
        </div>
      </Card>
    </motion.section>
  );
}

export default InventorySection;
