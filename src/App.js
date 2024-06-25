import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ConfigProvider } from "antd";
import Layout from "./components/Layout";
import Stake from "./components/Stake";
import Unstake from "./components/Unstake";
import DeFi from "./page/defi";
import Referral from "./page/referral";

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
  {
    path: "/defi",
    element: <DeFi />,
  },
  {
    path: "/referral",
    element: <Referral />,
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
