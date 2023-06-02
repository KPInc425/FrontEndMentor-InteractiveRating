import { useState } from 'react'
import RatingStarIcon from '../RatingStarIcon/RatingStarIcon'
import styles from './RatingCard.module.sass'
import RatingSelector from '../RatingSelector/RatingSelector'
import SubmitButton from '../SubmitButton/SubmitButton'
import SubmitConfirmation from '../SubmitConfirmation/SubmitConfirmation'

const RatingCard = () => {
    const [rating, setRating] = useState([1])
    const [submitRating, setSubmitRating] = useState(false)

    return (
      <div className={styles.card}>
        {submitRating ? <SubmitConfirmation rating={rating} /> :
        
        <>
          <RatingStarIcon rating={rating} />
          <h2 className={styles.cardHeader}>How did we do?</h2>
          <p className={styles.cardBody}>
              Please let us know how we did with your support request. All feedback is appreciated
              to help us improve our offering!
          </p>
          <RatingSelector setRating={setRating} />
          <SubmitButton setSubmitRating={setSubmitRating} />
        </>
        }
          
      </div>
    )
  }
  
export default RatingCard;  
