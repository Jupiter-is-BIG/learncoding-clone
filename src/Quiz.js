import { CopyBlock, dracula } from "react-code-blocks";

import SideBar from "./SideBar";

function Quiz(props) {
    const javaCode = `public static boolean isPalindrome(String input) {
        // you code here
        return false; // change this later
    }`;
    const pythonCode = `def isPalindrome(input):
    # your code here
    return False # change this later`;
    const cppCode = `bool isPalindrome(string input) {
        // your code here
        return false; // change this later
    }`;

    return <div className="w-full h-full flex flex-row"><SideBar /><div className="w-full h-full flex flex-col items-center p-10 overflow-scroll">
    <div className="text-3xl font-bold bg-blue-200 w-full mx-3 p-2 flex items-center justify-center border-y-2 border-blue-700 mb-5">Coding Quiz</div>
    <div className="w-full">
        <p>
            <div className="w-full bg-cyan-200 p-5 border-black border rounded-xl mb-10">Write a recursive program that checks a string is palindrom or not.</div>
            {props.lang == "Java" && <CopyBlock text={javaCode} language={`Java`} showLineNumbers={true}
                    theme={dracula}></CopyBlock>}
                {props.lang == "Python" && <CopyBlock text={pythonCode} language={`Python`} showLineNumbers={true}
                    theme={dracula}></CopyBlock>}
                {props.lang == "C++" && <CopyBlock text={cppCode} language={`C++`} showLineNumbers={true}
                    theme={dracula}></CopyBlock>}
        </p></div>
</div></div>;
}

export default Quiz;