import styles from './RatingSelector.module.sass';

const RatingSelector = ({ setRating }) => {
    const ratingScale = [1, 2, 3, 4, 5]
    return (
      <div className={styles.ratingSelectorContainer}>
        {ratingScale.map((rating) => (
          <button key={rating} className={styles.ratingSelector} onClick={() => setRating(rating)}>{rating}</button>
        ))}
      </div>
    )
}

export default RatingSelector;