import './App.css';
import Footer from './components/footer/footer';
import Table  from './components/tables/tables';
import TableDetail from './components/body/table/tableDetail';
import Home from './components/body/home/home';
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <section id="section1">
          
          <header>
            <p>myBILL</p>
            <div id="list">
                <ul>
                    <li><Link to='/' style={{ textDecoration: 'none' }} id='home'>Home</Link></li>
                    <li>Mesas</li>
                </ul>
            </div>
        </header>

        <Home/>

        </section>
        
        <Routes>
          <Route path="/" element={<Table/>}/>
          <Route path="/table/:id" element={<TableDetail/>}/>
        </Routes>
        
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
