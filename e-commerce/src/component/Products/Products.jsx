import { useEffect, useReducer } from "react"
import ProductsDetails from "./ProductsDetails"
import { useParams , useLocation } from "react-router-dom"
const Products = () => { 
    const initialState = { 
        products:[],
        status:'null'
    }
    const reducer = (state , action ) => { 
        switch (action.type){
            case 'getAllProducts':
                return {products:action.payload , status:'Full Feild'}
                default:
                    return
        }
    }
const [state , dispatch] = useReducer(reducer , initialState)
console.log(state)

       useEffect(() => { 
        const fetchData=async ()=> { 
            const reponse = await fetch('https://dummyjson.com/products')
            const data = await reponse.json()
            dispatch({type:'getAllProducts' , payload:data.products})
        }
        fetchData()
       },[])

       const location = useLocation()
       const routeName = location.pathname.split('/').pop()

       return (<>
            
        {routeName == "Home" || '' ? (
          <>
            {state.products.map((Product) => (
              <ProductsDetails details={Product} />
            ))}
          </>
        ) : (
          state.products
            .filter((product) => product.category === routeName)
            .map((fProduct) => <ProductsDetails details={fProduct} />)
        )}
    </>);
}
export default Products