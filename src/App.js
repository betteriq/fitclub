import Header from "./components/Header"
import Programshop from "./components/Programshop"
import Aboutclub from "./components/Aboutclub"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Programshop/>
      <Aboutclub/>
    </div>
  )
}

export default App