import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



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
              <h2>Fun yellow outfit</h2>
            <LocalMallIcon/> 
            </div>
            <p>$120.90</p>
          </div>
          <div className="arrows">
            <div className="containerArrow arrowBack">
            <ArrowBackIcon/>
            </div>
            <div className="containerArrow arrowForward">
              <ArrowForwardIcon/>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
