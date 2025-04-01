import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Contact() {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 5000);
  }, [navigate]);

  return (
    <>
      <BrowserRouter>
        <Navi />
        <button onClick={() => navigate(+1)}>To</button>
        <Routes>
          <Route path="/con" element={<Con />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Con() {
  return <h1>Contact</h1>;
}

export default Contact;
