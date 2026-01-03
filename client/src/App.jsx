import {PrimeReactProvider} from 'primereact/api'
import Router from './Router'

function App() {
  return (
    <>
      <PrimeReactProvider>
        <Router />
      </PrimeReactProvider>
    </>
  )
}
export default App
