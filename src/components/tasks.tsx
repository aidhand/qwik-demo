import type { Task } from "@prisma/client";

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Tasks = component$((props: { data: Task[] }) => {
  return (
    <section>
      <nav>
        {props.data.map((task) => (
          <Link
            href={`/tasks/${task.id}`}
            key={task.id}
            class="my-2 block w-full"
          >
            {task.name}
          </Link>
        ))}
      </nav>
    </section>
  );
});
