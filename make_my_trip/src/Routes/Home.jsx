import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import Aeroplane from "../Components/Aeroplane/Aeroplane"
import NavbarSearchItems from "../Components/NavbarSearchItems/NavbarSearchItems"
import CarouselApplication from '../Components/carousel/carousel';
import Dashboard from '../Components/Dashboard';
// import {FloatNav} from './components/Navbar/FloatNavbar'


function Home() {
	return (
		<div className='home2'>
         {/* <FloatNav /> */}
      <Header />
     
      <Navbar />
 
      <div style={{position:'relative',top:'-380px', marginLeft:"6%"}}>
      <Aeroplane/>
      </div>
      
      <CarouselApplication />
      <Dashboard/>
     
     
		</div>
	);
}

export {Home};
