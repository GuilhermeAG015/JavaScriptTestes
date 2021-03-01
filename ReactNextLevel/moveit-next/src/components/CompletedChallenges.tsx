import { useContext } from 'react'
import { ChallengeContext } from '../context/ContextChallenge'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengeContext)

    return (
        <div className={styles.completedChallengesCompleted}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}