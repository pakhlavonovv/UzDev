import Header from "./components/header"
import Join from "./components/join"
import CourseCategory from "./components/course-categories"
import DayWebsite from "./components/day-websites"
import Why from "./components/why-uzdev"
import Konsultatsiya from "./components/konsultatsiya"
import UnderFooter from "./components/under-footer"
import Footer from "./components/footer"
const Page = () => {
  return (
    <>
    <Header/>
    <Join/>
    <div className="mt-[50px]">
    <CourseCategory/>
    </div>
    <DayWebsite/>
    <div className="mt-[50px]">
    <Why/>
    </div>
    <div className="mt-[50px] md:mt-[100px]">
    <Konsultatsiya/>
    </div>
    <div className="mt-[50px] md:mt-[100px]">
    <UnderFooter/>
    </div>
    <Footer/>
    </>
  )
}

export default Page