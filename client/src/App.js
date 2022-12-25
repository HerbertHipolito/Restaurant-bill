import './App.css';
import Footer from './components/footer/footer';
import Table  from './components/tables/tables';
import TableDetail from './components/body/table/tableDetail';
import Home from './components/body/home/home';
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend'

function App() {

  return (
    <DndProvider backend={HTML5Backend}>
    <Router>
      <div className="App">
        <section id="section1">
          
          <header>
            <p>myBILL</p>
            <div id="list">
                <ul>
                    <li><Link to='/' style={{ textDecoration: 'none' }} id='home'>Mesas</Link></li>
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
    </DndProvider>
  );
}

export default App;
