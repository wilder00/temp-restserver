//para que el editor de código autocomplete mejor
const { request, response } = require('express');
const User = require('../models/user.model');




const usersGet = async (req = request, res = response)=>{
  try {
    const users = await User.findAll();
    
    //obtaining data from query params 
    //const query = req.query;
    const {name, api_key, page=1, quantity=20 } = req.query
    res.json({
      msg: "get API - controller",
      name,
      api_key,
      page: parseInt(page),
      quantity,
      users
    });
  } catch (error) {
    res.status(500).json({
      error
    })
  }
}
const usersPost = async(req, res = response)=>{
  // obtaining  data from the body
  const { firstName, lastName } = req.body;
  const user = new User({ firstName, lastName })
  try {
    await user.save();
    res.json({
      msg: "post API - controller",
      //name: "no name",
      //age,
      user
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "No se pudo crear el usuario"
    })
  }
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