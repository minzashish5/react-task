import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'


const App=()=>(
    <Router>
      <Routes>
          <Route path="/" elment={<Homepage />}/>
      </Routes>
    </Router>
)

export default App