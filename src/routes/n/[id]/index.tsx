import type { DocumentHead } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";

import { prisma } from "~/utils/prisma.server";
import { PageHead } from "~/components/page/head";

export const useNoteLoader = routeLoader$(async (requestEvent) => {
  const note = await prisma.note.findFirst({
    where: {
      id: requestEvent.params.id as string,
    },
  });

  if (!note) {
    throw requestEvent.error(404, "Note not found");
  }

  return note;
});

export default component$(() => {
  const note = useNoteLoader();

  return (
    <>
      <PageHead title={note.value.name}>
        <div class="flex flex-row items-center gap-8">
          <Link href="/n/new">New note</Link>
          <Link href="/">Back to dashboard</Link>
        </div>
      </PageHead>
      <div class="">
        <p>{note.value.content}</p>
      </div>
    </>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const note = resolveValue(useNoteLoader);
  return {
    title: `Note "${note.name}"`,
  };
};
