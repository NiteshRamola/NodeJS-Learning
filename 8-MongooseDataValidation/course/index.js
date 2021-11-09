const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connecting to MongoDB...'))
  .catch(() => console.log('Could not connect to MongoDB..'))

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 20 },
  category: { type: String, required: true, enum: ['web', 'mobile']},
  author: { type: String, required: true },
  tags: {
    type: Array,
    validate: {
      validator: v => {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res(v && v.length > 0)
          }, 5000);
        })
      },
      message: 'A course should have at least one tag'
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: { 
    type: Number, 
    required : function() { return this.isPublished },
    get: v => Math.round(v),
    set: v => Math.round(v)
  }
})

const Course = mongoose.model('Course', courseSchema)

const createCourse = async () => {
  const course = new Course({
    name: 'NodeJS',
    category: 'mobile',
    author: 'Ramola',
    tags: ['node'],
    isPublished: true,
    price: 50.8
  })

  try{
    const res = await course.save()
    console.log(res)
  } catch(e) {
    console.log(e.message)
  }
  
}

// createCourse();


const getCourse = async () => {
  const courses = await Course
    .find({_id: '618a3650436db02a6a074b6e'});
  console.log(courses[0].price);
}

getCourse()