const city = require('../models/city')
const {CityRepository} =require('../repositry/index')

class CityService{
    constructor(){
        this.CityRepository=new CityRepository();
    }

    async createCity(data){
    try {
        const city=await this.CityRepository.createcity(data);
        return city;
    } catch (error) {
        console.log("Something wentwrong in service layer");
        throw(error)
    }
    }

    async deleteCity(cityId){
   try {
    const response= await this.CityRepository.deleCity(cityId);
    return response;
   } catch (error) {
    console.log("Something wentwrong in service layer");
        throw(error)
   }
    }

    async updateCity(cityId,data){
   try {
    const city=await this.CityRepository.updateCity(cityId,data)
    return city;
   } catch (error) {
    console.log("Something wentwrong in service layer");
        throw(error)
   }
    }

    async getcity(cityId){
   try {
    const city =await this.CityRepository.getCity(cityId)
    return city;
   } catch (error) {
    console.log("Something wentwrong in service layer");
        throw(error)
   }
    }
}
module.exports=CityService;