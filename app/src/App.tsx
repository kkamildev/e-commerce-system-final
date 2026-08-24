import { useRef, useState, type FC } from "react";
import { faPlus, faSpinner, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import {useLoadingStore, useNotifStore} from "./Utils/Stores"
import {GlobalErrorNotification, InputSuccess} from "./Utils/Components/Notifications"
import { NotifStack, FixedButton} from "./Utils/Components/Popups";
import { Form, RadioGroup, Dropdown, InputField } from "./Utils/Components/Input";
import { CopyBlock, CodeBlock, ScrollShowBlock, RefResponsibleBlock } from "./Utils/Components/Blocks";
import { BaseSeparator } from "./Utils/Components/Separators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpinLoader } from "./Utils/Components/Loaders";
import { AmountBar, Circle, ProcentBar} from "./Utils/Components/Bars";
import { GradientBorderWrap, GradientWrap } from "./Utils/Components/Text";


type Props = {

}

const App : FC<Props> = ({}) => {


    const addLoader = useLoadingStore((store) => store.addLoader)
    const deleteLoader = useLoadingStore((store) => store.deleteLoader)
    const addNotif = useNotifStore((store) => store.addNotif);

    const [filterValue, setFilterValue] = useState<string>("something1");
    const [value, setValue] = useState<string>("");

    const ref = useRef(null);

    return (
        <>
            <GlobalErrorNotification/>
            <NotifStack
                style="shadow-lg shadow-green-600/50 font-bold lg:block hidden"
                buttonStyle="bg-green-700! hover:bg-green-600!"
            />
            <FixedButton
                style="bg-green-600! text-xl hover:scale-100! hover:bg-green-500!"
                icon={faPlus}
                onClick={() => alert("You have done something")}
            
            />
            <Form title="Hello world" style="max-w-[500px] shadow-xl shadow-green-700/50 items-start rounded-xl min-h-screen"
                onSubmit={() => alert("Form complete")}
            >
                <GradientWrap style="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500">
                    <h1 ref={ref} className="text-4xl font-bold">Text effect</h1>
                </GradientWrap>
                <GradientBorderWrap style="m-2 from-pink-600 to-blue-900 rounded-xl">
                    <p className="p-2 bg-zinc-900 text-white font-bold text-2xl rounded-xl">Hello world</p>
                </GradientBorderWrap>
                <RadioGroup
                    style="my-4 mx-2"
                    buttons={[
                        {title:"Filter", value:"something1"},
                        {title:"Range", value:"something2"}
                    ]}
                    onChange={(value) => setFilterValue(value)}
                    value={filterValue}
                />
                <Dropdown
                    style="max-w-[300px] font-bold border-none!"
                    downStyle="dark:bg-zinc-900"
                    iconStyle='text-green-500!'
                    options={[
                        {value:"Loading", icon:faUser, onClick:() => addLoader("1")},
                        {value:"Not loading ", onClick:() => deleteLoader("1")},
                        {value:"Add notif", onClick:() => addNotif("You got a message", () => {})}
                    ]}
                >
                    <p className="dark:text-white text-xl"><FontAwesomeIcon icon={faUserCircle}/> Hello world</p>
                </Dropdown>
                <InputField
                    icon={faUser}
                    iconStyle="text-green-700!"
                    id="input1"
                    onChange={(value) => setValue(value)}
                    value={value}
                    placeholder="Your name..."
                />
                <CodeBlock
                    title="API key"
                    language=""
                    style="text-green-600! w-100"
                    code='jnjfefewfnfn1'
                />
                <CopyBlock
                    dataToCopy="ijhyutihubifilwffwefwfegergegergreege"
                    style="w-100 max-w-100"
                />
                <BaseSeparator style="mx-2 w-[300px]! h-[1px]!"/>
                <button type="submit" className="btn bg-linear-to-bl from-green-700 to-green-900 btn-show">Submit Form</button>
                <InputSuccess content="Everything is okay"/>
                <SpinLoader reqId="1"><FontAwesomeIcon className="dark:text-white text-2xl" icon={faSpinner}/></SpinLoader>
                <ScrollShowBlock style="w-full">
                    <ProcentBar
                        progress={30}
                        style="bg-black! h-4!"
                        barStyle="transition-all duration-300 ease-in-out bg-gradient-to-r from-green-500 to-green-800"
                        procentVisible
                    />
                    <AmountBar
                        amount={10}
                        maxAmount={50}
                        style="bg-black! h-4!"
                        barStyle="transition-all duration-300 ease-in-out bg-green-500"
                    />
                    <Circle
                        value={75}
                        style="w-20! h-20!"
                    />
                </ScrollShowBlock>
                <RefResponsibleBlock targetRef={ref} style="fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out" unActiveStyle="translate-y-[-100%] pointer-events-none">
                    <section className="flex justify-center w-full bg-zinc-500 h-20">
                        <h1 className="text-white text-2xl">Hello world</h1>
                    </section>
                </RefResponsibleBlock>
            </Form>
            <h1 className="h-screen"></h1>
        </>
    )
}

export default App;