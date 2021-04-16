const mongoose = require('mongoose');

async function connectToDb() {
    console.log(process.env.MONGO_URI)
    try {
        //Check if there is a active connection
        if (mongoose.connection.readyState === 1) {
            return
        }
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(response=>{console.log("Database Connected")});
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectToDb