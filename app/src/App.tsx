import { useState, type FC } from "react";
import SelectField from "./Utils/Components/Input/SelectField";
import InputField from "./Utils/Components/Input/InputField";
import AreaTextField from "./Utils/Components/Input/AreaTextField";
import Switch from "./Utils/Components/Input/Switch";
import Form from "./Utils/Components/Input/Form";
import BaseSeparator from "./Utils/Components/Separators/BaseSeparator";
import PopUpLayout from "./Utils/Components/Popups/PopUpLayout";
import PopUpButton from "./Utils/Components/Popups/PopUpButton";
import RightSlider from "./Utils/Components/Popups/RightSlider";
import InputSuccess from "./Utils/Components/Notifications/InputSuccess";
import FileField from "./Utils/Components/Input/FileField";

type Props = {

}

const App : FC<Props> = ({}) => {

    const [value, setValue] = useState<string>("");
    const [value2, setValue2] = useState<string>("");
    const [value3, setValue3] = useState<string>("");

    const [switchValue, setSwitchValue] = useState<string>("false");

    return (
        <>
            <Form title="Hello world" style="max-w-[500px] shadow-xl shadow-blue-700/50 items-start rounded-xl min-h-screen"
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
                <BaseSeparator style="mx-2 w-[300px]! h-[1px]!"/>
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
                <FileField
                    id="files"
                    onChange={() => {}}
                    style=""
                    filesCount={3}
                    maxSizeMb={10}
                    minSizeMb={0.1}
                    mediaTypes="image/*"
                />
                <button type="submit" className="btn bg-blue-900 hover:bg-blue-800 btn-show">Submit Form</button>
                <InputSuccess content="Everything is okay"/>
            </Form>
            <PopUpButton style="bg-blue-800 hover:bg-blue-700" popUp={
                <PopUpLayout style="top-50! left-[50vw]">
                    <section className="bg-neutral-900 p-5 rounded-xl border-3 border-zinc-600 text-white w-100 h-25">
                        <h1 className="text-2xl">Hello world</h1>
                        <p className="text-zinc-700">Description of hello world</p>
                    </section>
                </PopUpLayout>
            } onClick={() => {}}>
                Click me
            </PopUpButton>
            <RightSlider style="w-[300px] h-full dark:bg-zinc-950 bg-zinc-200" button={<>Hello world</>}>
                <section className="w-full h-full m-2">
                    <h2 className="dark:text-white text-black text-2xl">Subscribe me</h2>
                </section>
            </RightSlider>
        </>
    )
}

export default App;