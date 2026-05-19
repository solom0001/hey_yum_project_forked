"use client";

import { useFormStatus } from "react-dom";
import { submitMail, type FormState } from "@/app/action/action";
import InputField from "./FormComponents/InputField";
import SocialLinks from "./SocialLinks";
import SubmitButton from "./SubmitButton";
import Success from "./FormComponents/Success";
import Error from "./FormComponents/Error";
import { useActionState } from "react";

const initialState: FormState = {
  success: false,
  data: undefined,
  error: {},
};

const Footer = () => {
  const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return <SubmitButton text="Submit" color="--white" pending={pending} />;
  };
  const [state, formAction] = useActionState(submitMail, initialState);
  return (
    <div className="fullbleed bg-(--black) h-[750] md:h-[550] flex flex-col gap-[50] px-[1rem] py-[2rem] md:grid md:grid-cols-[1fr_2fr]">
      <div className="flex flex-col gap-[20] md:order-2">
        <p
          className="text-[24px]! text-(--white) font-bold text-center 
        md:text-left"
        >
          Get our latest news
        </p>
        <form action={formAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-[345] flex flex-col gap-2 mx-auto md:mx-0">
              <InputField
                dataInput="subscriptionMail"
                color="--white"
                placeholder="Email"
                defaultValue={state?.data?.subscriptionMail ?? ""}
              />
            </div>

            <div className="mx-auto md:mx-0">
              <SubmitBtn />
            </div>
          </div>
          <div className="mx-auto md:mx-0 grid">
            <Error<FormState> state={state} stateType="subscriptionMail" />
            <Success<FormState>
              state={state}
              text="Your mail has been added!"
            />
          </div>
        </form>
      </div>
      <div className="h-full flex flex-col gap-[55]">
        <div className="flex flex-col gap-[25]">
          <p className="text-[24px]! text-(--white) font-bold text-center mx-auto  md:mx-2 md:text-left">
            Get our latest news
          </p>
          <div className="mx-auto md:mx-2">
            <SocialLinks color="--white" gap={30} size={50} />
          </div>
        </div>
        <div className="flex flex-col gap-[15]">
          <p className="text-[24px]! text-(--white) font-bold text-center mx-auto  md:mx-2 md:text-left">
            Contact
          </p>
          <p className="text-(--white) text-center mx-auto md:mx-2 md:text-left">
            Heyyum @email.com
          </p>
        </div>
        <p className="text-(--white) mt-auto">
          © 2026 -Sweet Intentions ApS, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
