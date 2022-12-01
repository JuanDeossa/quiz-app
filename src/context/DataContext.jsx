import { createContext, useState } from "react"

export const DataContext = createContext()

export const DataProvider = ({children}) => {

  const [questionsStarted, setQuestionsStarted] = useState(false)

  return (
    <DataContext.Provider
      value={
        {
          questionsStarted,
          setQuestionsStarted,
        }
      }
    >
      {children}
    </DataContext.Provider>
  )
}