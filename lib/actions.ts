'use server';
import { createClient } from '@/utils/supabase/server';
import { SessionUsersDataInterface } from './interfaces';
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

export const getSessionUsersData =
  async (): Promise<SessionUsersDataInterface | null> => {
    const userId = await getSessionId();
    const { data, error } = await supabase
      .from('users_metadata')
      .select('*')
      .eq('id', userId);

    if (error) {
      console.error('Error fetching data:', error);
      return null;
    }
    return data.length > 0 ? data[0] : null;
  };

export const getUsersPomodoroData = async () => {
  const userId = await getSessionId();
  const { data, error } = await supabase
    .from('users_metadata')
    .select('number_of_pomodoro')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }
  return { data };
};

export const incrementUsersNumberOfPomodoro = async () => {
  const userId = await getSessionId(); // 現在のユーザーIDを取得

  // 現在の number_of_pomodoro の値を取得
  const { data, error: fetchError } = await supabase
    .from('users_metadata')
    .select('number_of_pomodoro')
    .eq('id', userId)
    .single();

  if (fetchError) {
    console.error('Error fetching data:', fetchError);
    return null;
  }

  // number_of_pomodoro の値に 1 を加える
  const newNumberOfPomodoro = data.number_of_pomodoro + 1;

  // 更新された値で number_of_pomodoro を更新
  const { error: updateError } = await supabase
    .from('users_metadata')
    .update({ number_of_pomodoro: newNumberOfPomodoro })
    .eq('id', userId);

  if (updateError) {
    console.error('Error updating data:', updateError);
    return null;
  }

  // 更新が成功した場合、新しい number_of_pomodoro の値を返す
  return newNumberOfPomodoro;
};

export const addUsersLasttimePomodoro = async () => {
  const userId = await getSessionId();
  const now = new Date();
  const { error: updateError } = await supabase
    .from('users_metadata')
    .update({ last_pomodoro: now })
    .eq('id', userId);
  if (updateError) {
    console.error('Error updating data:', updateError);
    return false;
  }
  return true;
};

export const setUsersTimeOfPomodoro = async () => {
  const userId = await getSessionId();
  const { data, error: fetchError } = await supabase
    .from('users_metadata')
    .select('number_of_pomodoro')
    .eq('id', userId)
    .single();

  if (fetchError) {
    console.error('Error fetching data:', fetchError);
    return null;
  }
  const usersTimeOfPomodoro = data.number_of_pomodoro * 25;
  const { error: updateError } = await supabase
    .from('users_metadata')
    .update({ time_of_pomodoro: usersTimeOfPomodoro })
    .eq('id', userId);

  if (updateError) {
    console.error('Error updating data:', updateError);
    return false;
  }
  return true;
};
interface Country {
  name: {
    common: string;
  };
}
export const getAllCountries = async (): Promise<string[]> => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries: Country[] = await response.json();
    const countryNames = countries.map((country) => country.name.common);
    return countryNames;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
