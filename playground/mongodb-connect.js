const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');
    var db=client.db('TodoApp');
    db.collection('Todos').insertOne({
      //text:'Something to do',
      //completed: false
    //}, (err, result) => {
      //if (err) {
      //  return console.log('Unable to insert todo', err);
      //}
      //console.log(JSON.stringify(result.ops, undefined, 2));
    //});
  //  db.collection('Users').insertOne({
    //  name:'Max',
      //age: 13,
    //  location:'Florida'
  //  }, (err, result) => {
    //  if (err) {
      //  return console.log('Unable to insert Users', err);
    //  }
    //  console.log(result.ops);
  //  })
  //  client.close();
//});
