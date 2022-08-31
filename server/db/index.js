// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')

const campuses = [
  {
  name: 'Drexel Avenue School',
  imageUrl:'https://www.usnews.com/dims4/USNEWS/71a8df3/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F39%2F4587aa9f863870da97d88e408aba9d%2Fcollege-photo_12762.jpg',
  address:'Westbury NY',
  description:'Its a good elementary school!'
  },{
  name: 'The North Hills School',
  imageUrl:'https://www.usnews.com/dims4/USNEWS/1197d08/17177859217/thumbnail/256x256/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F2a%2F625aa26f9c4544283a51182de20834%2FFirstDayInstaWIDE-1_USNews.jpg',
  address:'Queens NY',
  description:'Its an excellent elementary school!'
  },{
  name: 'Queensborough Community College',
  imageUrl:'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1635255884/doane/yjfzvmktnviq57ald35x/MorningCircleOctober2021.jpg',
  address:'Queens NY',
  description:'Its a good college!'
  }
]
const students =[
  {
    firstName: 'Aaron',
    lastName: 'Wang',
    email: 'wo-08@hotmail.com',
    imageUrl: 'https://l450v.alamy.com/450v/2hwe125/little-boy-in-tracksuit-guy-got-ready-for-sports-activities-cheerful-person-standing-pose-cartoon-comic-style-flat-design-single-character-2hwe125.jpg',
    gpa: 3.9,
  },{
    firstName: 'Dora',
    lastName: 'Zhang',
    email: 'dorazhang86@gmail.com',
    imageUrl: 'https://l450v.alamy.com/450v/2h9h5jy/female-cook-in-overalls-girl-from-kitchen-in-an-apron-cheerful-person-standing-pose-cartoon-comic-style-flat-design-single-character-2h9h5jy.jpg',
    gpa: 3.8,
  },{
    firstName: 'Tom',
    lastName: 'Li',
    email: 'tomli00@gmail.com',
    imageUrl: 'https://c8.alamy.com/zooms/6/e5566fcb06c6469d9b8078805fd0bd29/2h7ce4f.jpg',
    gpa: 3.7, 
  },{
    firstName: 'Jerry',
    lastName: 'Zhao',
    email: 'jerryzhao00@gmail.com',
    imageUrl: 'https://c8.alamy.com/zooms/6/d637d3fd8b0a42c1b2ad6b53061f3da2/2h6ggek.jpg',
    gpa: 3.6, 
  }
]


const syncAndSeed = async () => {
    await db.sync({ force: true });

    //use this area to sync your database
    await Promise.all(campuses.map(campus => {
      return Campus.create(campus);
    }));

    await Promise.all(students.map(student => {
      return Student.create(student);
    }));

    const student1 = await Student.findByPk(1)
    student1.update({campusId: 1})
    await student1.save()
    const student2 = await Student.findByPk(2)
    student2.update({campusId: 1})
    await student2.save()
    const student3 = await Student.findByPk(3)
    student3.update({campusId: 2})
    await student3.save()
    const student4 = await Student.findByPk(4)
    student4.update({campusId: 3})
    await student4.save()

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