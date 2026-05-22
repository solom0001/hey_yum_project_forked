"use client";

import { useFormStatus } from "react-dom";
import { submitMail, type FormState } from "@/app/action/action";
import InputField from "./FormComponents/InputField";
import SocialLinks from "./SocialLinks";
import SubmitButton from "./SubmitButton";
import Success from "./FormComponents/Success";
import Error from "./FormComponents/Error";
import { useActionState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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
    <div className="w-full bg-(--black) h-fit flex flex-col gap-[50] px-4 py-8 md:grid md:grid-cols-[1fr_2fr]">
      <div className="flex flex-col items-center gap-[20] md:order-2">
        <div className="flex flex-col gap-[20] max-w-fit md:min-w-[550px]">
          <p
            className="text-[24px]! text-(--white) font-bold text-center!
        md:text-left"
          >
            Get our latest news
          </p>
          <form action={formAction} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="max-w-[345] w-full flex flex-col gap-2 mx-auto md:mx-0">
                <InputField dataInput="subscriptionMail" color="--white" placeholder="Email" defaultValue={state?.data?.subscriptionMail ?? ""} />
              </div>

              <div className="mx-auto md:mx-0">
                <SubmitBtn />
              </div>
            </div>
            <div className="mx-auto md:mx-0 grid">
              <Error<FormState> state={state} stateType="subscriptionMail" />
              <Success<FormState> state={state} text="Your mail has been added!" />
            </div>
          </form>
        </div>
        <div className="w-full aspect-[16/9]">
          <DotLottieReact src="/assets/lottie/heyyum_footer_animation_v2.lottie" loop autoplay className="w-full h-full" />
        </div>
      </div>
      <div className="h-full flex flex-col gap-[55]">
        <div className="flex flex-col gap-[25]">
          <p className="text-[24px]! text-(--white) font-bold text-center mx-auto  md:mx-2 md:text-left">Find us on:</p>
          <div className="mx-auto md:mx-2">
            <SocialLinks color="--white" gap={30} size={50} />
          </div>
        </div>
        <div className="flex flex-col gap-[15]">
          <p className="text-[24px]! text-(--white) font-bold text-center mx-auto  md:mx-2 md:text-left">Contact</p>
          <p className="text-(--white) text-center mx-auto md:mx-2 md:text-left">Heyyum @email.com</p>
        </div>

        <div className="flex flex-col h-fit">
          <ul className="[&>*]:mt-2 text-(--white)  mx-auto  md:mx-2 md:text-left text-center">
            <li>
              <h3>COMPANY HEAD OFFICE:</h3>
            </li>
            <li>
              <p>Sweet Intentions ApS</p>
            </li>
            <li>
              <p>Lille Strandvej 24</p>
            </li>
            <li>
              <p>2900 Hellerup</p>
            </li>
            <li>
              <p>Danmark</p>
            </li>
            <li>
              <p>Company No(CVR): 37640115</p>
            </li>
          </ul>{" "}
        </div>
        <div className="flex flex-col gap-[15]">
          <h3 className="text-(--white) font-bold text-center mx-auto md:mx-2 md:text-left">Open Hours:</h3>
          <p className="text-(--white) text-center mx-auto md:mx-2 md:text-left">Monday-Friday:9:30am - 16:30 pm</p>
        </div>
        <p className=" text-[12px]! text-(--white) mt-auto">© 2026 -Sweet Intentions ApS, All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
