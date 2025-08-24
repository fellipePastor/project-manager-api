import { IUser } from '../interfaces/user.interface';

export class UserEntity implements IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  projects = [];
  tasks = [];
}
