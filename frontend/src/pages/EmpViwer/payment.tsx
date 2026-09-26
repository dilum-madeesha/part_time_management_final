import { useState } from "react";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Clock,
  CreditCard,
  DollarSign,
  Plus,
  Receipt,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import type { PaymentMethod, Transaction } from "./types";
import { EmptyState, FinanceCard, SummaryRow } from "../../components/Shared";
import {
  AddPaymentMethodModal,
  PaymentMethodCard,
  TransactionRow,
  TransactionTableRow,
} from "../../components/PaymentParts";

export default function Payment({
  transactions,
  paymentMethods,
  onAddDeposit,
  onAddPaymentMethod,
  onSetDefault,
  onRemoveMethod,
}: {
  transactions: Transaction[];
  paymentMethods: PaymentMethod[];
  onAddDeposit: (amount: number, method: string) => void;
  onAddPaymentMethod: (method: PaymentMethod) => void;
  onSetDefault: (id: string) => void;
  onRemoveMethod: (id: string) => void;
}) {
  const [depositAmount, setDepositAmount] = useState("");
  const [depositMethod, setDepositMethod] = useState(
    paymentMethods.find((item) => item.isDefault)?.accountNumber || ""
  );
  const [showAddMethod, setShowAddMethod] = useState(false);

  const completedEarnings = transactions
    .filter((transaction) => transaction.type === "Job Earnings" && transaction.status === "Completed")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const completedDeposits = transactions
    .filter((transaction) => transaction.type === "Deposit" && transaction.status === "Completed")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const pendingDeposits = transactions
    .filter((transaction) => transaction.type === "Deposit" && transaction.status === "Pending")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const completedWithdrawals = transactions
    .filter((transaction) => transaction.type === "Withdrawal" && transaction.status === "Completed")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  /*
    Demo wallet calculation:
    Deposits + completed earnings - withdrawals.
    In production this value must come from your backend,
    not be calculated only in the frontend.
  */
  const availableBalance = completedDeposits + completedEarnings - completedWithdrawals;

  const handleDeposit = () => {
    const amount = Number(depositAmount);

    if (!amount || amount <= 0 || !depositMethod) return;

    onAddDeposit(amount, depositMethod);
    setDepositAmount("");
  };

  return (
    <div className="p-4 pb-24 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">Finance</p>

        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Payments & Wallet</h2>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-[#6F665A]">
          Manage your payment methods, wallet deposits, job earnings, withdrawals, and complete
          payment history from one place.
        </p>

        {/* BALANCE CARDS */}
        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <FinanceCard
            title="Available Balance"
            value={`Rs. ${availableBalance.toLocaleString()}`}
            description="Currently available"
            icon={<Wallet />}
            dark
          />

          <FinanceCard
            title="Job Earnings"
            value={`Rs. ${completedEarnings.toLocaleString()}`}
            description="Completed work"
            icon={<DollarSign />}
          />

          <FinanceCard
            title="Deposits"
            value={`Rs. ${completedDeposits.toLocaleString()}`}
            description="Completed deposits"
            icon={<ArrowDownCircle />}
          />

          <FinanceCard
            title="Pending Deposits"
            value={`Rs. ${pendingDeposits.toLocaleString()}`}
            description="Awaiting confirmation"
            icon={<Clock />}
          />
        </section>

        {/* IMPORTANT PAYMENT INFO */}
        <section className="mt-6 rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF2FA] text-[#356A99]">
              <ShieldCheck size={20} />
            </div>

            <div>
              <h3 className="font-bold">Payment Security</h3>
              <p className="mt-1 text-sm leading-6 text-[#6F665A]">
                Payment details should be verified before deposits or withdrawals are processed.
                Never store raw card numbers, CVV codes, PINs, or bank passwords in your database.
              </p>
            </div>
          </div>
        </section>

        {/* DEPOSIT + METHODS */}
        <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.05fr_1.4fr]">
          {/* DEPOSIT */}
          <div className="rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF6D9] text-[#806400]">
                <ArrowDownCircle size={20} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
                  Add Funds
                </p>
                <h3 className="text-xl font-bold">Make a Deposit</h3>
              </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#6F665A]">
              Add money to your SmartHire wallet using one of your verified payment methods.
            </p>

            <label className="mt-5 block text-xs font-semibold text-[#5F5548]">
              Deposit Amount
            </label>

            <div className="relative mt-1.5">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#7B7165]">
                Rs.
              </span>

              <input
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                type="number"
                min="0"
                placeholder="Enter amount"
                className="w-full rounded-xl border border-[#2A2118]/10 bg-[#FAF8F2] px-4 py-3 pl-12 text-sm outline-none focus:border-[#F2C84B] focus:ring-2 focus:ring-[#F2C84B]/20"
              />
            </div>

            <label className="mt-4 block text-xs font-semibold text-[#5F5548]">
              Payment Method
            </label>

            <select
              value={depositMethod}
              onChange={(e) => setDepositMethod(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-[#2A2118]/10 bg-[#FAF8F2] px-4 py-3 text-sm outline-none focus:border-[#F2C84B]"
            >
              <option value="">Select payment method</option>
              {paymentMethods
                .filter((method) => method.verified)
                .map((method) => (
                  <option key={method.id} value={method.accountNumber}>
                    {method.name} - {method.accountNumber}
                  </option>
                ))}
            </select>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[1000, 2500, 5000].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDepositAmount(amount.toString())}
                  className="rounded-xl border border-[#2A2118]/10 bg-[#FAF8F2] py-2.5 text-xs font-semibold hover:border-[#F2C84B]"
                >
                  Rs. {amount.toLocaleString()}
                </button>
              ))}
            </div>

            <button
              onClick={handleDeposit}
              disabled={!depositAmount || !depositMethod}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2A2118] py-3.5 text-sm font-bold text-white disabled:cursor-not-allowed disabled:bg-[#E7E1D5] disabled:text-[#766D62]"
            >
              <Plus size={17} />
              Add Deposit
            </button>

            <p className="mt-3 text-[11px] leading-5 text-[#8A7C68]">
              New deposits are shown as Pending until the payment provider confirms the
              transaction.
            </p>
          </div>

          {/* PAYMENT METHODS */}
          <div className="rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
                  Payment Setup
                </p>
                <h3 className="mt-1 text-xl font-bold">Payment Methods</h3>
              </div>

              <button
                onClick={() => setShowAddMethod(true)}
                className="flex items-center gap-2 rounded-xl bg-[#F2C84B] px-3 py-2.5 text-xs font-bold"
              >
                <Plus size={15} />
                Add Method
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {paymentMethods.map((method) => (
                <PaymentMethodCard
                  key={method.id}
                  method={method}
                  onSetDefault={() => onSetDefault(method.id)}
                  onRemove={() => onRemoveMethod(method.id)}
                />
              ))}
            </div>

            {paymentMethods.length === 0 && (
              <EmptyState
                icon={<CreditCard />}
                title="No payment methods"
                description="Add a verified bank account or wallet to make deposits."
              />
            )}

            <div className="mt-5 rounded-2xl bg-[#F6F1E4] p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck size={18} className="mt-0.5 shrink-0 text-[#806400]" />

                <div>
                  <p className="text-xs font-bold">Recommended information</p>
                  <p className="mt-1 text-[11px] leading-5 text-[#6F665A]">
                    Store only masked account information in the frontend. Payment provider tokens
                    should be used for real transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EARNINGS BREAKDOWN */}
        <section className="mt-6 rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
              Earnings
            </p>
            <h3 className="mt-1 text-xl font-bold">Payment Summary</h3>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <SummaryRow
              icon={<DollarSign />}
              title="Completed Job Earnings"
              value={`Rs. ${completedEarnings.toLocaleString()}`}
            />

            <SummaryRow
              icon={<ArrowDownCircle />}
              title="Completed Deposits"
              value={`Rs. ${completedDeposits.toLocaleString()}`}
            />

            <SummaryRow
              icon={<ArrowUpCircle />}
              title="Completed Withdrawals"
              value={`Rs. ${completedWithdrawals.toLocaleString()}`}
            />
          </div>
        </section>

        {/* DEPOSIT HISTORY */}
        <section className="mt-6 rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
                Transactions
              </p>
              <h3 className="mt-1 text-xl font-bold">Deposit History</h3>
            </div>

            <Receipt size={20} className="text-[#806400]" />
          </div>

          <div className="mt-5 space-y-3">
            {transactions
              .filter((transaction) => transaction.type === "Deposit")
              .map((transaction) => (
                <TransactionRow key={transaction.id} transaction={transaction} />
              ))}
          </div>
        </section>

        {/* FULL TRANSACTION HISTORY */}
        <section className="mt-6 rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
              Financial Activity
            </p>
            <h3 className="mt-1 text-xl font-bold">Transaction History</h3>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[850px]">
              <thead>
                <tr className="border-b border-[#2A2118]/10 text-left">
                  <th className="pb-3 text-xs text-[#7B7165]">TRANSACTION</th>
                  <th className="pb-3 text-xs text-[#7B7165]">TYPE</th>
                  <th className="pb-3 text-xs text-[#7B7165]">DATE</th>
                  <th className="pb-3 text-xs text-[#7B7165]">METHOD</th>
                  <th className="pb-3 text-xs text-[#7B7165]">AMOUNT</th>
                  <th className="pb-3 text-xs text-[#7B7165]">STATUS</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((transaction) => (
                  <TransactionTableRow key={transaction.id} transaction={transaction} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {showAddMethod && (
        <AddPaymentMethodModal
          onClose={() => setShowAddMethod(false)}
          onSave={(method) => {
            onAddPaymentMethod(method);
            setShowAddMethod(false);
          }}
        />
      )}
    </div>
  );
}
