import type { FC } from "react";

type Props = {
    buttons:{value:string, title:string}[],
    buttonStyle?:string,
    style?:string
}

const RadioGroup : FC<Props> = ({buttons, buttonStyle, style}) => {
    return (
        <section className={`${style} flex items-center gap-x-3`}>
            {
                buttons.map((button) => <button key={button.value} type="button"
                className={`${buttonStyle} rounded-lg px-3 py-1 cursor-pointer font-bold dark:text-white dark:bg-zinc-800 dark:hover:text-black dark:hover:bg-neutral-100 text-black bg-neutral-200 hover:text-white hover:bg-black transition-colors duration-150 ease-in-out`}>
                    {button.title}</button>)
            }
        </section>
    )
}

export default RadioGroup;