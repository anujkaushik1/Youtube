import logo from "./logo.svg";
import "./App.css";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchVideo from "./Components/WatchVideo";
import MainVideoContainer from "./Components/MainVideoContainer";
import Demo from "./Components/Demo";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainVideoContainer/>
        },
        {
          path: '/watch',
          element: <WatchVideo/>
        },
        {
          path: "/demo",
          element: <Demo/>
        }
      ]
    },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  );
}

export default App;
