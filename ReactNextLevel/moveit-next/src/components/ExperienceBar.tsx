import { useContext } from 'react';
import { ChallengeContext } from '../context/ContextChallenge';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentXp, xpToNextLvl } = useContext(ChallengeContext)

    const percentXpToNextLvl = Math.round(currentXp * 100) / xpToNextLvl

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentXpToNextLvl}%` }} />

                <span className={styles.currentXp} style={{ left: `${percentXpToNextLvl}%` }}>
                    {currentXp} xp
                </span>
            </div>
            <span>{xpToNextLvl} xp</span>
        </header>
    );
}