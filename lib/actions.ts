'use server';
import { headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const supabase = createClient();

export const getSesson = async() => {
  const {data: { session }} = await supabase.auth.getSession()
  console.log(session)
  redirect("/")
}

export const getSessionUsername = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  if (user) {
    console.log(user.user_metadata.username)
    return user.user_metadata.username
  } else {
    return null
  }
};

export const signUp = async (
  username: string,
  email: string,
  password: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username,
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

export const signOut = async() => {
  const { error } = await supabase.auth.signOut()
  console.log(error)
}