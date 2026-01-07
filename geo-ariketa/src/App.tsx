import MainPage from './pages/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page from './pages/Page'
import Favorites from './pages/Favorites'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page/>}>
          <Route index element={<MainPage/>}/>
          <Route path="favorites" element={<Favorites/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
