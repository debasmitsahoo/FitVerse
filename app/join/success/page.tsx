import Link from "next/link"

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 text-[#45ffca]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-5xl font-bold mb-6">
          Registration <span className="text-[#45ffca]">Successful!</span>
        </h1>

        <p className="text-xl mb-8">
          Thank you for joining FitVerse! Your registration has been submitted successfully. Our team will contact you
          shortly with further details about your membership.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block py-3 px-8 bg-[#45ffca] text-black text-xl font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_#45ffca] hover:bg-[#45ffca]/90"
          >
            Return to Home
          </Link>

          <p className="text-lg text-gray-400 mt-4">
            If you have any questions, please contact us at{" "}
            <a href="mailto:support@fitverse.com" className="text-[#45ffca] hover:underline">
              support@fitverse.com
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
