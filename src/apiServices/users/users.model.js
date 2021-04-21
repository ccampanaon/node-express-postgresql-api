const UUID = require('uuid');
const bcrypt = require('bcrypt');
const { customAlphabet } = require('nanoid');



const db = require('../../config/connection');
const Users = db.users

exports.createUser = async (userData) => {
    try {
        const nanoid = customAlphabet('1234567890abcdef', 24);
        userData.id = nanoid() //=> "4f90d13a42"
        userData.created_at = new Date();
        userData.updated_at = new Date();
        const userPassword = await bcrypt.hash(userData.password, 10);
        userData.password = userPassword;
        return await Users.create(userData);
    } catch (error) {
        throw new Error(error);
    }
};

exports.findAllUsers = async () => {
    try {
        const allUsers = await Users.findAll();
        return allUsers;
    } catch (e) {
        throw new Error(e);
    }
};

exports.findUserById = async (userId) => {
    try {
        const user = await Users.findByPk(userId);
        if (!user) {
            throw new Error(`User not found`);
        }
        return user;
    } catch (e) {
        throw new Error(e);
    }
};
