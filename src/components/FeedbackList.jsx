import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback, handleDelete}) { //App passes in feedback data
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>
    }

  return (
    <div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem 
            key={item.id} 
            item = {item} 
            handleDelete ={handleDelete}  />
        ))}
    </div>
  )
}

FeedbackList.propTypes = {
    feedback : PropTypes.array.isRequired
}

export default FeedbackList