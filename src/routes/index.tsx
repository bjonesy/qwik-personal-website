import Button from "../components/button/button";
import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();

  return (
    <div class="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-4xl mb-4 font-bold tracking-tight sm:text-6xl">
        Brandon Jones
      </h2>
      <h4 class="text-2xl tracking-tight text-primary-600 sm:text-3xl">
        Software Engineer 3
      </h4>
      <p class="text-lg mt-4 sm:text-xl leading-6 text-gray-600">
        Experienced software engineer with over 7 years of experience.
      </p>
      <div class="my-8 flex justify-center ">
        <div class="inline-flex rounded-md shadow">
          <Button
            onClick$={() => {
              nav.path = "/about";
            }}
          >
            About
          </Button>
        </div>
        <div class="ml-3 inline-flex">
          <Button
            onClick$={() => {
              nav.path = "/contact";
            }}
            variant="secondary"
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Brandon Jones",
  meta: [
    {
      name: "description",
      content: "Software Engineer",
    },
  ],
};
