const db = require('../config/connection');
const { Sub, User } = require('../models');
const subSeeds = require('./subSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  await Sub.deleteMany({});
  await Sub.create(subSeeds);
  
  await User.deleteMany({});
  await User.create(userSeeds);

  console.log('All done!');
  process.exit(0);
});