const Database = require('./databaseModel');  // Assuming your model file is in the same directory

exports.getDatabase = async (req, res, next) => {
    try {
        const database = await Database.find();
        return res.status(200).json({
            success: true,
            count: database.length,
            data: database
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.AddDatabase = async (req, res, next) => {
    try {
        const database = await Database.create(req.body);
        return res.status(201).json({
            success: true,
            data: database
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};