import React from 'react';
import p from './articles.module.css';
import ArticleItem from "./ArticleItem/ArticleItem";

const Articles = () => {
    let ArticlesPage = [
        {
            id: 1,
            image: 'articles1.jpg',
            header: 'Неоморфизм: почему у тренда с хорошим UI плохой UX?',
            text: 'Всем известный тренд с приятной визуальной составляющей, тем не менее, имеет достаточно низкие показатели юзабилити. Почему так происходит?',
            writerName: 'Иванова Ольга',
            position: 'дизайнер отдела разработки',
            timeToRead: '10 минут',
        },
        {
            id: 2,
            image: 'articles2.jpg',
            header: 'Как спроектировать лучший дашборд? Реальный кейс',
            text: 'Каких правил необходимо придерживаться чтобы дашборд приносил пользу и помогал работать эффективнее. Делюсь опытом на основе реального кейса.',
            writerName: 'Иванова Ольга',
            position: 'дизайнер отдела разработки',
            timeToRead: '10 минут',
        },
        {
            id: 1,
            image: 'articles3.jpg',
            header: 'Как спроектировать лучший дашборд? Реальный кейс',
            text: 'Каких правил необходимо придерживаться чтобы дашборд приносил пользу и помогал работать эффективнее. Делюсь опытом на основе реального кейса.',
            writerName: 'Иванова Ольга',
            position: 'дизайнер отдела разработки',
            timeToRead: '10 минут',
        },
        {
            id: 1,
            image: 'articles4.jpg',
            header: 'Дайджест: лучшие мобильные интерфейсы за декабрь 2020',
            text: 'Новое приложение Золотого Яблока обновление от Тинькофф, новые игроки в сфере EdTech и другие любопытные проекты, которые стоит увидеть!',
            writerName: 'Иванова Ольга',
            position: 'дизайнер отдела разработки',
            timeToRead: '10 минут',
        }
    ];

    let articleItemElements =
        ArticlesPage.map(i => <ArticleItem image={i.image}
                                           header={i.header}
                                           text={i.text}
                                           writerName={i.writerName}
                                           position={i.position}
                                           timeToRead={i.timeToRead}/>);

    return (
        <div className={p.page}>
            <div className={p.heading}>
                Статьи
            </div>
            <div className={p.filters}>
                <div className={p.filtersItem}>
                   <span><svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.7" y1="3.3" x2="25.3" y2="3.3" stroke="#4A4A4A" stroke-width="1.4"
                              stroke-linecap="round"/>
                        <line x1="0.7" y1="9.3" x2="25.3" y2="9.3" stroke="#4A4A4A" stroke-width="1.4"
                              stroke-linecap="round"/>
                        <line x1="0.7" y1="15.3" x2="25.3" y2="15.3" stroke="#4A4A4A" stroke-width="1.4"
                              stroke-linecap="round"/>
                        <circle cx="7" cy="3" r="2.5" fill="#EEF3F5" stroke="#4A4A4A"/>
                        <circle cx="21" cy="9" r="2.5" fill="#EEF3F5" stroke="#4A4A4A"/>
                        <circle cx="12" cy="15" r="2.5" fill="#EEF3F5" stroke="#4A4A4A"/>
                    </svg></span>
                    <span>Фильтрация</span>
                </div>
                <div className={p.filtersItem}>
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.7" y1="3.3" x2="25.3" y2="3.3" stroke="#4A4A4A" stroke-width="1.4"
                              stroke-linecap="round"/>
                        <line x1="0.7" y1="9.3" x2="25.3" y2="9.3" stroke="#4A4A4A" stroke-width="1.4"
                              stroke-linecap="round"/>
                        <line x1="0.7" y1="15.3" x2="25.3" y2="15.3" stroke="#4A4A4A" stroke-width="1.4"
                              stroke-linecap="round"/>
                        <circle cx="7" cy="3" r="2.5" fill="#EEF3F5" stroke="#4A4A4A"/>
                        <circle cx="21" cy="9" r="2.5" fill="#EEF3F5" stroke="#4A4A4A"/>
                        <circle cx="12" cy="15" r="2.5" fill="#EEF3F5" stroke="#4A4A4A"/>
                    </svg>
                    <span>Сортировать по: </span>
                    <span>Дате (сначала новые) </span>
                    <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5L0.401924 0.5L5.59808 0.5L3 5Z" fill="#4A4A4A"/>
                    </svg>
                </div>
            </div>
            <div className={p.content}>
                {articleItemElements}
            </div>
        </div>
    )
}

export default Articles;