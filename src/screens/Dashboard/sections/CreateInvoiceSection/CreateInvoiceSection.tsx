import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CreateInvoiceSection = (): JSX.Element => {
  const [selectedPeriod, setSelectedPeriod] = useState("3Months");

  const timePeriodOptions = [
    { value: "1Month", label: "1Month" },
    { value: "3Months", label: "3Months" },
    { value: "1Year", label: "1Year", hasIcon: true },
    { value: "Custom", label: "Custom", hasCalendarIcon: true },
  ];

  const invoiceData = [
    {
      clientName: "Client Name",
      amount: "₹1,25,000, Due: 2024-06-15",
      status: "Update Status",
      statusType: "update",
      hasDropdown: true,
    },
    {
      clientName: "Client Name",
      amount: "₹1,25,000, Due: 2024-06-15",
      status: "Unpaid",
      statusType: "unpaid",
    },
    {
      clientName: "Income Trend",
      amount: "₹1,25,000, Due: 2024-06-15",
      status: "Disputed",
      statusType: "disputed",
    },
    {
      clientName: "Income Trend",
      amount: "₹1,25,000, Due: 2024-06-15",
      status: "Paid",
      statusType: "paid",
    },
    {
      clientName: "Income Trend",
      amount: "₹1,25,000, Due: 2024-06-15",
      status: "Paid",
      statusType: "paid",
    },
    {
      clientName: "Income Trend",
      amount: "₹1,25,000, Due: 2024-06-15",
      status: "Partially Paid",
      statusType: "partially-paid",
    },
    {
      clientName: "Income Trend",
      amount: "₹1,25,000, Due: 2024-06-15",
      status: "Paid",
      statusType: "paid",
    },
    {
      clientName: "Income Trend",
      amount: "₹1,25,000, Due: 2024-06-15",
      status: "Overdue",
      statusType: "overdue",
      hasIcon: true,
    },
    {
      clientName: "Income Trend",
      amount: "₹1,25,000, Due: 2024-06-15",
      status: "Awaited",
      statusType: "awaited",
      hasIcon: true,
    },
    {
      clientName: "Income Trend",
      amount: "₹1,25,000, Due: 2024-06-15",
      status: "Draft",
      statusType: "draft",
      hasSettingsIcon: true,
    },
    {
      clientName: "Income Trend",
      amount: "₹1,25,000, Due: 2024-06-15",
      status: "Paid",
      statusType: "paid",
    },
  ];

  const getStatusBadgeClasses = (statusType: string) => {
    switch (statusType) {
      case "update":
        return "bg-primary-colour-purple text-white";
      case "unpaid":
        return "bg-light-grey text-sparko-dark-grey";
      case "disputed":
        return "bg-[#ffb0b0] text-colorspink";
      case "paid":
        return "bg-[#9cefb8] text-colorsgreen";
      case "partially-paid":
        return "bg-[#fffae5] text-[#ffcc00]";
      case "overdue":
        return "bg-[#ffb0b0] text-colorspink";
      case "awaited":
        return "bg-[#fffae5] text-[#ffcc00]";
      case "draft":
        return "bg-light-grey text-sparko-dark-grey";
      default:
        return "bg-light-grey text-sparko-dark-grey";
    }
  };

  return (
    <div className="bg-white rounded-t-[46px] -mt-20 pt-5">
      <div className="flex flex-col w-full max-w-[377px] items-center gap-6 relative mx-auto">
        <div className="flex flex-col w-full max-w-[358px] items-start gap-3 relative">
          <Card className="w-full bg-light-grey rounded-[32px] border-0">
            <CardContent className="flex gap-3.5 px-3 py-4 flex-col items-center">
              <img className="w-16 h-16" alt="Frame" src="/frame-2.svg" />

              <div className="flex flex-col items-center gap-2 w-full">
                <div className="bg-[linear-gradient(159deg,rgba(221,42,123,1)_0%,rgba(151,71,255,1)_41%,rgba(51,76,202,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-1 font-[number:var(--heading-1-font-weight)] text-transparent text-[length:var(--heading-1-font-size)] text-center tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
                  Create New Invoice
                </div>

                <div className="w-72 [font-family:'Roboto',Helvetica] font-normal text-sparko-dark-grey text-xs text-center tracking-[0] leading-[normal]">
                  Start by creating and sending new invoice
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center justify-center gap-2.5 px-0 py-3 w-full">
            <div className="inline-flex flex-col items-center gap-6">
              <div className="inline-flex items-start">
                <div className="inline-flex h-5 items-center justify-center">
                  <div className="[font-family:'Roboto',Helvetica] font-normal text-primary-colour-purple text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                    Or Upload an existing invoice and set payment reminder
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="w-full bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2]">
            <CardContent className="flex flex-col items-start gap-3 px-3 py-4">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="inline-flex items-start gap-1">
                  <div className="flex flex-col w-[188px] items-start gap-2">
                    <div className="inline-flex flex-col items-start gap-1">
                      <div className="inline-flex h-[18px] items-center gap-1">
                        <div className="font-label font-[number:var(--label-font-weight)] text-sparko-dark-grey text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                          Time Period
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-start gap-2">
                    <div className="inline-flex flex-col items-start gap-1">
                      <div className="inline-flex h-[18px] items-center gap-1">
                        <div className="font-caption font-[number:var(--caption-font-weight)] text-sparko-dark-grey text-[length:var(--caption-font-size)] text-right tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] whitespace-nowrap [font-style:var(--caption-font-style)]">
                          dd:mm:yyyy
                        </div>
                        <div className="font-label font-[number:var(--label-font-weight)] text-sparko-dark-grey text-[length:var(--label-font-size)] text-right tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                          -
                        </div>
                        <div className="font-caption font-[number:var(--caption-font-weight)] text-sparko-dark-grey text-[length:var(--caption-font-size)] text-right tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] whitespace-nowrap [font-style:var(--caption-font-style)]">
                          dd:mm:yyyy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-start gap-[8px_8px] w-full">
                  {timePeriodOptions.map((option) => (
                    <Button
                      key={option.value}
                      variant="outline"
                      size="sm"
                      className={`h-auto px-3 py-1 rounded-2xl border border-solid ${selectedPeriod === option.value
                        ? "border-purple-100 bg-[linear-gradient(158deg,rgba(221,42,123,0.05)_0%,rgba(151,71,255,0.05)_52%,rgba(51,76,202,0.05)_100%)]"
                        : "border-[#f2f2f2]"
                        }`}
                      onClick={() => setSelectedPeriod(option.value)}
                    >
                      <div className="inline-flex items-center gap-1">
                        {option.hasCalendarIcon && (
                          <img
                            className="w-5 h-5"
                            alt="Frame"
                            src="/frame-4.svg"
                          />
                        )}
                        <div
                          className={`font-paragraph-paragraph-body-large font-[number:var(--paragraph-paragraph-body-large-font-weight)] text-[length:var(--paragraph-paragraph-body-large-font-size)] text-center tracking-[var(--paragraph-paragraph-body-large-letter-spacing)] leading-[var(--paragraph-paragraph-body-large-line-height)] whitespace-nowrap [font-style:var(--paragraph-paragraph-body-large-font-style)] ${selectedPeriod === option.value
                            ? "bg-[linear-gradient(159deg,rgba(221,42,123,1)_0%,rgba(151,71,255,1)_41%,rgba(51,76,202,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
                            : "text-sparko-dark-grey"
                            }`}
                        >
                          {option.label}
                        </div>
                        {option.hasIcon && (
                          <img
                            className="w-5 h-[18px]"
                            alt="Vector"
                            src="/vector-1.svg"
                          />
                        )}
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2]">
            <CardContent className="flex items-center gap-1 px-3 py-4">
              <div className="inline-flex flex-col items-start gap-2">
                <div className="flex flex-col w-52 gap-1 items-start">
                  <div className="inline-flex h-[18px] items-center gap-1">
                    <div className="font-label font-[number:var(--label-font-weight)] text-sparko-dark-grey text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                      Total Earnings
                    </div>
                  </div>
                </div>

                <div className="w-52 text-[length:var(--heading-2-font-size)] font-heading-2 font-[number:var(--heading-2-font-weight)] text-primary-colour-purple tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                  $1,25,000
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="inline-flex gap-3 items-start">
            <Card className="bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2]">
              <CardContent className="inline-flex items-center gap-1 px-3 py-4">
                <div className="flex flex-col w-[148px] items-start gap-3">
                  <div className="inline-flex flex-col items-start gap-1">
                    <div className="inline-flex h-[18px] items-center gap-1">
                      <div className="font-label font-[number:var(--label-font-weight)] text-sparko-dark-grey text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                        Payment Awaited
                      </div>
                    </div>
                  </div>

                  <div className="w-[84px] text-[length:var(--heading-3-font-size)] font-heading-3 font-[number:var(--heading-3-font-weight)] text-primary-colour-purple tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                    $25,000
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2]">
              <CardContent className="inline-flex items-center gap-1 px-3 py-4">
                <div className="flex flex-col w-[148px] items-start gap-3">
                  <div className="inline-flex flex-col items-start gap-1">
                    <div className="inline-flex h-[18px] items-center gap-1">
                      <div className="font-label font-[number:var(--label-font-weight)] text-sparko-dark-grey text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                        Payment Overdue
                      </div>
                    </div>
                  </div>

                  <div className="w-[84px] text-[length:var(--heading-3-font-size)] font-heading-3 font-[number:var(--heading-3-font-weight)] text-primary-colour-purple tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                    $25,000
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="w-full bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2]">
            <CardContent className="flex items-center gap-1 px-3 py-4">
              <div className="flex w-[334px] items-start gap-6">
                <div className="flex flex-col w-[334px] gap-1 items-start">
                  <div className="flex h-[18px] items-center gap-1 w-full">
                    <div className="font-label font-[number:var(--label-font-weight)] text-grey-text-colour-for-brand text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)]">
                      Income Trend
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-1 w-full">
                    <div className="w-[299px] font-paragraph-paragraph-body-large font-[number:var(--paragraph-paragraph-body-large-font-weight)] text-grey-text-colour-for-brand text-[length:var(--paragraph-paragraph-body-large-font-size)] tracking-[var(--paragraph-paragraph-body-large-letter-spacing)] leading-[var(--paragraph-paragraph-body-large-line-height)] [font-style:var(--paragraph-paragraph-body-large-font-style)]">
                      Your monthly income and growth for the last 6 months.
                    </div>

                    <div className="flex gap-3.5 px-3 py-0 w-full bg-white-neutral rounded-xl flex-col items-center">
                      <img
                        className="w-[334px] h-[314px] ml-[-12.00px] mr-[-12.00px] object-cover"
                        alt="Image"
                        src="/image-60.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-start gap-2.5 p-2.5 w-full">
          <div className="flex items-center gap-28 w-full">
            <div className="w-[221px] font-heading-3 font-[number:var(--heading-3-font-weight)] text-sparko-dark-grey text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
              Your Invoices
            </div>

            <img className="w-6 h-6" alt="Frame" src="/frame-5.svg" />
          </div>

          {invoiceData.map((invoice, index) => (
            <Card
              key={index}
              className="w-full bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2]"
            >
              <CardContent className="flex items-center gap-1 px-3 py-4">
                <div className="inline-flex items-center gap-3 w-full">
                  <div
                    className={`flex flex-col gap-1 items-start ${invoice.statusType === "update"
                      ? "w-[213px]"
                      : invoice.statusType === "partially-paid" ||
                        invoice.statusType === "overdue" ||
                        invoice.statusType === "awaited"
                        ? "w-[209px]"
                        : invoice.statusType === "draft"
                          ? "w-[230px]"
                          : "w-[232px]"
                      }`}
                  >
                    <div className="inline-flex h-[18px] items-center gap-1">
                      <div
                        className={`font-label font-[number:var(--label-font-weight)] text-grey-text-colour-for-brand text-[length:var(--label-font-size)] tracking-[var(--label-letter-spacing)] leading-[var(--label-line-height)] whitespace-nowrap [font-style:var(--label-font-style)] ${invoice.statusType === "unpaid" ? "w-[86px]" : ""
                          }`}
                      >
                        {invoice.clientName}
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="font-paragrapgh-body-small font-[number:var(--paragrapgh-body-small-font-weight)] text-sparko-dark-grey text-[length:var(--paragrapgh-body-small-font-size)] tracking-[var(--paragrapgh-body-small-letter-spacing)] leading-[var(--paragrapgh-body-small-line-height)] whitespace-nowrap [font-style:var(--paragrapgh-body-small-font-style)]">
                        {invoice.amount}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-3 ${invoice.statusType === "update"
                      ? "justify-end"
                      : invoice.statusType === "unpaid"
                        ? "w-[89px] justify-end"
                        : invoice.statusType === "paid"
                          ? "w-[77px] justify-end"
                          : invoice.statusType === "partially-paid"
                            ? "justify-end"
                            : invoice.statusType === "overdue"
                              ? "w-[75px] justify-end"
                              : invoice.statusType === "awaited"
                                ? "justify-end"
                                : invoice.statusType === "draft"
                                  ? "justify-end"
                                  : "justify-end"
                      }`}
                  >
                    <Badge
                      className={`inline-flex items-center justify-center gap-[7.5px] px-[15px] py-[9px] rounded-3xl ${getStatusBadgeClasses(invoice.statusType)}`}
                    >
                      <div className="[font-family:'Roboto',Helvetica] font-medium text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        {invoice.status}
                      </div>
                      {invoice.hasDropdown && (
                        <img
                          className="w-[8.81px] h-[4.4px]"
                          alt="Vector"
                          src="/vector.svg"
                        />
                      )}
                    </Badge>

                    {invoice.hasSettingsIcon && (
                      <img className="w-5 h-5" alt="Frame" src="/frame-3.svg" />
                    )}

                    {invoice.hasIcon && (
                      <img className="w-6 h-6" alt="Frame" src="/frame.svg" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
