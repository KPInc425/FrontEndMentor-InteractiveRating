import confirmImage from '../../assets/images/illustration-thank-you.svg'
import styles from './SubmitConfirmation.module.sass';

const SubmitConfirmation = ({rating}) => {
    return (
        <>
            <img src={confirmImage} alt="placeholder" className={styles.thankYouImg} />
            <div className={styles.ratingBadge}>
                You selected {rating} out of 5
            </div>

            <h2>
                Thank you!
            </h2>

            <p>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don't hesitate to get in touch!
            </p>
        </>
    )
}

export default SubmitConfirmation;