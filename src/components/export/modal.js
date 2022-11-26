import React, { useState } from "react";
import "./modal.scss";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

export const RegisterModal = ({ open, setOpen }) => {
  document.body.style.overflow = open ? "hidden" : "auto";
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);
    reset();
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 400);
  };
  return (
    <>
      {open && (
        <div className="requestform register_modal_" id="requestform">
          <div
            className="overlay__modal__"
            onMouseUp={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
          />
          <div className="requestform_dialog">
            <button
              type="button"
              className="close"
              onClick={() => setOpen(!open)}
            >
              X
            </button>{" "}
            {/* Форма заявки */}
            {/* Ожидание ответа */}
            <div
              className="requestform_process"
              id="requestform_process"
              style={isLoading ? {} : { display: "none" }}
            >
              <div className="requestform_process_loader" />
              <div className="lds-spinner">
                <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div />
                <div /> <div /> <div /> <div />
              </div>
            </div>
            {/* Заявка на регистрацию платформы (Упрощенная) */}
            <div
              style={isSuccess ? { display: "none" } : {}}
              className="requestform_content tac callbackwidget-call-form"
              id="requestform_reg_express"
            >
              <div id="tariffinfo" style={{ display: "none" }}>
                {/* Вывод названия соответствующего тарифа */}
                <p className="introtext">
                  Вы выбрали тариф «<span id="tariffinfoname" />» на
                  <span id="tariffinfousers" /> пользователей
                </p>
                <div className="separator_h" /> {/*  */}
              </div>
              <div
                style={{ fontSize: "1.875rem", padding: "1rem 0 2rem" }}
                id="requestform-title"
              >
                Для получения доступа укажите
              </div>
              <form
                id="requestform_submit"
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="on"
              >
                {/* Выбор типа клиента */}
                <div id="requestform_audience">
                  <p style={{ margin: "0.5rem 0 1rem" }}>
                    Кто будет обучаться на платформе?
                  </p>
                  <div
                    className="form_bl form_panel radiocustom_stackedgrid radiocustom_filled"
                    id="audience"
                    style={errors.audience ? { borderColor: "red" } : {}}
                  >
                    <div className="radiocustom">
                      <label className="radiocustom-label">
                        <input
                          type="radio"
                          className="radiocustom-radio"
                          value="Сотрудники"
                          {...register("audience", { required: true })}
                        />
                        <span className="radiocustom-thumbler" />
                        <div className="radiocustom-title">Сотрудники</div>
                      </label>
                    </div>
                    <div className="radiocustom">
                      <label className="radiocustom-label">
                        <input
                          type="radio"
                          value="Клиенты"
                          className="radiocustom-radio"
                          {...register("audience", { required: true })}
                        />
                        <span className="radiocustom-thumbler" />
                        <div className="radiocustom-title">Клиенты</div>
                      </label>
                    </div>
                    <div className="radiocustom">
                      <label className="radiocustom-label">
                        <input
                          type="radio"
                          className="radiocustom-radio"
                          value="Студенты и школьники"
                          {...register("audience", { required: true })}
                        />
                        <span className="radiocustom-thumbler" />
                        <div className="radiocustom-title">
                          Студенты и школьники
                        </div>
                      </label>
                    </div>
                    <div className="radiocustom">
                      <label className="radiocustom-label">
                        <input
                          type="radio"
                          className="radiocustom-radio"
                          value="Другие"
                          {...register("audience", { required: true })}
                        />
                        <span className="radiocustom-thumbler" />
                        <div className="radiocustom-title">Другие</div>
                      </label>
                    </div>
                    <div className="radiocustom" style={{ display: "none" }}>
                      <label className="radiocustom-label">
                        <input
                          type="radio"
                          className="radiocustom-radio"
                          value="Партнер"
                          {...register("audience", { required: true })}
                        />
                        <span className="radiocustom-thumbler" />
                        <div className="radiocustom-title">Партнер</div>
                      </label>
                    </div>
                    <div className="radiocustom" style={{ display: "none" }}>
                      <label className="radiocustom-label">
                        <input
                          type="radio"
                          name="audience"
                          defaultValue="Консультация"
                          className="radiocustom-radio"
                        />
                        <span className="radiocustom-thumbler" />
                        <div className="radiocustom-title">Консультация</div>
                      </label>
                    </div>
                  </div>
                </div>
                <p
                  style={{ margin: "1rem 0" }}
                  id="requestform_reg_express_contact_header"
                >
                  Контактные данные
                </p>
                <div>
                  <input
                    type="name"
                    className="text callbackwidget-name"
                    id="name"
                    placeholder="Имя и фамилия"
                    {...register("fullName", { required: true })}
                    style={errors.fullName ? { borderColor: "red" } : {}}
                  />
                </div>
                <div id="requestform_field_company">
                  <input
                    type="text"
                    className="text"
                    id="company"
                    placeholder="Название организации"
                    {...register("organ", { required: true })}
                    style={errors.organ ? { borderColor: "red" } : {}}
                  />
                </div>
                <div id="requestform_field_company">
                  <input
                    type="tel"
                    className="text"
                    id="tel"
                    placeholder="+998 (99) 99-99-99"
                    {...register("phone", { required: true })}
                    style={errors.phone ? { borderColor: "red" } : {}}
                  />
                </div>
                <div id="requestform_field_company">
                  <input
                    type="email"
                    className="text callbackwidget-email"
                    id="email"
                    placeholder="E-mail"
                    {...register("email", { required: true })}
                    style={errors.email ? { borderColor: "red" } : {}}
                  />
                </div>
                <div style={{ margin: "1.5rem 0rem" }} className="form_el_big">
                  <button
                    type="submit"
                    className="button button_success button_gradienteffect button_rounded"
                  >
                    Получить доступ
                  </button>
                </div>
                <div style={{ margin: "1.5rem 0rem" }} className="clr_gray">
                  <p className="tinytext">
                    Нажимая кнопку «Получить доступ», вы соглашаетесь с
                    <NavLink className={"tinytext"} to="/docs/offer">
                      Публичной офертой
                    </NavLink>
                    и
                    <NavLink className={"tinytext"} to="/docs/agreement">
                      Согласием на обработку персональных данных
                    </NavLink>
                    .
                  </p>
                </div>
              </form>
            </div>
            <div
              className="requestform_content tac"
              style={isSuccess ? {} : { display: "none" }}
            >
              <p className="hugetext">
                Спасибо за ваш интерес к сервису для обучения сотрудников —
                Unicraft.
              </p>
              <p>
                Вам предоставлен пробный доступ на 14 дней и можете попробовать
                нашу платформу прямо сейчас.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <p
                  id="requestform_reg_done_link"
                  className="button button_accent"
                  onClick={() => {
                    setIsSuccess(false);
                    setIsLoading(false);
                    setOpen(false);
                  }}
                >
                  Войти в систему
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export const VacncyModal = ({ open, setOpen }) => {
  document.body.style.overflow = open ? "hidden" : "auto";
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);
    reset();
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 400);
  };
  return (
    <>
      {open && (
        <div className="requestform" id="vacancyModal">
          <div
            className="overlay__modal__"
            onMouseUp={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
          />
          <div className="requestform_dialog">
            <section
              className="requestform_content tac"
              id="vacancyModal_request"
              style={isSuccess ? { display: "none" } : {}}
            >
              <button
                type="button"
                className="close"
                onClick={() => setOpen(!open)}
              >
                X
              </button>
              <div className="requestform-title">
                Отклик на вакансию <br />
                <b id="vacancyModal_vacancy">Менеджер отдела продаж</b>
              </div>
              <form name="vacancyModal_form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form_bl form_el_big">
                  <input
                    type="text"
                    className="text"
                    placeholder="ФИО"
                    {...register("fullName", { required: true })}
                    style={errors.fullName ? { borderColor: "red" } : {}}
                  />
                  <input
                    type="text"
                    className="text"
                    placeholder="e-mail"
                    {...register("email", { required: true })}
                    style={errors.email ? { borderColor: "red" } : {}}
                  />
                  <input
                    type="tel"
                    className="text"
                    placeholder="99-999-9999"
                    {...register("phone", { required: true })}
                    style={errors.phone ? { borderColor: "red" } : {}}
                  />
                </div>
                <div className="form_bl form_el_big">
                  <textarea
                    style={
                      errors.comment
                        ? {
                            width: "100%",
                            resize: "vertical",
                            padding: "10px",
                            fontSize: "20.56px",
                            fontWeight: 400,
                            borderColor: "red",
                          }
                        : {
                            width: "100%",
                            resize: "vertical",
                            padding: "10px",
                            fontSize: "20.56px",
                            fontWeight: 400,
                          }
                    }
                    {...register("comment", { required: true })}
                    className="text"
                    cols={30}
                    rows={10}
                    placeholder="Комментарий"
                  />
                </div>
                <div className="form_bl form_el_big">
                  <button
                    type="submit"
                    className="button button_success button_gradienteffect button_rounded"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </section>
            <div
              className="requestform_process"
              id="vacancyModal_process"
              style={isLoading ? {} : { display: "none" }}
            >
              <div className="requestform_process_loader" />
              <div className="lds-spinner">
                <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div />
                <div /> <div /> <div /> <div />
              </div>
            </div>
            <div
              className="requestform_content tac"
              id="vacancyModal_done"
              style={isSuccess ? {} : { display: "none" }}
            >
              <p className="hugetext">Отклик на вакансию отправлен</p>
              <p>Скоро мы выйдем с вами на связь</p>
              <div style={{ marginTop: "1.5rem" }}>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setOpen(!open);
                  }}
                  className="button button_accent"
                >
                  Супер :)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
