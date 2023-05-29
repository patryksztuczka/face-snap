import { createContext, useContext, useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { useRouter, useSegments } from 'expo-router';

import { IAuthContext, IAuthProvider } from './AuthContext.types';
import { supabase } from '../../supabaseClient';
import { navigationRoutes } from '../../constants';

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [session, setSession] = useState<Session | null | undefined>(undefined);

  function useProtectedRoute(session: Session | null | undefined) {
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
      const inAuthGroup = segments[0] === '(auth)';

      if (!session && !inAuthGroup) {
        router.replace(navigationRoutes.welcome);
      } else if (session && inAuthGroup) {
        router.replace(navigationRoutes.home);
      }
    }, [session, segments]);
  }

  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) throw error;
      setSession(session);
    };

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });

    setData();

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const value = { session };

  useProtectedRoute(session);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
