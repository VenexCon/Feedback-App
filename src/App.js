import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedBackProvider } from "./context/FeedbackContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";

// global state is assigned at the App level, hence all props using it are declared here.

function App() {
  return (
    <FeedBackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="container">
                  <FeedbackForm />{" "}
                  {/* we are passing in the handleAdd as a prop, that contains a function. */}
                  <FeedbackStats />{" "}
                  {/* passing in a prop that takes feedback, this then needs to be caught by the FeedbackStats component */}
                  <FeedbackList />{" "}
                  {/* we assign props here, because this is where the global state will be passed */}
                  <AboutIconLink />
                </div>
              </>
            }
          ></Route>
        </Routes>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </FeedBackProvider>
  );
}

export default App;
