import { firstValueFrom, from } from 'rxjs';
import { ConfigFile, ConfigInitService } from './config-init.service';

export function initializeConfig(configService: ConfigInitService): () => Promise<any> {
  return () => firstValueFrom(configService.getConfig());
}

export function getPropertyFromConfig(key: keyof ConfigFile, configService: ConfigInitService): string {
  return configService.getConfigValue(key);
}
