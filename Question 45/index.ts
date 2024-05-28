// Cars:Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function carInfo(manufacturer: string, modelName: string, ...moreOptions: {[key:string]: any } [] ) : object {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...moreOptions)    
    }

    return carInfo;
}


let autoCar = carInfo('Toyota','Fortuner', {Color: 'Black'}, {Features: ['Four-Wheel Drive (4WD) Capability','Spacious Interior','Infotainment System','Multi-Terrain Select','Smart Key System with Push Button Start']});
console.log(autoCar);


