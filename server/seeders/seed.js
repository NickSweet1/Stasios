const db = require('../config/connection');
const { Subs } = require('../models');
const subsSeeds = require('./subsSeeds.json');

db.once('open', async () => {
  await Subs.deleteMany({});
  await Subs.create(subsSeeds);


  console.log('all done!');
  process.exit(0);
});