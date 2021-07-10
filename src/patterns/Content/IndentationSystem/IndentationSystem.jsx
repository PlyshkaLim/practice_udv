import React from "react";
import p from './IndentationSystem.module.css';

const IndentationSystem = () => {
    return (
        <div className={p.indentationSystem}>
            <div className={p.textContent}>
                В нашем дизайне используется мягкая 8-пиксельная сетка. Это значит, что жестких колонок мы не используем
                - наши продукты слишком разные и сложные, чтобы загонять их в такие рамки. Но для удобства используем
                систему вертикальных отступов, кратных 8 пикселям.
                <br/>
                <br/>
                Используйте отступы разной величины, чтобы группировать схожее (например, заголовок и абзац текста) и отделять разные сегменты (конец абзаца и следующий заголовок).
                <br/>
                <br/>
                Помните, что в одинаковых случаях следует использовать одни и те же отступы!
            </div>
            <div className={p.image}>
                <img src='IndentationSystemImage.jpg'/>
            </div>

        </div>
    )
}

export default IndentationSystem;