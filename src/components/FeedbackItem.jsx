import {FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card" //imported styles
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem({item}) { 

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
 
  return (
    <Card>
        <div className="num-display">{item.rating}</div> 
        <button className="close">
          <FaTimes onClick={() => deleteFeedback(item.id)} color = 'teal' />
        </button>
        <button className='edit'>
          <FaEdit onClick={() => {editFeedback(item)}} color = 'teal' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,

}

export default FeedbackItem