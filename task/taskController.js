const Task = require('./taskModel'); 

exports.getTask = async (req, res, next) => {
    try {
        const task = await Task.find();

        return res.status(201).json({
            success: true,
            count: task.length,
            data: task
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.addTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);

        return res.status(201).json({
            success: true,
            data: task
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
} 


exports.deleteTask = async (req, res, next) => {
    try {
        const taskId = req.params.taskId; // Λαμβάνει το ID του task από το request parameters

        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (deletedTask) {
            return res.status(200).json({
                success: true,
                data: deletedTask,
                message: 'Task deleted successfully'
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


