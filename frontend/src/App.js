import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AuthProvider from "./Contexts/AuthProvider";
import AuthRoutes from "./Routes/Auth";
import ClientRoutes from "./Routes/Client";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AuthRoutes />
          <ClientRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
