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
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
  constructor( firstName:string, lastName: string,email: string, profile: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.profile = profile;
  }
}


