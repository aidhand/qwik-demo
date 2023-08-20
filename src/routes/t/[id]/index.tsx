import type { DocumentHead } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";

import { prisma } from "~/utils/prisma.server";
import { PageHead } from "~/components/page/head";

export const useTaskLoader = routeLoader$(async (requestEvent) => {
  const task = await prisma.task.findFirst({
    where: {
      id: requestEvent.params.id as string,
    },
  });

  if (!task) {
    throw requestEvent.error(404, "Task not found");
  }

  return task;
});

export default component$(() => {
  const task = useTaskLoader();

  return (
    <>
      <PageHead title={task.value.name}>
        <Link href="/">Back to dashboard</Link>
      </PageHead>
      <div class="">
        <p>{task.value.content}</p>
      </div>
    </>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const task = resolveValue(useTaskLoader);
  return {
    title: `Task "${task.name}"`,
  };
};
