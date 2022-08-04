import { config } from 'dotenv';
import * as fs from 'fs';

export class Environment {
  private static missingKeys: string[] = [];

  static load(envPath: string) {
    console.log(`[super-env] Current environment: ${process.env.NODE_ENV}`);

    if (fs.existsSync(envPath)) {
      config({ path: envPath });
    } else {
      console.log(`[super-env] ${envPath}`);
      console.log('[super-env] Not found, load by environment variables');
    }
  }

  /**
 * Adiciona nome da chave de var de ambiente a ser validada.
 * @param key Nome da var de ambiente após `process.env`, ex: `NODE_ENV`
 * @param value Valor padrão
 * @param required é requerido ?
 * @param descripton Descrição da var de ambiente
 */
  static add<T = string>({ key, value = '', required = true }: AddEnv) {
    if ((process.env[key] === undefined || process.env[key] === '') && value === '' && required) {
      this.missingKeys.push(key);
    }
    return (process.env[key] || value) as T;
  }

  /**
 * Esse método faz a validação das vars de ambiente
 * Caso alguma falta, será setada uma var em MISSING_ENVS contendo os valores
 */
  static check() {
    if (this.missingKeys.length > 0) {
      console.error('[super-env] Missing environment variables:');

      for (const tag of this.missingKeys) {
        console.error(`[super-env]\x1b[32m- ${tag}`);
      }

      process.exit(1);
    }
  }

}

interface AddEnv { key: string; value?: any; required?: boolean; }