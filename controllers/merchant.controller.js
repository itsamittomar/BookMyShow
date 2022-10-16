  
const { request, response } = require("express");
const validation = require('express-validator/check');
const merchantBiz = require('../biz/merchant.biz');


console.log("Inside Merchant controller");


class MerchantControl {
    register(app){
        app.route('/merchant')
        .get(async (request,response,next) =>{
            try{
                const error = validation(request)
                if(!error.isEmpty()){
                    const error = new Error("Invalid Merchant ");
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
            const merchantbiz = new merchantBiz();
            const result = await merchantbiz.getMerchantData(id)
            console.log(result)
            return response.json(result,{message:"Merchant details Fetched Successfully!!"})

        })

        .post(async (request, response, next)=>{
            try{
                const reqBody = request.body;
                const merchantbiz = new merchantBiz();
            const result = await merchantbiz.createMerchantRecord(reqBody)
                response.json({message: result},"Merchant Added Successfully!!")
            }
            catch(err){
                const error = new Error("Not able to add movie details")
                error.message = "Not able to Add Merchant",
                error.statusCode=422
                throw error
                //response.json({message:"Facing Issue"})
            }

        })

    }
}

module.exports=MerchantControl;