import React, { useContext } from 'react'

import stringToInt from '../../utils/client/stringToInt'

import GameSettingsContext from '../../state/context/GameSettingsContext'
import useSettingsHandlers from './useSettingsHandlers'

const baseId = 'settings'
const formIds = {
    rows: `${baseId}-rows`,
    cols: `${baseId}-cols`,
}

export default function GameSettings() {
    const { settings: { rows, cols } } = useContext(GameSettingsContext)
    const { onChangeCols, onChangeRows } = useSettingsHandlers()
    return (
        <form>
            <label>Rows</label>
            <input id={formIds.rows} type='number' value={rows} onChange={onChangeRows} />
            <label>Cols</label>
            <input id={formIds.cols} type='number' value={cols} onChange={onChangeCols} />
        </form>
    )
}