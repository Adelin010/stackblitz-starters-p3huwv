import FormStyle from './FormStyle';
import { INIT_FORM_TYPE, User_Form_Type } from './Types';

interface User_MetaData_Type extends User_Form_Type {
  updateFields: (fields: Partial<INIT_FORM_TYPE>) => void;
}

export default function UserForm({
  lastName,
  firstName,
  age,
  updateFields,
}: User_MetaData_Type) {
  return (
    <FormStyle title="User">
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" placeholder="first name" value={firstName} onChange={e => {updateFields({firstName: e.target.value})}}></input>
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" placeholder="last name" value={lastName} onChange={e => {
        updateFields({lastName: e.target.value})
      }}></input>
      <label htmlFor="Age">Age</label>
      <input type="text" id="Age" placeholder="age" value={age} onChange={e => {
        updateFields({age: e.target.value})
      }}></input>
    </FormStyle>
  );
}
