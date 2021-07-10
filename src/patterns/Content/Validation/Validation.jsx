import React from "react";
import p from './Validation.module.css';

const Validation = () => {

    let ValidationPage = [
        {
            id: 1,
            head: '1. Блокировка ввода недопустимых символов.',
            inf: ' Мы совмещаем ее с подсказкой под полем: это не просто предотвращает ошибку, но еще и ' +
                'информирует пользователя о том, какие действия для него недоступны. Например, если ' +
                'заблокирован ввод кириллицы, то в подсказке - значение должно содержать только латинские ' +
                'символы и цифры. '
        },
        {
            id: 2,
            head: '2. Подсказка под полем.',
            inf: 'Эта информация - требование к прохождению валидации. Если пользователем не будут ' +
                'соблюдены эти условия, валидация не пройдет, под полем появится текст ошибки вместо' +
                ' подсказки. От предыдущего пункта отличается отсутствием заблокированных символов.'
        },
        {
            id: 3,
            head: '3. Подсказка над полем.',
            inf: 'Справочная информация над полем, под заголовком - если пользователем не будут соблюдены ' +
                'эти условия, ничего не сломается, но система может работать несколько неожиданно для ' +
                'пользователя. Например, выберите поле для связи с источником в формате дата.'
        },
        {
            id: 4,
            head: '4. Текст ошибки.',
            inf: 'Появляется после того, как пользователь совершил ошибку и ушел с поля ввода. Если ' +
                'валидация по потере фокуса невозможна - используется валидация по отправке формы. ' +
                'Например - это поле обязательно для заполнения.'
        }
    ]

    return (
        <div className={p.content}>
            <div className={p.preInfo}>
            При валидации мы используем 4 паттерна, это помогает нам показать пользователю, где он совершил ошибку, а
            где мы предупреждем о возможности ее совершения.
            </div>
            <div className={p.info}>
                <div className={p.paragraph}>
                    <div className={p.head}>
                        {ValidationPage[0].head}
                    </div>
                    <br/>
                    {ValidationPage[0].inf}
                    <br/>
                    <br/>
                    <div className={p.field}>
                        ИД <span className={p.blue}>*</span>
                        <div className={p.entryField0}/>
                        <div className={p.entryFieldInfo}>
                            Значение должно содержать только латинские символы и цифры
                        </div>
                    </div>
                </div>

                <div className={p.paragraph}>
                    <div className={p.head}>
                        {ValidationPage[1].head}
                    </div>
                    <br/>
                    {ValidationPage[1].inf}
                    <br/>
                    <br/>
                    <div className={p.field}>
                        ИД *
                        <div className={p.entryField0}/>
                        <div className={p.entryFieldInfo}>
                            Значение должно содержать только латинские символы и цифры
                        </div>
                    </div>
                </div>

                <div className={p.paragraph}>
                    <div className={p.head}>
                        {ValidationPage[2].head}
                    </div>
                    <br/>
                    {ValidationPage[2].inf}
                    <br/>
                    <br/>
                    Поле из источника данных *
                    <br/>
                    *В списке доступны поля с типом: “Дата”. Введенное пользователем значение будет сохранено в
                    выбранное поле контекста.
                    <div className={p.entryField2}/>
                </div>

                <div className={p.paragraph}>
                    <div className={p.head}>
                        {ValidationPage[3].head}
                    </div>
                    <br/>
                    {ValidationPage[3].inf}
                    <br/>
                    <br/>
                    Повторите пароль *
                    <div className={p.entryField3}/>
                    Пароли не совпадают
                </div>
            </div>
        </div>
    )
}

export default Validation;