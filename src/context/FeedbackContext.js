import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const FeedbackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetch feedbvack

  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  //to add additional/ new feedback
  const addFeedback = (newFeedback) => {
    // addFeedback is a prop on the FeedbackForm component
    newFeedback.id = uuidv4(); //uses a library to assign an id as it is a list/array
    setFeedback([newFeedback, ...feedback]); // uses the spread operator to take the existing feedback and then append the new feedback to -g state
  };
  //filters the initial state
  const deleteFeedback = (id) => {
    // is a prop on the FeedbackList component that accepts an id
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id)); // this then filters the array, to only allow the items without the selected id to pass.
    }
  };

  //update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  //set item to be updated

  const editFeedback = (item) => {
    console.log(item);
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        isLoading,
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
