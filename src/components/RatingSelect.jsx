import {useState, useContext, useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext"


function RatingSelect({select}) { //select is destructed from the prop as declared on the FeedbackForm

    const [selected, setSelected] = useState(10) //local state for RatingSelect

    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
      setSelected(feedbackEdit.item.rating)
    },[feedbackEdit])

    const handleChange = (e) => { //this updates the local state. 
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange} //here we declare a function for the onChange event, this is dealt with at a local level.
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect