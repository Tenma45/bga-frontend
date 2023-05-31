import { User } from './user.model.ts'

export interface Room {
  id: string;
  name: string;
  capacity: number;
  users: User[];
}