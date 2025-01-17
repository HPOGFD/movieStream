import { DataTypes, Model } from 'sequelize';
export class Movie extends Model {
}
export function MovieStream(sequelize) {
    Movie.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'movies',
        sequelize,
    });
    return Movie;
}
