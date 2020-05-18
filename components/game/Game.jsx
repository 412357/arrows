import React, { useState } from 'react'

import Board from '../board/Board'
import GameSettings from '../game-settings/GameSettings'
import { SettingsProvider } from '../../state/context/GameSettingsContext'

export default function Game({ }) {
    // possibly initialize game state at this level
    const [settings, setSettings] = useState({ cols: 1, rows: 1 })
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