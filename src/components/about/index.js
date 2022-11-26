import React from "react";

import "./about.css";

function About() {
  return (
    <>
      <div className="container_full">
        <section className="container_section container_section--main container_section--leader">
          <div className="from_leader">
            <div className="from_leader_content">
              <div className="from_leader_text">
                <h1 className="container_section_title">Привет, друзья!</h1>
                <p>
                  Занимаясь более пятнадцати лет развитием бизнеса, я, как и
                  многие, совершал ошибки и принимал неверные решения. Ресурсы
                  расходовались впустую и это замедляло рост компании. Сейчас я
                  понимаю, что в основе моих ошибок всегда лежали неверные
                  данные или попросту отсутствие верных. В наше время вокруг так
                  много знаний, что легко ошибиться в выборе. Помимо поиска
                  знаний сегодня перед нами стоят задачи передачи, измерения
                  эффективности и совершенствования тех знаний, которыми мы
                  располагаем.{" "}
                </p>
                <p>
                  Мы решаем эти задачи с помощью платформы Unicraft.
                  Предоставляем инструмент, позволяющий предпринимателям
                  эффективнее управлять технологиями в бизнесе. Структурировать
                  имеющиеся о бизнесе знания, сложить их в цельную мозаику.
                  Быстрее распространять технологии в компании, делать это
                  правильно и без искажений. Как результат, быстрее расти,
                  развиваться и совершать меньше ошибок на пути к своей цели.{" "}
                </p>
                <p>
                  В то же время Unicraft - это не просто платформа для
                  автоматизации обучения в компании. Мы смотрим в будущее и
                  видим большое сообщество людей, заинтересованных в том, чтобы
                  находить ценные знания, улучшать их, обмениваться друг с
                  другом, быстрее развиваться вместе. Мы любим свою страну и
                  верим, что вместе мы сможем кратно повысить эффективность
                  обучения и применения знаний, а значит и скорость развития
                  технологий, бизнеса и экономики наших стран.{" "}
                </p>
                <p>Сформируйте ДНК своего бизнеса с Unicraft. </p>
                <p>Успехов! </p>
              </div>

              <div className="from_leader_bio">
                <div className="from_leader_bio_photo">
                  <img
                    src="https://www.unicraft.org/style/img/maslov_big.png"
                    alt=""
                  />
                </div>
                <div className="from_leader_bio_info">
                  <div className="from_leader_bio_info_name">Артём Маслов</div>
                  <div className="from_leader_bio_info_title">
                    Основатель компании Unicraft
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>{" "}
      <div className="container_section--mission_Cont">
        <section className="container_section container_section--mission">
          <div className="row">
            <h2 className="container_section_title container_section_title--underlined container_section_title--small">
              Миссия компании
            </h2>
            <p style={{ fontSize: "2.5rem" }}>
              Помогать людям и компаниям быстро развиваться и реализовывать свои
              замыслы, используя эффективные технологии обучения и развития
              навыков.
            </p>
          </div>
        </section>
      </div>
      <section className="container_section">
        <div className="row">
          <h2 className="container_section_title container_section_title--underlined container_section_title--small">
            Принципы компании
          </h2>
          <div className="container_widgets container_widgets--grid">
            <div className="container_widgets_item">
              <h3
                className="container_widgets_item_title"
                style={{ fontSize: "1.5rem" }}
              >
                Качественный результат
              </h3>
              <p>
                Уделяем внимание каждой детали и не любим небрежности. Создаем
                продукт, который вызывает восхищение у пользователя.
              </p>
            </div>
            <div className="container_widgets_item">
              <h3
                className="container_widgets_item_title"
                style={{ fontSize: "1.5rem" }}
              >
                Профессиональное развитие
              </h3>
              <p>
                Непрерывно обучаемся и совершенствуемся в своей профессиональной
                области. Остаемся в курсе последних мировых технологических
                трендов
              </p>
            </div>
            <div className="container_widgets_item">
              <h3
                className="container_widgets_item_title"
                style={{ fontSize: "1.5rem" }}
              >
                Инициатива и ответственность
              </h3>
              <p>
                Смело проявляем инициативу и берем на себя ответственность за
                происходящее с нами, результатом нашей работы, нашей компанией,
                страной и планетой.
              </p>
            </div>
            <div className="container_widgets_item">
              <h3
                className="container_widgets_item_title"
                style={{ fontSize: "1.5rem" }}
              >
                Уважение и доверие
              </h3>
              <p>
                Поддерживаем честность и открытость в отношениях. Формируем
                культуру взаимного уважения, доверия и конструктивного решения
                споров.
              </p>
            </div>
          </div>
        </div>
      </section><section id="team" className="container_section">
      <div className="row tac">
        <h2>Слаженная команда</h2>
        <p className="hugetext">В разработке проекта участвуют специалисты своего дела, благодаря чему мы можем предложить вам отличный продукт!</p>
      </div>
      <div className="row">
        <div className="team" id="teamMembers">
          <div className="team_member">
            <div className="team_member_photo">
              <img src="https://www.unicraft.org/static/team/maslovartem.png" alt="Артём Маслов, Генеральный директор" />
            </div>
            <div className="team_member_info">
              <div className="team_member_name">Артём Маслов</div>
              <div className="team_member_job">Генеральный директор</div>
              <div className="team_member_desc">Помогаю клиентам направить вектор коллективного намерения в правильную сторону</div>
            </div>
          </div>
        
          <div className="team_member">
            <div className="team_member_photo">
              <img src="https://www.unicraft.org/static/team/medovvladislav.png" alt="Владислав Мёдов, Технический директор" />
            </div>
            <div className="team_member_info">
              <div className="team_member_name">Владислав Мёдов</div>
              <div className="team_member_job">Технический директор</div>
              <div className="team_member_desc">Координирую разработку продукта и поддерживаю работу технических процессов компании</div>
            </div>
          </div>
        
          <div className="team_member">
            <div className="team_member_photo">
              <img src="https://www.unicraft.org/static/team/perovmax.png" alt="Максим Перов, Коммерческий директор" />
            </div>
            <div className="team_member_info">
              <div className="team_member_name">Максим Перов</div>
              <div className="team_member_job">Коммерческий директор</div>
              <div className="team_member_desc">Подбираю клиентам и партнерам лучшее предложение для решения их бизнес-задач</div>
            </div>
          </div>
        
          <div className="team_member">
            <div className="team_member_photo">
              <img src="https://www.unicraft.org/static/team/titovskiyandrey.png" alt="Андрей Титовский, Дизайнер продукта" />
            </div>
            <div className="team_member_info">
              <div className="team_member_name">Андрей Титовский</div>
              <div className="team_member_job">Дизайнер продукта</div>
              <div className="team_member_desc">Создаю внешний облик продукта, его юзабилити, учитываю нюансы, делаю его — отличным</div>
            </div>
          </div>
        
          <div className="team_member">
            <div className="team_member_photo">
              <img src="https://www.unicraft.org/static/team/maslovaanastasia.png" alt="Анастасия Маслова, Руководитель клиентского сервиса" />
            </div>
            <div className="team_member_info">
              <div className="team_member_name">Анастасия Маслова</div>
              <div className="team_member_job">Руководитель клиентского сервиса</div>
              <div className="team_member_desc">Забочусь о счастье и комфорте наших клиентов! Помогаю решать бизнес-задачи с помощью обучения на платформе</div>
            </div>
          </div>
        </div>
      
      </div>
     
    </section>
    </>
  );
}

export default About;
