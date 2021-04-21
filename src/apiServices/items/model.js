module.exports = (sequelize, DataTypes) =>  {
    const Users = sequelize.define('users', {
      id: {
          type: DataTypes.UUID,
          primaryKey: true
      },
      created_at: {
          type: DataTypes.DATE,
          allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
     },
     is_archived: {
        type: DataTypes.BOOLEAN
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
     address: {
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

     }
    });
    return Users;
};