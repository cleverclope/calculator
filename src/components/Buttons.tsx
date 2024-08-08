
import '../styles.css'

interface IProps {
    handleOnPress: (value: string) => void;
  }

  export default function Buttons({ handleOnPress }: IProps) {

    function onPress(event) {
      const value: string = event.target.innerText
      handleOnPress(value)
    }

    return (
      <div className="buttons-container">
        {/* row of buttons */}

        <div className='button-row'> 
          <button className='top' onClick={onPress}>C</button>
          <button className='top' onClick={onPress}>+/-</button>
          <button className='top' onClick={onPress}>%</button>
          <button className='last-button' onClick={onPress}>÷</button>
        </div>

        <div className='button-row'>
          <button onClick={onPress}>7</button>
          <button onClick={onPress}>8</button>
          <button onClick={onPress}>9</button>
          <button className='last-button' onClick={onPress}>✕</button>
        </div>

        <div className='button-row'>
          <button onClick={onPress}>4</button>
          <button onClick={onPress}>5</button>
          <button onClick={onPress}>6</button>
          <button className='last-button' onClick={onPress}>-</button>
        </div>

        <div className='button-row'>
          <button onClick={onPress}>1</button>
          <button onClick={onPress}>2</button>
          <button onClick={onPress}>3</button>
          <button className='last-button' onClick={onPress}>+</button>
        </div>

        <div className='button-row'>
          <button className="zero-btn" onClick={onPress}>0</button>
          <button className='decimal-btn' onClick={onPress}>.</button>
          <button className='last-button equal-sign-btn' onClick={onPress}>=</button>
        </div>

        </div>
    )

  }