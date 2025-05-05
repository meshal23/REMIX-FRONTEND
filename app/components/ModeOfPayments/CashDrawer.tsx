import { Button } from "../../components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Separator } from "../ui/separator";
import TextInput from "../Form/TextInput";
import { useForm, isValidationErrorResponse } from "@rvf/remix";
import * as yup from "yup";
import { withYup } from "@rvf/yup";
import { Form, useActionData } from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/node";
import { Wallet } from "lucide-react";
import { useEffect } from "react";

export async function clientAction({ request }: ActionFunctionArgs) {
  return null;
}

const validator = withYup(
  yup.object({
    amount: yup.string().required(),
  })
);

export function CashDrawer() {
  useEffect(() => {
    form.subscribe.value((formData) => {
      console.log(formData);
    });
  }, []);

  const data = useActionData<typeof clientAction>();

  const form = useForm({
    validator,
    onSubmitSuccess: () => {
      // We know this isn't an error in the success callback, but Typescript doesn't
      if (isValidationErrorResponse(data)) return;

      // This isn't always the best way to show a toast in remix.
      // https://www.jacobparis.com/content/remix-form-toast

      form.resetForm();
    },
  });
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Wallet /> Cash
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Cash Payment</DrawerTitle>
            <DrawerDescription>
              Here you settle the bill with cash
            </DrawerDescription>
          </DrawerHeader>

          <div className="mb-2 p-4">Bill Total: </div>

          <Separator />

          <Form className="w-full p-4" {...form.getFormProps()}>
            <TextInput
              placeholder="amount"
              id="amount"
              name="amount"
              form={form}
            />

            <DrawerFooter>
              <Button type="submit">Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
