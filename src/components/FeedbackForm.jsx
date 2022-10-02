import Card from "./shared/Card"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import {useState, useContext , useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext"


function FeedbackForm() {
 
// this state is local state and as such, only pertains to the FeedbackForm and it's relevant children elements/functions.
const [text, setText] = useState('')
const [btnDisabled, setBtnDisabled] = useState(true)
const [message, setMessage] = useState('')
const [rating, setRating] = useState(10)

const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

useEffect(() => {
  if(feedbackEdit.edit === true){
    setBtnDisabled(false); 
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
  }
},[feedbackEdit])

const handleTextChange = (e) =>{
  if(text === ''){
    setBtnDisabled (true) ; 
    setMessage(null)
  } else if (text !== '' && text.trim().length <= 10 ) {
    setMessage('Text must be at least 10 characters')
    setBtnDisabled(true)
  } else {
    setMessage('All good, submit when ready')
    setBtnDisabled(false)
  }

    setText(e.target.value) //grabs the value from the text input in the return 
}

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback  ={ //returns a new object from the submitted form, this is passed into the app.js function handleAdd. 
        text, //local state
        rating //local state
      }
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      
      setText('')
    }
  }

  return (
    <Card>
        <form onSubmit={handleSubmit} > {/* here we assign the onSubmit function, with a function expression.  */}
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select = {(rating) => {  /* here we declare a prop on the RatingSelect component, we need to catch this, in this component */
              setRating(rating) // here we call the setRating function, for the local rating state. 
            }} />
            <div className="input-group">
                <input onChange={handleTextChange} 
                type="text" 
                placeholder="Write a Review"
                value={text} />
                <Button type= 'submit' isDisabled = {btnDisabled}> Send </Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm