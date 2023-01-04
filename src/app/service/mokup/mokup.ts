import { User } from "src/app/components/domain/class";
import { UserPermission } from "src/app/components/domain/interface";


export const loginUser: UserPermission = {
  utente: {
    id: 4,
    firstName: "Niccolò",
    lastName: "Arnetoli",
    email: "n.arnetoli@dema-engineering.it",
    profile: ""
  },
  // eslint-disable-next-line max-len
  token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaWF0IjoxNjcyMTU0OTUwLCJleHAiOjE2NzIyNDEzNTB9.OB0ydiXyigM98SubPhbtqXQU1nCZqw4ae2CX5qjT9Zrgm6x_ZYSi40EReISFqQKnRkxSRYv06c25EG0TxIlxug",
  menu: [
    {
      "id": 1,
      "code": "dashboard",
      "name": "Dashboard",
      "route": "dashboard",
      "icon": "home"
    },
    {
      "id": 3,
      "code": "userManagement",
      "name": "Gestione Utenti",
      "route": "user-management",
      "icon": "manage_accounts"
    }
  ]
};
/*
export const  userMokup: User[] = [
  {
    id: 1,
    name: "Giacomo",
    surname: "Quaresima",
    email:"giacomo@gmail.com"
  },
  {
    id: 2,
    name: "Niccolò",
    surname: "Arnetoli",
    email:"niccolo@gmail.com"
  },
  {
    id:3,
    name: "Farnoosh",
    surname: "Mohammadi",
    email:"farnoosh@gmail.com"
  },
  {
    id:4,
    name: "Andrea",
    surname: "Di Lorenzo",
    email:"andrea@gmail.com"
  }
];

 */
