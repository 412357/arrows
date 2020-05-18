import React, { useContext } from 'react'

import Cell from '../cell/Cell'
import GameSettingsContext from '../../state/context/GameSettingsContext'

import styles from './Row.module.css'

export default function Row({ rowIndex }) {
    const { settings: { cols } } = useContext(GameSettingsContext)
    const cellComponents = [...Array(cols)].map((e, i) => <Cell key={i} y={rowIndex} x={i} />)
    return (
        <tr className={styles.row}>
            {cellComponents}
        </tr>
    )
}