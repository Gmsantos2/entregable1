import './styles/Quotebox.css'
const QuoteBox = ({quote, handleChangequote}) => {
    const {phrase, author} = quote;
    return (
    <article className="quotebox">
        <h1 className="quotebox__title">INFOGALAX</h1>
        <div className="quotebox__container">
            <p>{phrase}</p>
        </div>
        <button className="quotebox__btn" onClick={handleChangequote}><img src="/try.svg" alt="" /></button>
        <span className='quotebox__author' >{author}</span>
    </article>
  )
}
export default QuoteBox