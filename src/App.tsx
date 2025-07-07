import { ThemeProvider } from "@/components/theme-provider";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ProtectedRoute } from "./utils/ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
