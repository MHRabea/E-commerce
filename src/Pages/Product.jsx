import React , {useContext}from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../Components/Breadcrumb/BreadCrumb';
import ProductDisplay from '../Components/ProductDispaly/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div className='p-10 flex flex-col bg-gradient-to-b from-red-300 space-y-4 w-screen'>
      <BreadCrumb product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
