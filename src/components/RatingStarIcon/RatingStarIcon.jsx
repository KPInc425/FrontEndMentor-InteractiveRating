import starIcon from '../../assets/images/icon-star.svg'
import styles from './RatingStarIcon.module.sass'

const RatingStarIcon = ({rating}) => {
    let ratingStars = []
    for (let i = 0; i < rating; i++) {
      ratingStars.push(<img key={i} src={starIcon} alt="star icon" className={styles.starIcon} />)
    }
    return (
      <div className={styles.starIconContainer}>
        {ratingStars}
      </div>
    )
}

export default RatingStarIcon;

// Change this to dynamic
// https://gist.github.com/mnishiguchi/1a686249b63582da2bcef23ecf6671fb