import type { FC } from "react";
import ErrorNotification from "../Notifications/ErrorNotification";

type Props = {
    title?:string,
    subtitle?:string,
    style?:string,
    placeholder?:string,
    areaStyle?:string,
    id:string,
    value:string,
    onChange:(value : string) => void;
    errors?:string[]
}

const AreaTextField : FC<Props> = ({id, title, subtitle, style = "", placeholder = "", areaStyle, value, onChange, errors = []}) => {
    return (
        <section className="m-2 min-w-0">
            {title && <label htmlFor={id}><p className="font-bold text-xl mt-2 dark:text-white">{title}</p></label>}
            {subtitle && <label htmlFor={id}><p className="font-bold mb-2 text-zinc-600">{subtitle}</p></label>}
            <section className={`flex gap-x-3 p-2 items-center border-3 rounded-md dark:border-white ${style}`}>
                <textarea id={id}
                autoComplete="off" autoCapitalize="off" spellCheck={false}
                className={`flex-[1_1_auto] focus:outline-0 min-w-0 dark:text-white ${areaStyle}`} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
            </section>
            {
                errors.length != 0 &&
                <ErrorNotification content={errors[0]}/>
            }
        </section>
    )
}

export default AreaTextField;