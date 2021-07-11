import { SunIcon, MoonIcon } from "@components/Icons";
import Toggle from "@components/Toggle";

export default function DarkMode() {
  return (
    <>
      <div className="relative mt-6 mb-3 col-start-1 col-end-4 px-4 sm:px-6 md:px-8 lg:px-0 lg:col-start-2 lg:col-end-4 xl:col-end-3 row-start-1 row-end-2 xl:row-end-3 pb-8 lg:pb-11 xl:pb-0">
        <div className="flex justify-center">
          <div className="flex items-center space-x-4">
            <SunIcon />
            <Toggle />
            <MoonIcon />
          </div>
        </div>
      </div>
    </>
  );
}
