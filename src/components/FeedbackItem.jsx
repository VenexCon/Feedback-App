import {FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card" //imported styles
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem({item}) { //Each feedback card, receives state from data folder 

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
 
  return (
    <Card>
        <div className="num-display">{item.rating}</div> 
        <button className="close">
          <FaTimes onClick={() => deleteFeedback(item.id)} color = 'purple' />
        </button>
        <button className='edit'>
          <FaEdit onClick={() => {editFeedback(item)}} color = 'purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,

}

export default FeedbackItem