/**
 * 파일 역할: 테마 설정 컴포넌트 (in 헤더 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

import { MoonIcon } from "@heroicons/react/24/solid";

function ThemeIcon() {
  return (
    <button className="p-2 absolute right-8 rounded-lg border-1 border-neutral-400 shadow-md xl:right-32">
      <MoonIcon className="w-5 h-5 cursor-pointer stroke-1 fill-none stroke-neutral-400" />
    </button>
  );
}

export default ThemeIcon;
