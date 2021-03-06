const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
  name: String,
  author: String, 
  tags: [ String ],
  date: Date, 
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

const getCourses = async () => {
  return await Course
  .find({ isPublished: true, tags: {$in: ['frontend', 'backend']} })
  .sort('-price')
  .select({ name: 1, author: 1, price: 1 });
}

const run = async () => {
  const courses = await getCourses();
  console.log(courses);
}

run();