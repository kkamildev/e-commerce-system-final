import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";


type Props = {
    content:string
}

const SuccessNotification : FC<Props> = ({content}) => {
    return (
        <section className="flex items-center justify-start">
            <p className="bg-green-500 border-2 border-green-800 m-2 p-1 font-bold text-green-950 rounded-md flex items-center gap-x-3">
                <FontAwesomeIcon icon={faCheckCircle} className="text-2xl"/> {content}
            </p>
        </section>
    )
}

export default SuccessNotification;