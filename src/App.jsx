import { Route, Routes } from "react-router-dom";
import Display from "./components/Display";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Display />} />
      </Routes>
    </>
  );
};
export default App;
