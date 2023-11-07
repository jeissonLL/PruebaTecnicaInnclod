import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Nav from './Components/Nav';
import Processes from './Views/Processes/index';
import CreateProcesses from './Views/Processes/Create';
import EditProcesses from './Views/Processes/Edit';
import Documents from './Views/Documents/index';
import CreateDocuments from './Views/Documents/Create';
import EditDocument from './Views/Documents/Edit'
import ProcessDocuments from './Views/ProcessDocuments/index';
// import CreateProcDoct from './Views/ProcessDocuments/Create';
//import EditProcDoct from './Views/ProcessDocuments/Edit';
import Login from './Views/Login';
import Register from './Views/Register';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path="/process" element={<Processes />}/>
          <Route path="/createProc" element={<CreateProcesses />}/>  
          <Route path="/editProc/:id" element={<EditProcesses />}/>
          <Route path="/documents" element={<Documents />}/>
          <Route path="/editDocto/:id" element={<EditDocument />}/>
          <Route path="/createDocto" element={<CreateDocuments />}/>
          <Route path="/process_document" element={<ProcessDocuments />}/>
          {/* <Route path="/editProcDoct/:id" element={<EditProcDoct />}/> */}
          {/* <Route path="/createProcDoct" element={<CreateProcDoct />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
   
}

export default App
