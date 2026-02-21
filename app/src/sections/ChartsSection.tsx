import { ProductionChart } from '@/components/ProductionChart';
import type { ChartDataPoint } from '@/types/production';

interface ChartsSectionProps {
  data: ChartDataPoint[];
}

export function ChartsSection({ data }: ChartsSectionProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ProductionChart
        data={data}
        type="line"
        title="Production Trends"
      />
      <ProductionChart
        data={data}
        type="composed"
        title="Briquette Input vs Output"
      />
    </section>
  );
}

export default ChartsSection;
