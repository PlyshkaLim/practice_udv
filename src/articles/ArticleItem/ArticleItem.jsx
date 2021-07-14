import React from 'react';
import p from './ArticleItem.module.css'

const ArticleItem = (props) => {
    return (
        <div className={p.content}>
            <div className={p.item}>
                <div>
                    <div className={p.image}>
                        <img src={props.image} alt={'pic'}/>
                    </div>
                </div>
                <div className={p.itemContent}>
                    <div className={p.header}>
                        {props.header}
                    </div>
                    <br/>
                    <div className={p.text}>
                        {props.text}
                    </div>
                    <hr/>
                    <div className={p.author}>
                        <span className={p.writer}>Автор:</span>
                        <br/>
                        <span className={p.writerName}>{props.writerName}</span>
                        <br/>
                        <span className={p.position}>{props.position}</span>
                    </div>
                    <br/>
                    <div className={p.timeToRead}>
                        <span className={p.constTimeText}>Время на прочтение: </span>
                        <span className={p.time}>{props.timeToRead}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleItem;