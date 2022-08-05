import {BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routers from './routes/Routers';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <div>
          <Routers/>
        </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
