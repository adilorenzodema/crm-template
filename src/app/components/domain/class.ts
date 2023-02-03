import { TranslateService } from "@ngx-translate/core";

export class User {
  userId?: number;
  firstName: string;
  lastName: string;
  email: string;
  profileCode: string;

  constructor(firstName: string, lastName: string, email: string, profileCode: string, userId?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.profileCode = profileCode;
    if (userId) this.userId = userId;
  }
}

export class Language {
  selectLanguage!: string;
  translateLanguage: string[] = [];

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('it');
    translate.addLangs(['it', 'en']);
    translate.use('it');
    this.getTranslateLanguage();
  }

  setTranslateLanguage(): void {
    this.translate.use(this.selectLanguage);
  }
  getTranslateLanguage(): void {
    this.translateLanguage = this.translate.getLangs();
  }

}


