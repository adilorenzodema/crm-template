
export interface Users {
  id: number;
  name: string;
  surname: string;
  email: string;
}

export interface Menu {
  id: number;
  key: string;
  name: string;
  route: string;
  icon: string;
}

export interface UserPermission {
  utente: Users;
  token: string;
  menu: Menu[];
}
