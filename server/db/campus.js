const Sequelize = require('sequelize')
const db = require('./database')

const Campus = db.define('campus', {
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    imageUrl:{
        type: Sequelize.STRING,
        defaultValue:'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/2d5e912ab6fc5da59e3e6ed4bfca867f'
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:true
        }        
    },
    description:{
        type:Sequelize.TEXT,       
    }
})

module.exports = Campus