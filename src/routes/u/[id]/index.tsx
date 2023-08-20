import type { DocumentHead } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";

import { prisma } from "~/utils/prisma.server";
import { PageHead } from "~/components/page/head";

export const useUnitLoader = routeLoader$(async (requestEvent) => {
  const unit = await prisma.unit.findUnique({
    where: {
      id: requestEvent.params.id as string,
    },
  });

  if (!unit) {
    throw requestEvent.error(404, "Unit not found");
  }

  return unit;
});

export default component$(() => {
  const unit = useUnitLoader();

  return (
    <>
      <PageHead title={unit.value.name}>
        <Link href="/">Back to dashboard</Link>
      </PageHead>
      <div class="grid grid-cols-3 gap-4"></div>
    </>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const unit = resolveValue(useUnitLoader);
  return {
    title: `${unit.code} ${unit.name}`,
  };
};
