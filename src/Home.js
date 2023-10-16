import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import './Home.css';
function Home() {

  return (
    <div className="Home ">
      <Routes>
        <Route >
       <Layout></Layout>

        </Route>

      </Routes>

    </div>
  );
}

export default Home;
