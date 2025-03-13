import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import {
  isValidationErrorResponse,
  useForm,
  validationError,
} from "@rvf/remix";

import { withYup } from "@rvf/yup";
import { useEffect } from "react";
import * as yup from "yup";
import TextInput from "~/components/Form/TextInput";

export async function clientAction({ request }: ActionFunctionArgs) {
  const data = await validator.validate(request.formData());
  if (data.error) return validationError(data.error);
  return null;
}

const validator = withYup(
  yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .max(8, "password must be 8 characters in length")
      .required(),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    phoneNo: yup.string().required(),
    // address: yup.string().required(),
  })
);

const Register = () => {
  const data = useActionData<typeof clientAction>();

  useEffect(
    () =>
      form.subscribe.value((formData) => {
        console.log(formData);
      }),
    []
  );

  const form = useForm({
    validator,
    defaultValues: {},
    onSubmitSuccess: () => {
      // We know this isn't an error in the success callback, but Typescript doesn't
      if (isValidationErrorResponse(data)) return;

      // This isn't always the best way to show a toast in remix.
      // https://www.jacobparis.com/content/remix-form-toast

      form.resetForm();
    },
  });
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-3/4 p-7 bg-formBg py-10 dark:bg-gray-700 rounded-lg">
        <div className="text-center rounded text-black bg-gray-400 w-full p-4 mb-5 font-bold text-3xl">
          REGISTER HERE
        </div>
        <Form className="w-full" method="post" {...form.getFormProps()}>
          <div className="mb-5 flex gap-3">
            <TextInput
              type="text"
              id="firstName"
              name="firstName"
              label="First Name"
              form={form}
            />
            <TextInput
              type="text"
              id="lastName"
              name="lastName"
              label="Last Name"
              form={form}
            />
          </div>
          <div className="mb-5">
            <TextInput
              type="email"
              id="email"
              name="email"
              label="Your Email"
              form={form}
            />
          </div>
          <div className="mb-5">
            <TextInput
              type="tel"
              id="phone"
              name="phone"
              label="Phone No"
              form={form}
            />
          </div>
          <div className="mb-5">
            <TextInput
              form={form}
              id="password"
              label="Password"
              name="password"
              type="password"
            />
          </div>

          <button
            type="submit"
            style={{ width: "100%" }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
        </Form>
        {/* <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-gray-500 dark:text-gray-300"
        >
          Create a new account
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:underline ml-2 dark:text-blue-200"
          >
            Register Here
          </Link>
          .
        </p> */}
      </div>
    </section>
  );
};

export default Register;
