const CityModel = require('./../model/City.Model')

async function CreateNewCityInDBService(name, image, description, cuisines){
    try{

        const result = await CityModel.create({
            name,
            image,
            description,
            cuisines  
        })

        if(result){
            return {
                success : true,
                data : result
            }
        }

    }catch(error){
        console.log(error)
        return {
            success : false
        }
    }
}

async function GetAllCityFromDBService(){
    try{

        const result = await CityModel.find()

        if(result){
            return {
                success : true,
                data : result
            }
        }else{
            throw new Error("GetAllCityFromDBService unable to get the city")
        }

    }catch(error){
        console.log(error)
        return {
            success : false
        }
    }
}

module.exports = {
    CreateNewCityInDBService,
    GetAllCityFromDBService
}