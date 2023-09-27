interface INIT_FORM_TYPE {
  firstName: string;
  lastName: string;
  age: string;
  zip: string;
  street: string;
  city: string;
  state: string;
  email: string;
  password: string;
}

interface User_Form_Type {
  firstName: string;
  lastName: string;
  age: string;
}

interface Address_Form_Type {
  zip: string;
  street: string;
  city: string;
  state: string;
}

interface Account_Form_Type {
  email: string;
  password: string;
}


export {INIT_FORM_TYPE, Account_Form_Type, Address_Form_Type, User_Form_Type};