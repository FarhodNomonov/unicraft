import React from "react";
import "./footer.scss";
import PartnerOne from "../../assets/img/footertexnopark.png";
import PartnerTwo from "../../assets/img/frii.png";
import PartnerThree from "../../assets/img/edtech.png";
import { NavLink } from "react-router-dom";
import Appstore from "../../assets/img/appstore.svg";
import Googleplay from "../../assets/img/googleplay.svg";
import Huawei from "../../assets/img/huawei.svg";
import Facebook from "../../assets/img/facebook.svg";
import Instagram from "../../assets/img/instagram.svg";
import Dzen from "../../assets/img/dzen.svg";
import Vk from "../../assets/img/vkontakte.svg";

const linkData = [
  {
    name: "Главная",
    link: "/",
    dropdown: [],
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
    dropdown: [],
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
        link: "/about#partners",
      },
      {
        name: "Вакансии",
        link: "/about#vacancy",
      },
      {
        name: "Контакты",
        link: "/about#contacts",
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

function Footer() {
  return (
    <footer className="container-footer">
      <div className="footer">
        <div className="has-text-centered">
          <p>Есть вопросы? Звоните!</p>
          <a href="tel:+7 (495) 532-69-02">+7 (495) 532-69-02</a>
        </div>
        <div className="partners-footer">
          <div className="partners-footer__item">
            <img src={PartnerOne} alt="partner" />
          </div>
          <div className="partners-footer__item">
            <img src={PartnerTwo} alt="partner" />
          </div>
          <div className="partners-footer__item">
            <img src={PartnerThree} alt="partner" />
          </div>
        </div>
        <div className="footer-nav-links">
          <div className="footer_nav">
            {linkData.map((item, index) => {
              return (
                <div key={index} className="footer_nav__item">
                  <NavLink className={"footer_nav__item_name"} to={item?.link}>
                    {item?.name}
                  </NavLink>
                  <ul>
                    {item?.dropdown?.map((__res, i) => {
                      return (
                        <NavLink key={i} to={__res?.link}>
                          {__res?.name}
                        </NavLink>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="footer_app_links">
            <a
              rel="nooperer noreferrer"
              target={"_blank"}
              href="https://apps.apple.com/ru/app/unicraft/id1540267679"
            >
              <img src={Appstore} alt="" />
            </a>
            <a
              rel="nooperer noreferrer"
              target={"_blank"}
              href="https://play.google.com/store/apps/details?id=org.unicraft.app"
            >
              <img src={Googleplay} alt="" />
            </a>
            <a
              rel="nooperer noreferrer"
              target={"_blank"}
              href="https://appgallery.huawei.com/#/app/C103938597"
            >
              <img src={Huawei} alt="" />
            </a>
          </div>
        </div>

        <div className="footer-docs">
          <div className="footer-docs__item">
            <a href="/docs/oferta" target={"_blank"} rel="nooperer noreferrer">
              Публичная оферта
            </a>
          </div>
          <div className="footer-docs__item">
            <a
              href="/docs/aggrement"
              target={"_blank"}
              rel="nooperer noreferrer"
            >
              Cогласие на обработку персональных данных
            </a>
          </div>
          <div className="footer-docs__item">
            <a href="/docs/policy" target={"_blank"} rel="nooperer noreferrer">
              Политика конфиденциальности
            </a>
          </div>
          <div className="footer-docs__item">
            <a
              href="/docs/courseoffer"
              target={"_blank"}
              rel="nooperer noreferrer"
            >
              Соглашение об использовании курсов
            </a>
          </div>
        </div>

        <div className="social_share_links">
          <a
            href="https://zen.yandex.ru/unicraft"
            target={"_blank"}
            rel="nooperer noreferrer"
          >
            <img src={Dzen} alt="" />
          </a>
          <a
            href="https://vk.com/public194714884"
            target={"_blank"}
            rel="nooperer noreferrer"
          >
            <img src={Vk} alt="" />
          </a>
          <a
            href="https://www.instagram.com/unicraft_org/"
            target={"_blank"}
            rel="nooperer noreferrer"
          >
            <img src={Instagram} alt="" />
          </a>
          <a
            href="https://www.facebook.com/unicraft.org"
            target={"_blank"}
            rel="nooperer noreferrer"
          >
            <img src={Facebook} alt="" />
          </a>
        </div>

        <div className="footer-copyright">
          <p>Unicraft © 2016-2022 </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
