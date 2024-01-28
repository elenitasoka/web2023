const Announcement= require('./announcementModel')

exports.getAnnouncement=async(req,res,next)=>{

    try {
        const announcement= await Announcement.find();

        return res.status(200).json({
            success:true,
            count:announcement.length,
            data:announcement
        })


    } catch (error) {
        console.log(error);

        
    }
}

exports.AddAnnouncement=async(req,res,next)=>{

    try {
        const announcement=await Announcement.create(req.body);

        return res.status(201).json({
            success:true,
            data:announcement
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({erros:'Error'})
        
        
    }
}