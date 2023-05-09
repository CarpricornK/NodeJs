const mongoose = require('mongoose');
const HOST = 'localhost:27017';
const DB = 'sensor';
const mongodbURL = `mongodb://${HOST}/${DB}`;

mongoose.connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

const csvFilePath = './data/sensor.csv' 
const csv = require('csvtojson') 
const path = require('path')  
const _path = path.join(__dirname, csvFilePath)  
const Sensor = require('./models/sensor.js')

const main = async()=>{  
  const sensorList = await csv().fromFile(_path)  
  
  Sensor.collection.drop()
  Sensor.insertMany(sensorList, function(error, docs) {
      console.log('데이타 삽입완료')
  })
}  
main()
 
