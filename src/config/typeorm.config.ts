import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import DbConfig from '../database/database.config';
dotenv.config(); // very very important!!
const typeormConfig = DbConfig() as ConnectionOptions;
export default typeormConfig;
