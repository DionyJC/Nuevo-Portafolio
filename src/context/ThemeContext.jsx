import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Verificar si hay un tema guardado en localStorage, de lo contrario usar light
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Actualizar data-theme en el HTML y guardar en localStorage cuando cambie el tema
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Eliminar clases anteriores
    root.classList.remove('dark', 'light');
    // Añadir la nueva clase
    root.classList.add(theme);
    
    // Guardar en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Función para alternar entre temas
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
