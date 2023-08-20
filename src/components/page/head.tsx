import type { HTMLAttributes } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";

interface PageHeadProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const PageHead = component$<PageHeadProps>((props) => {
  return (
    <div class="container mx-auto flex my-4 py-4 justify-between items-center gap-4 border-b b-gray-200">
      <h1 class="text-lg font-medium">{props.title}</h1>
      <span>
        <Slot />
      </span>
    </div>
  );
});
