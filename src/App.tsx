import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WishList from "./pages/WishList";
import MyCreatedEvents from "./pages/MyCreatedEvents";
import styled from "styled-components";
import MainContextProvider from "./context/MainContext";
import "react-toastify/dist/ReactToastify.css";

const MainHolder = styled.section`
  margin: 40px auto;
  width: 100%;
  max-width: 600px;
  padding: 0 16px;
  display: flex;
  flex-flow: column nowrap;
`;

function App() {
  return (
    <BrowserRouter>
      <MainContextProvider>
        <MainHolder>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wish_list" element={<WishList />} />
            <Route path="/my_created_events" element={<MyCreatedEvents />} />
          </Routes>
        </MainHolder>
      </MainContextProvider>
    </BrowserRouter>
  );
}

export default App;
