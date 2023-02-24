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

export interface Operation {
  code: string;
  description: string;
  value: string;
}
export interface Permissions {
  menuItemKey: string;
  operations: Operation[];
}
