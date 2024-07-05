// import Footer from './components/Footer';
// import Heder from './components/Heder';
// import Details from './pages/Details';
// import DisplaySec from './pages/DisplaySec';
// import Tech from './pages/Tech';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Page1 from './pages/nestedCompo/Page1';
import Page2 from './pages/nestedCompo/Page2';
import { Contact } from './pages/Contact';



const App = () => {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        // path: 'page1',
        element: <Page1 />
      },
      {
        path: 'page2',
        element:<Page2 />
      }
    ]
  },
  {
    path: 'about-page',
    element: <About />
  },
  {
    path: 'contact-page',
    element: <Contact />
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
