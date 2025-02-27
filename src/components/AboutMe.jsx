import React from 'react';
import aboutMeImg from '../images/aboutMe.png';

const AboutMe = () => {
    return (
        <section id="aboutMeHook" className="aboutMe">
            <img 
                className="aboutMe-image" 
                src={aboutMeImg} 
                alt="Елена Молчанова - Продуктовый менеджер" 
            />
            <div className="aboutMe-text">
                <h2 className="aboutMe-title">Обо мне</h2>
                <p className="aboutMe-mainText">
                    Здравствуйте! Меня зовут Елена. Я занимаюсь управлением продуктами и операционными процессами,
                    специализируясь на разработке стратегий, оптимизации workflows и координации команд для достижения
                    бизнес-целей.
                </p>
                <p className="aboutMe-mainText">
                    Имея более 5 лет опыта в индустрии, я успешно реализую проекты, направленные на улучшение продукта,
                    повышение операционной эффективности и достижение ключевых метрик.
                </p>
                <p className="aboutMe-mainText">
                    Если вы заинтересованы в сотрудничестве с профессионалом, который поможет оптимизировать ваши
                    продукты и операционные процессы, буду рада подробно обсудить Ваше предложение.
                </p>
                <a href="#contactsHook" className="getFeedback">
                    Связаться со мной
                </a>
            </div>
        </section>
    );
};

export default AboutMe;