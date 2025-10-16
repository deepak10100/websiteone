import Link from 'next/link';
import { Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-bold font-headline tracking-tighter", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Flame className="h-5 w-5" />
      </div>
      <span>Fireflow</span>
    </Link>
  );
}
