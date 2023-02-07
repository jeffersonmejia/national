const regEx = {
	dni: /^[0-9]{10}$/,
	fingerprint: /^[0-9]{10}$/,
	name: /^[A-Za-z]{3,16}\s{1}[A-Za-z]{3,16}$/,
	lastname: /^[A-Za-z]{3,16}\s{1}[A-Za-z]{3,16}$/,
	email:
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
	password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
	address: /.{8,16}/,
	decimal: /^[0-9]{1,4}\.?[0-9]{0,3}$/,
	salary: /^[0-9]{1,4}\.?[0-9]{0,3}$/,
	tel: /^09[0-9]{8}$/,
	date: /^.{10}$/,
};

export default regEx;