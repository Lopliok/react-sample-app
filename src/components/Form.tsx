import { mergeStyleSets } from '@fluentui/react';
import { ToastIntent, useToastController } from '@fluentui/react-components';
import { FormEvent } from 'react';
import connection from '../eWayAPI/Connector';
import { TContact, TContactsResponse } from '../eWayAPI/ContactsResponse';
import { BaseButton } from './Button';
import { EmailField } from './EmailField';
import { ToastComponent } from './Toast';

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
  setData: (value: TContact) => void;
  toasterId?: string;
};

export default function EmailForm({ setData, toasterId }: Props) {
  const { dispatchToast } = useToastController(toasterId);
  const notify = (title: string, description: string, toastIntent: ToastIntent) =>
    dispatchToast(<ToastComponent title={title} description={description} />, {
      intent: toastIntent,
    });

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
        if (result.Data.length === 0) {
          notify('Kontakt nenalezen!', 'Zadejte jiný email!', 'error');
        } else {
          notify('Kontakt nalezen', 'Získány detaily kontaktu.', 'success');
          setData(result.Data?.[0]);
        }
      }
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get('email') as string;

    if (value) {
      searchContact(value);
    }
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
