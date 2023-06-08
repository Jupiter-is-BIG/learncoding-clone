import { MathComponent } from "mathjax-react";
import { CopyBlock, dracula } from "react-code-blocks";

import SideBar from "./SideBar";

import ex1 from './mnexample.png';
import ex2 from './mnexample2.png';

function Thinking(props) {
    const javaCode = `public static int f(int m, int n) {
        // base case
        if (m == 1 || n == 1) {
            return 1;
        }

        // recursive call
        return f(m,n-1) + f(m-1,n);
    }`;
    const pythonCode = `def f(m,n):
    # base case
    if m == 1 or n == 1:
        return 1
        
    # recursive call
    return f(m,n-1) + f(m-1,n)`;
    const cppCode = `int f(int m, int n) {
        // base case
        if (m == 1 || n == 1) {
            return 1;
        }
    
        // recursive call
        return f(m, n - 1) + f(m - 1, n);
    }`;
    return <div className="w-full h-full flex flex-row"><SideBar /><div className="w-full h-full flex flex-col items-center p-10 overflow-scroll">
        <div className="text-3xl font-bold bg-blue-200 w-full mx-3 p-2 flex items-center justify-center border-y-2 border-blue-700 mb-5">Thinking Recursively</div>
        <div className="w-full">
            <p>
                Looking at the last example of printHello function, one might argue on why do we even need recursion if we can just use loops? Aparently, every recursion code can be written as an interative code (use loops) and vice versa. However, recursion often simplifies the problem drastically which we want to solve which, however, when done using iteration might have been much harder.
                <br></br>
                <br></br>
                Recursive solutions are much more intutive and simpler to understand. In this section, we will walkthrough a fairly complicated looking problem and we will try to solve it using recursion.

                <div className="w-full border-black border-[0.5px] my-2"></div>
                <div className="font-bold text-2xl">{`📌 Problem`}</div>
                <div className="bg-lime-200 w-full rounded-xl py-2 px-5 border border-lime-600 my-5">Find number of paths to reach from top left corner in a m x n grid to the lower bottom corner by either moving right or below at each given step.</div>
                Before we dive into coding, let us first analyze the problem for some value of m and n. For sake of illustration, let us consider the case when m = 3 and n = 2. We wish to find number of ways to reach from start to end by either moving right or below.
                <div className="w-full flex items-center justify-center">
                    <img src={ex1} className="w-1/2 "></img>
                </div>
                It's not hard to see that number of paths in this case is 4 as shown below
                <div className="w-full flex items-center justify-center my-2">
                    <img src={ex2} className="w-2/3 "></img>
                </div>
                Can we reduce the problem into a smaller one? Note that to reach the end position, we must either reach the position above end position or the position left of end position. Thus, we can say that number of different paths of reaching end is equal to number of paths to reach positions left to end and above end.
                <br></br>
                <br></br>
                Let f(m,n) be the number of paths from start to end. Thus, by above discussion,
                <div className="w-full flex items-center justify-center my-2">
                <MathComponent tex={String.raw`f(m,n) = f(m,n-1) + f(m-1,n)`} />
                </div>
                So we do get an idea of how the recursive calls are going to work -- we simply return f(m,n-1) + f(m-1,n). But, what should be our stopping condition (Base case)? Well at each step, the size of grid is getting smaller (this is the essence of recursive problem solving; smaller problems build up to solve bigger ones!) and thus, we will reach at a stage when we just need number of paths in a m x 1 or 1 x n grid. Obviously, in this case, the answer is going to be just 1 because there is only one route: going either only right or only below depending on the dimensions of the grid. Thus, we have 
                <div className="w-full flex items-center justify-center my-2">
                <MathComponent tex={String.raw`f(m,1) = f(1,n) = 1`} />
                </div>
                and this could be our base case. Following is the complete code for this problem 
                <br />
                <br />
                {props.lang == "Java" && <CopyBlock text={javaCode} language={`Java`} showLineNumbers={true}
                    theme={dracula}></CopyBlock>}
                {props.lang == "Python" && <CopyBlock text={pythonCode} language={`Python`} showLineNumbers={true}
                    theme={dracula}></CopyBlock>}
                {props.lang == "C++" && <CopyBlock text={cppCode} language={`C++`} showLineNumbers={true}
                    theme={dracula}></CopyBlock>}
                <br></br>

                The above illustration shows us how powerful recursion can be. The key steps of solving any problem in a recursive way is to spilt the problem into smaller ones and then figuring out the stopping conditions.
            </p>
            </div>
    </div></div>;
}

export default Thinking;