import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal'

interface challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeContextData {
    level: number;
    currentXp: number;
    challengesCompleted: number;
    activeChallenge: challenge;
    xpToNextLvl: number;
    levelUp: () => void;
    StartNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelModal: () => void
}

interface ChallengeProviderProps {
    children: ReactNode;
    level: number;
    currentXp: number;
    challengesCompleted: number;
}

export const ChallengeContext = createContext({} as ChallengeContextData)

export function ChallengesProvider({ children, ...rest }: ChallengeProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentXp, setCurrentXp] = useState(rest.currentXp ?? 0)
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    const [isLevelModalOpen, setIslevelModalOpen] = useState(false)

    const xpToNextLvl = (Math.pow((level + 1) * 4, 2) ?? 0)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level))
        Cookies.set('currentXp', String(currentXp))
        Cookies.set('challengesCompleted', String(challengesCompleted))
    }, [level, currentXp, challengesCompleted])

    function levelUp() {
        setLevel(level + 1)
        setIslevelModalOpen(true)
    }

    function closeLevelModal() {
        setIslevelModalOpen(false)
    }

    function StartNewChallenge() {
        const randomChallengesIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengesIndex]

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge

        let finalXp = currentXp + amount

        if (finalXp >= xpToNextLvl) {
            finalXp = finalXp - xpToNextLvl
            levelUp();
        }

        setCurrentXp(finalXp)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
    }

    return (
        <ChallengeContext.Provider
            value={{
                level,
                currentXp,
                challengesCompleted,
                activeChallenge,
                xpToNextLvl,
                levelUp,
                StartNewChallenge,
                resetChallenge,
                completeChallenge,
                closeLevelModal,
            }}>
            {children}
            {isLevelModalOpen && <LevelUpModal />}
        </ChallengeContext.Provider>
    )
}
