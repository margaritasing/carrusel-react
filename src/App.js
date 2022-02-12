import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Header from './component/Header/Header';
import Carousel from './component/Carousel/Carousel'
import CarouselBig from './component/CarouselBig/CarouselBig'
import Feature from './component/Feature/Feature';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <Carousel/>
    <CarouselBig/>
    <Feature/>



    <Footer/>
    
    </div>
  );
}

export default App;
