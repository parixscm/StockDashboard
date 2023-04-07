/**
 * 파일 역할: 헤더 컴포넌트 (in 대시보드 컴포넌트)
 * 작성자: Jason (parixscm)
 * 최근 업데이트: 2023.03.22.
 */

import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

function Header({ name }) {
  return (
    <>
      <div className="xl:px-32">
        <h1 className="text-4xl">{name}</h1>
        <Search />
      </div>
      <ThemeIcon />
    </>
  );
}

export default Header;
