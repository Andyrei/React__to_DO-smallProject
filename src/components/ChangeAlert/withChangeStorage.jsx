import { useState } from 'react';

export function withChangeStorage(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [hasChanges, setHasChanges] = useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'ND__TODOS') {
        setHasChanges(true);
      }
    });

    return <WrappedComponent {...props} hasChanges={hasChanges} setHasChanges={setHasChanges} />;
  };
}
