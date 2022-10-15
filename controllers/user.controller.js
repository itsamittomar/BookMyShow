  
const { request, response } = require("express");
const validation = require('express-validator/check');
const userbiz = require('../biz/user.biz');
const usermodel = require("../models/user.model");

console.log("Inside User controller");


class UserControl {
    register(app){
        app.route('/user')
        .get(async (request,response,next) =>{
            try{
                const error = validation(request)
                if(!error.isEmpty()){
                    const error = new Error("User Doesn't Exist, kindly Register !! ");
                    error.statusCode= 422;
                    throw error;
                }

            }
            catch(err){
                const error = new Error("Server Issue, Please try again!!");
                error.statusCode=422;
                error.message="Kindly Submit the Form again , Sorry for the inconvience";
                throw err
            }
            const id = request.body.id;
            const UserBiz = new userbiz();
            const result = await UserBiz.getUserData(id)
            console.log(result)
            return response.json(result,{message:"User Fetched Successfully!!"})

        })

        .post(async (request, response, next)=>{
            try{
                const reqBody = request.body;
                const UserBiz = new userbiz()
                const result = await UserBiz.createUser(reqBody)
                response.json({message: result},"User Created Successfully!!")
            }
            catch(err){
                const error = new Error("Not able to add user details")
                error.message = "Not able to Add User",
                error.statusCode=422.
                throw error
                //response.json({message:"Facing Issue"})
            }

        })

        .put(async (request,response,next) =>{
            try{

                const error= validation(request);
                if(!error.isEmpty()){
                    const error = new Error(`Error : ${error}`)
                    error.statusCode=422;
                    throw error;
                }
                usermodel.findByPk(request.body.id)
                .then(result =>{
                    result.name= request.body.name,
                    result.password= request.body.password,
                    result.email= request.body.email

                    return result.save()
                
                .then(result =>{
                    console.log('Saved');
                    response.json({message:"Updated Successfully!!"})
                })

                }).catch(err =>{
                    console.log(err)
                    next(err)
                })

            }
            catch(err){
                console.log(`An error occured ${err}`)
                next()

            }
        })
    }
}

module.exports=UserControl;