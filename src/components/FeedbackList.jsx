import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({feedback, handleDelete}) { //App passes in feedback data
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>
    }

    return (
    <div className="feedback-list">
        <AnimatePresence>
        {feedback.map((item) => (
            <motion.div 
            key={item.id}
            initial= {{opacity: 0}}
            animate = {{opacity: 1}}
            exit = {{opacity: 0}}
            >
            <FeedbackItem 
            key={item.id} 
            item = {item} 
            handleDelete ={handleDelete}  />
            </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )

  /* return (
    <div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem 
            key={item.id} 
            item = {item} 
            handleDelete ={handleDelete}  />
        ))}
    </div>
  ) */


}

FeedbackList.propTypes = {
    feedback : PropTypes.array.isRequired
}

export default FeedbackList