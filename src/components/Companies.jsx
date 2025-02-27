import React from "react";
import company1 from "../images/company1.png";
import company2 from "../images/company2.png";
import company3 from "../images/company3.png";
import company4 from "../images/company4.png";

const companyData = [
    { logo: company1, period: "Март '20 - Октябрь '21" },
    { logo: company2, period: "Ноябрь '21 - Декабрь '23" },
    { logo: company3, period: "Январь '24 - Июнь '24" },
    { logo: company4, period: "Июнь '24 - Февраль '25" }
];

const skillsList = [
    { text: "Управление полным жизненным циклом продукта: от идеи до запуска и пост-релизной поддержки.", 
      bold: ["Управление", "жизненным циклом"] },
    { text: "Разработка и реализация стратегии развития продукта, включая анализ конкурентов и потребностей клиентов.", 
      bold: ["анализ конкурентов", "потребностей клиентов"] },
    { text: "Кооперация работы команды - разработка, маркетинг, продажи, поддержка - для достижения бизнес-целей.", 
      bold: ["Кооперация", "команды"] },
    { text: "Оптимизация операционных процессов, регулирование процесса работы внешних исполнителей.", 
      bold: ["регулирование", "исполнителей"] },
    { text: "Внедрение метрик для отслеживания эффективности продукта, таких как LTV, CAC, retention rate.", 
      bold: ["Внедрение метрик"] },
    { text: "Управление бюджетом продукта и операционными расходами, достижение экономии без потери качества.", 
      bold: ["достижение экономии"] },
    { text: "Проведение A/B тестирований и анализ данных для улучшения пользовательского опыта и повышения конверсии.", 
      bold: ["A/B тестирований", "анализ данных"] },
    { text: "Налаживание процессов коммуникации между отделами, увеличение скорости выполнения задач командой.", 
      bold: ["увеличение скорости"] }
];

const Companies = () => {
    const highlightText = (text, boldPhrases) => {
        let result = text;
        boldPhrases.forEach(phrase => {
            result = result.replace(
                phrase,
                `<span class="companies-bold">${phrase}</span>`
            );
        });
        return <span dangerouslySetInnerHTML={{ __html: result }} />;
    };

    return (
        <section id="companiesHook" className="companies">
            <h2 className="companies-label">Компании, с которыми я работала</h2>
            
            <div className="companies-list">
                {companyData.map((company, index) => (
                    <div key={index} className="companies-container">
                        <img 
                            className="company-logo" 
                            src={company.logo} 
                            alt={`Логотип компании ${index + 1}`}
                        />
                        <div className="company-text">{company.period}</div>
                    </div>
                ))}
            </div>

            <div className="companies-mainText">
                <ul>
                    {skillsList.map((skill, index) => (
                        <li key={index} className="companies-textPoint">
                            {highlightText(skill.text, skill.bold)}
                        </li>
                    ))}
                </ul>
            </div>

            <a href="#contactsHook" className="getFeedback companies-getFeedback">
                Связаться со мной
            </a>
        </section>
    );
};

export default Companies;