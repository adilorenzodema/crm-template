import { User } from "./class";


export interface Menu {
  id: number;
  code: string;
  name: string;
  route: string;
  icon: string;
}

export interface UserPermission {
  utente: User;
  token: string;
  menu: Menu[];
}

export interface UserProfile{
  profileCode: string ;
  profileDescription: string;
}
