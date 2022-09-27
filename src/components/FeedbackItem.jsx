import PropTypes from 'prop-types'
import Card from "./shared/Card" //imported styles

function FeedbackItem({item}) { //Each feedback card, receives state from data folder 

  return (
    <Card>
        <div className="num-display">{item.rating}</div> 
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,

}

export default FeedbackItem