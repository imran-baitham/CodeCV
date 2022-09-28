/* eslint-disable react/jsx-key */
import Link from "next/link";
import { ReactIcon } from "../index";

const navigation = {
  solutions: [
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
    { name: "Marketing", href: "#" },
  ],
  support: [
    { name: "Documentation", href: "#" },
    { name: "API Status", href: "#" },
    { name: "Pricing", href: "#" },
    // { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "/contact" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Claim", href: "#" },
    { name: "Terms", href: "#" },
  ],
};
let LinkMedia = [
  { name: "RiFacebookBoxFill", href: "#" },
  { name: "RiTwitterFill", href: "#" },
  { name: "RiInstagramFill", href: "#" },
  { name: "RiLinkedinBoxFill", href: "#" },
  { name: "RiYoutubeFill", href: "#" },
];

export function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer
      className="dark:bg-zinc-800 bg-white"
      aria-labelledby="footer-heading"
    >
      <div className="container_main border-t-2 border-yellow-500">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:pt-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-lg font-semibold">Solutions</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base dark:text-gray-300 text-gray-600 dark:hover:text-gray-200 hover:text-black"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-lg font-semibold">Support</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base dark:text-gray-300 text-gray-600 dark:hover:text-gray-200 hover:text-black"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-lg font-semibold">Company</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                      <li
                        key={item.name}
                        className="text-base dark:text-gray-300 text-gray-600 dark:hover:text-gray-200 hover:text-black"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-lg font-semibold">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                         key={item.name}
                          href={item.href}
                          className="text-base dark:text-gray-300 text-gray-600 dark:hover:text-gray-200 hover:text-black"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 xl:mt-0">
              <h3 className="text-lg font-semibold">Website Name</h3>
              <p className="mt-4 text-base dark:text-gray-300 text-gray-600 dark:hover:text-gray-200 hover:text-black">
                The latest news, articles, and resources, Follow Us. Choose your
                book to reading, we offer you the books With Delivery. Follow Us
                on Social Media.
              </p>
              <div className="mt-7 flex lg:items-end justify-left">
                {LinkMedia.map((x: any) => {
                  return (
                    <a
                      key={x.name}
                      href=""
                      className="mr-2 border border-1 dark:border-white border-black p-[6px]"
                    >
                      <ReactIcon icon={x.name} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-700 pt-8 md:flex md:items-center md:justify-between">
            <p className="mt-8 dark:text-gray-400 text-gray-500 md:mt-0">
              &copy; {year} BookCler. All rigths reserved.
            </p>
            <div className="flex items-center">
              <a
                href=""
                className="text-sm md:mt-0 dark:text-gray-400 text-gray-500"
              >
                Terms & Agreements
              </a>
              <a
                href=""
                className="ml-4 text-sm md:mt-0 dark:text-gray-400 text-gray-500"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
