import type { Note } from "@prisma/client";

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Notes = component$((props: { data: Note[] }) => {
  return (
    <section>
      <nav>
        {props.data.map((note) => (
          <Link href={`/n/${note.id}`} key={note.id} class="my-2 block w-full">
            <h3>{note.name}</h3>
          </Link>
        ))}
      </nav>
    </section>
  );
});
