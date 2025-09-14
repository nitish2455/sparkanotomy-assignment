import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const InvoiceSummarySection = (): JSX.Element => {
  return (
    <header className="w-full bg-[#ff2d85] px-4 py-3 h-36">
      <nav className="flex items-center justify-between">
        <Button
          variant="ghost"
          className="flex items-center gap-1.5 text-white hover:bg-white/10 h-auto p-2"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          <span className="font-body-regular font-[number:var(--body-regular-font-weight)] text-[length:var(--body-regular-font-size)] tracking-[var(--body-regular-letter-spacing)] leading-[var(--body-regular-line-height)] [font-style:var(--body-regular-font-style)]">
            Back
          </span>
        </Button>

        <h1 className="font-body-emphasized font-[number:var(--body-emphasized-font-weight)] text-white text-[length:var(--body-emphasized-font-size)] text-center tracking-[var(--body-emphasized-letter-spacing)] leading-[var(--body-emphasized-line-height)] [font-style:var(--body-emphasized-font-style)]">
          Dashboard
        </h1>

        <Avatar className="w-10 h-10">
          <AvatarImage src="/shape.png" alt="Profile" />
          <AvatarFallback className="bg-gray-300 text-gray-600">
            U
          </AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
};
