import { IoIosArrowForward } from "react-icons/io";

const BreadCrumb = (props) => {
    const {product} = props
  return (
    <div className="flex items-start justify-start text-sm space-x-1 w-full">
      <span>Home</span>
      <IoIosArrowForward size={22}/>
      <span>Shop</span>
      <IoIosArrowForward size={22}/>
      <span>{product.category}</span>
      <IoIosArrowForward size={22}/>
      <span>{product.name}</span>
    </div>
  )
}

export default BreadCrumb
