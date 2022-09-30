import { createContext } from "react";
import { useState } from "react";

const FeedbackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is from the Context",
      rating: 10,
    },
  ]);

  const deleteFeedback = (id) => {
    // is a prop on the FeedbackList component that accepts an id
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id)); // this then filters the array, to only allow the items without the selected id to pass.
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
