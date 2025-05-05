"use client";

import * as React from "react";
import { Minus, Plus, CreditCard } from "lucide-react";
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

export function CreditDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <CreditCard /> Credit
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Credit Payment</DrawerTitle>
            <DrawerDescription>Settle your amount by credit</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="mb-2">Bill Total: </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
