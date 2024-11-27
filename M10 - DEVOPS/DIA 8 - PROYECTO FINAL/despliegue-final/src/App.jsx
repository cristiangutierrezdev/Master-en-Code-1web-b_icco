import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100vh"}}>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App