import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react';
import './SuperTextField.scss';

// default input props type
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & { // default input props + custom props
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

export const SuperTextField: React.FC<SuperInputTextPropsType> = (
    {
        type, // not to be redefined
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);

        onChangeText && onChangeText(e.currentTarget.value);
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter && e.key === 'Enter' && onEnter();
    }

    const finalSpanClassName = `superTextField__span-error ${(spanClassName && spanClassName) || ''}`
    const finalInputClassName = `superTextField__input ${(className && className) || ''} ${(error && 'superTextField__input-error') || ''}`

    return (
        <div className="superTextField__wrapper">
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}/>

            {error && <span className={finalSpanClassName}>{error}</span>}
        </div>
    )
}
