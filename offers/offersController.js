const Offers=require('./offersmodel')
const mongoose = require('mongoose');

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


  exports.deleteByOfferID = async (req, res) => {
    const {ID} = req.params; // Get the OfferID parameter from request params
    console.log("yo",ID);
    try {
        // Find the document by OfferID and delete it
        const deletedOffer = await Offers.findOneAndDelete({OfferID: ID });
        console.log(Offers.OfferID);
        // If the offer was not found, return a 404 response
        if (!deletedOffer) {
            return res.status(404).json({ message: 'Offer not found' });
        }

        // If deletion was successful, return a success message
        return res.status(200).json({ message: 'Offer deleted successfully', deletedOffer });
    } catch (error) {
        // If an error occurs, return a 500 response with the error message
        return res.status(500).json({ message: error.message });
    }
};