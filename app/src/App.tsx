import { useRef, useState, type FC } from "react";
import { faPlus, faQuestionCircle, faSpinner, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import {useImageVieverStore, useLoadingStore, useNotifStore} from "./Utils/Stores"
import {GlobalErrorNotification, InputSuccess} from "./Utils/Components/Notifications"
import { NotifStack, FixedButton, PopUpButton, PopUpLayout, ImageViever} from "./Utils/Components/Popups";
import { Form, RadioGroup, Dropdown, InputField } from "./Utils/Components/Input";
import { CopyBlock, CodeBlock, ScrollShowBlock, RefResponsibleBlock, Carousel, BackgroundImageBlock, Accordion, Pagination } from "./Utils/Components/Blocks";
import { BaseSeparator } from "./Utils/Components/Separators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpinLoader } from "./Utils/Components/Loaders";
import { AmountBar, Circle, ProcentBar} from "./Utils/Components/Bars";
import { GradientBorderWrap, GradientWrap, ToolTipWrap } from "./Utils/Components/Text";


type Props = {

}

const App : FC<Props> = ({}) => {


    const deleteLoader = useLoadingStore((store) => store.deleteLoader)
    const addNotif = useNotifStore((store) => store.addNotif);

    const prepareImage = useImageVieverStore((store) => store.prepare);

    const [filterValue, setFilterValue] = useState<string>("something1");
    const [value, setValue] = useState<string>("");
    const [page, setPage] = useState<number>(0);

    const ref = useRef(null);

    return (
        <>
            <GlobalErrorNotification/>
            <ImageViever/>
            <NotifStack
                style="shadow-lg shadow-green-600/50 font-bold lg:block hidden"
                buttonStyle="bg-green-700! hover:bg-green-600!"
            />
            <FixedButton
                style="bg-green-600! text-xl hover:scale-100! hover:bg-green-500!"
                icon={faPlus}
                onClick={() => alert("You have done something")}
            />

            <BackgroundImageBlock style="h-screen bg-black/50 relative" imageUrl="https://aboutme.pixlesofte.com/assets/e-commerce1-CFNExiir.png">
                <div className="absolute h-full w-full bg-black/85 flex justify-center items-center">
                    <section className="flex flex-col items-center gap-y-4">
                        <GradientWrap style="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-center pb-5">
                            <h1 className="text-5xl font-bold">Event is incomming</h1>
                        </GradientWrap>
                        <p className="text-3xl font-bold text-white">In two days</p>
                    </section>
                </div>
            </BackgroundImageBlock>
            <Form title="Hello world" style="max-w-[500px] shadow-xl shadow-green-700/50 items-start rounded-xl min-h-screen"
                onSubmit={() => alert("Form complete")}
            >
                <GradientBorderWrap style="m-2 from-pink-600 to-blue-900 rounded-xl">
                    <p className="p-2 bg-zinc-900 text-white font-bold text-2xl rounded-xl">Hello world</p>
                </GradientBorderWrap>
                <Carousel widthPerComponent={64}>
                    <ToolTipWrap text="To help it you must install specific software on your computer" style="font-bold text-lg! top-[20px]! w-[200px]!">
                        <BackgroundImageBlock style="snap-center shrink-0 w-64! h-50 bg-red-400 rounded-xl" imageUrl="https://aboutme.pixlesofte.com/assets/e-commerce1-CFNExiir.png"></BackgroundImageBlock>
                    </ToolTipWrap>
                    <BackgroundImageBlock style="snap-center shrink-0 w-64! h-50 bg-red-400 rounded-xl" imageUrl="https://aboutme.pixlesofte.com/assets/e-commerce1-CFNExiir.png"></BackgroundImageBlock>
                </Carousel>
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
                        {value:"Loading", icon:faUser, onClick:() => prepareImage([
                            {title:"Hello world", url:"https://aboutme.pixlesofte.com/assets/e-commerce1-CFNExiir.png"},
                            {title:"Hello world", url:"https://aboutme.pixlesofte.com/assets/portfolio1-BM5_r4Dt.png"}
                        ], 0)},
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
                    style="text-green-600! w-60 lg:w-100"
                    code='jnjfefewfnfn1'
                />
                <CopyBlock
                    dataToCopy="ijhyutihubifilwffwefwfegergegergreege"
                    style="lg:w-100 lg:max-w-100 w-60 max-w-60"
                />
                <BaseSeparator style="mx-2 w-[300px]! h-[1px]!"/>
                <button ref={ref} type="submit" className="btn bg-linear-to-bl from-green-700 to-green-900 btn-show">Submit Form</button>
                <InputSuccess content="Everything is okay"/>
                <SpinLoader reqId="1"><FontAwesomeIcon className="dark:text-white text-2xl" icon={faSpinner}/></SpinLoader>
                <ScrollShowBlock style="w-full z-0!">
                    <ProcentBar
                        progress={30}
                        style="dark:bg-black! bg-zinc-200! h-4!"
                        barStyle="transition-all duration-300 ease-in-out bg-gradient-to-r from-green-500 to-green-800"
                        procentVisible
                    />
                    <AmountBar
                        amount={10}
                        maxAmount={50}
                        style="dark:bg-black! bg-zinc-200! h-4!"
                        barStyle="transition-all duration-300 ease-in-out bg-green-500"
                    />
                    <Circle
                        value={75}
                        style="w-20! h-20!"
                    />
                </ScrollShowBlock>
                <RefResponsibleBlock targetRef={ref} style="fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-30" unActiveStyle="translate-y-[-100%] pointer-events-none">
                    <section className="flex justify-center w-full bg-zinc-500 h-20">
                        <h1 className="text-white text-2xl">Hello world</h1>
                    </section>
                </RefResponsibleBlock>
                <ToolTipWrap text="To help it you must install specific software on your computer" style="font-bold text-lg! top-[-100px]! w-[200px]!">
                    <section className="flex items-center gap-x-1 text-2xl m-2 p-1 btn bg-green-800 hover:bg-green-700">
                        <p>Any help?</p>
                        <button type="button"><FontAwesomeIcon icon={faQuestionCircle}/></button>
                    </section>
                </ToolTipWrap>
                <Accordion title="Can I trust you?" buttonStyle="text-2xl font-bold!">
                    NO... this is so illegal company lol Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi voluptatum minima. Modi aut enim nemo tenetur dolore rerum explicabo suscipit consequuntur sit a, dicta molestias quia, architecto excepturi at.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia enim unde ullam ipsum sequi officia distinctio inventore deleniti consectetur facilis optio nobis ratione, eos voluptas molestiae, suscipit sint sapiente a?
                </Accordion>
                <Pagination
                    components={[
                        <h1>Hello world page 1</h1>,
                        <h1>Hello world page 2</h1>,
                        <h1>Hello world page 3</h1>,
                        <h1>Hello world page 4</h1>
                    ]}
                    componentsPerPage={2}
                    pageIndex={page}
                />
                <section>
                    <button type="button" className="btn" onClick={() => setPage((prev) => prev-= 1)}>Prev</button>
                    <button type="button" className="btn" onClick={() => setPage((prev) => prev+= 1)}>Next</button>
                </section>
            </Form>
            <PopUpButton onClick={() => {}} popUp={
                <PopUpLayout>
                    <h1>Hello world</h1>
            </PopUpLayout>}>
                    CLick me
            </PopUpButton>
            <h1 className="h-screen"></h1>
        </>
    )
}

export default App;