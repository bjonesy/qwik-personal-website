import { DocumentHead } from "@builder.io/qwik-city";
import { EnvelopeIcon } from "../../components/icons/envelope-icon";
import { GitHubIcon } from "../../components/icons/github-icon";
import { LinkedInIcon } from "../../components/icons/linkedin-icon";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="pb-6">
        <h1 class="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight py-6">
          Contact
        </h1>
        <div class="mt-3">
          <p class="text-gray-600">
            Feel free to reach out and connect with me with any questions about
            my work or interests, collaboration opportunities, or general
            comments.
          </p>
        </div>
        <div class="mt-9">
          <div class="flex">
            <div class="flex-shrink-0">
              <EnvelopeIcon iconClass="h-7 w-7 text-gray-400" />
            </div>
            <div class="ml-3 text-base text-gray-500">
              <p>
                <a
                  class="text-primary-600"
                  href="mailto:bjones042120.tech@gmail.com"
                >
                  bjones042120.tech@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div class="flex mt-6">
            <div class="flex-shrink-0">
              <GitHubIcon iconClass="h-6 w-6 text-gray-400" />
            </div>
            <div class="ml-3 text-base text-gray-500">
              <p>
                <a
                  class="text-primary-600"
                  href="https://github.com/bjonesy"
                  target="_blank"
                >
                  GitHub Profile
                </a>
              </p>
            </div>
          </div>
          <div class="flex mt-6">
            <div class="flex-shrink-0">
              <LinkedInIcon iconClass="h-6 w-6 text-gray-400 fill-current" />
            </div>
            <div class="ml-3 text-base text-gray-500">
              <p>
                <a
                  class="text-primary-600"
                  href="https://www.linkedin.com/in/brandon-jones-57513b13/"
                  target="_blank"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Contact",
};
