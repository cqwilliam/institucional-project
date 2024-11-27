// NavMenu.js
import NavItem from './NavItem';

const NavMenu = ({ isMenuOpen }) => {
  const navItems = [
    {
      title: 'Inicio',
      menuItems: [
        { text: 'Presentación', link: '#nivel-inicial' },
        { text: 'Misión y Visión', link: '#nivel-primario' },
        { text: 'Valores Institucionales', link: '#nivel-secundario' }
      ]
    },
    {
      title: 'Niveles',
      menuItems: [
        { text: 'Nivel Inicial', link: '#nivel-inicial' },
        { text: 'Nivel Primario', link: '#nivel-primario' },
        { text: 'Nivel Secundario', link: '#nivel-secundario' }
      ]
    },
    { title: 'Admisión', menuItems: [] },
    { title: 'Acerca sobre Pedro Paulet', menuItems: [] },
    { title: 'Contáctenos', menuItems: [] }
  ];

  return (
    <ul className="list-none p-6 sm:flex sm:p-0 gap-8 ml-4 sm:ml-0">
      {navItems.map((item, index) => (
        <NavItem key={index} title={item.title} menuItems={item.menuItems} />
      ))}
    </ul>
  );
};

export default NavMenu;