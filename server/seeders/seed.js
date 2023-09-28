const db = require('../config/connection');
const { Sub, User, Contact } = require('../models');
const subSeeds = require('./subSeeds.json');
const userSeeds = require('./userSeeds.json');
const contactSeeds = require('./contactSeeds.json');

db.once('open', async () => {
  await Sub.deleteMany({});
  await Sub.create(subSeeds);
  
  await User.deleteMany({});
  await User.create(userSeeds);

  await Contact.deleteMany({});
  await Contact.create(contactSeeds);

  console.log('All done!');
  process.exit(0);
});