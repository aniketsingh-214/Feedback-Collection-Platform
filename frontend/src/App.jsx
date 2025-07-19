import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateForm from './pages/CreateForm';
import PublicForm from './pages/PublicForm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateForm />} />
        <Route path="/public/:formId" element={<PublicForm />} />
      </Routes>
    </BrowserRouter>
  );
}
