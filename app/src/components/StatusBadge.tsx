import { Badge } from '@/components/ui/badge';
import { getStatusColor, getStatusLabel } from '@/lib/dataProcessor';

interface StatusBadgeProps {
  status: string;
  size?: 'sm' | 'md';
}

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const sizeClasses = {
    sm: 'text-[10px] px-1.5 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  return (
    <Badge
      variant="outline"
      className={`${getStatusColor(status)} ${sizeClasses[size]} font-medium capitalize`}
    >
      {getStatusLabel(status)}
    </Badge>
  );
}

export default StatusBadge;
