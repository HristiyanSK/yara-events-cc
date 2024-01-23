import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WishList from "./pages/WishList";
import MyCreatedEvents from "./pages/MyEvents";
import styled, { createGlobalStyle } from "styled-components";
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

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  div, input, section {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <MainContextProvider>
        <GlobalStyle />
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

// const fetchData = () => {
//   // Imagine here an API call which returns a random number
//   return Math.random();
// };

// const runHeavyCalc = (data: any) => {
//   if (!data) return;
//   console.log("Computing heavy func with data", data);
//   // Math.floor is not heavy, use your imagination again
//   return Math.floor(data * 100);
// };

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState<number | undefined>();
//   console.log("App rendered with count", count);

//   useEffect(() => {
//     const data = fetchData();
//     setData(data);
//   }, []);

//   // const result = runHeavyCalc(data);
//   const result = useMemo(() => runHeavyCalc(data), [data]);
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <p>Counter: {count}</p>
//       <p>Result is {result}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//     </div>
//   );
// };
// export default App;
