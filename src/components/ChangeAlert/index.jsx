import { withChangeStorage } from './withChangeStorage';
import './changeAlert.css';

function ChangeAlert({ hasChanges, setHasChanges, sincronizeTodos }) {
  return (
    <>
      {hasChanges && (
        <div className='alerta'>
          <h3>HEY, WON'T YOU LIKE TO SAVE BEFORE?</h3>
          <button
            onClick={() => {
              setHasChanges(false);
              sincronizeTodos();
            }}>
            REFRESH THE PAGE
          </button>
        </div>
      )}
    </>
  );
}

const ChangeAlertWithStorage = withChangeStorage(ChangeAlert);

export { ChangeAlertWithStorage };
