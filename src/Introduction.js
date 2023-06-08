import { CopyBlock, dracula } from "react-code-blocks";
import example1 from './example1.png';
import SideBar from "./SideBar";

function Introduction(props) {
    const javaCode = `public static void printHello(int n) {
        // base case
        if (n <= 0) {
            return;
        }

        System.out.println("Hello");

        // recursive call
        printHello(n-1);
    }`;

    const pythonCode = `def printHello(n):
    # base case
    if n <= 0:
        return
        
    print("Hello")
        
    # recursive call
    printHello(n-1)`;

    const cppCode = `void printHello(int n) {
        // base case
        if (n <= 0) {
            return;
        }
    
        cout << "Hello" << endl;
    
        // recursive call
        printHello(n - 1);
    }`;
    return <div className="w-full h-full flex flex-row"><SideBar /><div className="w-full h-full flex flex-col items-center p-10 overflow-scroll">
        <div className="text-3xl font-bold bg-blue-200 w-full mx-3 p-2 flex items-center justify-center border-y-2 border-blue-700 mb-5">Introduction</div>
        <div className="w-full">
            <p><b>Recursion</b> is a powerful technique for solving complicated problems by breaking them into smaller and more managable problems. Recursion involves a function calling itself within its own definition. In fact, such a function is called a <b>recursive function</b>.
                <br />
                <br />
                In recursion, a function solves a <b>base case</b> (typically, the simplest version of the problem) directly and then calls itself with a modified input to solve a smaller version of the original problem. This process continues until the base case is reached, at which point the function returns a value. The recursive calls build upon each other, gradually solving larger instances of the problem until the original problem is solved.
                <br />
                <br />
                <div className="w-full border-black border-[0.5px] my-2"></div>
                <div className="font-bold text-2xl">{`📌 Example`}</div>
                <br />
                Following is an example of a function which prints "Hello" n times.
                <br />
                <br />
                {props.lang == "Java" && <CopyBlock text={javaCode} language={`Java`} showLineNumbers={true}
                    theme={dracula}></CopyBlock>}
                {props.lang == "Python" && <CopyBlock text={pythonCode} language={`Python`} showLineNumbers={true}
                    theme={dracula}></CopyBlock>}
                {props.lang == "C++" && <CopyBlock text={cppCode} language={`C++`} showLineNumbers={true}
                    theme={dracula}></CopyBlock>}
                <br></br>
                Let's try to trace the code for n = 3.
                <br></br>
                <div className="w-full flex items-center justify-center">
                    <img src={example1} className="w-2/3 "></img>
                </div>
                <br></br>
                And thus, we end up with 3 hello strings on the console. The above example also shows us the importance of having a stopping condition (base case) -- otherwise the code would have went into infinite loop.
            </p></div>
    </div></div>;
}

export default Introduction;