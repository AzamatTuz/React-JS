import { useState, useEffect } from "react";

function Navbar() {
    useEffect(() => {
        let newTheme = localStorage.getItem('theme')
        if (newTheme) {
            setTheme(newTheme)
        }
    }, []);

  const [theme, setTheme] = useState("");

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme]);

  const toggleTheme = () => {
   setTheme('black')
  };

  return (
    <nav style={{ backgroundColor: theme, padding: "10px" }}>
      <button onClick={toggleTheme}>Түсін өзгерту</button>
    </nav>
  );
}

export default Navbar;
