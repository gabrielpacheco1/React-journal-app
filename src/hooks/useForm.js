import React, { useEffect, useMemo, useState } from 'react'

export const useForm = (initialForm= {}, formValidations= {}) => {

    const [formState, setFormState] = useState(initialForm);
    
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => { //Cuando hay un cambio en el state del formulario (formState) se dispara createValidators
        
        createValidators()

    }, [formState]);

    // const {username, email, password}= formState //No tiene sentido porque es muy especifica (no va a servir con todos los formularios)

    useEffect(() => {
        
        setFormState(initialForm)

    }, [initialForm]);

    const isFormValid= useMemo(() => {

        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null)
                return false    
        }

        return true

    }, [formValidation])

    const onInputChange = ({target}) => {
        const {name, value}= target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
              
        setFormState(initialForm)
    } 

    const createValidators = () => {
        const formCheckedValues= {}

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage= 'Error de validación']= formValidations[formField]
            formCheckedValues[`${ formField }Valid`]= fn(formState[formField]) ? null : errorMessage
        }

        setFormValidation(formCheckedValues)
        // console.log(formCheckedValues) //muestra los errores de validacion (si existen o no)
    }

    return {
        ...formState, //expone todas las propiedades que se envien (initialForm)
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}