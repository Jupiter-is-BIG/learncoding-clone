function Options(props) {
    return <div className="flex flex-row justify-between w-full items-center text-black hover:text-white ">
        <>{`>`}</>
        <div className="mr-[10%] text-lg">{props.title}</div>
    </div>
}

export default Options;