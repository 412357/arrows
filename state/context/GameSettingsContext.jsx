import React from 'react'

const GameSettingsContext = React.createContext()

export const SettingsProvider = GameSettingsContext.Provider
export const SettingsConsumer = GameSettingsContext.Consumer
export default GameSettingsContext