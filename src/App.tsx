import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Help from "./renderer/src/pages/Help";
import Home from "./renderer/src/pages/Home";
import Profile from "./renderer/src/pages/Profile";
import Settings from "./renderer/src/pages/Settings";
import TaskManager from "./renderer/src/pages/TaskManager";
import RootLayout from "./layouts/RootLayout";
import Annotator from "./renderer/src/pages/Annotator";
import { tasks } from "./lib/dummyData/tasks";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="task-manager" element={<TaskManager />} />
      <Route path="help" element={<Help />} />
      <Route path="settings" element={<Settings />} />
      <Route path="profile" element={<Profile />} />
      <Route path="annotator/:key" element={<Annotator tasks={tasks} />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
