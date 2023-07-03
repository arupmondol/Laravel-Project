import React from 'react'
import Header from '../components/Header/Header'
import Achivement from '../components/Achivement/Achivement'
import OurServices from '../components/OurServices/OurServices'
import ForYourHome from '../components/ForYourHome/ForYourHome'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import SomeHappyFaces from '../components/SomeHappyFaces/SomeHappyFaces'
import DownLoadOurApp from '../components/DownloadOurApp/DownLoadOurApp'
import RequestService from '../components/RequestService/RequestService'



const Home = () => {
  return (
    <>
    <Header></Header>
    <Achivement></Achivement>
    <OurServices></OurServices>
    <WhyChooseUs></WhyChooseUs>
    <HowItWorks></HowItWorks>
    <SomeHappyFaces></SomeHappyFaces>
    <DownLoadOurApp></DownLoadOurApp>
    <RequestService></RequestService>
    </>
  )
}

export default Home