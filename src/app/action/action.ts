"use server";

import { z } from "zod";

/* ============================
            CONTACT US
============================ */

const contactSchema = z.object({
  userName: z
    .string()
    .min(3, { message: "Input must be longer then 3 characters long." })
    .max(20, { message: "Input must be less then 20 characters long." }),
  userMail: z.string().email("Please be sure the input is a valid Email"),
  comment: z
    .string()
    .min(10, {
      message: "Your Comment must be longer then 10 characters long.",
    })
    .max(300, {
      message: "Your Comment must be less then 300 characters long.",
    }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFormState = {
  success: boolean;
  data?: ContactInput;
  error?: Record<string, string[]>;
};

export async function submitContact(
  prevState: ContactFormState | undefined,
  formData: FormData,
): Promise<ContactFormState> {
  const rawData: ContactInput = {
    userName: formData.get("userName") as string,
    userMail: formData.get("userMail") as string,
    comment: formData.get("comment") as string,
  };

  const parsed = contactSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.flatten().fieldErrors,
      data: {
        userName: formData.get("userName") as string,
        userMail: formData.get("userMail") as string,
        comment: formData.get("comment") as string,
      },
    };
  }

  try {
    return {
      success: true,
      data: parsed.data,
      error: {},
    };
  } catch {
    return {
      success: false,
      error: { fetch: ["Network error occurred"] },
    };
  }
}

/* ============================
   NEWSLETTER SUBSCRIPTION
============================ */

const userMail = z.object({
  subscriptionMail: z
    .string()
    .email("Please be sure the input is a valid Email"),
});
type UserInput = z.infer<typeof userMail>;
export type FormState = {
  success: boolean;
  data?: UserInput;
  error?: Record<string, string[]>;
};
export async function submitMail(
  prevState: FormState | undefined,
  formData: FormData,
): Promise<FormState> {
  const rawData = {
    subscriptionMail: formData.get("subscriptionMail") ?? "",
  };
  const parsed = userMail.safeParse(rawData);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.flatten().fieldErrors,
      data: { subscriptionMail: formData.get("subscriptionMail") as string },
    };
  }
  try {
    return {
      success: true,
      data: parsed.data,
      error: {},
    };
  } catch {
    return {
      success: false,
      error: { fetch: ["Network error occurred"] },
    };
  }
}
