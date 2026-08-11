import { useState, type FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ErrorNotification from "../Notifications/ErrorNotification";


type Props = {
    title?:string,
    subtitle?:string,
    style?:string,
    iconStyle?:string
    type?:string,
    icon?:IconDefinition,
    placeholder?:string,
    id:string,
    value:string,
    onChange:(value : string) => void;
    errors?:string[]
}

const InputField : FC<Props> = ({id, title, subtitle, style = "", iconStyle = "", type = "text", placeholder = "", icon, value, onChange, errors = []}) => {

    const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);

    return (
        <section className="m-2 min-w-0">
            {title && <label htmlFor={id}><p className="font-bold text-xl mt-2 dark:text-white">{title}</p></label>}
            {subtitle && <label htmlFor={id}><p className="font-bold mb-2 text-zinc-600">{subtitle}</p></label>}
            <section className={`flex gap-x-3 p-2 items-center border-3 rounded-md dark:border-white ${style}`}>
                {
                    icon &&
                    <label htmlFor={id}>
                        <FontAwesomeIcon icon={icon}  className={`shrink-0 dark:text-white ${iconStyle}`}/>
                    </label>
                }
                <input id={id} type={type == "password" ? isShowingPassword ? "text" : "password" : type}
                className={`flex-[1_1_auto] focus:outline-0 min-w-0 dark:text-white`} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
                {
                    type == "password" && <FontAwesomeIcon className={`shrink-0 dark:text-white cursor-pointer ${iconStyle}`} icon={isShowingPassword ? faEyeSlash : faEye}
                        onClick={() => setIsShowingPassword((prev) => !prev)}
                    />
                }
            </section>
            {
                errors.length != 0 &&
                <ErrorNotification content={errors[0]}/>
            }
        </section>
    )
}

export default InputField;