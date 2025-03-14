/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";

interface TextInputProps {
  type: string;
  id: string;
  name: string;
  label: string;
  // form: FormApi<{ identity: string; password: string }> & {
  //   getInputProps: (name: string) => object;
  //   error: (name: string) => string;
  // };
  form: any;
}

const TextInput: FC<TextInputProps> = ({
  type = "text",
  id,
  name,
  label,
  form,
}: TextInputProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        {...form.getInputProps(name)}
        type={type}
        id={id}
        name={name}
        aria-describedby="name-error"
        style={{ width: "100%" }}
        className={`bg-gray-50 w-full border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          form.error(name)
            ? "border-red-500 dark:border-red-500"
            : "border-gray-300 dark:border-gray-300"
        }`}
      />
      {form.error(name) && (
        <div
          className="font-bold dark:text-red-400 text-red-800"
          id="name-error"
        >
          {form.error(name) as string}
        </div>
      )}
    </div>
  );
};

//form.error("identity")

export default TextInput;
