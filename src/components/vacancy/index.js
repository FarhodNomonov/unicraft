import React from "react";
import { VacncyModal } from "../export/modal";
import "./vacancy.css";
function Vacancy() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <VacncyModal open={isOpen} setOpen={setIsOpen} />
      <div className="container_section container_section--main">
        <div className="row">
          <h1 className="container_section_title text_center">Вакансии</h1>
          <p className="hugetext text_center ">
            Unicraft — это онлайн платформа, которая помогает компаниям быстро и
            просто превращать свои знания в онлайн курсы и обучать сотрудников.
            Мы работаем на рынке России, стран бывшего СНГ, США и Китая.
          </p>
        </div>
      </div>
      <section className="container_section">
        <div className="row">
          <div className="vacancy">
            <div className="vacancy_item">
              <div className="vacancy_item_type">Продажи</div>
              <h2 className="vacancy_item_title">Менеджер отдела продаж</h2>

              <div className="vacancy_item_features">
                <div className="vacancy_item_feature">
                  <div className="vacancy_item_feature_name">Занятость</div>
                  <div className="vacancy_item_feature_value">Full-time</div>
                </div>
                <div className="vacancy_item_feature">
                  <div className="vacancy_item_feature_name">Формат работы</div>
                  <div className="vacancy_item_feature_value">Удаленная</div>
                </div>

                <div className="vacancy_item_feature">
                  <div className="vacancy_item_feature_name">Зарплата</div>
                  <div className="vacancy_item_feature_value">от 120 000 ₽</div>
                </div>
              </div>

              <div className="vacancy_item_description">
                <p>
                  В связи с увеличением спроса на рынке России, мы расширяем
                  отдел продаж.
                </p>
                <p>
                  Если ты не хочешь каждый день ездить в офис, готов к
                  дисциплинированной удаленной работе и если тебе близко по духу
                  развивать продукт, который повышает уровень компетентности
                  людей и скорость развития бизнеса - присылай отклик!
                </p>
              </div>
              <div className="vacancy_item_action">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="button button_rounded button_success button_gradienteffect"
                >
                  Откликнуться
                </button>
                <label htmlFor="vacancy2" className="dottedlink">
                  Подробнее
                </label>
              </div>
              <input
                type="checkbox"
                className="see_alls"
                style={{ display: "none" }}
                id="vacancy2"
              />
              <div className="vacancy_item_more">
                <div className="vacancy_item_options">
                  <div className="vacancy_item_options_block">
                    <p>
                      <b>Наши условия:</b>
                    </p>
                    <ul className="vacancy_item_list">
                      <li>
                        Заработная плата от 100 000 рублей на руки.
                        Результативные менеджеры получают 200-300 т.р.
                      </li>
                      <li>Молодой и амбициозный коллектив профессионалов </li>
                      <li>
                        Быстрорастущая компания на перспективном EdTech рынке
                      </li>
                      <li>
                        Современный, востребованный и социально значимый продукт
                      </li>
                      <li>Карьерный рост с расширением компании </li>
                      <li>
                        Работа на большом количестве входящих лидов, без поиска
                        клиентов и «холодных» звонков
                      </li>
                      <li>
                        Полностью удаленный формат работы, вы можете работать из
                        любой точки мира
                      </li>
                      <li>
                        Профессиональные инструменты и сервисы для удаленной
                        работы
                      </li>
                      <li>
                        Полноценное обучение продукту и техникам продаж в первые
                        дни работы, персональный коучинг от опытного наставника
                      </li>
                      <li>
                        График работы с 10 до 19. График гибкий, главное -
                        результат!
                      </li>
                    </ul>
                  </div>
                  <div className="vacancy_item_options_block">
                    <p>
                      <b>Чем ты будешь заниматься:</b>
                    </p>
                    <ul className="vacancy_item_list">
                      <li>
                        Продавать лучшую онлайн платформу на рынке России для
                        обучения и развития навыков у сотрудников компаний
                      </li>
                      <li>
                        Получать заявки из отдела маркетинга, квалифицировать и
                        консультировать клиентов, заключать сделки и передавать
                        их в отдел сопровождения
                      </li>
                      <li>
                        Работать только на входящем потоке (заявки в CRM, сервис
                        обратного звонка)
                      </li>
                      <li>
                        Использовать готовые инструменты и алгоритмы продажах и
                        участвовать в их улучшении
                      </li>
                      <li>Работы очень много и вся она крайне интересная! </li>
                    </ul>
                  </div>
                  <div className="vacancy_item_options_block">
                    <p>
                      <b>Кто нам нужен:</b>
                    </p>
                    <ul className="vacancy_item_list">
                      <li>Коммуникабельный и активный член команды </li>
                      <li>
                        Минимум один год опыта в продажах, остальному научим
                      </li>
                      <li>Обладающий грамотной устной и письменной речью </li>
                      <li>
                        Самоорганизованный, ответственный и целеустремленный
                      </li>
                      <li>
                        Желающий работать и добиваться высоких результатов
                      </li>
                      <li>Опыт удаленной работы будет плюсом </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="vacancy_item">
              <div className="vacancy_item_type">Разработка</div>
              <h2 className="vacancy_item_title">Full stack разработчик</h2>

              <div className="vacancy_item_features">
                <div className="vacancy_item_feature">
                  <div className="vacancy_item_feature_name">Занятость</div>
                  <div className="vacancy_item_feature_value">Full-time</div>
                </div>
                <div className="vacancy_item_feature">
                  <div className="vacancy_item_feature_name">Формат работы</div>
                  <div className="vacancy_item_feature_value">Удаленная</div>
                </div>

                <div className="vacancy_item_feature">
                  <div className="vacancy_item_feature_name">Зарплата</div>
                  <div className="vacancy_item_feature_value">от 100 000 ₽</div>
                </div>
              </div>

              <div className="vacancy_item_description">
                <p>
                  Ищем уверенного full-stack разработчика JavaScript (back-end:
                  NodeJS + front-end: ReactJS), обладающего практическим опытом
                  разработки SPA (single page application). Для которого стоят
                  сложные и интересные задачи по разработке программной логики
                  нашего приложения.
                </p>
              </div>
              <div className="vacancy_item_action">
                <button
                  onClick={() => setIsOpen(true)}
                  type="button"
                  className="button button_rounded button_success button_gradienteffect"
                >
                  Откликнуться
                </button>
                <label htmlFor="vacancy1" className="dottedlink">
                  Подробнее
                </label>
              </div>
              <input
                type="checkbox"
                className="see_alls"
                style={{ display: "none" }}
                id="vacancy1"
              />
              <div className="vacancy_item_more">
                <div className="vacancy_item_options">
                  <div className="vacancy_item_options_block">
                    <p>
                      <b>Наши условия:</b>
                    </p>
                    <ul className="vacancy_item_list">
                      <li>
                        Заработная плата от 120 000 рублей до 160 000 рублей
                        (net);
                      </li>
                      <li>
                        Молодой и амбициозный коллектив профессионалов,
                        быстрорастущая компания;
                      </li>
                      <li>
                        Современный, востребованный и социально значимый
                        продукт;
                      </li>
                      <li>Карьерный рост с расширением компании; </li>
                      <li>Полная занятость, удаленная работа; </li>
                      <li>Гибкое начало рабочего дня, главное - результат! </li>
                    </ul>
                  </div>
                  <div className="vacancy_item_options_block">
                    <p>
                      <b>Чем ты будешь заниматься:</b>
                    </p>
                    <ul className="vacancy_item_list">
                      <li>
                        Развивать лучшее приложение на рынке России для обучения
                        и развития навыков у сотрудников компаний;
                      </li>
                      <li>
                        Разрабатывать новый и поддерживать старый функционал
                        back-end и front-end приложений (версткой занимаются
                        отдельные специалисты);
                      </li>
                      <li>
                        Участвовать в проектировании архитектуры сервиса и
                        решать интересные задачи. Например, рекомендательный
                        сервис по развитию навыков;
                      </li>
                      <li>
                        Выполнять технический долг по поддержке продукта в
                        надлежащем виде;
                      </li>
                      <li>Работы очень много и вся она крайне интересная!</li>
                    </ul>
                  </div>
                  <div className="vacancy_item_options_block">
                    <p>
                      <b>Кто нам нужен:</b>
                    </p>
                    <ul className="vacancy_item_list">
                      <li>
                        Человек, имеющий практический опыт разработки
                        веб-приложений (желательно, с использованием асинхронных
                        языков программирования и SPA);
                      </li>
                      <li>
                        Работающий со стеком: NodeJS (typescript), SocketIO,
                        ReactJS. Mysql/PostgreSQL и MongoDB (мы используем не
                        сильно распространенную RethinkDB).
                      </li>
                      <li>
                        Знакомый с ООП, MVC, паттернами, jenkins, ansible,
                        docker;
                      </li>
                      <li>
                        Имеющий опыт работы в команде, использования git/trello,
                        и разделяющий ценности agile/scrum методологии;
                      </li>
                      <li>
                        Желающий работать и добиваться высоких результатов
                        вместе с командой.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vacancy;
