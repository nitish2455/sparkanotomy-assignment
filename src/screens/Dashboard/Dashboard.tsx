import React from "react";
import { Separator } from "../../components/ui/separator";
import { CreateInvoiceSection } from "./sections/CreateInvoiceSection/CreateInvoiceSection";
import { InvoiceSummarySection } from "./sections/InvoiceSummarySection/InvoiceSummarySection";

export const Dashboard = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-[390px] mx-auto min-h-screen ">

      <div className="min-h-[2120px] top-[107px] bg-white rounded-[46px_46px_0px_0px] fixed w-full left-0" />

      <main className="relative z-20 ">
        <InvoiceSummarySection />
        <CreateInvoiceSection />
      </main>

      <footer className="flex flex-col w-full justify-center py-20 items-center gap-3  z-30">
        <Separator className="w-full" />

        <div className="inline-flex flex-col items-center justify-center gap-px relative flex-[0_0_auto]">
          <img
            className="relative w-[76.15px] h-3.5"
            alt="Logo"
            src="/logo.png"
          />

          <div className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-sparko-dark-grey text-[10px] text-center tracking-[0] leading-[14px] whitespace-nowrap">
            sparking the creator economy
          </div>
        </div>
      </footer>
    </div>
  );
};
