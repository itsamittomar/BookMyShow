const merchantOject = require('../models/merchant.model');
class Movieobject {
    async getMerchantData(id){
        return new Promise(async ,(resolve,reject) =>{
            try{
               const result =  merchantOject.findByPk(id);
               console.log(result)
               resolve(result)   
            }
            catch(err){
                console.log(err)
                reject(err)
            }
        })
    }

    async createMerchantRecord(merchantData){
        return new Promise(async (resolve,reject)=>{
            try{
                const result = await merchantOject.create(merchantData);
                resolve(result)
            }
            catch(err){
                console.log(`An occur Occured ${err}`)
                reject(err)
            }
        })
    }
}

module.exports= Movieobject;