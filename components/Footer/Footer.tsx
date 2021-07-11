const socials = [
  { title: "Facebook", url: "https://www.facebook.com/gerbartaproom/" },
  { title: "Instagram", url: "https://www.instagram.com/gertaproom/?hl=en" },
  {
    title: "Yelp",
    url: "https://www.yelp.com/biz/ger-bar-taproom-los-angeles-3",
  },
  { title: "Email", url: "mailto:gertaproom@gmail.com" },
];
const copyright = "Ger Bar Taproom, All rights reserved.";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-full mx-auto border-t border-gray-200 dark:border-gray-700 mt-6 py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {socials.map(({ title, url }) => (
              <div key={title} className="px-5 py-2">
                <a
                  href={url}
                  target="_blank"
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white underline transition duration-500 ease-in-out"
                >
                  {title}
                </a>
              </div>
            ))}
          </nav>
          <p className="mt-8 text-center text-base text-gray-400 dark:text-gray-400">
            &copy; {copyright}
          </p>
        </div>
      </footer>
    </>
  );
}
