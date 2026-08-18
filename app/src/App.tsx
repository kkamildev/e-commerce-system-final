import { useMemo, type FC } from "react";
import SelectField from "./Utils/Components/Input/SelectField";
import Form from "./Utils/Components/Input/Form";
import BaseSeparator from "./Utils/Components/Separators/BaseSeparator";
import InputSuccess from "./Utils/Components/Notifications/InputSuccess";
import { useForm, type ValidationObject } from "./Utils/Hooks/useForm";
import GlobalErrorNotification from "./Utils/Components/Notifications/GlobalErrorNotification";
import Dropdown from "./Utils/Components/Input/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import SpinLoader from "./Utils/Components/Loaders/SpinLoader";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useLoadingStore } from "./Utils/Stores/useLoadingStore";

type Props = {

}

const App : FC<Props> = ({}) => {

    const validators = useMemo(() => [
        {
            fieldId:"input",
            keyCheck:true,
            required:true,
            validations:[
                /^.{1,}$/
            ],
            errorMessages:[
                "This field is required"
            ],
        }
    ] as ValidationObject[], []);

    const [getData, update, getErrors,, checkComplete] = useForm(validators);
    const addLoader = useLoadingStore((store) => store.addLoader)
    const deleteLoader = useLoadingStore((store) => store.deleteLoader)

    return (
        <>
            <GlobalErrorNotification/>
            <Form title="Hello world" style="max-w-[500px] shadow-xl shadow-blue-700/50 items-start rounded-xl min-h-screen"
                onSubmit={async () => {
                    if(checkComplete()) {
                    }
                }}
            >
                <Dropdown
                    style="max-w-[300px] font-bold border-none!"
                    downStyle="dark:bg-zinc-900"
                    iconStyle='text-green-500!'
                    options={[
                        {value:"Loading", onClick:() => addLoader("1")},
                        {value:"Not loading ", onClick:() => deleteLoader("1")},
                    ]}
                >
                    <p className="dark:text-white text-xl"><FontAwesomeIcon icon={faUserCircle}/> Hello world</p>
                </Dropdown>
                <BaseSeparator style="mx-2 w-[300px]! h-[1px]!"/>
                <button type="submit" className="btn bg-blue-900 hover:bg-blue-800 btn-show">Submit Form</button>
                <InputSuccess content="Everything is okay"/>
                <SpinLoader loaderId="1"><FontAwesomeIcon className="dark:text-white text-2xl" icon={faCircleNotch}/></SpinLoader>
            </Form>
        </>
    )
}

export default App;