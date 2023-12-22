import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from '../components/pages/homePage/HomePage';
import { CollectionView } from '../components/pages/collectionPage/CollectionPage';
import {AboutView} from '../components/pages/aboutPage/AboutPage';

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