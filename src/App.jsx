// import Footer from './components/Footer';
import Heder from './components/Heder';
// import Details from './pages/Details';
// import DisplaySec from './pages/DisplaySec';
// import Tech from './pages/Tech';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';



const App = () => {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'Page1',
        element: <Page1 />
      }
    ]
  },
  {
    path: 'about-page',
    element: <About />
  }
]);
  return <RouterProvider router={router} />
  // return (
  //   <>
  //     <Heder />
  //     <DisplaySec />
  //     <Tech />
  //     <Details />
  //     <Footer />
      
      
  //   </>
  // );
};

export default App;
