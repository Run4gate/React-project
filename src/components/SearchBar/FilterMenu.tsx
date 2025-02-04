import "./FilterMenu.css";
import { Field } from "formik";

export const FilterMenu: React.FC<{ position: string }> = (props) => {
  
  return (
    <menu
      className={
        props.position === "top" ? "filter-menu--top" : "filter-menu--bottom"
      }
    >
      <fieldset className="filter-menu_status">
        <legend>Specify status</legend>
        <label>
          <Field  type="radio" name="status" value="all" checked/> All
        </label>
        <label>
          <Field type="radio" name="status" value="alive" /> Alive
        </label>
        <label>
          <Field type="radio" name="status" value="dead" /> Dead
        </label>
        <label>
          <Field type="radio" name="status" value="unknown" /> Unknown
        </label>
      </fieldset>
      <fieldset className="filter-menu_gender">
        <legend>Specify gender</legend>
        <label>
          <Field type="radio" name="gender" value="all" checked/> All
        </label>
        <label>
          <Field type="radio" name="gender" value="male" /> Male
        </label>
        <label>
          <Field type="radio" name="gender" value="female" /> Female
        </label>
        <label>
          <Field type="radio" name="gender" value="genderless" /> Genderless
        </label>
        <label>
          <Field type="radio" name="gender" value="unknown" /> Unknown
        </label>
      </fieldset>
    </menu>
  );
};
