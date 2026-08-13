import { useState, type FC, type ReactNode } from "react";

type Props = {
    popUp:ReactNode,
    children:ReactNode,
    style?:string,
    onClick:(e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const PopUpButton : FC<Props> = ({children, popUp, style = "", onClick}) => {

    const [display, setDisplay] = useState<boolean>(false);

    return (
        <>
            <button type="button" className={`${style} btn`} onMouseEnter={() => setDisplay(true)} onMouseOut={() => setDisplay(false)} onClick={onClick}>
                {children}
            </button>
            {display && popUp}
        </>
    )
}

export default PopUpButton;