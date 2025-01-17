import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

// Define the attibutes for Movie
interface MovieAttributes {
    id: number;
    title: string;
    genre: string;
    rating: number;
}

// Optional attributes when creating a new Movie entry
interface MovieCreationAttributes extends Optional<MovieAttributes, 'id'> {}

export class Movie extends Model<MovieAttributes, MovieCreationAttributes> implements MovieAttributes {
    public id!: number;
    public title!: string;
    public genre!: string;
    public rating!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
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


