module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Mysql321!",
    DB: "mydatabase1",
    dialect: "mysql",
    pool: {
      max: 5,  //maximum number of connection in pool
      min: 0,  
      acquire: 30000,   // time in milliseconds before idle connection released.
      idle: 10000    
    }
  };