
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";


type Props = {
    content:string
}

const InfoNotification : FC<Props> = ({content}) => {
    return (
        <section className="flex items-center justify-start">
            <p className="bg-blue-500 border-2 border-blue-800 m-2 p-1 font-bold text-blue-950 rounded-md flex items-center gap-x-3">
                <FontAwesomeIcon icon={faInfoCircle} className="text-2xl"/> {content}
            </p>
        </section>
    )
}

export default InfoNotification;