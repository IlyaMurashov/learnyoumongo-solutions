const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  if (err) throw err;

  const parrots = db.collection('parrots');
  parrots.count({
    age: {$gt: parseInt(process.argv[2])}
  }, (err, count) => {
    if (err) throw err;

    console.log(count);
  });

  db.close();
});