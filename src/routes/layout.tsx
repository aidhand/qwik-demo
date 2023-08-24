import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { component$, Slot } from "@builder.io/qwik";
import { SiteHead } from "~/components/site/head";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

// export const onRequest: RequestHandler = async (requestEvent) => {
//   const user = requestEvent.cookie.get("auth_token");

//   if (user) {
//     console.log("User is logged in");
//   } else {
//     console.log("User is not logged in");
//   }
// };

export default component$(() => {
  return (
    <>
      <SiteHead />
      <main class="mx-auto px-2 lg:px-4">
        <Slot />
      </main>
    </>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} | Qwik Study`,
  };
};
