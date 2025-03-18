require('dotenv').config();
const express = require('express');
const { sendSms } = require('./sms');

const app = express();
app.use(express.json());

app.post('/send-sms', async(req,res)=>{
    const {phone,message} = req.body;

    if(!phone || !message){
        return res.status(400).json({error:'Phone number and message are required'});
    }

    try{
        const response = await sendSms(phone,message);
        res.status(200).json({success:true, response});
    }catch(error){
        res.status(500).json({error:error.message});
    }
});

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})