
export interface Users {
  id: number;
  name: string;
  surname: string;
  email: string;
}

export interface LoginUser {
  utente: Users;
  token: string;
}
