import type { FC, ReactNode } from "react";
import { useLoadingStore } from "../../Stores/useLoadingStore";

type Props = {
    children:ReactNode,
    loaderId:string
}

const SpinLoader : FC<Props> = ({children, loaderId}) => {

    const loaders = useLoadingStore((store) => store.loaders);

    return (
        loaders.includes(loaderId) && <section className="animate-spin flex items-center justify-center">
            {children}
        </section>
    )
}

export default SpinLoader;