const UsersModel = require('./users.model');

exports.insert = async (req, res) => {
    try {
        await UsersModel.createUser(req.body);
        res.status(201).send();
    } catch (error) {
        res.status(400).send(error); 
    }
    
}

exports.findAllUsers = async (req, res) => {
    try {
        const allUsers = await UsersModel.findAllUsers()
        res.status(200).send(allUsers);
    } catch (error) {
        res.status(400).send(error); 
    }
    
}

exports.findUserById = async (req, res) => {
    try {
        if (!req.params.id) {
            throw new Error(`Missing user Id`);
        }
        const user = await UsersModel.findUserById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error.message);  
    }
}