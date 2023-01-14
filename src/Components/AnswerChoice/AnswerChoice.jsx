import "./AnswerChoice.css"

const AnswerChoice = (props) => { 

    return (
        <button className="answer-choice-btn" id={props.isActive ? "active" : ""} onClick={()=>props.activate(props.letter)}>
            <div className="content-text">{props.content}</div>
        </button>
    )
}

export default AnswerChoice; 