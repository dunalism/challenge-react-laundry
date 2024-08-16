/* eslint-disable react/prop-types */
import { Input } from "@nextui-org/input";
import EyeFilledIcon, { EyeSlashFilledIcon } from "../assets/EyeFilledIcon";
import { useState } from "react";
import PwIcon, { UsernameIcon } from "../assets/LoginIcon";

export const InputUsrStyled = ({ field, isInvalid, errorMessage }) => {
  return (
    <Input
      {...field}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      variant="bordered"
      startContent={<UsernameIcon className="ml-[-6px] h-4 w-4" />}
      size="lg"
      placeholder="Username"
      color="primary"
    />
  );
};

const InputPWStyled = ({ field, isInvalid, errorMessage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <Input
      {...field}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      variant="bordered"
      startContent={<PwIcon className="ml-[-7px] h-[1.1rem] w-[1.1rem]" />}
      size="lg"
      placeholder="Password"
      color="primary"
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
          aria-label="toggle password visibility"
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
};

export default InputPWStyled;
