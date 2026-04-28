import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import RouterApp from "./routes";
import Header from "./components/elements/Header"

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose="1000" />
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
