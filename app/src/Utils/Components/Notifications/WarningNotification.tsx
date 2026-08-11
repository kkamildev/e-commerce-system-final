import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";


type Props = {
    content:string
}

const WarningNotification : FC<Props> = ({content}) => {
    return (
        <section className="flex items-center justify-start">
            <p className="bg-yellow-500 border-2 border-yellow-800 m-2 p-1 font-bold text-yellow-950 rounded-md flex items-center gap-x-3">
                <FontAwesomeIcon icon={faCircleExclamation} className="text-2xl"/> {content}
            </p>
        </section>
    )
}

export default WarningNotification;