import './App.css'
import RecurringDatePicker from './components/RecurringDatePicker'
import { RecurringProvider } from './context/RecurringContext'

function App() {

  return (
    <RecurringProvider>
      <RecurringDatePicker/>
    </RecurringProvider>
  )
}

export default App
