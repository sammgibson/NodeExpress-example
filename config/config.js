module.exports ={
  "development": {
    "username": "express-mvp-dbuser",
    "password": Splinyer7,
    "database": "express-mvp-development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
    "port":5432
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}