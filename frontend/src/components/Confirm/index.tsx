import clsx from "clsx";
import { ConfirmOptions } from "../../shared/interfaces/confirmOptions.interface";
import { ErrorIcon } from "../../assets/svgs/ErrorIcon";
import { InfoIcon } from "../../assets/svgs/InfoIcon";
import { SuccessIcon } from "../../assets/svgs/SuccessIcon";
import { WarningIcon } from "../../assets/svgs/WarningIcon";
import { CloseIcon } from "../../assets/svgs/CloseIcon";

interface IConfirmProps extends ConfirmOptions {
  open: boolean;
}

type ColorValues = {
  bgColor: string;
  textColor: string;
  iconColor: string;
};
type NotOptional<T> = T extends undefined ? never : T;
const colorMap: Record<NotOptional<IConfirmProps["type"]>, ColorValues> = {
  error: {
    bgColor: "#FDEDED",
    iconColor: "#D92D20",
    textColor: "#5F2120",
  },
  info: {
    bgColor: "#EDF7ED",
    iconColor: "#026AA2",
    textColor: "#026AA2",
  },
  success: {
    bgColor: "#EDF7ED",
    iconColor: "#2E7D32",
    textColor: "#1E4620",
  },
  warning: {
    bgColor: "#FFF4E5",
    iconColor: "#ED6C02",
    textColor: "#663C00",
  },
};
const iconMap: Record<NotOptional<IConfirmProps['type']>, React.ReactNode> = {
  error: <ErrorIcon />,
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
};

export function Confirm({
  open,
  title,
  subtitle,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
  type = "warning",
}: IConfirmProps) {
  return (
    <dialog
      className={`absolute top-0 left-0 z-50 flex-col items-center justify-center w-full h-full overflow-auto bg-black bg-opacity-50 ${
        open ? 'flex' : 'hidden'
      }`}
    >
      <div
        className="flex flex-col items-center justify-between w-10/12 p-4 rounded-lg lg:w-5/12 h-48"
        style={{
          background: colorMap[type].bgColor,
        }}
      >
        <header
          className="flex items-center justify-between w-full pb-2 border-b-2"
          style={{
            color: colorMap[type].textColor,
            borderColor: colorMap[type].textColor,
          }}
        >
          <div className="flex flex-row items-center justify-center gap-x-4">
            {iconMap[type]}
            <label className="text-lg font-bold ">{title}</label>
          </div>
          <CloseIcon className="cursor-pointer" onClick={onCancel} />
        </header>
        <div className="flex items-center justify-center m-auto rounded-lg">
          <label
            className="text-sm text-center"
            style={{
              color: colorMap[type].textColor,
            }}
          >
            {subtitle}
          </label>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <button
            onClick={onCancel}
            style={{
              background: 'gray',
            }}
            type="button"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            style={{
              background: colorMap[type].iconColor,
            }}
            type="button"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </dialog>
  );
}
