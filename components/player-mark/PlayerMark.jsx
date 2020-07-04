import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import GameSettingsContext from '../../state/context/GameSettingsContext'
import { P1ID, P2ID } from '../../utils/client/constants/_players'
import styles from './PlayerMark.module.css'

export default function PlayerMark({ playerId }) {
    const { settings: { p1Mark, p2Mark } } = useContext(GameSettingsContext)
    const markMap = {
        [P1ID]: p1Mark,
        [P2ID]: p2Mark,
    }
    return (
        <span className={styles.mark}>
            {markMap[playerId]}
        </span>
    )
}

PlayerMark.propTypes = {
    playerId: PropTypes.oneOf([P1ID, P2ID])
}
