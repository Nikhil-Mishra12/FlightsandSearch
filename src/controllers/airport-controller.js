const {  AirportService }=require('../services/index')

const airportService=new AirportService();

 const create=async(req,res)=>{
     try {
         const airport=await airportService.create(req.body);
         return res.status(201).json({
            data:airport,
            success:true,
             message:"successfully created a airport",
             err:{}
         })
        
     }
     catch(error){
     console.log(error);
     return res.status(500).json({
         data:{},
         success:false,
         message:"not able to create a flight",
         err:error
     })
     }
 }

 module.exports = {
     create
     };