import { ArrowDownTrayIcon } from "../icons/arrow-down-tray-icon";
import { Link } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

interface NavigationLink {
  name: string;
  href: string;
}

interface HeaderProps {
  navigation: NavigationLink[];
}

export default component$((props: HeaderProps) => {
  const { navigation } = props;

  return (
    <header class="bg-primary-600 sticky top-0 z-10">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div class="flex w-full items-center justify-between border-b border-primary-500 py-6 lg:border-none">
          <div class="flex items-center">
            <Link href="/">
              <h1 class="text-xl font-medium text-white hover:text-primary-50">
                Brandon Jones
              </h1>
            </Link>
            <div class="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  class="text-base font-medium text-white hover:text-primary-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div class="ml-10 space-x-4">
            <a
              class="rounded-md px-4 py-2 text-base inline-flex items-center border border-transparent bg-primary-100 text-primary-700 hover:bg-primary-200 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              href="/resume.pdf"
            >
              Resume
              <ArrowDownTrayIcon iconClass="ml-3 -mr-1 h-5 w-5" />
            </a>
          </div>
        </div>
        <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
});
