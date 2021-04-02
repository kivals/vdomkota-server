import * as dotenv from 'dotenv';
import * as joi from '@hapi/joi';
import * as fs from 'fs';

type EnvConfig = {
  [key: string]: string;
};

/**
 * Config service
 */
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(envPath: string) {
    const config = dotenv.parse(fs.readFileSync(envPath));
    this.envConfig = ConfigService.validateInput(config);
  }

  /**
   * Ensures all needed variables are set and returns the validated JS object
   * @param {EnvConfig} config the configuration object with variables from the conf file
   * @return {EnvConfig} a validated env configuration object
   */
  private static validateInput(config: EnvConfig): EnvConfig {
    /**
     * A schema to validate envConfig against
     */
    const envSchema = joi.object({
      APP_ENV: joi.string().valid('dev', 'prod').default('dev'),
      APP_PORT: joi.number().default(3000),
    });

    const { value: validatedEnvConfig, error } = envSchema.validate(config);
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  /**
   * Get the key from the config file
   * @param {string} key
   * @return {string} the associated value for a given key
   */
  get(key: string): string {
    return this.envConfig[key];
  }
}
