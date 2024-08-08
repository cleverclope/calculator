import '../styles.css'

interface IProps {
    input: string;
    error: boolean;
  }

  export default function Input({ input, error }: IProps) {
    return (
        <div className="input-container">
             {error ? <h1>Error</h1> : <h1>{input ? input : "0"}</h1>}
         </div>

    )
}