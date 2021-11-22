import React, { useState } from 'react'
import {Best} from "../Best/Best";
import {Category} from "../Category/Category";
import {Service} from "../Service/Service";
import {Brand} from "../Brand/Brand";
import {About} from "../About/About";
import {Feedback} from '../Feedback/Feedback'

export const MainPage: React.FC = () => {
    const [feed, setFeed] = useState<boolean>(false)

    return (
        <main>
            <Best />
            <Category />
            <Service />
            <Brand />
            <About setFeed={setFeed} />
            <Feedback feed = {feed} setFeed={setFeed} />
        </main>
    )
}