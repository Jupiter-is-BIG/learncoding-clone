import SideBar from "./SideBar";

import str from './recurcall.png';
import help from './helper.png';
import joke from './joke.png';

function Details() {
    return <div className="w-full h-full flex flex-row"><SideBar /><div className="w-full h-full flex flex-col items-center p-10 overflow-scroll">
    <div className="text-3xl font-bold bg-blue-200 w-full mx-3 p-2 flex items-center justify-center border-y-2 border-blue-700 mb-5">More on Recursion</div>
    <div className="w-full">
        <p>Following diagram shows how a typical recursive function works:
        <br></br>
        <div className="w-full flex items-center justify-center">
                    <img src={str} className="w-1/4 "></img>
                </div>
                <br></br>
                <div className="w-full border-black border-[0.5px] my-2"></div>
                <div className="font-bold text-2xl">{`📌 Helper Methods`}</div>
                <br></br>
        Sometimes, one might also use a helper function to make the parameters of the original function relevant to the problem statement. In cases like these, the main method calls the recusive function which calls the helper function and the helper function is the one where all the recusive calls occur.
        <br></br>
        <div className="w-full flex items-center justify-center">
                    <img src={help} className="w-1/4 "></img>
                </div>
                <br></br>
                <div className="w-full border-black border-[0.5px] my-2"></div>
                <div className="font-bold text-2xl">{`📌 Caution`}</div>
                <br></br>
                While recursive methods are intutive and easy to implement, they come up at a cost: recursive functions take a lot of stack space compared to an iterative program and are relatively slower. This issue can, however, sometimes be fixed with tail recursion. 
                <br></br>
                <br></br>
                Also, always make sure that your recursive process has a stopping condition to avoid running into an infinite process (stack overflow).
                <br></br>
                <br></br>
                <div className="w-full flex items-center justify-center">
                    <img src={joke} className="w-1/4 "></img>
                </div>
                </p></div>
</div></div>;
}

export default Details;