import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from '../components/views/HomeView';
import { CollectionView } from '../components/views/CollectionView';
import {AboutView} from '../components/views/AboutView';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeView/>}></Route>
            <Route path='/collection' element={<CollectionView/>}></Route>
            <Route path='/about' element={<AboutView/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;