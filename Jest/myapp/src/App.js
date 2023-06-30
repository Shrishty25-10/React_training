// import "./App.css";
// import Main from "./test/Main";
// import { QueryClientProvider, QueryClient } from "react-query";

// const queryclient = new QueryClient();

// function App() {

//   return (
//     <QueryClientProvider client={queryclient}>
//       <Main />
//       <div className="App">
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </div>
//     </QueryClientProvider>
//   );
// }

// export default App;

import "./App.css";
import Main from "./test/Main";


function App() {
  return (
    <>
      <Main />
      <div className="App">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      
    </>
  );
}

export default App;
