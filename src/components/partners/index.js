import React from "react";
import "./partner.css";
function Partners() {
  return (
    <div className="cont_big">
      <div
        className="container_section container_section--main content_is"
       
      >
        <div className="row tac">
          <h1 className="container_section_title">
            Зарабатывайте <br />
            до 30% от платежей клиентов
          </h1>
          <p className="hugetext">
            С нами работают компании из самых разных отраслей, основными
            направлениями деятельности которых является:
          </p>
        </div>
        <div className="row">
          <div className="container_widgets" id="partners_types">
            <div className="container_widgets_item">
              <div className="container_widgets_item_icon">
                <img loading="lazy" src="https://www.unicraft.org/page/partners/icons/integrators.svg" alt="..." />
              </div>
              <p className="largetext">ИТ-интеграторы</p>
            </div>
            <div className="container_widgets_item">
              <div className="container_widgets_item_icon">
                <img loading="lazy" src="https://www.unicraft.org/page/partners/icons/consult.svg" alt="..." />
              </div>
              <p className="largetext">
                Консалтинговые компании, агенты и внедренцы обучения
              </p>
            </div>
            <div className="container_widgets_item">
              <div className="container_widgets_item_icon">
              <img loading="lazy" src="https://www.unicraft.org/page/partners/icons/integrators.svg" alt="..." />
              </div>
              <p className="largetext">Разработчики и поставщики готовых курсов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
