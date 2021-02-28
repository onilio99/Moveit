import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/CompleteChallenges.module.css'

export function CompletedChallenges() {

    const {challengesCompleted} = useContext(ChallengeContext)

    return (
        <div className={styles.completeChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>

        </div>
    )
}