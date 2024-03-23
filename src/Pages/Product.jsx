import React , {useContext}from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../Components/Breadcrumb/BreadCrumb';

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <BreadCrumb product={product}/>
    </div>
  )
}

export default Product
