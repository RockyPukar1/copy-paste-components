import { useCallback, useEffect } from "react";
import { useBlocker } from "react-router-dom";
import { ConfirmOptions } from "../shared/interfaces/confirmOptions.interface";
import { useConfirm } from "./usesConfirm";

export function usePrompt({
  isDirty = false,
  title = "You have unsaved changes!",
  subtitle = "Are you sure you want to leave?",
  confirmText = "Leave",
  cancelText = "Stay",
  onConfirm,
  onCancel,
  type = "warning",
}: ConfirmOptions & {
  isDirty?: boolean;
}) {
  const blocker = useBlocker(isDirty);
  const { show } = useConfirm();
  const confirm = useCallback(() => {
    if (!isDirty) return Promise.resolve(true);
    return new Promise((resolve) => {
      show({
        title,
        subtitle,
        confirmText,
        cancelText,
        type,
        onConfirm: () => {
          resolve(true);
          onConfirm?.();
        },
        onCancel: () => {
          resolve(false);
          onCancel?.();
        },
      });
    });
  }, [
    cancelText,
    confirmText,
    isDirty,
    onCancel,
    onConfirm,
    show,
    subtitle,
    title,
    type,
  ]);

  useEffect(() => {
    if (blocker.state === "blocked") {
      confirm().then((result) => {
        if (result) blocker.proceed();
        else blocker.reset();
      });
    }
  }, [blocker, confirm]);

  useEffect(() => {
    if (isDirty) {
      window.onbeforeunload = () => subtitle;
    }
    return () => {
      window.onbeforeunload = null;
    };
  }, [isDirty, subtitle]);

  return {
    confirm,
  };
}
