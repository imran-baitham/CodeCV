import { Listbox, Transition } from "@headlessui/react";
import { HiSelector } from "@react-icons/all-files/hi/HiSelector";
import { HiOutlineCheck } from "@react-icons/all-files/hi/HiOutlineCheck";
import { Fragment, useState } from "react";
import { ReactIcon, TAppIcons } from "../index";
import { useEffect } from "react";
import { classNames } from "../Utils/Utils";

export interface SelectInputProps {
  label?: string;
  className?: string;
  disabled?: boolean;
  options?: any[];
  link?: {
    text: string;
    click: () => void;
  };
  onLoad?: () => void;
  onChange?: (e: any) => void;
  defaultValue?: Record<string, unknown> | unknown;
}

export function SelectInput({
  label,
  link,
  options = [],
  className = "",
  disabled = false,
  onLoad,
  defaultValue,
  ...props
}: SelectInputProps) {
  const [selected, setSelected] = useState<Record<string, unknown>>(
    (defaultValue as Record<string, unknown>) || options.find((o) => o.selected)
  );

  useEffect(() => {
    onLoad?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!Array.isArray(options) || options.length === 0) return;
    if (!selected) setSelected(options[0]);
  }, [defaultValue, options, selected]);

  if (!selected) return null;

  const onChange = props.onChange
    ? (selected: unknown) => {
        setSelected(selected as Record<string, unknown>);
        props.onChange?.(selected);
      }
    : setSelected;

  return (
    <Listbox value={selected} onChange={onChange} disabled={disabled}>
      {({ open }) => (
        <div className={className}>
          {label && (
            <Listbox.Label className="block text-xs font-medium text-gray-400 mb-2">
              <span className="uppercase">{label}</span>
              {link && (
                <div
                  className="text-xs text-blue-500 cursor-pointer mr-2 float-right"
                  onClick={link.click}
                >
                  {link.text}
                </div>
              )}
            </Listbox.Label>
          )}
          <div
            className={classNames(
              "mt-0 relative",
              (disabled && "opacity-80") || ""
            )}
          >
            <Listbox.Button className="relative w-full dark:bg-zinc-700 bg-gray-100 rounded h-[48px] shadow-sm pl-3 pr-10 py-2 text-left cursor-default sm:text-sm">
              <span className="flex items-center">
                {selected["icon"] ? (
                  <div className="w-5 h-6 self-start">
                    <ReactIcon
                      className="flex-shrink-0 h-6 w-5 dark:text-gray-400 text-gray-400"
                      icon={selected["icon"] as TAppIcons}
                    />
                  </div>
                ) : (
                  <div className="w-0 h-6">&nbsp;</div>
                )}
                <span
                  className={classNames("ml-3 block truncate dark:text-gray-400 text-gray-400")}
                >
                  {selected["name"] as any}
                </span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <HiSelector
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute z-10 mt-1 w-full dark:bg-zinc-700 bg-gray-200 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {options.map((option: any) => (
                  <Listbox.Option
                    key={option.value || option.id || option.name}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white dark:bg-zinc-600 bg-gray-100" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9",
                        option.separator
                          ? "border-t border-gray-200 pt-2 mt-2"
                          : ""
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {option.icon && (
                            <div className="w-5 h-5">
                              <ReactIcon
                                className="flex-shrink-0 h-6 w-6 dark:text-gray-400 text-gray-600"
                                icon={option.icon}
                              />
                            </div>
                          )}
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate dark:text-gray-400 text-gray-600"
                            )}
                          >
                            {option.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "" : "",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <HiOutlineCheck
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
