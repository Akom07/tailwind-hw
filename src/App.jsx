import Hero from "./components/Hero"
import CompanyServes from "./components/CompanyServes"
import Contact from "./components/Contact"
import CardHolder from "./components/CardHolder"
import Order from "./components/Order"
import Info from "./components/Info"
import Footer from "./components/Footer"



function App() {


  return (
    <>

      <Hero />
      <CompanyServes />
      <Contact />
      <CardHolder
        imgSrc1='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg'
        title1='fresh'
        des1='fresh out of the oven'
        imgSrc2='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/bf92a2f6-freshgoods-feature2_10go0ku0go09e00009e01o.jpg'
        title2='fast'
        des2='fast delivery as you order '
        imgSrc3='https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg'
        title3='without milk'
        des3='Without allergens'
      />
      <Info />
      <Order />
      <Footer />




    </>
  )
}

export default App
