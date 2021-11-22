const MongoClient = require('mongodb').MongoClient;
const model = require("../model")
class DataMongo {

  constructor(repo, url) {
    this.url = url;
    this.repo = null;
  
  }

  init() {
    this.url = 'mongodb://127.0.0.1:27017/';
    this.connection(this.url);
  }

 async connection(url) {

    const client = await MongoClient.connect(url, {useUnifiedTopology: true})
      const db = client.db('recipes');

      const collection = db.collection('recipe');

      console.log('Conexão bem sucedida');

      this.repo = collection 

      return collection;
    
      
  }

  async insert(recipe){
    await this.repo.insertOne(recipe)
    return recipe
  }

  async findbyID(id) {
    return await this.repo.findOne({id: id})
  }
}


module.exports = DataMongo;