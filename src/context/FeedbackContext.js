import { createContext } from "react";
import { useState } from "react";
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
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  //to add additional/ new feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch(`/feedback`, {
      method: "POST",
      Headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    console.log(data);

    setFeedback([data, ...feedback]);
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
