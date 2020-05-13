const server = require('./src');
const {MONGO_URI} = require('./src/config');
const mongoose = require('mongoose');

mongoose.connect(
    MONGO_URI,
    {useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false},
    async (err)=>{
        if(err) throw err;
        console.log(`Database running`);
        const {url} = await server.listen();
        console.log(`🚀 running in the port ${url}`);
    }
);