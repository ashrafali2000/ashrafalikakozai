import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import './App.css';
import Home from "./pages/home/Home";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Layout></Layout>} />
          <Route index element={<Home></Home>} />

      </Routes>

    </div>
  );
}

export default App;
