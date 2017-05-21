const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  if (err) {
    return console.err(err);
  }

  const parrots = db.collection('parrots');
  parrots.find({
    age: {$gt: parseInt(process.argv[2])}
  }).toArray((err, docs) => {
    if (err) {
      return console.err(err);
    }

    console.log(docs);
  });

  db.close();
});