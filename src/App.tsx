import './App.css'
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import About from "./components/About/About.tsx";
import Stack from "./components/Stack/Stack.tsx";
import ProjectsList from "./components/ProjectList/ProjectsList.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail.tsx";

function App() {
    return(
        <div>
            <Routes>
                <Route path='/' element={(
                    <div>
                        <Header/>
                        <Hero/>
                        <About/>
                        <Stack/>
                        <ProjectsList/>
                        <Footer/>
                    </div>
                )}></Route>
                <Route path='/projects/:id' element={<ProjectDetail/>}></Route>
            </Routes>
        </div>
    )
}

export default App
