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
        defaultValue:'https://target.scene7.com/is/image/Target/GUEST_9766bfa7-3fcb-4f4c-9576-15e17ccc1044?wid=488&hei=488&fmt=pjpeg'
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