//para que el editor de código autocomplete mejor
const { request, response } = require('express');





const usersGet = (req = request, res = response)=>{
  //obtaining data from query params 
  //const query = req.query;
  const {name, api_key, page=1, quantity=20 } = req.query
  res.json({
    msg: "get API - controller",
    name,
    api_key,
    page: parseInt(page),
    quantity
  });
}
const usersPost = (req, res = response)=>{
  // obtaining  data from the body
  const { name, age } = req.body;

  res.json({
    msg: "post API - controller",
    name,
    age,

  });
}
const usersPut = (req, res = response)=>{
  // obtaining data from the url path (it's needed that the path on the route should have /:id, then express will parse)
  const { id } = req.params;

  res.json({
    msg: "put API - controller"
  });
}
const usersPatch = (req, res = response)=>{
  res.json({
    msg: "patch API - controller"
  });
}
const usersDelete = (req, res = response)=>{
  res.json({
    msg: "delete API - controller"
  });
}


module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete
}