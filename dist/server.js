import express from 'express';
// import the connection object
import sequelize from './config/connection.js';
// initialize express
const app = express();
const PORT = process.env.PORT || 3001;
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
    console.log(`Connected to database successfully.`);
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});
