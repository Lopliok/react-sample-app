import * as React from "react";
import { Button } from "@fluentui/react-components";
import type { ButtonProps } from "@fluentui/react-components";

export const BaseButton = (props: ButtonProps) => (
    <Button {...props}>{props.children}</Button>
);