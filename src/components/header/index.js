import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Logo } from "./../export/svg";
import "./header.scss";
import { useScroll } from "../../hook/scroll";
const styles = {
  active: {
    visibility: "visible",
    transition: "all 0.2s",
    opacity: 1,
  },
  hidden: {
    visibility: "hidden",
    transition: "all 0.2s",
    transform: "translateY(-100%)",
    opacity: 0,
  },
};
const linkData = [
  {
    name: "Главная",
    link: "/",
    dropdown: false,
  },
  {
    name: "Тарифы",
    link: "/rate",
    dropdown: [
      {
        name: "Стоимость",
        link: "/rate#price",
      },
      {
        name: "Возможности",
        link: "/rate#features",
      },
      {
        name: "Частые вопросы",
        link: "/rate#faq",
      },
    ],
  },
  {
    name: "Каталог курсов",
    link: "/catalog",
    dropdown: false,
  },
  {
    name: "Компания",
    link: "/about",
    dropdown: [
      {
        name: "О нас",
        link: "/about#about",
      },
      {
        name: "Отзывы",
        link: "/reviews",
      },
      {
        name: "Партнерам",
        link: "/partners",
      },
      {
        name: "Вакансии",
        link: "/vacancy",
      },
      {
        name: "Контакты",
        link: "/contacts",
      },
    ],
  },
  {
    name: "Поддержка",
    link: "/help",
  },
  {
    name: "Блог",
    link: "/blog",
  },
];

function Header() {
  const { hash, pathname } = useLocation();
  const [lang, setLang] = React.useState("ru");
  const { scrollDirection } = useScroll();

  return (
    <div
      className="header-container"
      style={
        scrollDirection === "down" || scrollDirection === undefined
          ? styles.active
          : styles.hidden
      }
    >
      <div className="w100">
        <header className="header">
          <NavLink to={"/"} className="header__logo">
            <Logo /> <span> Unicraft — платформа для онлайн обучения </span>
          </NavLink>
          <ul>
            {linkData.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink className={"nav-link-header"} to={item.link}>
                    {item.name}
                  </NavLink>
                  {item.dropdown && (
                    <ol className="header__dropdown">
                      {item.dropdown.map((item, index) => {
                        return (
                          <NavLink
                            style={
                              pathname + hash === item?.link
                                ? { color: "red" }
                                : {}
                            }
                            key={index}
                            to={item.link}
                          >
                            {item.name}
                          </NavLink>
                        );
                      })}
                    </ol>
                  )}
                </li>
              );
            })}
            <li>
              <div className="language">
                <span>{lang}</span>
                <div className="select-lang">
                  <button onClick={() => setLang("ru")}>RU</button>
                  <button onClick={() => setLang("en")}>EN</button>
                </div>
              </div>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default Header;
