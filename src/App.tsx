import React, { useState } from 'react';
import connection from './eWayAPI/Connector';
import { TContactsResponse } from './eWayAPI/ContactsResponse';
import {
  mergeStyleSets,
  Dialog,
  DialogType,
  DialogFooter,
  PrimaryButton,
  ProgressIndicator,
} from '@fluentui/react';
import EmailForm from './components/Form';

const css = mergeStyleSets({
  wrapper: {
    display: 'grid',
    placeItems: 'center',
    minHeight: '100vh',
  },
});

const dialogContentProps = {
  type: DialogType.normal,
  title: 'Agent Data',
  isDraggable: false,
};

const modalProps = {
  isBlocking: true,
};

// This is a React Hook component.
const App = () => {
  const [selectedEmail, setSelectedEmail] = useState<string | undefined>();

  React.useEffect(() => {
    setTimeout(() => {
      connection.callMethod(
        'SearchContacts',
        {
          transmitObject: {
            Email1Address: 'mroyster@royster.com', // ealbares@gmail.com, oliver@hotmail.com, michael.ostrosky@ostrosky.com, kati.rulapaugh@hotmail.com and many others
          },
          includeProfilePictures: true,
        },
        (result: TContactsResponse) => {
          console.log(result);
        }
      );
    }, 5000);
  });

  return (
    <div className={css.wrapper}>
      <EmailForm setEmail={value => setSelectedEmail(value)} />
    </div>
  );
};

export default App;
