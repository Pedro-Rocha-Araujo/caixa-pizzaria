import { BrowserRouter } from "react-router-dom"
import RouterApp from "./routes";
import Header from "./components/elements/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <div className="container">
          <RouterApp />
        </div> 
      </main>
    </BrowserRouter>
  );
}

export default App;
