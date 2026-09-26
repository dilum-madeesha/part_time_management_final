import { useState } from "react";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Building2,
  CreditCard,
  DollarSign,
  Smartphone,
  X,
} from "lucide-react";
import type { PaymentMethod, PaymentMethodType, Transaction } from "../pages/EmpViwer/types";
import { TransactionStatusBadge } from "./Shared";

/* =========================================================
   PAYMENT METHOD CARD
========================================================= */

export function PaymentMethodCard({
  method,
  onSetDefault,
  onRemove,
}: {
  method: PaymentMethod;
  onSetDefault: () => void;
  onRemove: () => void;
}) {
  const icon =
    method.type === "Bank Account" ? (
      <Building2 size={19} />
    ) : method.type === "Mobile Wallet" ? (
      <Smartphone size={19} />
    ) : (
      <CreditCard size={19} />
    );

  return (
    <div className="rounded-2xl border border-[#2A2118]/10 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F6F1E4] text-[#806400]">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-bold">{method.name}</h4>

            {method.isDefault && (
              <span className="rounded-full bg-[#F2C84B] px-2 py-1 text-[9px] font-bold">
                DEFAULT
              </span>
            )}

            {method.verified ? (
              <span className="rounded-full bg-[#EAF6ED] px-2 py-1 text-[9px] font-bold text-[#287A3D]">
                VERIFIED
              </span>
            ) : (
              <span className="rounded-full bg-[#FFF6D9] px-2 py-1 text-[9px] font-bold text-[#806400]">
                VERIFICATION REQUIRED
              </span>
            )}
          </div>

          <p className="mt-1 text-xs text-[#6F665A]">{method.type}</p>

          <p className="mt-2 text-sm font-semibold">{method.accountNumber}</p>

          <p className="text-xs text-[#8A7C68]">{method.accountName}</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {!method.isDefault && (
          <button
            onClick={onSetDefault}
            className="rounded-xl border border-[#2A2118]/10 px-3 py-2 text-xs font-semibold"
          >
            Make Default
          </button>
        )}

        <button
          onClick={onRemove}
          className="rounded-xl border border-[#E9CACA] px-3 py-2 text-xs font-semibold text-[#B33A3A]"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   TRANSACTION ROW (card list style)
========================================================= */

export function TransactionRow({ transaction }: { transaction: Transaction }) {
  const isPositive =
    transaction.type === "Deposit" ||
    transaction.type === "Job Earnings" ||
    transaction.type === "Refund";

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#2A2118]/10 p-4">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          isPositive ? "bg-[#EAF6ED] text-[#287A3D]" : "bg-[#FFF1F1] text-[#B33A3A]"
        }`}
      >
        {transaction.type === "Deposit" ? (
          <ArrowDownCircle size={19} />
        ) : transaction.type === "Withdrawal" ? (
          <ArrowUpCircle size={19} />
        ) : (
          <DollarSign size={19} />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-bold">{transaction.title}</h4>
        <p className="truncate text-xs text-[#6F665A]">{transaction.description}</p>
        <p className="mt-1 text-[10px] text-[#8A7C68]">
          {transaction.date} • {transaction.method}
        </p>
      </div>

      <div className="text-right">
        <p className={`text-sm font-bold ${isPositive ? "text-[#287A3D]" : "text-[#B33A3A]"}`}>
          {isPositive ? "+" : "-"} Rs. {transaction.amount.toLocaleString()}
        </p>

        <TransactionStatusBadge status={transaction.status} />
      </div>
    </div>
  );
}

/* =========================================================
   TRANSACTION TABLE ROW
========================================================= */

export function TransactionTableRow({ transaction }: { transaction: Transaction }) {
  const positive =
    transaction.type === "Deposit" ||
    transaction.type === "Job Earnings" ||
    transaction.type === "Refund";

  return (
    <tr className="border-b border-[#2A2118]/5">
      <td className="py-4">
        <p className="text-sm font-semibold">{transaction.title}</p>
        <p className="text-xs text-[#8A7C68]">{transaction.id}</p>
      </td>

      <td className="py-4 text-xs text-[#6F665A]">{transaction.type}</td>

      <td className="py-4 text-xs text-[#6F665A]">{transaction.date}</td>

      <td className="py-4 text-xs text-[#6F665A]">{transaction.method}</td>

      <td className={`py-4 text-sm font-bold ${positive ? "text-[#287A3D]" : "text-[#B33A3A]"}`}>
        {positive ? "+" : "-"} Rs. {transaction.amount.toLocaleString()}
      </td>

      <td className="py-4">
        <TransactionStatusBadge status={transaction.status} />
      </td>
    </tr>
  );
}

/* =========================================================
   ADD PAYMENT METHOD MODAL
========================================================= */

export function AddPaymentMethodModal({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (method: PaymentMethod) => void;
}) {
  const [type, setType] = useState<PaymentMethodType>("Bank Account");
  const [provider, setProvider] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const submit = () => {
    if (!provider || !accountName || !accountNumber) return;

    onSave({
      id: `PM${Date.now()}`,
      type,
      name: provider,
      accountName,
      accountNumber: maskAccountNumber(accountNumber),
      isDefault: false,
      verified: false,
    });
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-[#2A2118]/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
              Payment Setup
            </p>
            <h3 className="mt-1 text-xl font-bold">Add Payment Method</h3>
          </div>

          <button onClick={onClose} className="rounded-xl bg-[#F6F1E4] p-2">
            <X size={18} />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {(["Bank Account", "Mobile Wallet", "Debit Card"] as PaymentMethodType[]).map((item) => (
            <button
              key={item}
              onClick={() => setType(item)}
              className={`rounded-xl border p-3 text-xs font-semibold ${
                type === item ? "border-[#F2C84B] bg-[#FFF6D9]" : "border-[#2A2118]/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <label className="mt-5 block text-xs font-semibold text-[#5F5548]">
          Provider / Bank Name
        </label>

        <input
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          placeholder={
            type === "Bank Account"
              ? "e.g. Commercial Bank"
              : type === "Mobile Wallet"
              ? "e.g. Mobile Wallet Provider"
              : "e.g. Visa / Mastercard"
          }
          className="mt-1.5 w-full rounded-xl border border-[#2A2118]/10 bg-[#FAF8F2] px-4 py-3 text-sm outline-none focus:border-[#F2C84B]"
        />

        <label className="mt-4 block text-xs font-semibold text-[#5F5548]">
          Account Holder Name
        </label>

        <input
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          placeholder="Full account holder name"
          className="mt-1.5 w-full rounded-xl border border-[#2A2118]/10 bg-[#FAF8F2] px-4 py-3 text-sm outline-none focus:border-[#F2C84B]"
        />

        <label className="mt-4 block text-xs font-semibold text-[#5F5548]">
          Account / Card Number
        </label>

        <input
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          placeholder="Enter account number"
          className="mt-1.5 w-full rounded-xl border border-[#2A2118]/10 bg-[#FAF8F2] px-4 py-3 text-sm outline-none focus:border-[#F2C84B]"
        />

        <div className="mt-4 rounded-xl bg-[#FFF7F7] p-3 text-xs leading-5 text-[#7C4C4C]">
          For a real payment system, send sensitive payment information directly to your payment
          provider. Do not save CVV, PIN, passwords, or complete card details in your database.
        </div>

        <div className="mt-5 flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-[#2A2118]/15 py-3 text-sm font-semibold"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            disabled={!provider || !accountName || !accountNumber}
            className="flex-1 rounded-xl bg-[#2A2118] py-3 text-sm font-bold text-white disabled:bg-[#E7E1D5] disabled:text-[#766D62]"
          >
            Save Method
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   HELPERS
========================================================= */

export function maskAccountNumber(value: string) {
  const clean = value.replace(/\s/g, "");

  if (clean.length <= 4) {
    return `**** ${clean}`;
  }

  return `**** **** ${clean.slice(-4)}`;
}
