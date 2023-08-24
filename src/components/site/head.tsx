import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const SiteHead = component$(() => {
  return (
    <header class="bg-gray-100">
      <div class="h-16 container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 class="p-2 m-0 text-xl font-bold">Qwik Study</h1>
        </Link>
        <nav class="flex gap-2 font-medium">
          <Link href="/" class="p-2">
            Dashboard
          </Link>
          <Link href="/schedule" class="p-2">
            Schedule
          </Link>
        </nav>
      </div>
    </header>
  );
});
