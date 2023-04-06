import { MoonIcon } from "@heroicons/react/24/solid";

function ThemeIcon() {
  return (
    <button className="p-2 absolute right-8 rounded-lg border-1 border-neutral-400 shadow-md xl:right-32">
      <MoonIcon className="w-5 h-5 cursor-pointer stroke-1 fill-none stroke-neutral-400" />
    </button>
  );
}

export default ThemeIcon;
