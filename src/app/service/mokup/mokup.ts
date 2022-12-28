import { User } from "src/app/components/domain/class";
import { UserPermission } from "src/app/components/domain/interface";


export const loginUser: UserPermission = {
  utente: {
    id: 4,
    name: "Niccolò",
    surname: "Arnetoli",
    email: "n.arnetoli@dema-engineering.it"
  },
  // eslint-disable-next-line max-len
  token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaWF0IjoxNjcyMTU0OTUwLCJleHAiOjE2NzIyNDEzNTB9.OB0ydiXyigM98SubPhbtqXQU1nCZqw4ae2CX5qjT9Zrgm6x_ZYSi40EReISFqQKnRkxSRYv06c25EG0TxIlxug",
  menu: [
    {
      "id": 1,
      "key": "dashboard",
      "name": "Dashboard",
      "route": "dashboard",
      "icon": "home"
    },
    {
      "id": 3,
      "key": "userManagement",
      "name": "Gestione Utenti",
      "route": "user-management",
      "icon": "manage_accounts"
    }
  ]
};

export const  userMokup: User[] = [
  {
    name: "Giacomo",
    surname: "Quaresima",
    email:"giacomo@gmail.com"
  },
  {
    name: "Niccolò",
    surname: "Arnetoli",
    email:"niccolo@gmail.com"
  },
  {
    name: "Farnoosh",
    surname: "Mohammadi",
    email:"farnoosh@gmail.com"
  },
  {
    name: "Andrea",
    surname: "Di Lorenzo",
    email:"andrea@gmail.com"
  }
];

