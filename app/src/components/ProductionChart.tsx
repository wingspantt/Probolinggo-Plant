import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';
import { Card } from '@/components/ui/card';
import type { ChartDataPoint } from '@/types/production';

interface ProductionChartProps {
  data: ChartDataPoint[];
  type: 'line' | 'bar' | 'composed';
  title: string;
}

const CustomTooltip = ({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ color: string; name: string; value: number }>;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-200 rounded-lg shadow-lg">
        <p className="text-sm font-medium text-slate-700 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-xs flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-slate-600">{entry.name}:</span>
            <span className="font-medium text-slate-800">
              {entry.value?.toLocaleString()} kg
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function ProductionChart({ data, type, title }: ProductionChartProps) {
  const chartColors = {
    briquette: '#3B82F6',
    biochar: '#10B981',
    sawdust: '#F59E0B',
    input: '#EF4444',
  };

  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11, fill: '#64748B' }}
                tickMargin={10}
                stroke="#94A3B8"
              />
              <YAxis
                tick={{ fontSize: 11, fill: '#64748B' }}
                stroke="#94A3B8"
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ paddingTop: 20 }}
                iconType="circle"
              />
              <Line
                type="monotone"
                dataKey="briquette"
                name="Briquette"
                stroke={chartColors.briquette}
                strokeWidth={2}
                dot={{ fill: chartColors.briquette, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
                animationDuration={1500}
              />
              <Line
                type="monotone"
                dataKey="biochar"
                name="Biochar"
                stroke={chartColors.biochar}
                strokeWidth={2}
                dot={{ fill: chartColors.biochar, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
                animationDuration={1500}
              />
              <Line
                type="monotone"
                dataKey="sawdust"
                name="Sawdust"
                stroke={chartColors.sawdust}
                strokeWidth={2}
                dot={{ fill: chartColors.sawdust, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
                animationDuration={1500}
              />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'composed':
        return (
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11, fill: '#64748B' }}
                tickMargin={10}
                stroke="#94A3B8"
              />
              <YAxis
                tick={{ fontSize: 11, fill: '#64748B' }}
                stroke="#94A3B8"
                yAxisId="left"
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: 20 }} iconType="circle" />
              <Bar
                dataKey="input"
                name="Raw Material Input"
                fill={chartColors.input}
                radius={[4, 4, 0, 0]}
                yAxisId="left"
                animationDuration={1500}
              />
              <Line
                type="monotone"
                dataKey="briquette"
                name="Briquette Output"
                stroke={chartColors.briquette}
                strokeWidth={2}
                dot={{ fill: chartColors.briquette, strokeWidth: 2, r: 4 }}
                yAxisId="left"
                animationDuration={1500}
              />
            </ComposedChart>
          </ResponsiveContainer>
        );

      case 'bar':
      default:
        return (
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11, fill: '#64748B' }}
                tickMargin={10}
                stroke="#94A3B8"
              />
              <YAxis
                tick={{ fontSize: 11, fill: '#64748B' }}
                stroke="#94A3B8"
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: 20 }} iconType="circle" />
              <Bar
                dataKey="briquette"
                name="Briquette"
                fill={chartColors.briquette}
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              />
              <Bar
                dataKey="biochar"
                name="Biochar"
                fill={chartColors.biochar}
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              />
              <Bar
                dataKey="sawdust"
                name="Sawdust"
                fill={chartColors.sawdust}
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="p-5 border border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">{title}</h3>
        {renderChart()}
      </Card>
    </motion.div>
  );
}

export default ProductionChart;
