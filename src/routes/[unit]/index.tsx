import type { DocumentHead } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";

import { prisma } from "~/utils/prisma.server";
import { PageHead } from "~/components/page/head";
import { Tasks } from "~/components/tasks";
import { Notes } from "~/components/notes";

export const useUnitLoader = routeLoader$(async (requestEvent) => {
  const unit = await prisma.unit.findFirst({
    where: {
      code: requestEvent.params.unit as string,
    },
  });

  if (!unit) {
    throw requestEvent.error(404, "Unit not found");
  }

  return unit;
});

export const useNotesLoader = routeLoader$(async () => {
  return await prisma.note.findMany();
});

export const useTodosLoader = routeLoader$(async () => {
  return await prisma.task.findMany();
});

export default component$(() => {
  const unit = useUnitLoader();

  const todos = useTodosLoader();
  const notes = useNotesLoader();

  return (
    <>
      <PageHead title={unit.value.name}>
        <Link href="/">Back to dashboard</Link>
      </PageHead>
      <div class="grid grid-cols-3 gap-4">
        <section class="col-span-1 p-4 border b-gray-200">
          <Tasks data={todos.value} />
        </section>

        <section class="col-span-2 p-4 border b-gray-200">
          <Notes data={notes.value} />
        </section>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "unit",
  meta: [
    {
      name: "description",
      content: "description",
    },
  ],
};
