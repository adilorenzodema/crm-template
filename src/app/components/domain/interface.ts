import { User } from "./class";


export interface Menu {
  id: number;
  key: string;
  name: string;
  route: string;
  icon: string;
}

export interface UserPermission {
  utente: User;
  token: string;
  menu: Menu[];
}
