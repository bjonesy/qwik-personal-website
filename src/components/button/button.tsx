import { PropFunction, Slot, component$ } from "@builder.io/qwik";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "white"
  | "success"
  | "warning"
  | "error";

type ButtonSize = "xs" | "small" | "medium" | "large" | "xl";

type ButtonType = "submit" | "reset" | "button";

interface ButtonProps {
  onClick$?: PropFunction<() => void>;
  size?: ButtonSize;
  type?: ButtonType;
  variant?: ButtonVariant;
}

export default component$((props: ButtonProps) => {
  const { onClick$, size, variant } = props;

  const getButtonVariant = (type: ButtonVariant) => {
    switch (type) {
      case "primary":
        return "border-transparent bg-primary-600 text-white hover:bg-primary-700 shadow-sm";
      case "secondary":
        return "border-transparent bg-primary-100 text-primary-700 hover:bg-primary-200";
      case "white":
        return "border-gray-300 bg-white text-gray-700 hover:bg-gray-50";
      default:
        return "border-transparent bg-primary-600 text-white hover:bg-primary-700 shadow-sm";
    }
  };

  const getButtonSize = (size: ButtonSize) => {
    switch (size) {
      case "xs":
        return "rounded px-2.5 py-1.5 text-xs";
      case "small":
        return "rounded-md px-3 py-2 text-sm leading-4 ";
      case "medium":
        return "rounded-md px-4 py-2 text-sm";
      case "large":
        return "rounded-md px-4 py-2 text-base";
      case "xl":
        return "rounded-md px-6 py-3 text-base";
      default:
        return "rounded-md px-4 py-2 text-base";
    }
  };

  const buttonVariantClasses = getButtonVariant(variant as ButtonVariant);
  const buttonSizeClasses = getButtonSize(size as ButtonSize);

  return (
    // eslint-disable-next-line qwik/valid-lexical-scope
    <button
      class={`${buttonSizeClasses} inline-flex items-center border ${buttonVariantClasses} font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
      type="button"
      // eslint-disable-next-line qwik/valid-lexical-scope
      onClick$={onClick$}
    >
      <Slot name="leftIcon" />
      <Slot />
      <Slot name="rightIcon" />
    </button>
  );
});
