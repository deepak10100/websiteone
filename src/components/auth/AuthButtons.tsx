"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LayoutDashboard, LogOut, Settings, User } from 'lucide-react';
import { useUserContext } from '@/components/providers/user-provider';
import { useRouter } from 'next/navigation';
import { Skeleton } from '../ui/skeleton';


export function AuthButtons() {
  const { user, loading, logout } = useUserContext();
  const router = useRouter();

  const handleSignOut = () => {
    logout();
    router.push('/');
  }

  if (loading) {
    return <Skeleton className="h-9 w-9 rounded-full" />;
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-9 w-9 rounded-full">
            <Avatar className="h-9 w-9">
              <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} data-ai-hint="user avatar" />
              <AvatarFallback>{user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.displayName || 'User'}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard"><LayoutDashboard className="mr-2 h-4 w-4" />Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/profile"><User className="mr-2 h-4 w-4" />Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings"><Settings className="mr-2 h-4 w-4" />Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" asChild>
        <Link href="/auth/login">Log In</Link>
      </Button>
      <Button asChild>
        <Link href="/auth/register">Sign Up</Link>
      </Button>
    </div>
  );
}
