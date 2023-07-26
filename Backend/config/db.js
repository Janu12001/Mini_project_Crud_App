const mongoose = require("mongoose");
const connectTodb =()=>{

    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{

        console.log(`Connected Db:${conn.connection.host}`)
    })
    .catch((err)=>{

        console.log(err.message);
        process.exit(1);
    })
}


module.exports=connectTodb;

