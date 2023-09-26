// import React, {useState} from 'react';

// import { useHistory } from "react-router-dom"; // Import React Router

// import FormInput, {CheckRegex} from './components/FormInput.jsx';
// import 'bootstrap/dist/css/bootstrap.css';


// const FormEmpresa = () => {

// 	const [values, setValues] = useState({
// 		nombre:"",
// 		email:"",
// 		email2:"",
// 		telefono:"",
// 		telefono2:"",
// 		cedula:""
// 	});

// 	const [valuesErr, setValuesErr] = useState({
// 		nombre:false,
// 		email:false,
// 		email2:false,
// 		telefono:false,
// 		telefono2:false,
// 		cedula:false
// 	});

// 	const [check, setCheck] = useState(false);

// 	const inputs = [
// 		{   id:1,
// 			name:"nombre",
// 			type:"text",
// 			placeholder:"Nombre Empresa",
// 			errorMessage: "min. 3 letras, solo se permiten '&','-','_','.' y espacios",
// 			required: true,
// 			patron: /^([a-zA-Z0-9\&\-\_\.]{3,}[a-zA-Z0-9\ \&\-\_\.]*)$/,},
// 		{   id:2,
// 			name:"email",
// 			type:"text",
// 			placeholder:"Email empresarial",
// 			errorMessage: "ejemplo@dominio.com",
// 			required: true,
// 			patron: /^([876][0-9]{3}\-[0-9]{4})$/ },
// 		{   id:3,
// 			name:"email2",
// 			type:"text",
// 			placeholder:"email-opcional",
// 			errorMessage: "ejemplo@dominio.com",
// 			required: false,
// 			patron: /^([876][0-9]{3}\-[0-9]{4})$/ },
// 		{   id:4,
// 			name:"telefono",
// 			type:"text",
// 			placeholder:"telefono",
// 			errorMessage:"1234-5678",
// 			required: true,
// 			patron: /^([876][0-9]{3}\-[0-9]{4})$/ },
// 		{   id:5,
// 			name:"telefono2",
// 			type:"text",
// 			placeholder:"telefono-opcional",
// 			errorMessage:"1234-5678",
// 			required: false,
// 			patron: /^([876][0-9]{3}\-[0-9]{4})$/ },
// 		{   id:6,
// 			name:"cedula",
// 			type:"text",
// 			placeholder:"cedula juridica",
// 			errorMessage:"Solo numeros, 10 digitos",
// 			required: true,
// 			patron: /^([0-9]{10})$/},
// 	]

//   const onChange = (e) => {
// 		setValues({ ...values, [e.target.name]: e.target.value});
// 	}

// 	const onClick = (e) => {
// 		let bin = handleSubmit(e, inputs, values, setValuesErr, CheckRegex, valuesErr);
// 		console.log("Bin = ", bin);
// 		setCheck(!bin);
// 	}

// 	return (
// 	  <div className="FormEmpresa">
// 	    {!check ? (
// 	      <form>
// 	        {inputs.map((input) => (
// 	          <FormInput
// 	            key={input.id}
// 	            {...input}
// 	            value={values[input.name]}
// 	            boolError={valuesErr[input.name]}
// 	            onChange={onChange}
// 	          />
// 	        ))}
// 	        <div className="row">
// 	          <button type="button" className="btn btn-primary btn-lg" onClick={onClick}>
// 	            Siguiente
// 	          </button>
// 	        </div>
// 	      </form>
// 	    ) : (
// 	      <FormEmpleador />
// 	    )}
// 	  </div>
// 	);

// };

// const FormEmpleador = () => {

// 	const [values, setValues] = useState({
// 		nombre:"",
// 		email:"",
// 		telefono:"",
// 		cedula:"",
// 		password:""
// 	});

// 	const [valuesErr, setValuesErr] = useState({
// 		nombre:false,
// 		email:false,
// 		telefono:false,
// 		cedula:false,
// 		password:false,
// 		todos: false
// 	});

// 	const inputs = [
// 		{ id:1,
// 			name:"nombre",
// 			type:"text",
// 			placeholder:"user name",
// 			label:"Username",
// 			errorMessage: "min. 3 letras, solo se permiten '&','-','_','.' y espacios",
// 			required: true,
// 			patron: /^([a-zA-Z0-9\&\-\_\.]{3,}[a-zA-Z0-9\ \&\-\_\.]*)$/ },
// 		{ id:2,
// 			name:"email",
// 			type:"text",
// 			placeholder:"email",
// 			label:"Email",
// 			errorMessage: "ejemplo@dominio.com",
// 			required: true,
// 			patron: /^([876][0-9]{3}\-[0-9]{4})$/ },
// 	]

//   	const onChange = (e) => {
// 		setValues({ ...values, [e.target.name]: e.target.value });
// 	}

// 	const onClick = (e) => {
// 		handleSubmit(e, inputs, values, setValuesErr, CheckRegex, valuesErr);
// 	}

// 	return (
// 		<div className="FormEmpleador">
// 			<form>
// 					{inputs.map((input) => (
// 						<FormInput
// 							key={input.id}
// 							{...input}
// 							value={values[input.name]}
// 							boolError={valuesErr[input.name]}
// 							onChange={onChange}
// 						/>
// 					))}
// 				<div className="row">
// 					<button type="button" className="col btn btn-primary">Siguiente</button>
// 					<button type="button" className="col btn btn-primary">atras</button>
// 				</div>
// 			</form>

// 		</div>
// 	);
// };

// const handleSubmit = (e, inputs, values, setValuesErr, CheckRegex, valuesErr) => {
//   	e.preventDefault();
//   	const updatedValuesErr = {};
// 	  const checkInputs = inputs.map((input) => {
// 	    if ( input.required && CheckRegex(values[input.name], input.patron) ) {
// 	    	updatedValuesErr[input.name] = false;
// 	    } 
// 	    else if ( !input.required && (values[input.name] === '' || CheckRegex(values[input.name], input.patron) )){
// 	    	updatedValuesErr[input.name] = false;
// 	    }
// 	    else {
// 	    	console.log(input.name);
// 	    	updatedValuesErr[input.name] = true;
// 	    }
//   	});
//   	setValuesErr(updatedValuesErr); 
//   	return  Object.values(updatedValuesErr).some((value) => value === true);
// };

// export default FormEmpresa;
