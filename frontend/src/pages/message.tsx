export default function Message() {
  const messages = [
    {
      company: "ABC Events",
      message:
        "Your application has been accepted. Please arrive 15 minutes before the starting time.",
      time: "10 min ago",
      unread: true,
    },
    {
      company: "Tech Solutions",
      message: "We have received your application for Data Entry Assistant.",
      time: "2 hours ago",
      unread: true,
    },
    {
      company: "NextGen Marketing",
      message: "Thank you for your interest in our job opportunity.",
      time: "Yesterday",
      unread: false,
    },
  ];

  return (
    <div className="p-4 pb-24 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#B88A00]">
          Communication
        </p>

        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Messages</h2>

        <p className="mt-2 text-sm text-[#6F665A]">
          Communicate with employers about your applications and accepted jobs.
        </p>

        <div className="mt-6 space-y-3">
          {messages.map((message) => (
            <div
              key={message.company}
              className="flex gap-4 rounded-3xl border border-[#2A2118]/10 bg-white p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F2C84B] font-bold">
                {message.company.charAt(0)}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex justify-between gap-3">
                  <h3 className="font-bold">{message.company}</h3>
                  <span className="text-xs text-[#8A7C68]">{message.time}</span>
                </div>

                <p className="mt-1 text-sm leading-6 text-[#6F665A]">{message.message}</p>
              </div>

              {message.unread && (
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#F2C84B]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
