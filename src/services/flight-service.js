const {FlightRepository,AirplaneRepository}=require('../repository/index')
const {compareTime}=require('../utlis/helper');

class FlightService{

constructor(){
             this.airplaneRepository=new AirplaneRepository()
             this.flightRepository=new FlightRepository()

        }

    async createFlight(data){
        if(!compareTime(data.arrivalTime,data.departureTime)){
            throw{error:"arrival time cannnot less to departure time "}
        }
            try {
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId)
            const flight=await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity
            })
            return flight;
        } catch (error) {
         console.log("Something wentwrong in service layer");
        throw(error)
        }
    }

    async getFlightData(){

    }
}
module.exports=FlightService