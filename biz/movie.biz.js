const movieobject = require('../models/movies.model');
class Movieobject {
    async getMovieData(id){
        return new Promise(async ,(resolve,reject) =>{
            try{
               const result =  movieobject.findByPk(id);
               console.log(result)
               resolve(result)   
            }
            catch(err){
                console.log(err)
                reject(err)
            }
        })
    }

    async createMovieRecord(userData){
        return new Promise(async (resolve,reject)=>{
            try{
                const result = await movieobject.create(userData);
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