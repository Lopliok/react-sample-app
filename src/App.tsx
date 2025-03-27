import React from 'react';
import connection from './eWayAPI/Connector';
import { TContactsResopnse } from './eWayAPI/ContactsResponse';
import { mergeStyleSets, Dialog, DialogType, DialogFooter, PrimaryButton, ProgressIndicator } from '@fluentui/react';
import { BaseField } from './components/Field';
import EmailForm from './components/Form';

const css = mergeStyleSets({
    wrapper: {
        display: "grid",
        placeItems: "center",
        minHeight: "100vh"
    }
});

const dialogContentProps = {
    type: DialogType.normal,
    title: 'Agent Data',
    isDraggable: false
};

const modalProps = {
    isBlocking: true
};

// This is a React Hook component.
const App = () => {
    const [fullName, setFullName] = React.useState<string | null>(null);


    React.useEffect(() => {
        setTimeout(() => {
            connection.callMethod(
                'SearchContacts',
                {
                    transmitObject: {
                        Email1Address: 'mroyster@royster.com' // ealbares@gmail.com, oliver@hotmail.com, michael.ostrosky@ostrosky.com, kati.rulapaugh@hotmail.com and many others
                    },
                    includeProfilePictures: true
                },
                (result: TContactsResopnse) => {
                    console.log(result);
                    if (result.Data.length !== 0 && !!result.Data[0].FileAs) {
                        setFullName(result.Data[0].FileAs);
                    } else {
                        setFullName('...top secret...');
                    }
                }
            );
        },
            5000
        );
    });

    return (
        <div className={css.wrapper}>

            <EmailForm />
        </div>
    );
};

export default App;
