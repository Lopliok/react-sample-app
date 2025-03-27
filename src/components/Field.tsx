import * as React from "react";

import type { FieldProps } from "@fluentui/react-components";
import { Field, Input } from "@fluentui/react-components";

export const BaseField = (props: Partial<FieldProps>) => (
    <Field
        label="Zadejte email"
        validationState="success"
        validationMessage="Email vyplněn!"
        {...props}
    >
        <Input />
    </Field>
);