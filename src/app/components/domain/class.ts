export class LoginUser {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export class Users {
  id: number;
  name: string;
  surname: string;
  email: string;
  constructor(id:number, name:string, surname: string,email: string ){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
  }
}
