import React, { useState } from 'react'

import Board from '../board/Board'
import GameSettings from '../game-settings/GameSettings'
import { SettingsProvider } from '../../state/context/GameSettingsContext'

export default function Game({ }) {
    // possibly initialize game state at this level
    // TODO: create a defaultSettings object in a separate file
    const [settings, setSettings] = useState({
        cols: 5, rows: 5, p1Name: '', p2Name: '', p1Mark: 'X', p2Mark: 'O', p1Position: [0, 0], p2Position: [0, 0]
    })
    return (
        <div className='game'>
            {/* <Header /> */}
            <SettingsProvider value={{ settings, setSettings }} >
                <GameSettings />
                <Board />
            </SettingsProvider>
            {/* <Players /> */}
        </div>
    )
}
