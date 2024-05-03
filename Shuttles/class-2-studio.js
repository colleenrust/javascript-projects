const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
const astronautCount = 7;
const astronautStatus = "ready";
const averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg + fuelMassKg +shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelcius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = 100 + "%";
const weatherStatus = "clear";
const preparedForLiftOff = true;

// if (astronautCount <= 7 ){
// console.log("astronauts");
// }

// if (astronautStatus === "ready"){
//     console.log("astronauts are ready");
// }

// if (totalMassKg < maximumMassLimit){
//     console.log("get yo booty up");
// } 

// if (fuelTempCelcius >= minimumFuelTemp || fuelTempCelcius <= maximumFuelTemp){
//     console.log("fuel temps look good");
// }
// if(fuelLevel === 100 + "%"){
//     console.log("enough fuel for the journey!!!");
// }

// if (weatherStatus === "clear"){
// console.log("good weather hooray!")
// }change


if (astronautCount <= 7 && astronautStatus === "ready" && totalMassKg < maximumMassLimit 
&&fuelTempCelcius >= minimumFuelTemp || fuelTempCelcius <= maximumFuelTemp && fuelLevel === 100 + "%" &&
weatherStatus === "clear") {
    console.log("All systems are a go! Initiating space shuttle launch sequence.")
    console.log("Date: " + date)
    console.log("Time: " + time)
    console.log("Astronaut Count: " + astronautCount)
    console.log("Crew Mass: "+ crewMassKg + "kg")
    console.log("Fuel Mass: " + fuelMassKg + "kg")
    console.log("Shuttle Mass: " + shuttleMassKg + "kg")
    console.log("Total Mass: " + totalMassKg + "kg")
    console.log("Fuel Temperature: " + fuelTempCelcius + "℃" )
    console.log("Weather Status: " + weatherStatus)
    console.log("Have a safe trip astronauts!!")

}else {
    console.log("Shuttle Failure RIP")
}