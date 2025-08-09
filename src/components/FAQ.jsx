
const FAQ = ({ currentData ,isActive,onToggele}) => {
   
    const { question, answer } = currentData

    
    return (
        <div>
            <li key={currentData.id}>
                <div className='accordion-grid'>
                    <p>{question}</p>
                    <button onClick={onToggele} className={isActive?"active-btn":""}>{isActive ?"Close" :"Show"}</button>
                </div>
                <p>{isActive && answer}</p>
            </li>
        </div>
    )
}

export default FAQ