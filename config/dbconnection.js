const mongoose = require("mongoose")

var URI = "mongodb+srv://murky:omar0211@storage.skbvkte.mongodb.net/?retryWrites=true&w=majority"
module.exports = mongoose
.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("MongoDB connected !")
})
.catch(((error)=>{
    console.log("err in db connection :",error)
}))
