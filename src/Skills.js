function Skills(props) {
    return(
            <div className = "skill-progress">
                <div className = {props.colors}>
                    <div className = "skill-name">
                        <span> {props.name} </span>
                    </div>
                </div>
            </div>
    )
}

export default Skills;