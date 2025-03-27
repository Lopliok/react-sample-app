import { ChangeEvent, FormEvent, useState } from 'react';
import { EmailField } from './EmailField';
import { mergeStyleSets } from '@fluentui/react';
import { BaseButton } from './Button';
import connection from '../eWayAPI/Connector';
import { TContactsResponse } from '../eWayAPI/ContactsResponse';

const css = mergeStyleSets({
  form: {},
  content: {
    //  display: "flex"
    width: 250,
  },
  submit: {
    textAlign: 'end',
    paddingTop: '20px',
  },
});

type Props = {
  setEmail: (value: string) => void;
};

export default function EmailForm({ setEmail }: Props) {
  const searchContact = (email: string) => {
    connection.callMethod(
      'SearchContacts',
      {
        transmitObject: {
          Email1Address: email, //'mroyster@royster.com', // ealbares@gmail.com, oliver@hotmail.com, michael.ostrosky@ostrosky.com, kati.rulapaugh@hotmail.com and many others
        },
        includeProfilePictures: true,
      },
      (result: TContactsResponse) => {
        console.log(result);
      }
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get('username') as string;

    if (value) {
      searchContact(value);
    }

    value && setEmail(value);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.content}>
        <EmailField />
        <div className={css.submit}>
          <BaseButton type="submit">Odeslat</BaseButton>
        </div>
      </div>
    </form>
  );
}
