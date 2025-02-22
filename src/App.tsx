import {NavLink, Outlet, Route, Routes,} from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout></Layout>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/drift" element={<Drift></Drift>}></Route>
            <Route path="/timeattack" element={<Timeattack></Timeattack>}></Route>
            <Route path="/forza" element={<Forza></Forza>}></Route>
        </Route>
    </Routes>
  )
}

export function Layout() {
    return (
        <div className="layout">
            <Menu></Menu>
            <Outlet></Outlet>
        </div>
    )
}

function Menu() {
    const className = ({isActive} : {isActive: boolean}) => {
        return isActive ? "menu__item menu__item-active" : "menu__item";
    }
    return (
        <nav className="menu">
            <NavLink to="/" className={className}>Главная</NavLink>
            <NavLink to="/drift" className={className}>Дрифт-такси</NavLink>
            <NavLink to="/timeattack" className={className}>Time Attack</NavLink>
            <NavLink to="/forza" className={className}>Forza Karting</NavLink>
        </nav>
    )
}

function Home() {
    return (
        <div>Главная</div>
    )
}

function Drift() {
    return (
        <div>Дрифт-такси</div>
    )
}

function Timeattack() {
    return (
        <div>Time Attack</div>
    )
}

function Forza() {
    return (
        <div>Forza Karting</div>
    )
}