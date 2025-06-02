import { useState } from "react";
import "../Components/SkillsTools.css";

const skills = [
  { name: "HTML5", img: "https://i.postimg.cc/90cYBMc2/html5.png" },
  { name: "CSS3", img: "https://i.postimg.cc/cCDwMBD7/css3.png" },
  { name: "Javascript", img: "https://i.postimg.cc/htmQfnq1/javascript.png" },
  { name: "SASS", img: "https://i.postimg.cc/jSrKsYqf/sass.png" },
];

const tools = [
  { name: "Webpack", img: "https://i.postimg.cc/NFTk6zy3/webpack.png" },
  { name: "Git", img: "https://i.postimg.cc/Gp5FZCv0/git.png" },
  { name: "Npm", img: "https://i.postimg.cc/wjxDMvV8/npm.png" },
  { name: "VS Code", img: "https://i.postimg.cc/zvXqW9PB/vs-code.png" },
];

function SkillsTools() {
  const [activeTab, setActiveTab] = useState("Skills");

  const listItems = (items) =>
    items.map((item) => (
      <li key={item.name}>
        <div className="skills-card">
          <div className="tooltip">{item.name}</div>
          <div className="card-icon">
            <img src={item.img} alt={`${item.name} logo`} />
          </div>
        </div>
      </li>
    ));

  return (
    <div
      data-skills-box
      className={`skills-box${activeTab === "Tools" ? " active" : ""}`}
    >
      <h1>Skills &amp; Tools</h1>
      <div
        className={`skills-toggle${activeTab === "Tools" ? " active" : ""}`}
        data-toggle-box
      >
        <button
          className={`toggle-btn${activeTab === "Skills" ? " active" : ""}`}
          aria-expanded={activeTab === "Skills"}
          aria-controls="skills-list"
          onClick={() => setActiveTab("Skills")}
        >
          Skills
        </button>
        <button
          className={`toggle-btn${activeTab === "Tools" ? " active" : ""}`}
          aria-expanded={activeTab === "Tools"}
          aria-controls="tools-list"
          onClick={() => setActiveTab("Tools")}
        >
          Tools
        </button>
      </div>
      <ul
        className="skills-list"
        id="skills-list"
        role="list"
        aria-label="Skills"
      >
        {listItems(skills)}
      </ul>
      <ul className="tools-list" id="tools-list" role="list" aria-label="Tools">
        {listItems(tools)}
      </ul>
    </div>
  );
}

export default SkillsTools;
