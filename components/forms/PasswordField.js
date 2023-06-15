import React from "react";
import { Input } from 'antd';

const getFieldCSSClasses = (touched, errors) => {
    const classes = ["form-control"];
    if (touched && errors) {
        classes.push("is-invalid");
    }

    if (touched && !errors) {
        classes.push("is-valid");
    }

    return classes.join(" ");
};

export function PasswordField({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    label,
    placeholder,
    withFeedbackLabel = true,
    customFeedbackLabel,
    type,
    required,
    ...props
}) {
    return (
        <>
            {label && <label>{label} {required && <>*</>}</label>}
            <Input.Password
                size="large"
                placeholder={placeholder}
                className={getFieldCSSClasses(touched[field.name], errors[field.name])}
                {...field}
                {...props}
            />
            <span className="error-msg">{touched[field.name] && errors[field.name]}</span>
            {withFeedbackLabel && (
                <span
                    error={errors[field.name]}
                    touched={touched[field.name]}
                    label={label}
                    type={type}
                    customFeedbackLabel={customFeedbackLabel}
                />
            )}
        </>
    );
}
