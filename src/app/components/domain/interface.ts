import { User } from "./class";


export interface Menu {
  id: number;
  code: string;
  name: string;
  route: string;
  icon: string;
}

export interface UserPermission {
  user: User;
  token: string;
  refreshToken: string;
  menu: Menu[];
}

export interface UserProfile {
  profileCode: string;
  profileName: string;
}

export type Code = 'delete-user' | 'edit-user' | 'insert-user' | 'view-user';
export interface Operations {
  code: Code;
  description: string;
  value: boolean;
}
export interface Permissions {
  menuItemKey: string;
  operations: Operations[];
}
