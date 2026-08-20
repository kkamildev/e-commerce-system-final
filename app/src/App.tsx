import { useState, type FC } from "react";
import Form from "./Utils/Components/Input/Form";
import BaseSeparator from "./Utils/Components/Separators/BaseSeparator";
import InputSuccess from "./Utils/Components/Notifications/InputSuccess";
import GlobalErrorNotification from "./Utils/Components/Notifications/GlobalErrorNotification";
import Dropdown from "./Utils/Components/Input/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import SpinLoader from "./Utils/Components/Loaders/SpinLoader";
import {faPlus, faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import { useLoadingStore } from "./Utils/Stores/useLoadingStore";
import RadioGroup from "./Utils/Components/Input/RadioGroup";
import FixedButton from "./Utils/Components/Popups/FixedButton";
import NotifStack from "./Utils/Components/Popups/NotifStack";
import { useNotifStore } from "./Utils/Stores/useNotifStore";

type Props = {

}

const App : FC<Props> = ({}) => {


    const addLoader = useLoadingStore((store) => store.addLoader)
    const deleteLoader = useLoadingStore((store) => store.deleteLoader)
    const addNotif = useNotifStore((store) => store.addNotif);

    const [filterValue, setFilterValue] = useState<string>("something1");

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
                <BaseSeparator style="mx-2 w-[300px]! h-[1px]!"/>
                <button type="submit" className="btn bg-green-900 hover:bg-green-800">Submit Form</button>
                <InputSuccess content="Everything is okay"/>
                <SpinLoader reqId="1"><FontAwesomeIcon className="dark:text-white text-2xl" icon={faSpinner}/></SpinLoader>
            </Form>
        </>
    )
}

export default App;