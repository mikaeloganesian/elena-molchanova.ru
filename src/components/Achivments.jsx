import React from "react";
import achive1 from "../images/achive-1.png";
import achive2 from "../images/achive-2.png";
import achive3 from "../images/achive-3.png";
import achive4 from "../images/achive-4.png";
import achive5 from "../images/achive-5.png";

const achievements = [
  {
    image: achive1,
    text: "Увеличила",
    highlight: "вовлеченность",
    text2: "пользователей на",
    value: "30%"
  },
  {
    image: achive2,
    text: "",
    highlight: "Снизила затраты",
    text2: "на производство на",
    value: "15%"
  },
  {
    image: achive3,
    text: "Достигла",
    highlight: "удовлетворенности",
    text2: "клиентами продукта",
    value: "94%"
  },
  {
    image: achive4,
    text: "Регулировала отчетность",
    highlight: "",
    text2: "повышая вовлеченность сотрудников",
    value: ""
  },
  {
    image: achive5,
    text: "Повысила",
    highlight: "конверсию лидов",
    text2: "на 18%, внедрив систему аналитики",
    value: ""
  }
];

const AchievementItem = ({ image, text, highlight, text2, value }) => (
  <div className="achivments-item">
    <img className="achivment-image" src={image} alt="Achievement" />
    <p className="achivment-label">
      {text} <span className="companies-bold">{highlight}</span><br/>
      {text2} <span className="companies-bold">{value}</span>
    </p>
  </div>
);

export default function Achievements() {
  return (
    <div id="achivmentsHook" className="achivments">
      <h2 className="achivments-label">Мои достижения</h2>
      <div className="achivments-content">
        {achievements.slice(0, 3).map((achievement, index) => (
          <React.Fragment key={index}>
            <AchievementItem {...achievement} />
            {index < 2 && <div className="achivments-place" />}
          </React.Fragment>
        ))}
      </div>
      
      <div className="achivments-content">
        {achievements.slice(3).map((achievement, index) => (
          <React.Fragment key={index + 3}>
            <div className="achivments-place" />
            <AchievementItem {...achievement} />
            <div className="achivments-place" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}