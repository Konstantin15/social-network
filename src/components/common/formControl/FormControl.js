import React from 'react';
import styles from './FormControl.module.css'
import {Field} from "redux-form";
import {required} from "../../../utils/Validator";

export const TextArea = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
};

export const createField = (name, component, placeholder, validate, props = {}, text = "") => (
    <div>
        <Field name={name} component={component} placeholder={placeholder}
               validate={validate} {...props}/> {text}
    </div>
);