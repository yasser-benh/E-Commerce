import './ProductsDetails.css'
export default function ProductsDetails ({details}) { 
    const { title , price ,thumbnail,category} = details
     return (
     <div className="product-container">
      <img src={thumbnail}/>
      <div className='product-details'>
            <h1>{title}</h1>
            <p>{category}</p>
            <p>{price}$</p>
         </div>
     </div>)
}