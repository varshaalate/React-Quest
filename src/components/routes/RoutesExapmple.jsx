import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Home() {
  return <h4>Home Component</h4>
}

function About() {
  return <h4>About Component</h4>
}

function Contact() {
  return <h4>Contact Component</h4>
}

function Dashboard() {
  return (
    <div>
      <nav>
        <Link to="exp1">Exapmpe 1</Link> | {" "}
        <Link to="exp2">Exapmle2</Link>
      </nav>
      <Outlet />
    </div>
  )
}

function ExampleRoute1() {
  return <h4>Exapmle Routes</h4>
}

function ExampleRoute2() {
  return <h4>Exapmle Routes1</h4>
}
const RoutesExapmple = () => {

  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/about">About</Link>| {" "}
          <Link to="/contact">contact</Link>| {" "}
          <Link to="/dash">Dashboard</Link>

        </nav>

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          <Route path='/dash' element={<Dashboard />}>
            <Route path="exp1" element={<ExampleRoute1 />} ></Route>
            <Route path="exp2" element={<ExampleRoute2 />} ></Route>
          </Route>

          <Route path='*' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesExapmple
