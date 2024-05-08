import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const onChangeFilter = (event) => {
    const filter = event.target.value;
    dispatch(changeFilter(filter));
  };

  return (
    <section className={css.searchBox}>
      <span className={css.titleSearch}>Find contacts by name</span>

      <input
        className={css.inputSearch}
        type="text"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Search ..."
      />
    </section>
  );
};

export default SearchBox;
