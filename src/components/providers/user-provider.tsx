"use client";

import { useUser } from '@/hooks/use-user';
import { createContext, useContext, ReactNode } from 'react';

type User = {
  displayName: string;
  email: string;
  photoURL: string;
};

type UserContextType = {
  user: User | null;
  loading: boolean;
  login: (user: User) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const { user, loading, login, logout } = useUser();

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}
