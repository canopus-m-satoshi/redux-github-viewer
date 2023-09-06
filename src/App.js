import { Route, Routes } from 'react-router-dom'
import Top from './pages/Top'
import Profile from './pages/Profile'
import Issue from './pages/Issue'
import PullRequest from './pages/PullRequest'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/pull-request" element={<PullRequest />} />
      </Routes>
    </div>
  )
}

export default App
