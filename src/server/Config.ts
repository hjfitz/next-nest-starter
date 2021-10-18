export class ConfigError extends Error {}

export default class Config {
  get(variable: string): string {
    const val = process.env[variable];
    if (!val) {
      throw new ConfigError(`Unable to find ${variable}`);
    } else {
      return val;
    }
  }
}
