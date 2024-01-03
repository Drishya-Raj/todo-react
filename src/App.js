import './index.scss';
import Home from './component/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todos from './component/todos';
import Status from './component/status';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos/>} />
        <Route path="/status" element={<Status/>}  />
      </Routes>
    </Router>
  );
}


export default App;
