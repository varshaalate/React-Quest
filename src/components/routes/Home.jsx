import React from 'react'
import { BrowserRouter ,Routes,Route ,Link} from 'react-router-dom';
import DynamicRoute from './DynamicRoute'

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <BrowserRouter>
      
      <nav>
     
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
        <Link to="/user/3">User 3</Link>
     </nav>


     <Routes>
      {/* <Route path='/'  element={<Home/>} />  */}
      <Route path='/user/:id' element={<DynamicRoute/>}/>
     </Routes>
    

    
    </BrowserRouter>
    </div>
  );
}

export default Home
