import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from '../components/views/HomeView';
import { CollectionView } from '../components/views/CollectionView';
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeView/>}></Route>
            <Route path='/collection' element={<CollectionView/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;