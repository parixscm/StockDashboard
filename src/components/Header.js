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
