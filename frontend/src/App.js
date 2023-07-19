import "./App.scss";
import AuthProvider from "./Contexts/AuthProvider";
import AuthRoutes from "./Routes/Auth";

function App() {
  return (
    <AuthProvider>
      <AuthRoutes />
    </AuthProvider>
  );
}

export default App;
