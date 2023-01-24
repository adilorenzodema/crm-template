import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

export interface ConfigFile {
  beUrl: string;
  be_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigInitService {

  public config!: ConfigFile;

  constructor(
    private httpClient: HttpClient,
    @Inject('env') private environment: any) { }

  public getConfig(): Observable<ConfigFile | null> {
    return this.httpClient.get<ConfigFile | null>(this.getConfigFile(), { observe: 'response' })
      .pipe(
        catchError((error) => {
          console.log(error);
          return of(null);
        }),
        mergeMap((response) => {
          if (response && response.body) {
            this.config = (response.body as ConfigFile);
            return of(this.config);
          } else {
            return of(null);
          }
        }));
  }

  public getConfigValue(key: keyof ConfigFile): any {
    return this.config[key];
  }

  private getConfigFile(): string {
    return this.environment.configFile;
  }
}
