import React, { useContext } from 'react'

import Row from '../row/Row'
import GameSettingsContext from '../../state/context/GameSettingsContext'

export default function Board() {
    const { settings: { rows } } = useContext(GameSettingsContext)
    const rowComponents = [...Array(rows)].map((e, i) => <Row key={i} rowIndex={i} />)
    return (
        <table className={'board'}>
            <tbody>
                {rowComponents}
            </tbody>
        </table>
    )
}