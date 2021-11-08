const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connecting to MongoDB...'))
  .catch(() => console.log('Could not connect to MongoDB..'))

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema)

const createCourse = async () => {
  const course = new Course({
    name: 'JavaScript',
    author: 'Nitesh',
    tags: ['Javascript', 'Web'],
    isPublished: false
  })

  const res = await course.save()
  console.log(res)
}

// createCourse();

const getCourse = async () => {
  const pageNumber = 1;
  const pageSize = 10;
  const courses = await Course
    .find({author: 'Nitesh Ramola'})
    // .skip((pageNumber - 1) * pageSize)
    // .find({price: { $gte: 10, $lte: 20 }})
    // .find({price: { $in: [10,15,20] }})
    // .find({author: /^Nitesh/})
    // .find({author: /Ramola$/i})
    // .find({author: /.*Nitesh.*/i})
    // .or([{author:'Nitesh'}, {isPublished: true}])
    // .and([{author:'Nitesh'}, {isPublished: true}])
    // .limit(10)
    // .sort({name: 1})
    // .count()
    // .select({name: 1,  tags: 1});
  console.log(courses)
}

getCourse();

// const updateCourse = async (id) => {
//   const course = await Course.findById(id);
//   if(!course) return;

//   // course.isPublished = true;
//   // course.author = "Ramola";

//   course.set({
//     isPublished: true,
//     author: 'Ramola'
//   })

//   const res = await course.save();
//   console.log(res);
// }

const updateCourse = async (id) => {
  const res = await Course.updateOne({ _id: id}, {
    $set: {
      author: 'Nitesh Ramola',
      isPublished: false
    }
  });
  console.log(res)
}

// updateCourse('61891a63f42d877650ed0695')


const deleteCourse = async (id) => {
  const res = await Course.deleteOne({ _id: id});
  console.log(res);
}

// deleteCourse('61891a63f42d877650ed0695')