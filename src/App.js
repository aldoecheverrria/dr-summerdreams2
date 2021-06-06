import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Header from './Header';


function App() {
  return (
    <div className="app">
      <div className="container__left">
        <Header/>
      </div>
      <div className="container__right">
        <MenuIcon/>
        <div className="bottom">
          <div className="product" >
            <div className="product__container">
              <h2>Chinesse outfit in yellow with embroidery</h2>
            <LocalMallIcon/> 
            </div>
            <p>$120.90</p>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default App;
