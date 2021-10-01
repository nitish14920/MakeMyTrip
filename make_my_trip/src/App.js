import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
// import Routes from '../Routes/Routes';
import Routes from './components/Routes/Routes'
import CarouselApplication from './components/carousel/carousel';


function App() {
	return (
		<div className='App'>
      <Header />
      <Navbar />
      <div style={{position:'relative',top:'-380px'}}>
      <Routes  />
      </div>
      <CarouselApplication />
     
		</div>
	);
}

export default App;
