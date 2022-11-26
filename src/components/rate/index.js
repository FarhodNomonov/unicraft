import React from "react";
import { NavLink } from "react-router-dom";
import { PresentBox, Search } from "../export/svg";
import "./rate.scss";
import { RegisterModal } from "./../export/modal";
import Accordion from "./../export/accordion";

const TariffItem = [
  {
    mainTitle: "Начало",
    users: [
      {
        number: "10",
        price: "9900",
      },
      {
        number: "50",
        price: "17100",
      },
    ],
    userTo: "10-50",
    storage: true,
    individual: false,
    integration: false,
    edit: false,
    version: false,
  },
  {
    mainTitle: "Оптимум",
    users: [
      {
        number: 100,
        price: 42600,
      },
      {
        number: 500,
        price: 57300,
      },
    ],
    userTo: "100-500",
    storage: false,
    individual: true,
    integration: true,
    edit: false,
    version: false,
  },
  {
    mainTitle: "Бизнес",
    users: [
      {
        number: 1000,
        price: 86700,
      },
      {
        number: 5000,
        price: 172200,
      },
    ],
    userTo: "10-50",
    storage: false,
    individual: true,
    integration: true,
    edit: true,
    version: true,
  },
];
const purchase = [
  {
    id: "purchase1a",
    header: "Есть ли тестовый период?",
    textContent:
      "Да, конечно. По запросу для тестирования функциональности платформы мы предоставляем бесплатную демо-площадку на 10 лицензий сроком на 14 дней. За это время вы сможете создать один или несколько курсов, следуя нашим инструкциям, загрузить пользователей, провести обучение и получить первые результаты!",
  },
  {
    id: "purchase1b",
    header: "Что будет после тестового периода?",
    textContent:
      "После пробного бесплатного периода вы сможете выбрать тариф и форму оплаты, но если Unicraft вам не подойдет — ничего не случится, вам не нужно будет ни за что платить.",
  },
  {
    id: "purchase1c",
    header: "От чего зависит стоимость платформы?",
    textContent:
      "Стоимость LMS платформы зависит от выбранного пакета, которые отличаются между собой количеством лицензий. Минимальный пакет: 10 лицензий",
  },
  {
    id: "purchase1d",
    header: "Как можно сэкономить?",
    textContent:
      "Вы можете оплатить стоимость доступа на год и получить скидку в размере двух месяцев использования платформы. Это выгодно!",
  },
  {
    id: "purchase1e",
    header: "Нужно ли заключать договор?",
    textContent:
      "Мы работаем на основании публичной оферты, с условиями которой вы можете ознакомиться здесь.",
  },
  {
    id: "purchase1f",
    header: "Что будет после оплаты?",
    textContent:
      "После проведения оплаты в течение 24 часов мы увеличим количество лицензий на вашей площадке в соответствии с оплаченным тарифом. А также изменим адрес, по которому будет доступна ваша площадка в сети Интернет, предварительно согласовав все детали. Все созданные во время тестового периода материалы и пользователи будут сохранены, данные для авторизации для всех останутся прежними.",
  },
];
const consultation = [
  {
    id: "consultation1a",
    header: "Мы уже используем другую систему, вы поможете с переездом?",
    textContent:
      "Если Вы выбрали годовой тариф и выше, то мы полностью закрываем вопрос с переносом материалов с другой LMS.",
  },
  {
    id: "consultation1b",
    header: "Можно ли изменять количество лицензий после оплаты?",
    textContent:
      "Да, в любой момент вы можете сообщить нам о необходимости увеличения лицензий, и мы сделаем перерасчет стоимости на дату перехода на новый тариф с учетом уже ранее внесенной вами суммы.",
  },
  {
    id: "consultation1c",
    header:
      "Могут ли несколько сотрудников использовать одну и ту же лицензию?",
    textContent:
      "Аккаунт любого пользователя привязан к одной электронной почте, куда приходят автоматические уведомления в процессе работы с платформой. Мы рекомендуем под каждого сотрудника создавать отдельный аккаунт. Так вам будет удобнее отследить историю прохождения курсов и статистику успеваемости.",
  },
  {
    id: "consultation1d",
    header: "Вы можете помочь с созданием контента на платформе?",
    textContent:
      "Да, конечно. Во-первых, мы можем разработать структуру всех нужных вам курсов. Структура формируется по итогам 1,5 - часового интервью и полностью отражает специфику вашей деятельности. Стоимость данной услуги - 15 000 руб.Если у вас нет времени на разработку курсов или сотрудника, которому можно делегировать этот процесс, то мы сделаем это за вас. Стоимость производства зависит от количества уроков в курсе. Подробности можно узнать у вашего менеджера.",
  },
  {
    id: "consultation1e",
    header: "Для установки Unicraft потребуется помощь нашего IT-отдела?",
    textContent:
      "Нет. Для работы в облачной версии Unicraft не потребуется никого привлекать — Unicraft работает в браузере как обычный сайт. Нужен только доступ в интернет.",
  },
];

const installation = [
  {
    id: "installation1a",
    header: "Как происходит внедрение при покупке box версии платформы?",
    textContent:
      "Установка будет происходить на сервер клиента. Есть два варианта: клиент контролирует сервер физически, клиент самостоятельно арендует сервер в ЦОДе. Для установки необходимо будет предоставить нам ssh-доступ к серверу (root). Установка происходит в течении дня (3-4 часа, возможно, больше), включая полную настройку сервера, установку необходимого ПО, его настройку, развертывание платформы из репозитория. После установки мы передаем логин и пароль к учётной записи администратора в установленной системе.",
  },
  {
    id: "installation1b",
    header: "Сколько стоит обновление box версии платформы?",
    textContent:
      "Стоимость подписки на обновления box версии платформы в течение года составляет 20% от стоимости купленных лицензий.",
  },
  {
    id: "installation1c",
    header:
      "Как происходит обновление box версии платформы? Не пострадает ли существующий контент?",
    textContent:
      "Обновления производяться по процедуре аналогичной внедрению. Для установки и обновлений необходимо предоставить root-доступ к серверу по ssh (IP + логин и пароль, либо IP + доступ с помощью RSA-ключей). Существующий контент пострадать не может, т.к. он изолирован от самого кода программы. Для дополнительной гарантии безопасности перед обновлениями создаются резервные копии платформы и контента, так что если вдруг что-то пойдет не так, последняя работающая версия всегда может быть восстановлена из резервной копии. С марта 2017 года процесс обновления будет автоматизирован с помощью Ansible и Jenkins (приложение будет разворачиваться в docker- контейнере).",
  },
  {
    id: "installation1d",
    header:
      "Что нужно предоставить/обеспечить клиенту для внедрения box версии платформы?",
    textContent:
      "Необходимо оплатить лицензии, предоставить доступ к выделенному серверу и доменное имя (при наличии).",
  },
];
function Rate() {
  const [openModal, setOpenModal] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [purchases, setPurchases] = React.useState([]);
  const [consultations, setConsultations] = React.useState([]);
  const [installations, setInstallations] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const resultPurchase = purchase.filter((person) =>
      person.header
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase().trim())
    );
    setPurchases(resultPurchase);

    const resultConsultations = consultation.filter((person) =>
      person.header
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase().trim())
    );
    setConsultations(resultConsultations);

    const resultInstallation = installation.filter((person) =>
      person.header
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase().trim())
    );
    setInstallations(resultInstallation);
  }, [searchTerm, purchases, consultations]);

  function priceUser(price, number) {
    return Math.floor(Number(price) / Number(number) / 3);
  }
  const [tariffYear, setTariffYear] = React.useState(false);

  return (
    <div className="rate_container" id="price">
      <RegisterModal open={openModal} setOpen={setOpenModal} />
      <div className="rate">
        <h1>Тарифы</h1>
        <p>
          Сравните пакеты предложений и выберите подходящие возможности и
          стоимость
        </p>
        <div className="tariff_blocks_period">
          <p>Квартал</p>
          <label className="switch">
            <input type="checkbox" id="tariff_blocks_period_year" />
            <span
              className="slider round"
              onClick={() => setTariffYear(!tariffYear)}
            />
          </label>

          <label
            htmlFor="tariff_blocks_period_year"
            className="tariff_blocks_period_year"
          >
            <p onClick={() => setTariffYear(!tariffYear)}>Год</p>
            <div
              className="tariff_img"
              onClick={() => setTariffYear(!tariffYear)}
            >
              <PresentBox />
            </div>
            <div
              className="tariff_title_flex"
              onClick={() => setTariffYear(!tariffYear)}
            >
              <p>2 месяца</p>
              <p>даром</p>
            </div>
          </label>
        </div>
        <div className="tariff_block_item">
          {TariffItem.map((item, index) => {
            return (
              <div key={index} className="tariff_block_card">
                {item?.users.map((user, i) => {
                  return (
                    <input
                      key={i}
                      defaultChecked={i === 0}
                      type="radio"
                      name={item?.mainTitle}
                      id={user?.price}
                      className={`tariff_block_card_radio ${
                        i === 0 ? "first" : "second"
                      } `}
                    />
                  );
                })}
                <h1>{item?.mainTitle}</h1>
                <p>Пользователей</p>
                <div className="tariff_card_number">
                  {item?.users.map((user, i) => {
                    return (
                      <button key={i}>
                        <label htmlFor={user?.price}>{user?.number}</label>
                      </button>
                    );
                  })}
                </div>
                <div className="tariff_card_price">
                  {item?.users.map((user, i) => {
                    return (
                      <h1 key={i}>
                        <p>
                          {tariffYear && (
                            <span className="price__skidka">
                              {((Number(user?.price) / 3) * 12).toFixed(0)}
                            </span>
                          )}
                          <br />
                          {`${
                            (Number(user?.price) / (tariffYear ? 3 : 1)) *
                            (tariffYear ? 10 : 1)
                          }₽`}
                        </p>
                      </h1>
                    );
                  })}
                  <h2>за квартал</h2>
                  <div className="user__price__months">
                    {item?.users.map(({ price, number }) => {
                      return (
                        <p key={number}>
                          {priceUser(price, number)} за пользователя в месяц
                        </p>
                      );
                    })}
                  </div>
                  <button onClick={() => setOpenModal(!openModal)}>
                    ЗАКАЗАТЬ
                  </button>
                  <NavLink to={"#"}>Оплатить онлайн</NavLink>
                </div>
                <div className="tariff_card_price_bottom">
                  <p>{item?.userTo} пользователей</p>
                  <p>
                    {item?.storage
                      ? "50 ГБ для хранения данных"
                      : "Безлимитное хранилище"}
                  </p>
                  <p>{item?.individual && "Индивидуальный стиль"}</p>
                  <p>{item?.integration && "Интеграции"}</p>
                  <p>{item?.edit && "Спец. тарифы на доработки"}</p>
                  <p>{item?.version && "Box-версия (опционально)"}</p>
                </div>
              </div>
            );
          })}
          <div className="tariff_block_card">
            <input
              type="radio"
              id={"korporativ"}
              className={"tariff_block_card_radio first"}
              defaultChecked
            />

            <h1>Корпорация</h1>
            <p>Пользователей</p>
            <div className="tariff_card_number">
              <button>
                <label htmlFor={"korporativ"}> {"> 5 000"}</label>
              </button>
            </div>
            <div className="tariff_card_price">
              <h1>
                <p>По запросу</p>
              </h1>
              <div className="user__price__months">
                <p> От 9 ₽ за пользователя в месяц</p>
              </div>
              <button onClick={() => setOpenModal(!openModal)}>ЗАКАЗАТЬ</button>
            </div>
            <div className="tariff_card_price_bottom">
              <p>{"> 5000 пользователей"}</p>
              <p>{"Безлимитное хранилище"}</p>
              <p>{"Индивидуальный стиль"}</p>
              <p>{"Интеграции"}</p>
              <p>{"Спец. тарифы на доработки"}</p>
              <p>{"Box-версия (опционально)"}</p>
            </div>
          </div>
        </div>
        <div className="tariff_block_change" id="features">
          <h1>Вне зависимоcти от выбранного тарифа, вы получите</h1>
          <div className="tariff_features_forall">
            <div className="tariff_features_forall_col">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                return (
                  <div key={index} className="tariff_features_forall_item">
                    <div className="label_____text__">
                      Неограниченное количество курсов
                    </div>
                    <span
                      className="tariff_features_forall_item_question"
                      data-tooltip="Создавайте столько курсов, сколько вам необходимо"
                    />
                    <div className="before">
                      <span>?</span>
                      <div className="before_tooltip">
                        Вы сможете создавать курсы из любого количества уроков:
                        видео, аудио, текст с картинками, загружать документы,
                        импортировать страницы из Google, группировать курсы по
                        разделам. Добавлять пользователей и выбирать им роли,
                        назначать на них любые учебные курсы и отслеживать
                        успеваемость с помощью статистики
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="tariff_features_forall_col">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
                return (
                  <div key={index} className="tariff_features_forall_item">
                    <div className="label_____text__">
                      Неограниченное количество курсов
                    </div>
                    <span
                      className="tariff_features_forall_item_question"
                      data-tooltip="Создавайте столько курсов, сколько вам необходимо"
                    />
                    <div className="before">
                      ?
                      <div className="before_tooltip">
                        Lorem ipsum dolor sit amet.
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tariff_block_search" id="faq">
          <h1>Часто задаваемые вопросы</h1>
          <p>
            Мы собрали ответы на самые популярные вопросы: сколько стоит, какие
            условия, технические нюансы и многое другое.
          </p>
          <label className="input__wrapper__">
            <input
              onChange={handleChange}
              value={searchTerm}
              type="text"
              placeholder="Что хотите узнать?"
            />
            <Search className="search__icon" />
          </label>
          {purchases.length === 0 &&
          consultations.length === 0 &&
          installations.length === 0 ? (
            "К сожалению по вашему запросу ничего не найдено"
          ) : (
            <>
              {purchases.length !== 0 && (
                <div>
                  <div className="label__accord">ПОКУПКА</div>
                  <Accordion props={purchases} />
                </div>
              )}
              {consultations.length !== 0 && (
                <div>
                  <div className="label__accord">КОНСУЛЬТАЦИЯ</div>
                  <Accordion props={consultations} />
                </div>
              )}
              {installations.length !== 0 && (
                <div>
                  <div className="label__accord">УСТАНОВКА НА СЕРВЕР</div>
                  <Accordion props={installations} />
                </div>
              )}
            </>
          )}
          <div>
            <div className="largetext___">
              <b>Остались вопросы?</b>
              <NavLink to={"/contacts"}>Свяжитесь с нами</NavLink>и мы ответим на
              них
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rate;
