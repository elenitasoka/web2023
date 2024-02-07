const Offers=require('./offersmodel')

exports.getOffers=async(req,res,next)=>{

    try {
        const offers= await Offers.find();

        return res.status(201).json({
            success:true,
            count:offers.length,
            data:offers
        })


    } catch (error) {
        console.log(err);

        
    }
}

exports.AddOffers=async(req,res,next)=>{

    try {
        const offers=await Offers.create(req.body);

        return res.status(201).json({
            success:true,
            data:offers
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({erros:'Error'})
        
        
    }
}

exports.getLatestOffer = async (req, res, next) => {
    try {
      const latestOffer = await Offers.findOne().sort({ OfferID: -1 }).limit(1);
      console.log("ID",latestOffer);
      return res.status(200).json({
        success: true,
        data: latestOffer
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error' });
    }
  }