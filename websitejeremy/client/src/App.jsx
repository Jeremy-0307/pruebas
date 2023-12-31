import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useForm, useStep } from "react-hooks-helper";
import {FormEmpresa}   from './components/FormEmpresa';
import {FormEmpleador} from './components/FormEmpleador';

const defaultData = {
  empresaName:"",
  empresaCorreo:"",
  empresaCorreo2:"",
  empresaTel:"",
  empresaTel2:"",
  empresaCedu:"",
  empleadorName:"",
  empleadorCorreo:"",
  empleadorCorreo2:"",
  empleadorTel:"",
  empleadorTel2:"",
  empleadorPass:"",
};

const errData = {
  empresaName:false,
  empresaCorreo:false,
  empresaCorreo2:false,
  empresaTel:false,
  empresaTel2:false,
  empresaCedu:false,
  empleadorName:false,
  empleadorCorreo:false,
  empleadorCorreo2:false,
  empleadorTel:false,
  empleadorTel2:false,
  empleadorPass:false,
};

const steps = [
  {id: "formEmpresa"},
  {id: "formEmpleador"},
];

export const RegistroForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const [errForm, setErrForm] = useForm(errData);
  const {step, navigation} = useStep({steps, initialStep: 0});

  const props = {formData, setForm, errForm, setErrForm, navigation};

  switch (step.id) {
    case "formEmpresa":
      return <FormEmpresa {...props} />;
    case "formEmpleador":
      return <FormEmpleador {...props} />;
  }

  return (<div></div>);
};

export default RegistroForm;