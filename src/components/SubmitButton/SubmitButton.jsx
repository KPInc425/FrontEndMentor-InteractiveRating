import styles from './SubmitButton.module.sass';

const SubmitButton = ({ setSubmitRating }) => {
    return (
        <button className={styles.submitButton} onClick={() => setSubmitRating(true)}>Submit</button>
    )
}

export default SubmitButton;