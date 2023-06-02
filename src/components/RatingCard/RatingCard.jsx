import { useState } from 'react'
import RatingStarIcon from '../RatingStarIcon/RatingStarIcon'
import styles from './RatingCard.module.sass'
import RatingSelector from '../RatingSelector/RatingSelector'
import SubmitButton from '../SubmitButton/SubmitButton'

const RatingCard = () => {
    const [rating, setRating] = useState([1])
    return (
      <div className={styles.card}>
        <RatingStarIcon rating={rating} />
  
        <h2 className={styles.cardHeader}>How did we do?</h2>
        <p className={styles.cardBody}>
            Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!
        </p>

        <RatingSelector setRating={setRating} />
  
        <SubmitButton />
  
        {/* <!-- Thank you state start --> */}
  
        {/* You selected <!-- Add rating here --> out of 5 */}
  
        {/* Thank you! */}
  
        {/* We appreciate you taking the time to give a rating. If you ever need more support, 
        don't hesitate to get in touch! */}
  
        {/* <!-- Thank you state end --> */}
      </div>
    )
  }
  
export default RatingCard;  


