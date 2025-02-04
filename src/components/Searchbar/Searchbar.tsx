import { useState } from "react";
import "./SearchBar.css";
import { FilterMenu } from "./FilterMenu";
import { Formik, Form, Field } from "formik";
import {
  configureSearch,
  setSearchResults,
  setSearchError,
} from "../../store/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { searchConfig } from "../../utils/selectors";
import { TypeFilters } from "../../http/characterTypes";
import { fetchFilteredCharacters } from "../../http/characterAPI";
import { useNavigate } from "react-router";
import { PATHS } from "../../utils/constants";

export const SearchBar: React.FC<{ filterPosition: string }> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialConfig = useSelector(searchConfig);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleSubmit = (values: TypeFilters) => {
    dispatch(configureSearch(values));
    fetchFilteredCharacters(values)
      .then((data) => dispatch(setSearchResults(data)))
      .catch((error) => {
        dispatch(setSearchError(error));
      })
      .finally(() => navigate(PATHS.SEARCH));
  };

  const dropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };
  
  return (
    <Formik initialValues={initialConfig} onSubmit={handleSubmit}>
      <Form className="searchbar">
        <button
          className="searchbar_filter"
          type="button"
          onClick={dropdownToggle}
        >
          Filter
        </button>
        {dropdownVisible ? (
          <FilterMenu position={props.filterPosition} />
        ) : (
          <></>
        )}
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