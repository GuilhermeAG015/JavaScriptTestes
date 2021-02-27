import { useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
    const [time, setTime] = useState(25 * 60)
    const [active, setActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('')
    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('')

    function startCount() {
        setActive(true)
    }

    function resetCount() {
        clearTimeout(countdownTimeout)
        setActive(false)
        setTime(25 * 60)
    }

    useEffect(() => {
        if (active && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            },
                1000
            )
        } else if (active && time == 0) {
            setHasFinished(true)
            setActive(false)
        }
    },
        [active, time]
    )

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
                    Iniciar um ciclo
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