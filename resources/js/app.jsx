import './bootstrap';
import '../css/app.css'
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";  
import ReactDOM from 'react-dom/client';        
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('app')).render(     
    <Router>
        <Routes>
              <Route path="/" element={<Home />} />
        </Routes>
    </Router>      
);
    
