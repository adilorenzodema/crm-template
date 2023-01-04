export class LoginUser {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export class User {
  id?: number;
  name: string;
  surname: string;
  email: string;
  profile: string;
  constructor( name:string, surname: string,email: string, profile: string){
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.profile = profile;
  }
}


