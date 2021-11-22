import React, { Dispatch, SetStateAction } from "react";
import './Feedback.scss';

interface IFeed {
    feed: boolean;
    setFeed: Dispatch<SetStateAction<boolean>>;
}

export const Feedback: React.FC<IFeed> = ({feed, setFeed}) => {
    return (
        <>
            {feed && <div className='feedback'>
                <form className='feedback__form' action="/feedback" method='post'>
                    <div className='feedback__wrapper'>
                        <div>
                            <label className='feedback__label' htmlFor="name">Ваше имя:</label>
                            <input className='feedback__input' type="text" name="name" id="name" placeholder='Имя Фамилия'/>
                        </div>
                        <div>
                            <label className='feedback__label' htmlFor="email">Ваше имя:</label>
                            <input className='feedback__input' type="email" name="email" id="email" placeholder='email@example.com'/>
                        </div>
                    </div>
                    <label className='feedback__label' htmlFor="text">Текст письма: </label>
                    <textarea className='feedback__text' name="text" id="text" placeholder='В свободной форме'/>
                    <button className='button feedback__button' type="submit">Отправить</button>
                </form>
                <span className='feedback__cross' onClick={() => setFeed(false)}></span>
            </div>}
        </>
    )
}