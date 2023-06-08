import { Link } from "react-router-dom";

import Options from "./Options";

function SideBar() {
    return (<div className="flex flex-col bg-slate-500 p-3 w-[25%] items-center pt-5">
        <div className="text-white font-bold text-2xl mb-5">Recursion</div>
        <Link to="/" className="w-full"><Options title="Introduction"/></Link>
        <Link to="/think" className="w-full"><Options title="Thinking Recursively"/></Link>
        <Link to="/details" className="w-full"><Options title="More on Recursion"/></Link>
        <Link to="/quiz" className="w-full"><Options title="Coding Quiz"/></Link>
    </div>);
}

export default SideBar;