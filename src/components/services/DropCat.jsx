import React, { useState, useContext } from "react";
import categories from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  ServicesContext,
  MenuContext,
  SelectedContext,
} from "../../helper/Context";

const DropCat = () => {
  const { open, setOpen } = useContext(MenuContext);
  const { selected } = useContext(SelectedContext);

  console.log("This is Open" + open);

  const setMenuState = (check) => {
    console.log("This is Check" + open);
    setOpen(check);
  };

  return (
    <div className="menu-container">
      {/* This will contain the image of the dropdown*/}
      <div
        className="menu-trigger"
        onClick={() => {
          setMenuState(!open);
        }}
      >
        <div className="wrapper-in-menu-trigger">
          {selected}
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
      {/* This will contain the image of the dropdown*/}

      {/*this will contain the menu*/}
      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        {categories.map((e) => (
          <ul>
            <DropDownItem text={e.categoryName} />
          </ul>
        ))}
      </div>
      {/*this will contain the menu*/}
    </div>
  );
};

export default DropCat;

//Funtions containing the dropdown items
function DropDownItem(props) {
  const { setCategory } = useContext(ServicesContext);
  const { setOpen } = useContext(MenuContext);
  const { setSelected } = useContext(SelectedContext);

  const setNewServiceList = (categoryName) => {
    for (var i = 0; i <= categories.length; i++) {
      if (categories.at(i) !== undefined) {
        if (categories.at(i).categoryName === categoryName) {
          console.log("It's Equal yeah");
          setCategory(categories.at(i).getList());
          setOpen(false);
          setSelected(categoryName);
        }
      }
    }
  };
  return (
    <div
      className="dropdownItem"
      onClick={() => {
        setNewServiceList(props.text);
      }}
    >
      <li>
        {/*<img src={props.img}></img>*/}
        <a>{props.text}</a>
      </li>
    </div>
  );
}
//Funtions containing the dropdown items
