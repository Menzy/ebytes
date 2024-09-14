// import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import EditBlogDetails from "./EditBlogDetails.js";
import Auth from "./Auth.js";
import WithNavbar from "./WithNavbar.js";
import WithoutNavbar from "./WithoutNavbar.js";
import { Account } from './Account.js';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <div >
        <Routes>
          <Route path="/" exact element={<Navigate replace to="/home" />} />
          <Route path="/home" exact element={<WithNavbar component={Home} />} />
          <Route path='/auth' exact element={<WithoutNavbar component={Auth} />} />
          <Route path="/create" exact element={<WithNavbar component={Create} />} />
          <Route path="/account" exact element={<WithNavbar component={Account} />} />
          <Route path="/blogs/:id" element={<WithNavbar component={BlogDetails} />} />
          <Route path="/editblogs/:id" element={<WithNavbar component={EditBlogDetails} />} />
          <Route path="*" element={<WithNavbar component={NotFound} />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>

  );

}

export default App;
