import LoginForm from './Components/LoginForm/loginform';
import StockPage from './Components/StockPage/stockpage';
import AddItems from './Components/AddItems/additems';
import SalePage from './Components/SalePage/salepage';
import Layout from './../src/Layout/layout'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<LoginForm />} />
                <Route path="stockpage" element={<StockPage />} />
                <Route path="additems" element={<AddItems />} />
                <Route path="salepage" element={<SalePage />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
