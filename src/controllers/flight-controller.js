const {FlightService}=require('../services/index')

const flightService=new FlightService();

const create=async(req,res)=>{
    try {
        let flightRequestData={
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            departureTime:req.body.departureTime,    
            price:req.body.price
        }
        const flight=await flightService.createFlight(req.body);
        return res.status(201).json({
        data:flight,
        success:true,
        message:"successfully created all city",
        err:{}
    });
    } catch (error) {
        console.log(error);
    return res.status(500).json({
        data:{},
        success:false,
        message:"not able to create a flight",
        err:error
    })
    }
}

    const getAll=async(req,res)=>{
        try {
            const response=await flightService.getAllFlightData(req.query)
            return res.status(200).json({
        data:response,
        success:true,
        message:"successfull fetches all city",
        err:{}
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
        data:{},
        success:false,
        message:"not able to fetch all the flight",
        err:error
    })
        }
    }
    


 module.exports = {
     create,
     getAll
     
 };