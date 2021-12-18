import { useMutation } from "@apollo/client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { CREATE_FEEDBACK } from "../../mutations/feedback";
import './Feedback.scss';

interface IFeed {
    feed: boolean;
    setFeed: Dispatch<SetStateAction<boolean>>;
}

interface IData {
    name: string,
    email: string,
    text: string
}

export const Feedback: React.FC<IFeed> = ({feed, setFeed}) => {
    const [feedback] = useMutation(CREATE_FEEDBACK)
    const [data, setData] = useState<IData>({name: '', email: '', text: ''})

    const doSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault()
        feedback({
            variables: {
                input: {
                    name: data.name, email: data.email, text: data.text
                }
            }
        })
        .then(() => {
            setData({name: '', email: '', text: ''})
        })
        
    }

    return (
        <>
            {feed && <div className='feedback'>
                <form className='feedback__form' action="/feedback" method='post' onSubmit={(e) => doSubmit(e)}>
                    <div className='feedback__wrapper'>
                        <div>
                            <label className='feedback__label' htmlFor="name">Ваше имя:</label>
                            <input className='feedback__input' type="text" name="name" id="name" value={data.name} onChange={(e) => setData(data => {return {...data, name: e.target.value }})} maxLength={50} placeholder='Имя Фамилия'/>
                        </div>
                        <div>
                            <label className='feedback__label' htmlFor="email">Ваш email:</label>
                            <input className='feedback__input' type="email" name="email" id="email" value={data.email} onChange={(e) => setData(data => {return {...data, email: e.target.value }})} maxLength={50} placeholder='email@example.com'/>
                        </div>
                    </div>
                    <label className='feedback__label' htmlFor="text">Текст письма: </label>
                    <textarea className='feedback__text' name="text" id="text" value={data.text} onChange={(e) => setData(data => {return {...data, text: e.target.value }})} maxLength={150} placeholder='В свободной форме' required/>
                    <button className='button feedback__button' type="submit">Отправить</button>
                </form>
                <span className='feedback__cross' onClick={() => setFeed(false)}></span>
            </div>}
        </>
    )
}