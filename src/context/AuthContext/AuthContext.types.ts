import { Session } from '@supabase/supabase-js';

export interface IAuthProvider {
  children: JSX.Element;
}

export interface IAuthContext {
  session: Session | undefined | null;
}
