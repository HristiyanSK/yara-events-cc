import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WishList from "./pages/WishList";
import EventDetails from "./pages/EventDetails";
import MyEvents from "./pages/MyEvents";
import { styled } from "styled-components";
import MainContextProvider from "./context/MainContext";

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
            <Route path="/my_events" element={<MyEvents />} />
            <Route path="/event/:eventid" element={<EventDetails />} />
          </Routes>
        </MainHolder>
      </MainContextProvider>
    </BrowserRouter>
  );
}

export default App;
