import { ChangeEvent, FormEvent, useState } from "react";
import { BaseField } from "./Field";
import { mergeStyleSets } from "@fluentui/react";
import { BaseButton } from "./Button";

const css = mergeStyleSets({
    form: {
    },
    content: {
        display: "flex"
    }
});

export default function EmailForm() {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Odesláno: ${inputValue}`);
        setInputValue("");
    };



    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <div className={css.content}>

                <BaseField />
                <div>
                    <BaseButton>Odeslat</BaseButton>
                </div>
            </div>

        </form>
    );
}
