import Title from '../Title/Title';
import AnswerChoice from '../AnswerChoice/AnswerChoice';
import './Quiz.css'
import { useState } from "react"

const Quiz = () => { 

    // const quizQuestion = { 
    //     title: "Who Painted the Mona Lisa?",
    //     A: "Da Vinci",
    //     B: "Michaelangelo",
    //     C: "Peppe The Frog",
    //     D: "Kermit The Frog",
    //     correctAnswer: "A"
    // }

    const quizQuestion = { 
        title: "Who Sang 'Yellow'?",
        A: "BrockHampton",
        B: "Coldplay",
        C: "Mana",
        D: "Bad Bunny",
        correctAnswer: "B"
    }

    const [active, setActive] = useState("")
    const [correctness, setCorrectness] = useState("")

    const setActiveChoice = (letterChoice) => {
        setActive(letterChoice)
    }

    const correctAnswerHandler = () => { 
        if (quizQuestion.correctAnswer === active) { 
            setCorrectness(true)
        } else {
            setCorrectness(false)
        }
    }

    const renderCorrectness = () => {
        if (correctness === true) { 
            return <div>CORRECT</div>
        } else if (correctness === "") {
            return <div></div>
        } else {
            return <div>INCORRECT</div>
        }
    }

    // const QuizBank = { 
    //     Q1: quizQuestion
    // }

    return (
        <div className='quiz-container'>
            <Title questionTitle={quizQuestion.title}/>
            <AnswerChoice content={quizQuestion.A} activate={setActiveChoice} isActive={active==="A"} letter="A"></AnswerChoice>
            <AnswerChoice content={quizQuestion.B} activate={setActiveChoice} isActive={active==="B"} letter="B"></AnswerChoice>
            <AnswerChoice content={quizQuestion.C} activate={setActiveChoice} isActive={active==="C"} letter="C"></AnswerChoice>
            <AnswerChoice content={quizQuestion.D} activate={setActiveChoice} isActive={active==="D"} letter="D"></AnswerChoice>
            <button className='submit-button' onClick={() => correctAnswerHandler()}>Submit</button>
            {renderCorrectness()}
        </div>
    )
}

export default Quiz; 