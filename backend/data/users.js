import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Nam Do San',
    email: 'dosan@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Seo Dal-Mi',
    email: 'dalmi@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
