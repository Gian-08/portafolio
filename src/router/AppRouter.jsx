import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../ui/components/Navbar"
import { ProjectPage } from "../portafolio/pages/ProjectPage"
import { LandingPage } from "../portafolio/pages/LandingPage"
import { ContactPage } from "../portafolio/pages/ContactPage"
import { ProfilePage } from "../portafolio/pages/ProfilePage"


export const AppRouter = () => {
  return (
    <>

        
        <Navbar />
        <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/project" element={<ProjectPage />} />
            {/* <Route path="landing" element={<LandingPage />} /> */}
            <Route path="contact" element={<ContactPage />} />

            <Route path="/*" element={<Navigate to="/profile" />} />
        </Routes>

        
    </>
  )
}
