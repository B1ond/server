const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const pageContacts = require("./new/aboutMe")
const pageContacts1 = require("./new/contact")
const pageContacts2 = require("./new/shop")
const pageContacts3 = require("./new/geolocation")
app.use(bodyParser.urlencoded({extended:false}))
app.get('/aboutMe', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"**.**.****"
    }
    response.send(pageContacts)
    response.json(student)
})
app.get('/contact', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"**.**.****"
    }
    response.send(pageContacts1)
    response.json(student)
})
app.get('/shop', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"**.**.****"
    }
    response.send(pageContacts2)
    response.json(student)
})
app.get('/geolocation', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"**.**.****"
    }
    response.send(pageContacts3)
    response.json(student)
})
app.listen(8000,()=>{
    console.log("8000 port")
})