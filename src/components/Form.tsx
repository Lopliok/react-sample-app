import { ChangeEvent, FormEvent, useState } from "react";
import { EmailField } from "./EmailField";
import { mergeStyleSets } from "@fluentui/react";
import { BaseButton } from "./Button";

const css = mergeStyleSets({
    form: {
    },
    content: {
        //  display: "flex"
        width: 250
    },
    submit: {
        textAlign: "end",
        paddingTop: "20px"
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

                <EmailField />
                <div className={css.submit}>
                    <BaseButton>Odeslat</BaseButton>
                </div>
            </div>

        </form>
    );
}
