import { Field } from "formik";
import React from "react";

function GenericInput(props) {
  const { label, name, type, placeholder, ...rest } = props;
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <Field
          name={name}
          type={type}
          placeholder={placeholder}
          required
          className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...rest}
        />
      </div>
    </div>
  );
}

export default GenericInput;