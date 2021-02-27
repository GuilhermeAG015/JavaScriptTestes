import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src='https://avatars.githubusercontent.com/u/61588741?s=400&u=2369be70f680b1b2bcf0cf05a15084b0ae3e8844&v=4' alt='Guilherme Alexandre' />
            <div>
                <strong>Guilherme Alexandre</strong>
                <p>
                    <img src='icons/level.svg' alt='level icon' />
                    Level 1
                </p>
            </div>
        </div>
    )
}