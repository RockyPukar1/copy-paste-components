import { createContext, useCallback, useMemo, useState } from "react";
import {
  ConfirmOptions,
  IConfirmContext,
  Nullable,
} from "../shared/interfaces/confirmOptions.interface";
import { Confirm } from "../components/Confirm";

export const ConfirmContext = createContext<Nullable<IConfirmContext>>(null);

interface IConfirmProviderProps {
  children: React.ReactNode;
}

export function ConfirmProvider({ children }: IConfirmProviderProps) {
  const [confirm, setConfirm] = useState<Nullable<ConfirmOptions>>(null);
  const [open, toggle] = useState(false);
  const show = useCallback(
    (confirmOptions: Nullable<ConfirmOptions>) => {
      setConfirm(confirmOptions);
      toggle(true);
    },
    [toggle]
  );

  const onConfirm = () => {
    confirm?.onConfirm?.();
    toggle(false);
  };

  const onCancel = () => {
    confirm?.onCancel?.();
  };

  const value = useMemo(() => ({ show }), [show]);

  return (
    <ConfirmContext.Provider value={value}>
      <Confirm
        type="warning"
        {...confirm}
        onCancel={onCancel}
        onConfirm={onConfirm}
        open={open}
      />
      {children}
    </ConfirmContext.Provider>
  );
}
