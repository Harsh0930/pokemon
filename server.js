const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const app=express();
const port=3000;

mongoose.connect("mongodb://localhost:27017/pokemon",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const db=mongoose.connection;

db.on('error',console.error.bind(console,'Mongoose Connection Error:'));

app.use(bodyParser.json());

const APIData=mongoose.model('APIData',new mongoose.Schema({
    name:String,
    height:Number,
    id:Number
}));

app.post('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',(req,res)=>{
    const apiData=req.body;

    const dataToSave=new APIData(apiData);

    dataToSave.save((err,savedData)=>{
        if(err){
            res.status(500).send('Error Saving API data');
        }else{
            res.json(savedData);
        }
    })
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});
