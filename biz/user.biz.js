const userobject = require('../models/user.model');
class UserBiz {
    async getUserData(id){
        return new Promise(async ,(resolve,reject) =>{
            try{
               const result =  userobject.findByPk(id);
               console.log(result)
               resolve(result)   
            }
            catch(err){
                console.log(err)
                reject(err)
            }
        })
    }

    async createUser(userData){
        return new Promise(async (resolve,reject)=>{
            try{
                const result = await userobject.create(userData);
                resolve(result)
            }
            catch(err){
                console.log(`An occur Occured ${err}`)
                reject(err)
            }
        })
    }
}

module.exports= UserBiz;