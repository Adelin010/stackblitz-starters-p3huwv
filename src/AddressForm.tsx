import FormStyle from './FormStyle';
import { Address_Form_Type } from './Types';

interface Address_MetaData_Type extends Address_Form_Type {
  updateFields: (fields: Partial<Address_Form_Type>) => void;
}

export default function AddressForm({
  zip,
  city,
  street,
  state,
  updateFields,
}: Address_MetaData_Type) {
  return (
    <FormStyle title="Address">
      <label htmlFor="Street">Street</label>
      <input
        type="text"
        id="Street"
        placeholder="street"
        value={street}
        onChange={(ev) => {
          updateFields({ street: ev.target.value });
        }}
      ></input>
      <label htmlFor="City">City</label>
      <input
        type="text"
        id="City"
        placeholder="city"
        value={city}
        onChange={(ev) => {
          updateFields({ city: ev.target.value });
        }}
      ></input>
      <label htmlFor="State">State</label>
      <input
        type="text"
        id="State"
        placeholder="State"
        value={state}
        onChange={(ev) => {
          updateFields({ state: ev.target.value });
        }}
      ></input>
      <label htmlFor="Zip">Zip</label>
      <input
        type="text"
        id="Zip"
        placeholder="Zip"
        value={zip}
        onChange={(ev) => {
          updateFields({ zip: ev.target.value });
        }}
      ></input>
    </FormStyle>
  );
}
