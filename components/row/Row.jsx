import React, { useContext } from 'react'

import Cell from '../cell/Cell'
import GameSettingsContext from '../../state/context/GameSettingsContext'

import styles from './Row.module.css'

export default function Row({ rowIndex }) {
    const { settings: { cols, p1Position, p2Position } } = useContext(GameSettingsContext)

    // TODO: split as hook useCellComponents(rowIndex)
    const cellComponents = [...Array(cols)].map((e, i) => {
        const cellProps = { key: i, y: rowIndex, x: i }
        // TODO: renderMarks function based on x,y player positions
        return <Cell {...cellProps}/>
    })
    return (
        <tr className={styles.row}>
            {cellComponents}
        </tr>
    )
}
