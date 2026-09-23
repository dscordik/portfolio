import './App.css'
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import About from "./components/About/About.tsx";
import Stack from "./components/Stack/Stack.tsx";
import ProjectsList from "./components/ProjectList/ProjectsList.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
    return(
        <div>
            <Header/>
            <Hero/>
            <About/>
            <Stack/>
            <ProjectsList/>
            <Footer/>
        </div>
    )
}

export default App
