// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')

const campuses = [
  {
  name: 'Drexel Avenue School',
  imageUrl:'https://illustoon.com/photo/thum/2873.png',
  address:'Westbury NY',
  description:'Its a good elementary shcool!'
  },{
  name: 'The North Hills School',
  imageUrl:'https://www.saveourlandsaveourtowns.org/images/smallschools.jpg',
  address:'Queens NY',
  description:'Its an excellent elementary shcool!'
  },{
  name: 'Queensborough Community College',
  imageUrl:'https://pbs.twimg.com/profile_images/1546501277340811264/lQ687qjX_400x400.jpg',
  address:'Queens NY',
  description:'Its a good college!'
  }
]
const students =[
  {
    firstName: 'Aaron',
    lastName: 'Wang',
    email: 'wo-08@hotmail.com',
    imageUrl: 'https://image.shutterstock.com/image-photo/background-perfect-short-cut-green-260nw-12971728.jpg',
    gpa: 3.9,
  },{
    firstName: 'Dora',
    lastName: 'Zhang',
    email: 'dorazhang86@gmail.com',
    imageUrl: 'https://media.istockphoto.com/photos/many-little-fluffy-clouds-in-blue-sky-in-sunny-day-picture-id1040911866?k=20&m=1040911866&s=170667a&w=0&h=5kYwxdKOTlSSCapucc5NL982kcy0xoz2l_t386oDRqQ=',
    gpa: 3.8,
  },{
    firstName: 'Tom',
    lastName: 'Li',
    email: 'tomli00@gmail.com',
    imageUrl: 'https://image.shutterstock.com/image-vector/vector-cartoon-yellow-sun-shining-260nw-1914594316.jpg',
    gpa: 3.7, 
  },{
    firstName: 'Jerry',
    lastName: 'Zhao',
    email: 'jerryzhao00@gmail.com',
    imageUrl: 'https://image.shutterstock.com/image-photo/smart-black-child-student-smiling-260nw-1751973791.jpg',
    gpa: 3.6, 
  }
]



const syncAndSeed = async () => {
    await db.sync({ force: true });

    //use this area to sync your database

    await Promise.all(students.map(student => {
      return Student.create(student);
    }));
    await Promise.all(campuses.map(campus => {
      return Campus.create(campus);
    }));
  

    console.log(`
    Seeding successful!
  `);
};

Campus.hasMany(Student)
Student.belongsTo(Campus);



module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed,
    Student,
    Campus
}