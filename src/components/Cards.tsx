import {
  Button,
  Caption1,
  Card,
  CardHeader,
  CardProps,
  makeStyles,
  mergeClasses,
  Text,
  tokens,
} from '@fluentui/react-components';
import { Dismiss12Filled } from '@fluentui/react-icons';
import { TContact } from '../eWayAPI/ContactsResponse';

const useStyles = makeStyles({
  card: {
    width: '480px',
    maxWidth: '100%',
    height: 'fit-content',
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  logo: {
    borderRadius: '4px',
    width: '48px',
    height: '48px',
  },

  text: { margin: '0' },
});

type Props = CardProps & {
  data: TContact;
  close: () => void;
};

export const ContactCard = ({ className, close, ...props }: Props) => {
  const styles = useStyles();

  const {
    ProfilePicture,
    FileAs,
    Email1Address,
    BusinessAddressStreet,
    BusinessAddressCity,
    BusinessAddressPostalCode,
    BusinessAddressState,
    TelephoneNumber1,
  } = props.data;

  return (
    <Card {...props} className={mergeClasses(className, styles.card)}>
      <CardHeader
        image={
          <img
            className={styles.logo}
            src={`data:image/png;base64, ${ProfilePicture}`}
            alt="App name logo"
          />
        }
        header={<Text weight="semibold">{FileAs}</Text>}
        description={<Caption1 className={styles.caption}>{Email1Address}</Caption1>}
        action={
          <Button
            appearance="primary"
            onClick={close}
            icon={<Dismiss12Filled />}
            aria-label="More options"
          />
        }
      />

      <p className={styles.text}>
        <strong>Address:</strong>
        {` ${BusinessAddressStreet}, ${BusinessAddressCity}, ${BusinessAddressPostalCode}, ${BusinessAddressState}`}
      </p>
      <p className={styles.text}>
        <strong>Telephone:</strong>
        {` ${TelephoneNumber1}`}
      </p>
    </Card>
  );
};
