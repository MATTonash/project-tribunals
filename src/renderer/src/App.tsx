import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Annotator from './pages/Annotator/Annotator'
import Help from './pages/Help/Help'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Settings from './pages/Settings/Settings'
import TaskManager from './pages/TaskManager/TaskManager'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="task-manager" element={<TaskManager />} />
      <Route path="help" element={<Help />} />
      <Route path="settings" element={<Settings />} />
      <Route path="profile" element={<Profile />} />
      <Route path="annotator/:documentId" element={<Annotator />} />
      <Route path="annotator/:documentId/:taskId" element={<Annotator />} />
    </Route>
  )
)

function App() {
  window.ipc.ping()
  return <RouterProvider router={router} />
}

export default App
