const express = require('express');
const bodyParser=require('body-parser');
const apiRouter=require('./routes');
const {PORT}=require('./config/server.config');
const app =express();
const BaseError= require('./errors/base.error');
const errorHandler= require('./utils/errorHandler'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

app.use('/api',apiRouter);

app.get('/ping',(req,res)=>{
  return res.json({message:'leetcode problem service live'});
});

//last middleware  if any error comes
app.use(errorHandler);


app.listen(PORT,()=>{
  console.log(`Server started at PORT: ${PORT}`);
 

  //  try{
  //  // throw new BaseError("Not found", 404, "Resource not found", {});
  // //   throw new NotFoundError({});
  // //  }catch(e){
  // //    console.log("Something went wrong",e);
  // //  }finally{
  // //   console.log("execution finally");
  // //  }
  
});