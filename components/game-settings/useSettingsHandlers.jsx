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

function getUpdatedSettings(currentSettings, newSettings) {
    return Object.assign({}, currentSettings, newSettings)
}

export function useBoardSettingsHandlers() {
    const { settings, setSettings } = useContext(GameSettingsContext)
    const { rows, cols } = settings

    function changeBoard({ newRows, newCols }) {
        setSettings(
            getUpdatedSettings(settings, {
                rows: selectValidValue(newRows, rows),
                cols: selectValidValue(newCols, cols),
            })
        )
    }

    return {
        onChangeRows: ev => changeBoard({ newRows: ev.target.value }),
        onChangeCols: ev => changeBoard({ newCols: ev.target.value }),
    }
}

export function usePlayerSettingsHandlers() {
    const { settings, setSettings } = useContext(GameSettingsContext)
    const { p1Name, p2Name, p1Mark, p2Mark } = settings

    function changePlayer({ newP1Name, newP2Name, newP1Mark, newP2Mark }) {
        setSettings(
            getUpdatedSettings(settings, {
                p1Name: newP1Name || p1Name,
                p2Name: newP2Name || p2Name,
                p1Mark: newP1Mark || p1Mark,
                p2Mark: newP2Mark || p2Mark
            })
        )
    }

    return {
        // TODO: Add sanitization of input
        onChangeP1Name: ev => changePlayer({ newP1Name: ev.target.value }),
        onChangeP2Name: ev => changePlayer({ newP2Name: ev.target.value }),
        onChangeP1Mark: ev => changePlayer({ newP1Mark: ev.target.value }),
        onChangeP2Mark: ev => changePlayer({ newP2Mark: ev.target.value }),
    }
}
