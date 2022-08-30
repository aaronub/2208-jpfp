const Sequelize = require('sequelize')
const db = require('./database')

const Student = db.define('student', {
    firstName:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
            isEmail:true,
        }
    },
    imageUrl:{
        type:Sequelize.STRING,
        defaultValue:'https://www.pace.edu/sites/default/files/styles/16_9_1600x900/public/2022-04/student-development-nyc-interior-hero.jpg?h=993b43e0&itok=e4wmAYH3'
    },
    gpa:{
        type:Sequelize.DECIMAL(10,1),
        validate:{
            min:0.0,
            max:4.0,
        }
    }
})

module.exports = Student; 