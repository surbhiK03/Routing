import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Contact from "./component/pages/Contact";

const MainRoutes = () => {
    return (
        <>
        <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
        </>
    );
  };
  
  export default MainRoutes;