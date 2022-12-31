// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Blog from "./Pages/Blog";
// import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Footer from "./Pages/Shared/Footer";
// import Navbar from "./Pages/Shared/Navbar";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <div>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
//         </div>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;








import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
          {
          path: '/',
          element: <Home />,
          },
          {
            path: '/login',
            element: <Login/>
          },
          {
            path: '/register',
            element: <Register/>
          }
      ]
    }
])
  return (
    <RouterProvider router={router}/>

  );
}

export default App;
