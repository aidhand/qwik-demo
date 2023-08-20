import type { Unit } from "@prisma/client";

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Units = component$((props: { data: Unit[] }) => {
  return (
    <section>
      <nav class="flex flex-col gap-4">
        {props.data.map((unit) => (
          <Link
            href={`/u/${unit.id}`}
            key={unit.id}
            class="p-4 bg-gray-100 hover:bg-gray-200"
          >
            <p class="text-sm font-medium opacity-60">{unit.code}</p>
            <h3>{unit.name}</h3>
          </Link>
        ))}
      </nav>
    </section>
  );
});
