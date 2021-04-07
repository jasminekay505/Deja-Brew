const { User } = require('../models');

const userData = [
   {
      username: 'Ashley',
      email: 'ashley@gmail',
      password: '1password'

   },
   {
      username: 'Nathan',
      email: 'nathan@gmail',
      password: '2password'

   },
   {
      username: 'Zack',
      email: 'zack@gmail',
      password: '3password'

   },
   {
      username: 'Jasmine',
      email: 'jasmine@gmail',
      password: '4password'

   },
   {
      username: 'Hayden',
      email: 'hayden@gmail',
      password: '5password'

   },

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;