import React from "react";
import { Field, Form } from "react-final-form";
import Label
    from "../../components/label/label.component";
import Selector from "../../components/selector/selector";
import { required, length } from "../../utils/validate";

const handleSubmit = (data) => {
    //do fetch request
    console.log(data);
};
const handleValidate = ({ title, city }) => {
    const errors = {};
    const requiredLength = length(3, 15);

    errors.title = required(title) || requiredLength(title);
    errors.city = required(city) || requiredLength(city);

    return errors;
};

function Add() {
    return (
        <div className="text-center">
            <h2>Add new business</h2>
            <Form onSubmit={handleSubmit}
                  validate={handleValidate}
                  render={({ handleSubmit }) => (
                      <form action="" method="POST"
                            onSubmit={handleSubmit}

                            className="my-6 text-left">
                          <Field component={Label}
                                 title="Введіть назву бізнесу"
                                 placeholder="Назва вашого бізнесу"
                                 name="title"
                                 required/>
                          <Field component={Label}
                                 className="mt-3"
                                 title="Введіть назву міста, де знаходиться ваш бізнес"
                                 placeholder="Назва міста"
                                 name="city"
                                 required/>
                          <Field component={Selector}
                                 className="mt-3"
                                 title="Виберіть тип вашого бізнесу"
                                 name="type"/>
                          <div className="mt-6 text-right">
                              <button type="submit"
                                      className="btn">
                                  Додати
                              </button>
                          </div>
                      </form>
                  )}/>
        </div>
    );
}

export default Add;
