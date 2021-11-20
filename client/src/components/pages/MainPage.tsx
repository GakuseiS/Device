import React from 'react'
import {Best} from "../Best/Best";
import {Category} from "../Category/Category";
import {Service} from "../Service/Service";
import {Brand} from "../Brand/Brand";
import {About} from "../About/About";

export const MainPage: React.FC = () => {
    return (
        <main>
            <Best />
            <Category />
            <Service />
            <Brand />
            <About />
        </main>
    )
}