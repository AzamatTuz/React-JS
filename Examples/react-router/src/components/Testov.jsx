import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function Test() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/con" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

function Nav() {
  return(
    <nav>
        <Link to="/con">Con</Link>
        
    </nav>
  )
}

function Home() {
  return <h1>Hello World!!!</h1>;
}

function Contact() {
  return <h1>Hello Contact!!!</h1>;
}
