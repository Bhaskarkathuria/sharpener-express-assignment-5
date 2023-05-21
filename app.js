const express=require('express');
const path=require('path')
const app=express()

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoutes=require('./routes/contact')
//const successRoutes=require('./routes/sucess')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.use('/',shopRoutes);
app.use(adminRoutes);
app.use('/contact-us',contactRoutes)

app.post('/contact-us',(req,res,next)=>{
    res.redirect('/success')
    
})

app.get('/success', (req, res, next) => {
  res.send('<h1>Form submitted successfully</h1>');
});


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})



app.listen(5000);

