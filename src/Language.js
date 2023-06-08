function Language(props) {


    return <div className="h-full w-[20%] bg-slate-500 flex flex-col items-center p-5 space-y-5">
        <div className="text-white text-xl">Choose the language</div>
        <select className="mx-10 h-10" onChange={(val) => props.onLanguageChange(val.target.value)}>
            <option value = "Java">Java</option>
            <option value = "Python">Python</option>
            <option value = "C++">C++</option>
        </select>
    </div>
}

export default Language;