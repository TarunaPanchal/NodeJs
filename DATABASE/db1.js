
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tutorialkart');
 
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
  console.log("Connection Successful!");


 
var BookSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
  })

  var Book = mongoose.model('Book', BookSchema);
   
var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });

book1.save(function (err, book) {
    if (err) return console.error(err);
    console.log(book.name + " saved to bookstore collection.");
  });
  }); 