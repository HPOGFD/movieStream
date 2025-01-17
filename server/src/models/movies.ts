import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define the attibutes for Movie
interface MovieAttributes {
    id: number;
    title: string;
    genre: string;
    rating: number;
}

export function MovieStream(sequelize: Sequelize): typeof Movie {
    MovieStream.init(
        {
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
        },
        {
            tableName : 'movies',
            sequelize,
        }
    );
    return MovieStream;
}


