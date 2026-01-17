interface RAGIndicatorProps {
  high: number;
  medium: number;
  low: number;
}

export function RAGIndicator({ high, medium, low }: RAGIndicatorProps) {
  const total = high + medium + low;
  const highPercent = (high / total) * 100;
  const mediumPercent = (medium / total) * 100;
  const lowPercent = (low / total) * 100;
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
          <span className="font-semibold">{high} High</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-warning" />
          <span className="font-semibold">{medium} Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-success" />
          <span className="font-semibold">{low} Low</span>
        </div>
      </div>
      
      <div className="flex h-4 rounded-full overflow-hidden shadow-inner bg-muted/30">
        <div 
          className="bg-gradient-to-r from-destructive to-destructive/80 transition-all duration-700 ease-out flex items-center justify-center"
          style={{ width: `${highPercent}%` }}
        >
          {highPercent > 15 && <span className="text-[10px] font-bold text-destructive-foreground">{high}</span>}
        </div>
        <div 
          className="bg-gradient-to-r from-warning to-warning/80 transition-all duration-700 ease-out delay-100 flex items-center justify-center"
          style={{ width: `${mediumPercent}%` }}
        >
          {mediumPercent > 15 && <span className="text-[10px] font-bold text-warning-foreground">{medium}</span>}
        </div>
        <div 
          className="bg-gradient-to-r from-success to-success/80 transition-all duration-700 ease-out delay-200 flex items-center justify-center"
          style={{ width: `${lowPercent}%` }}
        >
          {lowPercent > 15 && <span className="text-[10px] font-bold text-success-foreground">{low}</span>}
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground">
        {total} total exceptions requiring attention
      </p>
    </div>
  );
}