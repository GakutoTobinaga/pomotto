'use server';
import { headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const supabase = createClient();

export const getSesson = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
};
export const getSessionId = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    console.log(user.id);
    return user.id;
  } else {
    return null;
  }
};
export const getSessionUsername = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    console.log(user.user_metadata.username);
    return user.user_metadata.username;
  } else {
    return null;
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

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  console.log(error);
  return error;
};

export const listner = () => {
  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);

    if (event === 'INITIAL_SESSION') {
      // handle initial session
    } else if (event === 'SIGNED_IN') {
      console.log('listner signin');
      // handle sign in event
    } else if (event === 'SIGNED_OUT') {
      console.log('listner logout');
      // handle sign out event
    } else if (event === 'PASSWORD_RECOVERY') {
      // handle password recovery event
    } else if (event === 'TOKEN_REFRESHED') {
      // handle token refreshed event
    } else if (event === 'USER_UPDATED') {
      // handle user updated event
    }
  });
  // call unsubscribe to remove the callback
  return () => {
    data.subscription.unsubscribe();
  };
};

export const getUsersData = async () => {
  const userId = await getSessionId();
  const { data, error } = await supabase
    .from('users_metadata')
    .select('*')
    .eq('id', userId);

  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }

  return data;
};

export const playBeepSound = () => {
  const audioContext = new window.AudioContext();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.value = 1000; // 1000Hzのビープ音
  gainNode.gain.value = 0.1; // 音量を下げる
  oscillator.start(audioContext.currentTime); // 今すぐ音を鳴らす
  oscillator.stop(audioContext.currentTime + 0.5); // 0.5秒後に停止
};
