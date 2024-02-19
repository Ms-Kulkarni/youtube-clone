import { Provider } from 'react-redux'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Head from './components/Head';
import Body from './components/Body';
import MainContainer from './components/MainContainer'
import store from "./Utils/store"
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: '/',
      element: <MainContainer />
    },
    {
      path: 'watch',
      element: <WatchPage />
    }


  ]
}]);



const App = () => {
  return (
    <Provider store={store}>
      <>
        <Head />
        <RouterProvider router={appRouter} />
      </>
    </Provider>

  );
}

export default App;
