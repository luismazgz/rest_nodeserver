const mongoose = require('mongoose');

const dbConnection = async()=>{

    try {
       await mongoose.connect(process.env.MONGO_CONN);
    
       console.log('BD ok')
    } catch (error) {
        console.log(error);
      throw new Error('error conexión')
    }

}

module.exports={
    dbConnection
}