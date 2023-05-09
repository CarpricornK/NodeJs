const mongoose = require('mongoose');
const HOST = 'localhost:27017';
const DB = 'sensor';
const mongodbURL = `mongodb://${HOST}/${DB}`;

mongoose.connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

const Sensor = require('./models/sensor.js')


const main = async()=>{
    
    const aggregation = await Sensor.aggregate([
        {
            $match: {
                $or: [
                    {'temp': { $gt: 26, $lt: 27 }},
                    {'humi': { $gte: 80 }}
                ]
            }
        },
        {
            $group: {
                _id: "$id",
                count: { $sum: 1 }
            }
        },
        {
            $project: {
                _id: 0,
                count: 1
            }
        }
        
    ])
    console.log(aggregation)
}



const main2 = async()=>{

    const aggregate2 = await Sensor.aggregate([

        {
            $match: { $or : [ {'temp': {$gt : 26, $lt : 27}}, {'humi' : { $gte : 80 }}] }
        },
        {
            $sort: { 'id' : 1 }
        },
        {
            $limit: 5
        },
        {
            $project: { _id : 0, id : 1, temp : 1, humi : 1, time : 1, min : { $minute : '$time'}}
        },
        {
            $match: { min : 1}
        }
        
    ])

    console.log(aggregate2)
}

//main()
main2()