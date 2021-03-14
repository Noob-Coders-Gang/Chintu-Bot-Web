import "./Commands.css";
import data from "./data";
import { useState, createRef } from "react";
const Menu = ({ filterCommands, selectedCategory }) => {
  const categories = ["All", ...new Set(data.map((dat) => dat.category))];
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <div
            className={
              selectedCategory === category
                ? "commandoptions active"
                : "commandoptions"
            }
            key={index}
            onClick={() => filterCommands(category)}
          >
            {category}
          </div>
        );
      })}
    </div>
  );
};
const Commands = () => {
  const [commands, setCommands] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("All");
  let search = createRef();

  const filterCommands = (category) => {
    if (category === "All") {
      setCommands(data);
      setSelectedCategory("All");
    } else {
      search.current.value = "";
      const newCommands = data.filter(
        (command) => command.category === category
      );
      setSelectedCategory(category);
      setCommands(newCommands);
    }
  };
  const searchCommand = () => {
    filterCommands("All");
    const searchText = search.current.value;
    const newCommands = data.filter((dat) => dat.name.includes(searchText));
    setCommands(newCommands);
  };
  return (
    <div className="container">
      <div className="row commands">
        <div className="col-12">
          <div className="title">COMMANDS</div>
        </div>
        <div className="col-12">
          <Menu
            filterCommands={filterCommands}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            className="search"
            placeholder="Search For a Command"
            ref={search}
            onChange={searchCommand}
          />
        </div>
        <div className="col-12">
          {commands.map((command, index) => {
            return (
              <div className="command" id="info" key={index}>
                ${command.name}
                <span className="description"> - {command.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Commands;
