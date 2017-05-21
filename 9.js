const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  if (err) throw err;

  const prices = db.collection('prices');
  prices.aggregate([
    { $match: {size: process.argv[2]} },
    { $group: {
      _id: "total",
      total: {
        $avg: '$price'
      }
    }}
  ], (err, data) => {
    if (err) throw err;

    console.log( (Math.round(data[0].total * 100) / 100).toFixed(2) );
  });

  db.close();
});