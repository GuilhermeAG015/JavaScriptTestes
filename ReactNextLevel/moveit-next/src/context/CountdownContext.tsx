import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContext } from "./ContextChallenge";

interface CountdownContextData {
    minutes: number;
    seconds: number;
    active: boolean;
    hasFinished: boolean;
    startCount: () => void;
    resetCount: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { StartNewChallenge } = useContext(ChallengeContext)

    const [time, setTime] = useState(0.05 * 60)
    const [active, setActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60


    function startCount() {
        setActive(true)
    }

    function resetCount() {
        clearTimeout(countdownTimeout)
        setActive(false)
        setHasFinished(false)
        setTime(0.05 * 60)
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
            StartNewChallenge()
        }
    },
        [active, time]
    )

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            active,
            hasFinished,
            startCount,
            resetCount,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}