import { FormEvent, useState } from 'react';
import AccountForm from './AccountForm';
import AddressForm from './AddressForm';
import './style.css';
import { useFullForm } from './useFullForm';
import UserForm from './UserForm';
import {INIT_FORM_TYPE} from './Types';

const INITIAL_DATA: INIT_FORM_TYPE = {
  firstName: "",
  lastName: "",
  age: "",
  zip: "",
  city: "",
  state: "",
  street: "",
  email: "",
  password: ""
}

export function App() {
  const [form_data, setFormData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<INIT_FORM_TYPE>): void{
    setFormData(prev => {
      return {...prev, ...fields}
    })
  }
  
  const { currentIndex, forms, Form, firstStep, next, back, lastStep } =
    useFullForm([<UserForm {...form_data} updateFields = {updateFields}/>, 
    <AddressForm {...form_data} updateFields = {updateFields}/>,
    <AccountForm {...form_data} updateFields = {updateFields}/>]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    next();
  }

  return (
    <div className="Box">
      <form action="" onSubmit={handleSubmit}>
        <div className="form-body">
          {currentIndex + 1} / {forms.length}{' '}
        </div>
        {Form}
        <div className="Buttons">
          {!firstStep && <button onClick={back}>{lastStep ? "Once more" : "Back"}</button>}
          <button type="submit">{lastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
}
