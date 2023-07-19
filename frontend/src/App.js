import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AuthProvider from "./Contexts/AuthProvider";
import AuthRoutes from "./Routes/Auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AuthRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
