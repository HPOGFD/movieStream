

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


