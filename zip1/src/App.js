import './App.css';
import Nav from './Nav';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Signup from './Signup';
import PrivateComponent from './pc';
import Login from './Login';
import Addproduct from './AddProduct';
import Productlist from './Productlist';
import AddSubscription from './AddSubscription';
import Subscriptionlist from './Subscriptionlist';
import Profile from './Profile';
// import Routing from './Routing'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
     <Routes>
      <Route element={<PrivateComponent/>}>
      <Route path='/' element={<Productlist/>}/>
      <Route path='/Sub' element={<Subscriptionlist/>}/>
      <Route path='/Add' element={<Addproduct/>}/>
      <Route path='/Update' element={<h1>Update product listing component</h1>}/>
      <Route path='/Logout' element={<h1>Logout</h1>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Addsub' element={<AddSubscription/>}/>
      </Route>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
     </Routes>
     <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
