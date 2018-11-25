const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  //   console.log('Connected to MongoDB server');
  // var db=client.db('TodoApp');
  // db.collection('Users').find({
  //   _id: new ObjectID('5bf96f1ae8c864e53a92a762')
  // }).toArray().then((docs)=> {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs,undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch users',err);
  // });

  console.log('Connected to MongoDB server');
var db=client.db('TodoApp');
db.collection('Users').find({name: 'Mike'}).toArray().then((docs)=> {
  console.log(JSON.stringify(docs,undefined,2));
// }, (err) => {
//   console.log('Unable to fetch users',err);
});

 client.close();
});
