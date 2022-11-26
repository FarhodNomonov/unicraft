import React from "react";
import "./contact.css";
import { useForm } from "react-hook-form";

function Contacts() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div className="container_section container_section--main">
        <div className="row">
          <h1 className="container_section_title text_center">
            Свяжитесь с нами
          </h1>
          <p className="hugetext text_center ">
            Поможем вам выбрать подходящий тариф, ответим на вопросы о продукте,
            поможем решить возникшие проблемы.
          </p>
        </div>
      </div>
      <section className="container_section">
        <div className="row address">
          <div className="address_info">
            <h2>Новым клиентам</h2>
            <p className="hugetext">
              <a href="tel:+7 (495) 532-69-02">+7 (495) 532-69-02</a>
            </p>
            <p>
              <a href="mailto:sales@unicraft.org">sales@unicraft.org</a>
            </p>
            <h2>Текущим клиентам</h2>
            <p className="hugetext">
              <a href="tel:+8 (800) 350-24-43">8 (800) 350-24-43</a>
            </p>
            <p>
              <a href="mailto:support@unicraft.org">support@unicraft.org</a>
            </p>
          </div>
          <div className="address_payinfo">
            <h2>Реквизиты</h2>
            <p>
              <span>Общество с ограниченной ответственностью "ЮНИКРАФТ”</span>
              <br />
              <br />
              <span>
                Юр. адрес: 123458, Москва г, Твардовского ул, дом 8, строение 1,
                помещение I ЭТ 3 КОМ 7
              </span>
              <br />
              <br />
              ИНН: 7722369110
              <br />
              КПП: 773401001
              <br />
              ОГРН: 1167746628345
              <br />
              <br />
              Расчетный счет: 40702810202500064712
              <br />
              Банк: ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"
              <br />
              БИК: 044525999
              <br />
              Kорр. счет: 30101810845250000999
              <br />
              <br />
              Генеральный директор: Маслов Артем Андреевич
            </p>
          </div>
        </div>
      </section>
      <section className="container_section">
        <div className="row">
          <p className="tac hugetext">Есть вопросы? Пишите!</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="writetous"
            name="writetous"
            id="writetous"
          >
            <div
              className="writetous_error"
              id="writetous_error"
              style={{ display: "none" }}
            >
              <p>Что-то пошло не так. Попробуйте еще раз</p>
            </div>
            <div
              className="writetous_process"
              id="writetous_process"
              style={{ display: "none" }}
            >
              <p>Подготовка к отправке...</p>
            </div>
            <div
              className="writetous_message"
              data-message="Сообщение отправляется"
            >
              <div className="writetous_message_info">
                <div>
                  <input
                    type="name"
                    className="text"
                    id="writetous_message-name"
                    placeholder="Имя и фамилия"
                    {...register("name", { required: true })}
                    style={errors.name ? { borderColor: "red" } : {}}
                  />
                </div>
                <div>
                  <input
                    type="phone"
                    className="text"
                    id="writetous_message-phone"
                    placeholder="Телефон"
                    {...register("phone", { required: true })}
                    style={errors.phone ? { borderColor: "red" } : {}}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="text"
                    id="writetous_message-companyname"
                    placeholder="Название организации"
                    {...register("organ", { required: true })}
                    style={errors.organ ? { borderColor: "red" } : {}}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="text"
                    id="writetous_message-email"
                    placeholder="Ваш e-mail"
                    {...register("email", { required: true })}
                    style={errors.organ ? { borderColor: "red" } : {}}
                  />
                </div>
              </div>
              <div className="writetous_message_text">
                <div>
                  <textarea
                    className="text"
                    id="writetous_message-message"
                    placeholder="Ваше сообщение"
                    rows="10"
                    minLength="10"
                    {...register("desc", { required: true })}
                    style={errors.desc ? { borderColor: "red" } : {}}
                  ></textarea>
                  <button type="submit" className="button button_accent">
                    Отправить
                  </button>
                  <span className="smalltext clr_gray">
                    Сообщение должно быть не менее 10 символов.
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contacts;
