import { Form } from "@remix-run/react";
import DateCard from "~/components/DateCard";
import AsynchrounousAutoComplete from "~/components/Form/AsynchrounousAutoComplete";
import TextInput from "~/components/Form/TextInput";
import { CashDrawer } from "~/components/ModeOfPayments/CashDrawer";
import { CreditDrawer } from "~/components/ModeOfPayments/CreditDrawer";
import { PaymentDrawer } from "~/components/ModeOfPayments/PaymentDrawer";
import TextArea from "~/components/TextArea";
import { Button } from "~/components/ui/button";

const Invoice = () => {
  return (
    <section className="w-full p-5 ">
      <DateCard showTime title="INVOICE" />
      <div className="w-full mt-4 flex justify-center items-center flex-col">
        <Form className="w-11/12 gap-3 grid grid-cols-12">
          <div className="col-span-12">
            <AsynchrounousAutoComplete service={""} />
          </div>
          <div className="tablet:col-span-8 col-span-12">
            <AsynchrounousAutoComplete service={""} />
          </div>
          <div className="tablet:col-span-2 col-span-6">
            <TextInput
              // form={form}
              id="qty"
              placeholder="Quantity"
              name="quantity"
              type="number"
            />
          </div>
          <div className="tablet:col-span-2 col-span-6">
            <Button variant="info" className=" w-full mt-2">
              Add
            </Button>
          </div>
          <div className="col-span-12">
            <TextArea placeholder="Remarks" />
          </div>
        </Form>

        <div className="absolute bottom-5 flex flex-wrap">
          <CashDrawer />
          <CreditDrawer />
          <PaymentDrawer />
        </div>
      </div>
    </section>
  );
};

export default Invoice;
