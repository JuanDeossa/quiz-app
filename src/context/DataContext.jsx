import { createContext, useState } from "react"

export const DataContext = createContext()

export const DataProvider = ({children}) => {

  const [questionsStarted, setQuestionsStarted] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <DataContext.Provider
      value={
        {
          questionsStarted,
          setQuestionsStarted,
          loading,
          setLoading
        }
      }
    >
      {children}
    </DataContext.Provider>
  )
}
