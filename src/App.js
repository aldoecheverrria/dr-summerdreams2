import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Header from './Header';
import Main from './Main';


function App() {
  return (
    <div className="app">
      <div className="container__left">
        <Header/>
        <Main/>
      </div>
      <div className="container__right">
        <MenuIcon/>
        <div className="bottom">
          <div className="product" >
            <div className="product__container">
              <h2>Chinesse outfit embroidery</h2>
            <LocalMallIcon/> 
            </div>
            <p>$120.90</p>
          </div>
          <div className="arrows">
            <ArrowBackIosIcon/>
            <ArrowForwardIosIcon/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
