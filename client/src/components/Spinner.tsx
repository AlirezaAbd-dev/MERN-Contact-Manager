import { FC } from "react"
// @ts-ignore
import SpinnerGIF from '../assets/Spinner.gif'

const Spinner:FC = () => {
    return (
        <>
            <img 
            src={SpinnerGIF}
            className="b-block m-auto" 
            style={{ width: "200px" }}
            alt="loading"
            />
        </>
    )
}
export default Spinner