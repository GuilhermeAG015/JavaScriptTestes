import { useContext } from 'react'
import { ChallengeContext } from '../context/ContextChallenge'
import { CountdownContext } from '../context/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext)
    const { resetCount } = useContext(CountdownContext)

    function handleChallengeSucessed() {
        completeChallenge();
        resetCount();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCount();
    }

    return (

        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe {activeChallenge.amount} XP </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="imagem" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type='button'
                            className={styles.challengeButtonFalied}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type='button'
                            className={styles.challengeButtonComplete}
                            onClick={handleChallengeSucessed}
                        >
                            Completei
                        </button>
                    </footer>

                </div>
            ) : (
                    <div className={styles.challengeBoxNotActive}>
                        <strong>Finalize um ciclo para iniciar um desafio</strong>
                        <p>
                            <img src='icons/level-up.svg' alt='Level up' />
                        Avance de Level competando desafios.
                    </p>
                    </div>
                )}


        </div>

    )
}