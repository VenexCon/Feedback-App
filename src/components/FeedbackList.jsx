//import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {//destructure the properties as passed to the FeedbackList
    
    const {feedback} = useContext(FeedbackContext)
    
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>
    }

    return (
    <div className="feedback-list">
        <AnimatePresence>
        {feedback.map((item) => ( //map over the 
            <motion.div 
            key={item.id}
            initial= {{opacity: 0}}
            animate = {{opacity: 1}}
            exit = {{opacity: 0}}
            >
            <FeedbackItem 
            key={item.id} 
            item = {item}   />
            </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )

}


export default FeedbackList