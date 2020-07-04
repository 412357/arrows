import React from 'react'

import styles from './Cell.module.css'

export default function Cell({ x, y, renderMarks }) {
    return (
        <td className={styles.cell}>
            <div className={styles.contentWrapper}>
                {x}
                {y}
                {typeof renderMarks === 'function' && renderMarks()}
            </div>
        </td>
    )
}
