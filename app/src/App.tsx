import { useState, type FC } from "react";
import InputField from "./Utils/Components/Input/InputField";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

type Props = {

}

const App : FC<Props> = ({}) => {

    const [value, setValue] = useState<string>("");

    return (
        <>
            <InputField
                title="Hello world"
                subtitle="(password)"
                icon={faCoffee}
                style="max-w-[300px]"
                iconStyle='text-green-500!'
                placeholder='Type something...'
                type='password'
                id='input'
                value={value}
                onChange={(value) => setValue(value)}
                errors={["Invalid password"]}
            />
        </>
    )
}

export default App;