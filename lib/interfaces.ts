export interface SessionUsersDataInterface {
  id: number;
  username: string;
  number_of_pomodoro: number | null;
  time_of_pomodoro: number | null;
  last_pomodoro: Date | null;
  region: string;
}
