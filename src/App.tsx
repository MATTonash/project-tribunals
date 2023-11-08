import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import TaskManager from "./pages/TaskManager";
import RootLayout from "./layouts/RootLayout";
import Annotator from "./pages/Annotator";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="task-manager" element={<TaskManager />} />
      <Route path="help" element={<Help />} />
      <Route path="settings" element={<Settings />} />
      <Route path="profile" element={<Profile />} />
      <Route path="annotator/:key" element={<Annotator />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
