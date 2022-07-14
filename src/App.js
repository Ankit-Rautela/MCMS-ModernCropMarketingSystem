import './App.css';
import Nav from './Components/nav';
import Header from './Components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/footer';
import SignUp from './Components/signup';
import PrivateComponent from './Components/privateComponent';
import Login from './Components/login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';
import Profile from './Components/profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />} >
            <Route path='/' element={<ProductList />} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/update/:id' element={<UpdateProduct />} />
          </Route>

          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
