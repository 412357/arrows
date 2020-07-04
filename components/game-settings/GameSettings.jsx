import React, { useContext } from 'react'

import stringToInt from '../../utils/client/stringToInt'

import GameSettingsContext from '../../state/context/GameSettingsContext'
import { useBoardSettingsHandlers, usePlayerSettingsHandlers } from './useSettingsHandlers'

const baseId = 'settings'
const formIds = {
    p1Name: `${baseId}-p1Name`,
    p2Name: `${baseId}-p2Name`,
    p1Mark: `${baseId}-p1Mark`,
    p2Mark: `${baseId}-p2Mark`,
    rows: `${baseId}-rows`,
    cols: `${baseId}-cols`,
}

export default function GameSettings() {
    const { settings: { rows, cols, p1Name, p2Name, p1Mark, p2Mark } } = useContext(GameSettingsContext)
    const { onChangeCols, onChangeRows } = useBoardSettingsHandlers()
    const { onChangeP1Name, onChangeP2Name, onChangeP1Mark, onChangeP2Mark } = usePlayerSettingsHandlers()

    return (
        <form>
            <label>Player 1 - Name</label>
            <input id={formIds.p1Name} type='text' value={p1Name} onChange={onChangeP1Name} />
            <label>Player 1 - Mark</label>
            <input id={formIds.p1Mark} type='text' value={p1Mark} onChange={onChangeP1Mark} />
            <br />
            <label>Player 2 - Name</label>
            <input id={formIds.p2Name} type='text' value={p2Name} onChange={onChangeP2Name} />
            <label>Player 2 - Mark</label>
            <input id={formIds.p2Mark} type='text' value={p2Mark} onChange={onChangeP2Mark} />
            <br />
            <label>Rows</label>
            <input id={formIds.rows} type='number' value={rows} onChange={onChangeRows} />
            <label>Cols</label>
            <input id={formIds.cols} type='number' value={cols} onChange={onChangeCols} />
        </form>
    )
}
