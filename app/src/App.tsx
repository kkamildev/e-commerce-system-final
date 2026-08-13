import { useState, type FC } from "react";
import SelectField from "./Utils/Components/Input/SelectField";
import InputField from "./Utils/Components/Input/InputField";
import AreaTextField from "./Utils/Components/Input/AreaTextField";
import Switch from "./Utils/Components/Input/Switch";
import Form from "./Utils/Components/Input/Form";

type Props = {

}

const App : FC<Props> = ({}) => {

    const [value, setValue] = useState<string>("");
    const [value2, setValue2] = useState<string>("");
    const [value3, setValue3] = useState<string>("");

    const [switchValue, setSwitchValue] = useState<string>("false");

    return (
        <>
            <Form title="Hello world" style="max-w-[500px] shadow-xl shadow-blue-700/50 items-start rounded-xl h-screen"
                onSubmit={() => alert("Hello world")}
            >
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
                    style="max-w-[300px] dark:border-neutral-600! border-neutral-400! text-neutral-700"
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
                    maxCharacters={100}
                />
                <Switch
                    title="Accept privacy"
                    subtitle="Accept privacy"
                    value={switchValue}
                    id="input4"
                    onChange={(value) => setSwitchValue(value)}
                    buttonOnStyle="bg-sky-600!"
                />
                <button type="submit" className="btn bg-blue-900 hover:bg-blue-800 btn-show">Submit Form</button>
            </Form>
        </>
    )
}

export default App;