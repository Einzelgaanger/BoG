import { FileUp, Search, Download, AlertTriangle, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function QuickActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus size={16} />
          Quick Actions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 py-2">
          <FileUp size={16} className="text-muted-foreground" />
          <span>Upload New Submission</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 py-2">
          <Search size={16} className="text-muted-foreground" />
          <span>Search Transactions</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 py-2">
          <AlertTriangle size={16} className="text-muted-foreground" />
          <span>View Exceptions</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 py-2">
          <Download size={16} className="text-muted-foreground" />
          <span>Export Current View</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
