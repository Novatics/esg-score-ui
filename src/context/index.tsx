import { createContext, useState } from 'react';

export const EsgScoreContext = createContext<any>(null);

export const EsgScoreProvider = ({ children }) => {
  const [userDoc, setUserDoc] = useState('')
  const [scoreData, setScoreData] = useState(null)
  const state = {
    userDoc,
    setUserDoc,
    scoreData,
    setScoreData,
  }

  return <EsgScoreContext.Provider value={state}>{children}</EsgScoreContext.Provider>
};
