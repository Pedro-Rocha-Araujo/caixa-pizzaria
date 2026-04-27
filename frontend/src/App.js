import { BrowserRouter } from "react-router-dom"
import RouterApp from "./routes";
import Header from "./components/elements/Header"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <div className="container">
            <RouterApp />
          </div> 
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
