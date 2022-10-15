  
const { request, response } = require("express");
const validation = require('express-validator/check');
const userbiz = require('../biz/user.biz');
const usermodel = require("../models/user.model");

console.log("Inside User controller");


class MovieControl {
    register(app){
        app.route('/movie')
        .get(async (request,response,next) =>{
            try{
                const error = validation(request)
                if(!error.isEmpty()){
                    const error = new Error("Movie Doesn't Exist, kindly Add !! ");
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
            return response.json(result,{message:"Movie Fetched Successfully!!"})

        })

        .post(async (request, response, next)=>{
            try{
                const reqBody = request.body;
                const UserBiz = new userbiz()
                const result = await UserBiz.createUser(reqBody)
                response.json({message: result},"Movie Added Successfully!!")
            }
            catch(err){
                const error = new Error("Not able to add movie details")
                error.message = "Not able to Add Movie",
                error.statusCode=422.
                throw error
                //response.json({message:"Facing Issue"})
            }

        })

    }
}

module.exports=UserControl;