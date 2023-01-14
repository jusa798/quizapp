import './Title.css'

const Title = (props) => { 
    return (
        <h2 className='title-container'>
            {props.questionTitle}
        </h2>
    )
}

export default Title; 