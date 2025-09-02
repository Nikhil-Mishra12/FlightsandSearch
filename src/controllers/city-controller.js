const { CityService }=require('../services/index')

const Cityservice=new CityService();

const create =async (req,res)=>{
try {
    const city=await Cityservice.createCity(req.body);
    return res.status(201).json({
        data:city,
        success:true,
        message:"successfully created a city",
        err:{}
    });
} catch (error) {
    console.log(error);
    return res.status(500).json({
        data:{},
        success:false,
        message:"not able to create a city",
        err:error
    })
}
}

const destroy =async (req,res)=>{
    try {
         const response=await Cityservice.deleteCity(req.params.id);
    return res.status(200).json({
        data:response,
        success:true,
        message:"successfully delete a city",
        err:{}
    });
    } catch (error) {
         console.log(error);
    return res.status(500).json({
        data:{},
        success:false,
        message:"not able to delete a city",
        err:error
    })
}
}

const update =async (req,res)=>{
    try {
        const response=await Cityservice.updateCity(req.params.id,req.body);
    return res.status(200).json({
        data:response,
        success:true,
        message:"successfully update a city",
        err:{}
    });
    } catch (error) {
         console.log(error);
    return res.status(500).json({
        data:{},
        success:false,
        message:"not able to update a city",
        err:error
    })
}
}

const get =async (req,res)=>{
    try {
        const response=await Cityservice.getCity(req.params.id);
    return res.status(200).json({
        data:response,
        success:true,
        message:"successfully get a city",
        err:{}
    });
    } catch (error) {
         console.log(error);
    return res.status(500).json({
        data:{},
        success:false,
        message:"not able to get a city",
        err:error
    })
}
}

const getAll =async (req,res)=>{
    try {
        const cities=await Cityservice.getAllcities(req.query);
    return res.status(200).json({
        data:cities,
        success:true,
        message:"successfully fetched all city",
        err:{}
    });
    } catch (error) {
         console.log(error);
    return res.status(500).json({
        data:{},
        success:false,
        message:"not able to get a city",
        err:error
    })
}

}

 module.exports = {
     create,
     destroy,
     update, 
     get,
     getAll
 };
