// import "./App.css";
// import Header from "./Header";
// import SideBar from "./Sidebar";
// import Main from "./Main";
// import RightSideBar from "./RightSideBar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Page2 from './Page2';
// import Sales from './components/Sales';
// import Funnel from './components/Funnel';

// function App() {
//   return (
//     <div className="app">
//       <Router>
//         <Header />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div className="app__body ">
//                 <SideBar />
//                 <Main />
//                 <RightSideBar />
//               </div>
//             }
//           />
//           <Route path="/page2" element={<Page2 />} />
//         <Route path="/Sales" element={<Sales />} />
//         <Route path="/Funnel" element={<Funnel />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import "./App.css";
import Main from "./Main";
import RightSideBar from "./RightSideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page2 from "./Page2";
import Sales from "./components/Sales";
import Funnel from "./components/Funnel";
import ChatBot from "./components/chatbot";

const App = () => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const [selectedCompany, setSelectedCompany] = useState("Mahindra");
  const updateSelectedYear = (newYear) => {
    setSelectedYear(newYear);
  };
  const updateSelectedCompany = (newCompany) => {
    setSelectedCompany(newCompany);
  };

  return (
    <div className="app" id="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="app__body ">
                <SideBar updateSelectedYear={updateSelectedYear} />
                <Main
                  selectedYear={selectedYear}
                  selectedCompany={selectedCompany}
                />
                <RightSideBar updateSelectedCompany={updateSelectedCompany} />
              </div>
            }
          />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/Funnel" element={<Funnel />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
