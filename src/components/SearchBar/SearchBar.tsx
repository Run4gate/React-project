import { useState } from "react";
import "./SearchBar.css";
import { FilterMenu } from "./FilterMenu";
import { Formik, Form, Field } from "formik";
import { configureHistory, configureSearch, setSearchResults } from "../../store/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { TypeFilters } from "../../http/characterTypes";
import { fetchFilteredCharacters } from "../../http/characterAPI";
import { searchConfig } from "../../utils/selectors";

export const SearchBar: React.FC<{ filterPosition: string }> = (props) => {
  const dispatch = useDispatch();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const initialValues = useSelector(searchConfig)
  const handleSubmit = (values:  TypeFilters) => {
    dispatch(configureSearch(values))
    dispatch(configureHistory(values))
    fetchFilteredCharacters(values).then((data) => dispatch(setSearchResults(data)))
  };
  const dropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
     <Form className="searchbar">
      <button
        className="searchbar_filter"
        type="button"
        onClick={dropdownToggle}
      >
        Filter
      </button>
      {dropdownVisible ? <FilterMenu position={props.filterPosition}/> : <></>}
      <Field
        type="text"
        name="name"
        className="searchbar_input"
        placeholder="Type here..."
      />
      <button className="searchbar_submit" type="submit">
        Search
      </button>
     </Form>
    </Formik>
  );
};
