module.exports = (sequelize, Sequelize) =>  {
    const Users = sequelize.define('users', {
      id: {
          type: Sequelize.STRING,
          primaryKey: true
      },
      created_at: {
          type: Sequelize.DATE,
          allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
     },
     is_archived: {
        type: Sequelize.BOOLEAN
     },
     phone: {
        type: Sequelize.INTEGER,
     },
     postal_code: {
        type: Sequelize.INTEGER,
     },
     email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }  
     },
     address_1: {
        type: Sequelize.STRING,
     },
     city: {
        type: Sequelize.STRING,
     },
     state: {
        type: Sequelize.STRING,
     },
     first_name: {
        type: Sequelize.STRING,
     },
     last_name: {
        type: Sequelize.STRING,
     },
     password: {
        type: Sequelize.STRING,
     }
    });
    return Users;
};