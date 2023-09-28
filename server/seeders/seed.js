const db = require('../config/connection');
const { Sub, User, Contact, Coffee, Desserts } = require('../models');
const subSeeds = require('./subSeeds.json');
const userSeeds = require('./userSeeds.json');
const contactSeeds = require('./contactSeeds.json');
const coffeeSeeds = require('./coffeeSeeds.json');
const dessertSeeds = require('./dessertSeeds.json');

db.once('open', async () => {
  await Sub.deleteMany({});
  await Sub.create(subSeeds);
  
  await User.deleteMany({});
  await User.create(userSeeds);

  await Contact.deleteMany({});
  await Contact.create(contactSeeds);

  await Coffee.deleteMany({});
  await Coffee.create(coffeeSeeds);

  await Desserts.deleteMany({});
  await Desserts.create(dessertSeeds);

  console.log('All done!');
  process.exit(0);
});