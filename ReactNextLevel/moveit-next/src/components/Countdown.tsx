import { useContext, useEffect, useState } from 'react'
import { CountdownContext } from '../context/CountdownContext'
import styles from '../styles/components/Countdown.module.css'



export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        active,
        startCount,
        resetCount
    } = useContext(CountdownContext)

    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('')
    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{leftMinute}</span>
                    <span>{rightMinute}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{leftSecond}</span>
                    <span>{rightSecond}</span>
                </div>
            </div>
            {hasFinished ? (
                <button
                    disabled
                    className={styles.startButton}
                    onClick={startCount}
                >
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        {active ? (
                            <button type='button'
                                className={`${styles.startButton} ${styles.startButtonActive}`}
                                onClick={resetCount}
                            >
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button type='button'
                                    className={styles.startButton}
                                    onClick={startCount}
                                >
                                    Iniciar um ciclo
                                </button>
                            )
                        }
                    </>
                )}
        </div>
    )
}