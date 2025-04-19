// Importación de React y el hook useEffect
import React, { useEffect } from "react";

// Importación del archivo de estilos CSS para este componente
import "./Menu.css";

// Importación del logo (imagen) desde una carpeta relativa
import Logo from "../img/logo.png";

// Importación de íconos desde la librería react-icons (FontAwesome)
import {
  FaChartBar,
  FaHouseUser,
  FaRegCalendarCheck,
  FaRegCalendarPlus,
  FaRegCaretSquareRight,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";

function Menu() {
  // Hook de efecto que se ejecuta una vez cuando el componente se monta
  useEffect(() => {
    // Selecciona todos los <li> dentro del menú principal (ul con id="mainMenu")
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    // Función que se ejecuta al hacer clic en un ítem
    function changeActive() {
      // Quita la clase 'active' de todos los ítems
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      // Agrega la clase 'active' solo al ítem clicado
      this.classList.add("active");
    }

    // Asigna el evento click a cada ítem de menú
    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []); // El array vacío hace que solo se ejecute una vez al montar

  return (
    <menu>
      {/* Logo principal arriba del menú */}
      <img src={Logo} alt="" />

      {/* Menú principal con íconos de navegación */}
      <ul id="mainMenu">

        <Icon icon={<FaHouseUser />} />
        <Icon icon={<FaChartBar />} />
        <Icon icon={<FaRegCalendarCheck />} />
        <Icon icon={<FaRegCalendarPlus />} />
        <Icon icon={<FaRegCaretSquareRight />} />

      </ul>

      {/* Menú inferior con ajustes y salir */}
      <ul className="lastMenu">

        <Icon icon={<FaCogs />} />
        <Icon icon={<FaSignOutAlt />} />

      </ul>

    </menu>
  );
}

// Componente que recibe un ícono por props y lo muestra dentro de una lista
const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

// Exporta el componente para ser usado en otros archivos
export default Menu;
