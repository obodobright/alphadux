import { SearchContainer } from "./styles.component";
import { ReactComponent as SearchIcon } from "../../../assets/svg//search.svg";
const SearchInput = () => {
  return (
    <form>
      <SearchContainer>
        <SearchIcon />
        <input type="text" name="search" id="search" />
      </SearchContainer>
    </form>
  );
};

export default SearchInput;
