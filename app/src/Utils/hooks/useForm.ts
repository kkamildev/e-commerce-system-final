import { useCallback, useEffect, useState } from "react";


export type ValidationObject = {
    fieldId:string,
    errorMessages:string[],
    validations:RegExp[],
    required:boolean
}

const useForm = (validators : ValidationObject[]) => {
    const [data, setData] = useState<{id:string, value:string}[]>([]);
    const [errors, setErrors] = useState<{id:string, error:string}[]>([]);

    useEffect(() => {
        setData(validators.map((obj) => ({id:obj.fieldId, value:null})))
    }, [validators]);
    useEffect(() => {
        const newErrors: { id: string; error: string }[] = [];

        data.forEach(obj => {
            if(obj.value != null) {
                const validator = validators.find(v => v.fieldId === obj.id);
                if (!validator) return;
    
                validator.validations.forEach((regExp, index) => {
                    if (!regExp.test(obj.value)) {
                        newErrors.push({ id: obj.id, error: validator.errorMessages[index] });
                    }
                });
            }
        });

        setErrors(newErrors);
    }, [data, validators]);

    const checkComplete = useCallback(() => {
        if (errors.length > 0) return false;
        return data.every(obj => {
            const validator = validators.find(v => v.fieldId === obj.id);
            if (!validator) return true;
            if (!validator.required) return true;
            return !!obj.value && obj.value.trim() !== "";
        });
    }, [errors, data, validators]);


    return [data, setData, errors, checkComplete]
}

export default useForm;