db.createUser({
  user: 'khalid',
  pwd: 'mikejmahmutucuntydu1khalid15',
  roles: [
    {
      role: 'readWrite',
      db: 'social_media_project',
    },
  ],
});
db.createCollection('test'); //MongoDB creates the database when you first store data in that database
