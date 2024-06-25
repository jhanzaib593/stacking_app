import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ConfigProvider } from "antd";
import Layout from "./components/Layout";
import Home from "./page/home";
import Stake from "./components/Stake";
import Unstake from "./components/Unstake";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Stake />,
      },
      {
        path: "/unstake",
        element: <Unstake />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <ConfigProvider>
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
}

export default App;
