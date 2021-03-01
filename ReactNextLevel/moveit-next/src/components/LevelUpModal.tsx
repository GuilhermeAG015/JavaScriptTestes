import { useContext } from 'react'
import { ChallengeContext } from '../context/ContextChallenge'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelModal } = useContext(ChallengeContext)

    return (
        <div className={styles.overLay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você Alcançou um novo Level.</p>

                <button type='button' onClick={closeLevelModal}>
                    <img src='/icons/close.svg' alt='Fechar Modal' />
                </button>
            </div>
        </div>
    )
}