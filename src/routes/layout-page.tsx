import { Slot, component$ } from "@builder.io/qwik";

import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main>
        <Header
          navigation={[
            {
              name: "About",
              href: "/about",
            },
            {
              name: "Contact",
              href: "/contact",
            },
          ]}
        />
        <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
