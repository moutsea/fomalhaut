import Link from 'next/link'

export const dynamic = 'force-static';

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen py-24 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">404</h2>
          <p className="mt-6 text-base leading-7 text-gray-600">Could not find requested resource</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}