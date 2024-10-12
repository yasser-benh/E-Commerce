
import './App.css'
import Products from './component/Products/Products'
import Navbar from './component/navbar/navbar'


function App() {

  return (
    <>
    <header className='header-Container'>
        <Navbar/>
    </header>



    <section className='mainSection-container'>
      <Products/>
   </section>
   
    </>
  )
}

export default App
