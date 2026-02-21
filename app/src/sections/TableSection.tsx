import { ProductionTable } from '@/components/ProductionTable';

interface TableSectionProps {
  data: Array<{
    date: string;
    type: string;
    rawMaterial: string;
    input: number | null;
    output: number | null;
    efficiency: number | null;
    status: string;
  }>;
}

export function TableSection({ data }: TableSectionProps) {
  return (
    <section>
      <ProductionTable data={data} />
    </section>
  );
}

export default TableSection;
