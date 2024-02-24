'use server';
import { headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const supabase = createClient();

export const signUp = async (username: string, email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username:  username,
      },
    },
  });

  if (error) {
    return false;
  }
  return true;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return false;
  }
  return true;
};
