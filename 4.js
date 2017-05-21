const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  if (err) throw err;

  const docs = db.collection('docs');
  docs.insertOne({
    firstName: process.argv[2],
    lastName: process.argv[3]
  });

  docs.find({
    firstName: process.argv[2]
  }).toArray((err, entries) => {
    if (err) throw err;

    entries.forEach( e => console.log(JSON.stringify(e)) );
  });

  db.close();
});