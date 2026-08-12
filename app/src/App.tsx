import { useState, type FC } from "react";
import SelectField from "./Utils/Components/Input/SelectField";

type Props = {

}

const App : FC<Props> = ({}) => {

    const [value, setValue] = useState<string>("");

    return (
        <>
            <SelectField
                title="Hello world"
                subtitle="(password)"
                style="max-w-[300px]"
                iconStyle='text-green-500!'
                placeholder='Type something...'
                id='input'
                value={value}
                onChange={(value, key) => setValue(value)}
                options={[{key:"Hello"}, {key:"Dzień dobry", value:"dzien dobry"}]}
                errors={["Invalid password"]}
            />
        </>
    )
}

export default App;