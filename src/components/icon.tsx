import { Slot, component$ } from "@builder.io/qwik";

interface IconProps {
  size?: number;
  fill?: string;
  stroke?: string;
  class?: string;
}

export const Icon = component$<IconProps>((props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 20}
      height={props.size || 20}
      viewBox="0 0 24 24"
      fill={props.fill || "none"}
      stroke="currentColor"
      stroke-width={props.stroke || 2}
      stroke-linecap="round"
      stroke-linejoin="round"
      class={`icon ${props.class || ""}`}
    >
      <Slot />
    </svg>
  );
});
