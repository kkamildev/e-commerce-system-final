import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";


type Props = {
    content:string
}

const ErrorNotification : FC<Props> = ({content}) => {
    return (
        <section className="flex items-center justify-start">
            <p className="bg-red-500 border-2 border-red-800 m-2 p-1 font-bold text-red-950 rounded-md flex items-center gap-x-3">
                <FontAwesomeIcon icon={faCircleXmark} className="text-2xl"/> {content}
            </p>
        </section>
    )
}

export default ErrorNotification;