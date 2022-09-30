import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedBackProvider } from "./context/FeedbackContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";

// global state is assigned at the App level, hence all props using it are declared here.

function App() {
  const [feedback, setFeedback] = useState(FeedbackData); //global state for feedback as imported from data folder.

  const addFeedback = (newFeedback) => {
    // addFeedback is a prop on the FeedbackForm component
    newFeedback.id = uuidv4(); //uses a library to assign an id as it is a list/array
    setFeedback([newFeedback, ...feedback]); // uses the spread operator to take the existing feedback and then append the new feedback to -g state
  };

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
                  <FeedbackForm handleAdd={addFeedback} />{" "}
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
