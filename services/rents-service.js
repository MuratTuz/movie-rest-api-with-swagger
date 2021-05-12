var rents = require('../model/rentsData').rentsData;

exports.getAllRents=()=> {
    return rents;
}

exports.createRent=(newRent)=> {
    rents.push(newRent);
}

exports.deleteRentById=(id)=> {
    
    let rent = rents.find(r => r.movieId == id);
    if (rent) {
        const newRents = rents = rents.filter(r => r.movieId != id);
        rents = newRents;
        return rents; // new object array
    } else
    return rent; // undefined
}
