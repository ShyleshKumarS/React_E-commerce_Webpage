import React from 'react'
import './Home.css';
import Product from './Product';
export default function Home() {
  const redirectToAmazonVideos = () => {
    window.location.href = 'https://www.primevideo.com/';
  };
  return (
    <div className='home'>
      <div className='home_container'>
        <button class="video" onClick={redirectToAmazonVideos}><img className='background' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='img'/></button>
        
        <div className='row'>
          <Product text='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses' price='2000' rating='5' image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' alt='img'/>
          <Product text='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and whisk, 5 Litre Glass Bowl' price='12,000' rating='4' image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg' alt='img'/> 
        </div>
        <div className='row'>
          <Product text='Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric' price='8000' rating='3' image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400cc' alt='img'/>
          <Product text='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver' price='1,00,000' rating='5' image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' alt='img'/> 
          <Product text='Tommy Hilfiger Analog Blue Dial Mens Watch - stainless Steel' price='29,000' rating='4' image='https://m.media-amazon.com/images/I/61lE8OGWbvL._SL1500_.jpg' alt='img'/>
        </div>
        <div className='row'>
          <Product text='Samsung LC49RG90SSUXEN 49" Curved LED Gaming Monitor' price='1,90,000' rating='5' image='https://m.media-amazon.com/images/I/81x-YhAqWVL._SX679_.jpg' alt='img'/>
        </div>
        
      </div>
        
    </div>
  )
}
