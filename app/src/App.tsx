import { useMemo, type FC } from "react";
import SelectField from "./Utils/Components/Input/SelectField";
import Form from "./Utils/Components/Input/Form";
import BaseSeparator from "./Utils/Components/Separators/BaseSeparator";
import InputSuccess from "./Utils/Components/Notifications/InputSuccess";
import { useForm } from "./Utils/Hooks/useForm";
import GlobalErrorNotification from "./Utils/Components/Notifications/GlobalErrorNotification";
import { useRequest } from "./Utils/Hooks/useRequest";

type Props = {

}

const App : FC<Props> = ({}) => {

    const validators = useMemo(() => [
        {
            fieldId:"input",
            required:true,
            validations:[
                /^.{1,}$/
            ],
            errorMessages:[
                "This field is required"
            ]
        }
    ], []);

    const [getData, update, getErrors,, checkComplete] = useForm(validators);
    const {send, data, error, loading} = useRequest();

    return (
        <>
            <GlobalErrorNotification/>
            <Form title="Hello world" style="max-w-[500px] shadow-xl shadow-blue-700/50 items-start rounded-xl min-h-screen"
                onSubmit={async () => {
                    if(checkComplete()) {
                        const data = await send("GET", "localhost:3000", null, null);
                        console.log(data);
                    }
                }}
            >
                <SelectField
                    title="Hello world"
                    subtitle="(password)"
                    style="max-w-[300px]"
                    iconStyle='text-green-500!'
                    placeholder='Type something...'
                    id='input'
                    value={getData("input")?.value ?? ""}
                    onChange={(value, key) => update("input", value, key)}
                    options={[
                        {key:"1", value:"Math"},
                        {key:"2", value:"Biology"},
                        {key:"3", value:"History"},
                        {key:"4", value:"English"},
                        {key:"5", value:"German"},
                        {key:"6", value:"P.E"}
                    ]}
                    errors={getErrors("input")}
                />
                <BaseSeparator style="mx-2 w-[300px]! h-[1px]!"/>
                <button type="submit" className="btn bg-blue-900 hover:bg-blue-800 btn-show">Submit Form</button>
                <InputSuccess content="Everything is okay"/>
            </Form>
        </>
    )
}

export default App;