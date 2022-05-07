import Home from './Home'
import Especialty from './Especialty'
import Products, { type Product } from './Products'
import Quality from './Quality'
import Logos from './Logos'
import Blog from './Blog'
import Footer from './Footer'
import Loader from './Loader'

import Wiggle from './Wiggle'

const products: Product[] = [
  {
    img: 'delicacies1',
    price: '$5',
    name: 'Cookies',
    filterType: 'delicacies',
  },
  {
    img: 'delicacies2',
    price: '$6',
    name: 'Croissant',
    filterType: 'delicacies',
  },
  {
    img: 'delicacies3',
    price: '$4',
    name: 'Croissant',
    filterType: 'delicacies',
  },
  {
    img: 'coffee1',
    price: '$7',
    name: 'Black Coffee',
    filterType: 'coffee',
  },
  {
    img: 'coffee2',
    price: '$12',
    name: 'Pure Coffee',
    filterType: 'coffee',
  },
  {
    img: 'coffee3',
    price: '$9',
    name: 'Milk Coffee',
    filterType: 'coffee',
  },
  {
    img: 'coffee4',
    price: '$9',
    name: 'Moka Coffee',
    filterType: 'coffee',
  },
  {
    img: 'cake1',
    price: '$6',
    name: 'Cream Cake',
    filterType: 'cake',
  },
  {
    img: 'cake2',
    price: '$5',
    name: 'Chocolate Croissant',
    filterType: 'cake',
  },
  {
    img: 'cake3',
    price: '$15',
    name: 'Pancake',
    filterType: 'cake',
  },
  {
    img: 'cake4',
    price: '$12',
    name: 'Milk Cake',
    filterType: 'cake',
  },
]

const Main = () => {
  return (
    <>
      <Loader />
      <Home />
      <Wiggle />
      <Especialty />
      <Products products={products} />
      <Quality />
      <Logos />
      <Blog />
      <Footer />
    </>
  )
}

export default Main
