"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "@/app/action/action";
import { useFormStatus } from "react-dom";
import InputField from "../utilityComponents/FormComponents/InputField";
import Error from "../utilityComponents/FormComponents/Error";
import Success from "../utilityComponents/FormComponents/Success";
import Inputbox from "../utilityComponents/FormComponents/InputBox";
import SubmitButton from "../utilityComponents/SubmitButton";

const initialState: ContactFormState = {
  success: false,
  data: undefined,
  error: {},
};

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return <SubmitButton text="Submit" color="--black" pending={pending} />;
};

const ContactForm = () => {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <form
      action={formAction}
      className="grid grid-cols-[1fr_minmax(0,704px)_1fr] gap-8 py-[40] sm:py-[90] *:col-[2/3] "
    >
      <h2>Contact us here</h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 w-full">
          <Error<ContactFormState> state={state} stateType="userName" />
          <InputField<ContactFormState>
            state={state}
            dataInput="userName"
            placeholder="Your Name"
            defaultValue={state?.data?.userName ?? ""}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Error<ContactFormState> state={state} stateType="userMail" />
          <InputField<ContactFormState>
            state={state}
            dataInput="userMail"
            placeholder="Your Mail"
            defaultValue={state?.data?.userMail ?? ""}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Error<ContactFormState> state={state} stateType="comment" />
          <Inputbox<ContactFormState>
            color="--black"
            state={state}
            dataInput="comment"
            placeholder="Your Comment"
            defaultValue={state?.data?.comment ?? ""}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Success<ContactFormState>
          state={state}
          text="Your message has been sent"
        />
        <div className="ml-auto">
          <SubmitBtn />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
