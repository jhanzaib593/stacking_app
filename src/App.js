import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ConfigProvider } from "antd";
import Layout from "./components/Layout";
import Stake from "./components/Stake";
import Unstake from "./components/Unstake";
import DeFi from "./page/defi";
import Referral from "./page/referral";
import Main from "./page/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
        path: "", // Relative path for the default child
        element: <Stake />,
      },
      {
        path: "unstake", // Relative path for the unstake child
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
