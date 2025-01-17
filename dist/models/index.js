import sequelize from '../config/connection.js';
import { MovieStream } from './movies.js';
const movie = MovieStream(sequelize);
export { movie };
