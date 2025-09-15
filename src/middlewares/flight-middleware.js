const validateCreateFlight=(req,res,next)=>{
    if(
        !req.body,flightNumer||
        !req.body.airplaneId ||
        !req.body.departureAirportId||
        !req.body.arrivalAirportId||
        !req.body.departureTime||
        !req.body.price
    )
    {
    return res.status(400).json({
        data:{},
        success:false,
        message:'Invalid request body for create flight',
        err:'Missing mandatory properties to create a flight'
    });
    }
    next();
}

module.exports={
    validateCreateFlight
}