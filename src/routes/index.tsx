import type { DocumentHead } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import { prisma } from "~/utils/prisma.server";
import { Units } from "~/components/units";
import { Notes } from "~/components/notes";
import { Tasks } from "~/components/tasks";
import { PageHead } from "~/components/page/head";

export const useUnitsLoader = routeLoader$(async () => {
  return await prisma.unit.findMany();
});

export const useNotesLoader = routeLoader$(async () => {
  return await prisma.note.findMany();
});

export const useTaskLoader = routeLoader$(async () => {
  return await prisma.task.findMany();
});

export default component$(() => {
  const tasks = useTaskLoader();
  const notes = useNotesLoader();
  const units = useUnitsLoader();

  return (
    <>
      <PageHead title="Dashboard">
        <div class="flex flex-row gap-8">
          <a href="" class="text-center">
            New task
          </a>
          <a href="" class="text-center">
            New note
          </a>
          <a href="" class="text-center">
            Quick study
          </a>
          <a href="" class="text-center">
            Settings
          </a>
        </div>
      </PageHead>

      <div class="mx-auto container grid grid-cols-3 gap-8 mt-8 my-12">
        <section class="col-span-1">
          <h2 class="mb-4 text-lg">Coming up</h2>
          <h4 class="text-sm font-medium opacity-80">Tasks</h4>
          <Tasks data={tasks.value} />
          <br />

          <h4 class="text-sm font-medium opacity-80">Events</h4>
          <br />
          <h4 class="text-sm font-medium opacity-80">Assignments</h4>
        </section>
        <section class="col-span-1">
          <h2 class="mb-4 text-lg">Recent</h2>
          <h4 class="text-sm font-medium opacity-80">Notes</h4>
          <Notes data={notes.value} />
          <br />

          <h4 class="text-sm font-medium opacity-80">Definitions</h4>
        </section>
        <section class="col-span-1">
          <h1 class="mb-4 text-lg">Units</h1>
          <Units data={units.value} />
        </section>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
