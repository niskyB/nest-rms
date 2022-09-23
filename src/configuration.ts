import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
const YAML_CONFIG = `config.${process.env.NODE_ENV}.yaml`;

export default () => {
    return yaml.load(readFileSync(join('config/', YAML_CONFIG), 'utf8')) as Record<string, any>;
};
