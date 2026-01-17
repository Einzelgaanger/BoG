import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: number;
  icon?: LucideIcon;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  animate?: boolean;
  numericValue?: number;
}

export function StatCard({ 
  title, 
  value, 
  subtitle, 
  change, 
  icon: Icon, 
  variant = 'default',
  animate = false,
  numericValue 
}: StatCardProps) {
  const animatedValue = useAnimatedCounter(numericValue || 0, 1200);
  
  const variantStyles = {
    default: 'border-l-4 border-l-primary',
    success: 'border-l-4 border-l-success',
    warning: 'border-l-4 border-l-warning',
    danger: 'border-l-4 border-l-destructive',
  };

  const iconBgStyles = {
    default: 'bg-primary/10',
    success: 'bg-success/10',
    warning: 'bg-warning/10',
    danger: 'bg-destructive/10',
  };

  const iconColorStyles = {
    default: 'text-primary',
    success: 'text-success',
    warning: 'text-warning',
    danger: 'text-destructive',
  };

  return (
    <div className={cn(
      'stat-card group transition-all duration-300',
      variantStyles[variant],
      'hover:shadow-lg hover:-translate-y-0.5'
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="stat-label">{title}</p>
          <p className="stat-value tracking-tight">
            {animate && numericValue ? `$${animatedValue.toLocaleString()}` : value}
          </p>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {Icon && (
          <div className={cn(
            'w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110',
            iconBgStyles[variant]
          )}>
            <Icon className={cn('w-5 h-5', iconColorStyles[variant])} />
          </div>
        )}
      </div>
      {change !== undefined && (
        <div className={cn(
          'mt-3 flex items-center gap-1',
          change >= 0 ? 'stat-change-positive' : 'stat-change-negative'
        )}>
          {change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span>{Math.abs(change)}% vs last period</span>
        </div>
      )}
    </div>
  );
}
