const express = require('express')
const app = express();
const hbs = require('hbs')
const path = require('path')
const requests = require('requests');
const port = process.env.PORT || 3000;
app.set('view engine','hbs')
    // console.log()
hbs.registerPartials(path.join(__dirname,'./views/partials'))
const imgpaths = path.join(__dirname,'/viwes/partials/img/sun.gif');
app.get('/',(req,res)=>{
    res.render('index',{})
})
app.get('/home',(req,res)=>{
    res.render('index',{})
})
app.get('/about',(req,res)=>{
    res.render('about',{})
})
app.get('/weather',(req,res)=>{
    res.render('weather',{})
})
console.log(path.join(__dirname,'/viwes/partials/img'))
app.listen(process.env.PORT || 3000,'127.0.0.1',()=>{
    console.log('start')
})