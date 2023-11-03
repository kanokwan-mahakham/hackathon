const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'hackathon', // Database name
    'postgres', // Username
    // '1674977150',
    'patty0984686684',
    {
      host: 'localhost', // Connect to your local database
      dialect: 'postgres',// Tell sequelize to use Postgres
    // port:5433
    }
  );

  async function connect() {
    try{
        await sequelize.authenticate();
        console.log(
            'connection successfully'
        )
    } catch(error) {
        console.error(
            'unable to connect',error
        )
    }
  }

  async function sync() {
    try{
        await sequelize.sync();
        console.log(
            'connection successfully'
        )
    } catch(error) {
        console.error(
            'unable to connect',error
        )
    }
  }



module.exports = { sequelize, connect, sync };