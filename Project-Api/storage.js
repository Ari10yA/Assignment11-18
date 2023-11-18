const doctorsData = require('./doctors.json');

class Storage {
    constructor(){

    }

    static fetchAll(){
        return doctorsData;
    }

    static fetchTypes(){
        const newData = doctorsData.map(data => {
            return {
                _id: data._id,
                type: data.type
            };
        });

        const uniqueData = newData.filter((obj, index, self) =>
            index === self.findIndex((el) => el.type === obj.type)
        );

        return uniqueData
    }

    static fetch(key){
        const newData = doctorsData.filter((data) => {
            return data.type == key
        });
        return newData;
    }
}

module.exports = Storage;