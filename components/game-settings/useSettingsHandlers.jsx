import React, { useContext } from 'react'
import GameSettingsContext from '../../state/context/GameSettingsContext'
import stringToInt from '../../utils/client/stringToInt'

function selectValidValue(newVal, oldVal) {
    if (typeof newVal !== 'undefined') {
        const parsedVal = stringToInt(newVal)
        return parsedVal && parsedVal > 0 ? parsedVal : oldVal
    }
    return oldVal
}

export default function useSettingsHandlers() {
    const { settings, setSettings } = useContext(GameSettingsContext)
    const { rows, cols } = settings

    function changeSettings({ newRows, newCols }) {
        setSettings(
            {
                rows: selectValidValue(newRows, rows),
                cols: selectValidValue(newCols, cols),
            }
        )
    }

    return {
        onChangeRows: ev => changeSettings({ newRows: ev.target.value }),
        onChangeCols: ev => changeSettings({ newCols: ev.target.value })
    }
}