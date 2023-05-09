const mongoose = require('mongoose')
const HOST = 'localhost:27017'
const DB = 'sensor'
const mongodbURL = `mongodb://@${HOST}/${DB}`
mongoose.set('useFindAndModify', false)
mongoose.connect(mongodbURL, {useNewUrlParser: true}) 
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err))
const Photo = require('./models/photo.js')

const main = async()=>{  
  const t = await Photo.findOne({
      "title" : {
        $eq : '큰돌'
      }, 
      "url" : {
        $eq : 'jhc9639@naver.com'
      }
    }).lean()
  console.log(t)
}

main()
 