const cities = require('./cities')

const getCities = async () => {
    try {
        const result = await cities.findAll()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

const closeConnection = async () => {
    try {
        console.log(await cities.close())
    } catch (error) {
        console.log(error)
    }
}

const addCity = async () => {
    const city = {
        capital: 'Harare',
        country: 'Zimbabwe'
    }
    try {
        const result = await cities.create(city)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

getCities()
addCity()
getCities()
closeConnection()