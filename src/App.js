import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// global state is assigned at the App level, hence all props using it are declared here.

function App() {
  const [feedback, setFeedback] = useState(FeedbackData); //global state for feedback as imported from data folder.

  const addFeedback = (newFeedback) => {
    // addFeedback is a prop on the FeedbackForm component
    newFeedback.id = uuidv4(); //uses a library to assign an id as it is a list/array
    setFeedback([newFeedback, ...feedback]); // uses the spread operator to take the existing feedback and then append the new feedback to -g state
  };

  const deleteFeedback = (id) => {
    // is a prop on the FeedbackList component that accepts an id
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id)); // this then filters the array, to only allow the items without the selected id to pass.
    }
  };

  return (
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
                <FeedbackStats feedback={feedback} />{" "}
                {/* passing in a prop that takes feedback, this then needs to be caught by the FeedbackStats component */}
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />{" "}
                {/* we assign props here, because this is where the global state will be passed */}
              </div>
            </>
          }
        ></Route>
      </Routes>

      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
