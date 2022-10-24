import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PageLoader from "./components/PageLoader";
import NoPage from "./components/NoPage";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Create = lazy(() => import("./pages/Create"));
const Connect = lazy(() => import("./pages/Connect"));
const Community = lazy(() => import("./pages/Community"));

const App = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={<PageLoader/>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="create"
        element={
          <Suspense fallback={<PageLoader />}>
            <Create />
          </Suspense>
        }
      />
      <Route
        path="connect"
        element={
          <Suspense fallback={<PageLoader />}>
            <Connect />
          </Suspense>
        }
      />
      <Route
        path="community"
        element={
          <Suspense fallback={<PageLoader />}>
            <Community />
          </Suspense>
        }
      />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
