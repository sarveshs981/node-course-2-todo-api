const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');
// var db=client.db('TodoApp');
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=> {
//   console.log(result);
// var db=client.db('TodoApp');
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=> {
//   console.log(result);
// var db=client.db('TodoApp');
// db.collection('Users').findOneAndDelete({completed: false}).then((result)=> {
//   console.log(result);
// });
 // var db=client.db('TodoApp');
 // db.collection('Users').findOneAndDelete({
 //   _id: new ObjectID('5bf96f1ae8c864e53a92a762')
 // }).then((result)=> {
 //   console.log(result);
 // });
 var db=client.db('TodoApp');
 db.collection('Users').deleteMany({location: 'Florida'}).then((result)=> {
   console.log(result);
 });
 // client.close();
});
