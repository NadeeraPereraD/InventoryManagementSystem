import './App.css';
import HomeLayout from './layouts/HomeLayout';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      {/* <TopNavigation/>
      <div className='container'>
          <DescriptionCard/>
          <img src={bgImage} alt='bgImage' className='bgImage'/>         
      </div> */}
      
      <HomeLayout/>
       
    </div>
  );
}

export default App;
