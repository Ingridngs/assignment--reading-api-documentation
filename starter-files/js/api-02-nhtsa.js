
//##### National Highway Transit Safety Administration
//

//1. How many types of Chevrolet models are registered with the NHTSA?

const answerManufacturer = document.getElementById('nhtsa-1')

request
  .get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/chevrolet?format=json')
  .then(function(data){
     let manufacturer= data.body.Count
     

     answerManufacturer.innerHTML = manufacturer
   })

//2. What are the vehicle types that Nissan has?

const answerNissan=document.getElementById("nhtsa-2")

request
   .get("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/nissan?format=json")
   .then(function(data){

       let nissanVehicles=data.body.Results
       for(let i = 0; i < nissanVehicles.length; i++ ){
       	   let vehiclesTypes = nissanVehicles[i].Model_Name

           answerNissan.innerHTML+=vehiclesTypes  
       }

})

//3. What are the types of models that exist for Toyota trucks in 2017?


const answerToyota=document.getElementById("nhtsa-3")
request
   .get("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json")
   .then(function(data){

       let toyotaTrucks=data.body.Results
       for(let i= 0; i< toyotaTrucks.length; i++ ){
          let toyotaTrucks2017 = toyotaTrucks[i].Model_Name

          answerToyota.innerHTML+=toyotaTrucks2017

       }


   })




