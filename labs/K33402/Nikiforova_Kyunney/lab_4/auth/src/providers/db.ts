import { Sequelize } from "sequelize-typescript"
import dotenv from "dotenv"
import User from "../models/users/User"

dotenv.config()

const sequelize = new Sequelize({
    database: 'some_db',
    dialect: 'sqlite',
    storage: 'dbAuth.sqlite',
    logging: console.log,
})

const models = [User]
sequelize.addModels(models)

sequelize
  .sync()
  .then(() => {
     //something here
     console.log('Synced models')
  })
  .catch((e) => console.log(e));

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        throw new Error('Unable to connect to the database');
    }
}

testConnection()

export default sequelize