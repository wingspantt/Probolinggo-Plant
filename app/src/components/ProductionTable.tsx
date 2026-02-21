import { motion } from 'framer-motion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { StatusBadge } from './StatusBadge';
import { Package, Flame, Wind } from 'lucide-react';

interface ProductionRecord {
  date: string;
  type: string;
  rawMaterial: string;
  input: number | null;
  output: number | null;
  efficiency: number | null;
  status: string;
}

interface ProductionTableProps {
  data: ProductionRecord[];
}

const typeIcons: Record<string, React.ElementType> = {
  Briquette: Package,
  Biochar: Flame,
  Sawdust: Wind,
};

const typeColors: Record<string, string> = {
  Briquette: 'text-blue-600 bg-blue-50 border-blue-200',
  Biochar: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  Sawdust: 'text-amber-600 bg-amber-50 border-amber-200',
};

export function ProductionTable({ data }: ProductionTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800">Recent Production Records</h3>
          <p className="text-sm text-slate-500 mt-1">
            Latest production activities across all lines
          </p>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50 hover:bg-slate-50">
                <TableHead className="text-xs font-semibold text-slate-600">Date</TableHead>
                <TableHead className="text-xs font-semibold text-slate-600">Type</TableHead>
                <TableHead className="text-xs font-semibold text-slate-600">Raw Material</TableHead>
                <TableHead className="text-xs font-semibold text-slate-600 text-right">Input (kg)</TableHead>
                <TableHead className="text-xs font-semibold text-slate-600 text-right">Output (kg)</TableHead>
                <TableHead className="text-xs font-semibold text-slate-600 text-right">Efficiency</TableHead>
                <TableHead className="text-xs font-semibold text-slate-600">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((record, index) => {
                const TypeIcon = typeIcons[record.type] || Package;
                const typeColor = typeColors[record.type] || typeColors.Briquette;

                return (
                  <TableRow
                    key={index}
                    className="hover:bg-slate-50 transition-colors duration-100"
                  >
                    <TableCell className="text-sm text-slate-700">{record.date}</TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${typeColor}`}
                      >
                        <TypeIcon className="w-3.5 h-3.5" />
                        {record.type}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-slate-700">
                      {record.rawMaterial}
                    </TableCell>
                    <TableCell className="text-sm text-slate-700 text-right tabular-nums">
                      {record.input?.toLocaleString() || '-'}
                    </TableCell>
                    <TableCell className="text-sm text-slate-700 text-right tabular-nums">
                      {record.output?.toLocaleString() || '-'}
                    </TableCell>
                    <TableCell className="text-sm text-slate-700 text-right tabular-nums">
                      {record.efficiency ? `${record.efficiency}%` : '-'}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={record.status} size="sm" />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Card>
    </motion.div>
  );
}

export default ProductionTable;
