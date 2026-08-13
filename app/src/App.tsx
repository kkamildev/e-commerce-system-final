import { useState, type FC } from "react";
import SelectField from "./Utils/Components/Input/SelectField";
import InputField from "./Utils/Components/Input/InputField";
import AreaTextField from "./Utils/Components/Input/AreaTextField";
import Switch from "./Utils/Components/Input/Switch";

type Props = {

}

const App : FC<Props> = ({}) => {

    const [value, setValue] = useState<string>("");
    const [value2, setValue2] = useState<string>("");
    const [value3, setValue3] = useState<string>("");

    const [switchValue, setSwitchValue] = useState<string>("false");

    return (
        <>
        <form>
            <SelectField
                title="Hello world"
                subtitle="(password)"
                style="max-w-[300px]"
                iconStyle='text-green-500!'
                placeholder='Type something...'
                id='input'
                value={value}
                onChange={(value, key) => {setValue(value); if(key != null) alert(key)}}
                options={[
                    {key:"1", value:"Math"},
                    {key:"2", value:"Biology"},
                    {key:"3", value:"History"},
                    {key:"4", value:"English"},
                    {key:"5", value:"German"},
                    {key:"6", value:"P.E"}
                ]}
                errors={["Invalid password"]}
            />
            <InputField
                title="Hello world"
                subtitle="(password)"
                style="max-w-[300px] dark:border-neutral-600! border-neutral-400! font-bold text-neutral-700"
                iconStyle='text-green-500!'
                placeholder='Type something...'
                id='input2'
                value={value2}
                onChange={(value) => setValue2(value)}
                type="text"
                errors={["Invalid password"]}
            />
            <AreaTextField
                title="Hello world"
                subtitle="(password)"
                style="max-w-[300px]"
                placeholder='Type something...'
                id='input3'
                value={value3}
                onChange={(value) => setValue3(value)}
                errors={["Invalid password"]}
                areaStyle="h-[300px] resize-none"
            />
            <Switch
                title="Accept privacy"
                subtitle="Accept privacy"
                value={switchValue}
                id="input4"
                onChange={(value) => setSwitchValue(value)}
                buttonOnStyle="bg-sky-600!"
            />
        </form>
        </>
    )
}

export default App;