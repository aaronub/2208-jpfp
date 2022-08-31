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
        defaultValue:'https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_09279e8e.jpeg?region=0,0,300,300'
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