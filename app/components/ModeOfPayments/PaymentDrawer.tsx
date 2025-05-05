"use client";

import * as React from "react";
import { Minus, Plus, HandCoins } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

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
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Form, useActionData } from "@remix-run/react";
import TextInput from "../Form/TextInput";

import { isValidationErrorResponse, useForm } from "@rvf/remix";
import * as yup from "yup";
import { withYup } from "@rvf/yup";
import { ActionFunctionArgs } from "@remix-run/node";

export async function clientAction({ request }: ActionFunctionArgs) {
  return null;
}

const validator = withYup(
  yup.object({
    paymentType: yup.string().required(),
    amount: yup.string().required(),
  })
);

export function PaymentDrawer() {
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
          <HandCoins /> Payment
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

          <div className="p-4 mb-2">Bill Total: </div>

          <Separator />

          <Form className="w-full p-4" {...form.getFormProps()}>
            <TextInput
              placeholder="Payment Type"
              id="paymentType"
              name="paymentType"
              form={form}
            />

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
