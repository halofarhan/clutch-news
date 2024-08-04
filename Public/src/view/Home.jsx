import axios from 'axios'
import '../App.css'
import CardOther from "../component/CardOther"
import Footer from "../component/Footer"
import HeroSwiper from "../component/HeroSwiper"
import HotGameNews from "../component/HotGameNews"
import News from '../component/News'
import { useEffect, useState } from 'react'
import LoadingSkeleton from '../component/LoadingSkeleton'

function Home() {

    return (
        <>
            <HeroSwiper />
            <HotGameNews />
            <News />
            </>
    )
}

export default Home