//hospital
//DB5-Xznwc6q3u#M
const mongoose = require('mongoose');
require('dotenv').config();

conexionDB = async() => {

    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('BD online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos')
    }
}

module.exports = {
    conexionDB
}