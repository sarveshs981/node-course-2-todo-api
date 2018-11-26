const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

var db=client.db('TodoApp');
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5bfa3bafe8c864e53a92b3c9')
},{
  $set: {
    name: "Tony"
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result)=> {
  console.log(result);
});
  client.close();
});
 
