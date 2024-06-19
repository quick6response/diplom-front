import { User } from '@/shared/user';

export interface AuthData {
  login: string;
  password: string;
}

export interface AuthLoginResponse {
  // todo неверный тип
  assessToken: string;
  // todo неверный тип
  refreshToken: string;
  user: {
    id: User['id'];
    firstName: User['firstName'];
    lastName: User['lastName'];
    middleName: User['middleName'];
    role: User['role'];
  };
}
