
import './App.css'
import About from './Components/About/About'
import Brands from './Components/Brands/Brands'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Info from './Components/Info/Info'
import Promotions from './Components/Promotions/Promotions'
import ToDo from './Components/To-do/To-do'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Brands/>
        <ToDo/>
        <About/>
        <Promotions/>
        <Info/>
        <Footer/>
      </div>
    </>
  )
}

export default App
