const Vehicles = require('./vehiclesModel');  

exports.getVehicles = async (req, res, next) => {
    try {
        const vehicles = await Vehicles.find();
        return res.status(200).json({
            success: true,
            count: vehicles.length,
            data: vehicles
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.AddVehicle = async (req, res, next) => {
    try {
        const vehicle = await Vehicles.create(req.body);
        return res.status(201).json({
            success: true,
            data: vehicle
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};