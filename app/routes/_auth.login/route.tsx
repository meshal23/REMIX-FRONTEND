import { ActionFunctionArgs } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
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
  const data = await validator.validate(await request.formData());
  if (data.error) return validationError(data.error);

  //do your stuff
  // const { identity, password } = data.data;

  //pocketbase to verify

  return null;
}

const validator = withYup(
  yup.object({
    identity: yup.string().required(),
    password: yup
      .string()
      .min(8, "password must be 8 characters in length")
      .required(),
  })
);

const Login = () => {
  useEffect(
    () =>
      form.subscribe.value((formData) => {
        console.log(formData);
      }),
    []
  );

  const data = useActionData<typeof clientAction>();

  const form = useForm({
    validator,
    defaultValues: {
      identity: "",
      password: "",
    },
    onSubmitSuccess: () => {
      // We know this isn't an error in the success callback, but Typescript doesn't
      if (isValidationErrorResponse(data)) return;

      // This isn't always the best way to show a toast in remix.
      // https://www.jacobparis.com/content/remix-form-toast

      form.resetForm();
    },
  });

  // console.log(form.value("identity"));

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-3/4 p-7 bg-formBg py-10 dark:bg-gray-700 rounded-lg">
        <div className="text-center rounded text-black bg-gray-400 w-full p-4 mb-5 font-bold text-3xl">
          LOGIN HERE
        </div>
        <Form className="w-full" method="post" {...form.getFormProps()}>
          <div className="mb-5">
            <TextInput
              type="email"
              id="email"
              name="identity"
              label="Your Email"
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
            Login
          </button>
        </Form>
        <p
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
        </p>
      </div>
    </section>
  );
};

export default Login;
