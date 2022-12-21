import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="mt-auto py-6">
      <p class="text-center text-base text-gray-600">
        &copy; {new Date().getFullYear()}, Brandon Jones
      </p>
    </footer>
  );
});
