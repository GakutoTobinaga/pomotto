"use client"
import React, { createContext, useContext, ReactNode, useState } from 'react';

type PomodoroContextType = {
  usersPomodoro: number;
  setUsersPomodoro: React.Dispatch<React.SetStateAction<number>>;
};

const PomodoroContext = createContext<PomodoroContextType | undefined>(undefined);

export const PomodoroProvider = ({ children }: { children: ReactNode }) => {
  const [usersPomodoro, setUsersPomodoro ] = useState<number>(0);

  return (
    <PomodoroContext.Provider value={{ usersPomodoro, setUsersPomodoro }}>
      {children}
    </PomodoroContext.Provider>
  );
};

export const usePomodoro = () => {
  const context = useContext(PomodoroContext);
  if (context === undefined) {
    throw new Error('usePomodoro must be used within an PomodoroProvider');
  }
  return context;
};
