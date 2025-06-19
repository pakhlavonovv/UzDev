import Header from "../components/header"
import Footer from "../components/footer"
import CourseCategory from "../components/course-categories"
const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <div className="mb-9">
            <Header/>
        </div>
        <CourseCategory/>
        <div className="mt-9">
            <Footer/>
        </div>
    </div>
  )
}

export default Page