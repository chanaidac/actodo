import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

function App() {

  const [users, setUsers] = useState(
    [
      {
        id: "1",
        username: "chan",
        password: '123'
      },
      {
        id: "2",
        username: "aswin",
        password: '123'
      }
    ]
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} setUsers={setUsers}></Login>}></Route>
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers}></Signup>}></Route>
        <Route path="/landing" element={<Landing></Landing>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;