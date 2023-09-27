import FormStyle from "./FormStyle";
import {Account_Form_Type} from './Types';

interface Account_MetaData_Type extends Account_Form_Type{
  updateFields: (fields: Partial<Account_Form_Type>) => void;
}

export default function AccountForm({email, password, updateFields}: Account_MetaData_Type) {
  return (
    <FormStyle title="Account">
      <label htmlFor="Email">Email</label>
      <input type="email" placeholder="email" id="Email" value={email} onChange={ev => {
        updateFields({email: ev.target.value})
      }}></input>
      <label htmlFor="Password">Password</label>
      <input type="password" placeholder="password" id="Password" value={password} onChange={ev => {
        updateFields({password: ev.target.value})
      }}></input>
    </FormStyle>
  );
}
