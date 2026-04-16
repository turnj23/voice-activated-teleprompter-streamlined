import { NavBar } from "./features/navbar/NavBar"
import { Content } from "./features/content/Content"

const App = () => {
  return (
    <div className="app">
      <Content />
      <NavBar />
    </div>
  )
}

export default App
