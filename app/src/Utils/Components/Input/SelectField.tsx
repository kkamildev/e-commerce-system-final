
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useRef, useState, type FC } from "react"
import ErrorNotification from "../Notifications/ErrorNotification";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { animate, JSAnimation } from "animejs";

type Props = {
    title?:string,
    subtitle?:string,
    style?:string,
    iconStyle?:string,
    placeholder?:string,
    id:string,
    value:string,
    onChange:(value : string, key : string) => void;
    errors?:string[],
    options:SelectFieldOption[]
}

export type SelectFieldOption = {
    key:string,
    value?:string
}

const SelectField : FC<Props> = ({id, title, subtitle, style = "", iconStyle = "", placeholder = "", value, onChange, errors = [], options}) => {

    const [isOptionsShowed, setIsOptionsShowed] = useState<boolean>(false);

    const buttonRef = useRef(null);

    useEffect(() => {
        if (!buttonRef.current) return;
        
        let animation : JSAnimation;
        if(isOptionsShowed) {
            animation = animate(buttonRef.current, {
                rotateZ:["0deg", "90deg"],
                duration: 400,
                ease: 'inOutQuad',
                loop: false,
                alternate: true
            });
        } else {
            animation = animate(buttonRef.current, {
                rotateZ:["90deg", "0deg"],
                duration: 400,
                ease: 'inOutQuad',
                loop: false,
                alternate: true
            });
        }
        
        return () => {
            animation.revert();
        };
    }, [isOptionsShowed]);
    useEffect(() => {
        if (!buttonRef.current) return;
        const animation = animate(buttonRef.current, {
            rotateZ:["0deg", "0deg"],
            duration: 400,
            ease: 'inOutQuad',
            loop: false,
            alternate: true
        });
         return () => {
            animation.revert();
        };
    }, []);

    const getKey = useCallback((value : string) => {
        const option = options.find((option) => {
            const valueToCompare = option.value == null ? option.key : option.value;
            return valueToCompare == value;
        })
        return option.key;
    }, [options])


    return (
        <section className="m-2 min-w-0">
            {title && <label htmlFor={id}><p className="font-bold text-xl mt-2 dark:text-white">{title}</p></label>}
            {subtitle && <label htmlFor={id}><p className="font-bold mb-2 text-zinc-600">{subtitle}</p></label>}
            <section className={`flex gap-x-3 p-2 items-center border-3 rounded-md dark:border-white relative ${style}`}>
                <input id={id}
                className={`flex-[1_1_auto] focus:outline-0 min-w-0 dark:text-white`} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value, getKey(e.target.value))}/>
                <FontAwesomeIcon className={`shrink-0 dark:text-white cursor-pointer ${iconStyle}`} icon={faBars} ref={buttonRef}
                onClick={() => setIsOptionsShowed((prev) => !prev)}
                />
                <section className="absolute top-full max-h-50 w-full dark:bg-zinc-950 bg-zinc-300 z-10 right-px rounded-lg overflow-y-auto">
                    {
                        options.map((option) => <p className="dark:text-white p-2 font-bold hover:bg-zinc-800 cursor-pointer transition-colors duration-100 ease-in-out">
                            {option.value == null ? option.key : option.value}</p>)
                    }
                </section>
            </section>
            {
                errors.length != 0 &&
                <ErrorNotification content={errors[0]}/>
            }
        </section>
    )
}

export default SelectField;