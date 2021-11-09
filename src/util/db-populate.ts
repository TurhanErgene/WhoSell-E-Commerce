//insert data to db 
import mongoose from 'mongoose';
import axios from 'axios'

mongoose.connect('mongodb://localhost:27017/data-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(() => {
  console.log('connected to mongodb');
  
})


const getData = async () => {
  const result = await axios.get('https://fakestoreapi.com/products')

  const productData = result.data
  const transformed = productData.map((product:any) => {
    return {
      name: product.title,
      loadDate: Date,
      category: product.category,
      quantity: product.rating.quantity,
      rating: product.rating.rate,
      price: product.price,
      description: product.description,
      images: product.image,
    }
  })


}