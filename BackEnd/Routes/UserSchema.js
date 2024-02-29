const Joi = require('joi')

const userSchema = Joi.object({
    Username: Joi.string().required(),
    Email: Joi.string().email().required(),
    Password: Joi.string().min(6).required(), 
    Nickname:Joi.string().required()
  });
  
  module.exports = userSchema;