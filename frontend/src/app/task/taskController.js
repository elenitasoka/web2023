var createTaskControllerFn=async(req, res) =>
{
    try
    {
        console.log(req.body);
        var status=await userService.createTaskControllerFn(req.body);
        console.log(status);

        if (status)
        {
            res.send({"status":true, "message": "Task created successfully"});
        }else{
            res.send({"status":false, "message":"Error creating task"});
        }
    } catch(err){
        console.log(err);
    }
}

