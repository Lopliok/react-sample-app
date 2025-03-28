import { mergeStyleSets } from '@fluentui/react';
import { Toaster, useId } from '@fluentui/react-components';
import { useState } from 'react';
import EmailForm from './components/Form';
import { TContact } from './eWayAPI/ContactsResponse';
import { ContactCard } from './components/Cards';

const css = mergeStyleSets({
  wrapper: {
    display: 'grid',
    placeItems: 'center',
    minHeight: '100vh',
  },
});

const App = () => {
  const toasterId = useId('toaster');

  const [loadedData, setLoadedData] = useState<TContact>();

  return (
    <div className={css.wrapper}>
      <Toaster toasterId={toasterId} />
      {!loadedData ? (
        <EmailForm setData={setLoadedData} toasterId={toasterId} />
      ) : (
        <ContactCard data={loadedData} close={() => setLoadedData(undefined)} />
      )}
    </div>
  );
};

export default App;
