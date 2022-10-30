export const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="/images/logo.webp"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white">
              Staff Panel
            </span>
          </a>
          <div className="flex items-center">
            <a
              href="https://metrobots.xyz/"
              className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              Website
            </a>
            <a
              href="https://discord.gg/49DE35a5eJ"
              className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              Support
            </a>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/dispatch"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Dispatch
                </a>
              </li>
              <li>
                <a
                  href="/bots"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Bots
                </a>
              </li>
              <li>
                <a
                  href="/lists"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Lists
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
