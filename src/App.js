import './App.css';
import {Routes , Route} from "react-router-dom";
import Users from './components/Users/Users';
// import Photos from './components/Photos/Photos';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Album from './components/Album/Album';
import Photos from './components/Photos/Photos';

const App = () => {
  return (
    <div className='container'>
      <Header></Header>
       <Routes>
        <Route path ='/' element={<Users></Users>}></Route>
        <Route path ='/users' element={<Users></Users>}></Route>
        <Route path='posts' element={<Posts></Posts>}></Route>
        <Route path='album' element={<Album></Album>}></Route>
        <Route path='photos' element={<Photos></Photos>}></Route>
       
       </Routes>
    </div>
    
  );
}

export default App;