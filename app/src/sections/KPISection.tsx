import { KPICard } from '@/components/KPICard';
import type { KPIData } from '@/types/production';

interface KPISectionProps {
  data: KPIData[];
}

export function KPISection({ data }: KPISectionProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((kpi, index) => (
        <KPICard key={kpi.title} data={kpi} index={index} />
      ))}
    </section>
  );
}

export default KPISection;
