const mongoose = require('mongoose');

const movieschema = new mongoose.Schema({ name: 'string', 
                description: 'string', 
                createDate: 'date', 
                updatedDate: 'date', 
                createdBy: 'string', 
                updatedBy: 'string' },
                { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}});

const movie = mongoose.model('todos', movieschema);

module.exports = {
    movie
}