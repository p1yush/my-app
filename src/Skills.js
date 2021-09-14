function Skills(props) {
    return(
        <div>
            <li><h3>{props.name}</h3><span className = "bar"><span className = {props.name}></span></span></li>
        </div>
    )
}

export default Skills;