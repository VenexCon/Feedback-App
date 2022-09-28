import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card" //imported styles

function FeedbackItem({item, handleDelete}) { //Each feedback card, receives state from data folder 
 
  return (
    <Card>
        <div className="num-display">{item.rating}</div> 
        <button className="close">
          <FaTimes onClick={() => handleDelete(item.id)} color = 'purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,

}

export default FeedbackItem