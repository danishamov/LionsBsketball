import { Route, Routes } from "react-router-dom";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/header/Header";
import MatchInfo from "./Components/match-info/MatchInfo";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <MatchInfo />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
