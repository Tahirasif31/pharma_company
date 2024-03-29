"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { supabase } from "./../app/supabase";
import styles from "./GetQuote.module.css";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function GetQuote() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const [message, setMessage] = useState("");
  const [submited, setSubmited] = useState(false);
  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();

    if (firstName.length < 3) {
      setMessage("Enter Correct Name");
      return;
    } else if (email.length < 5) {
      setMessage("Enter valid Email");
      return;
    } else if (phone.length < 8) {
      setMessage("Enter valid Phone Number");
      return;
    } else if (desc.length < 8) {
      setMessage("Enter your message");
      return;
    } else {
      const { data, error } = await supabase
        .from("queries")
        .insert([{ firstName, lastName, email, phone, desc }])
        .select();
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDesc("");
      setMessage("Your Message has been sent successfully"); // Fixed typo in "succedd"
      setSubmited(true);
    }
    console.log(message); // It's better to use `console.log` inside the `else` block if you want to log the updated value.
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-lg md:rounded-2xl p-4 md:p-8 shadow-input bg-black border border-[#FFFFFF]/[0.16]">
      <h2 className="font-bold text-xl text-neutral-200">Submit Your Query</h2>
      <p className="text-sm max-w-sm mt-2 text-neutral-300">
        Complete the form below to receive a customized pharmaceutical quote
        tailored to your requirements.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-red-500"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="+92 33 564412"
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            placeholder="your message"
            type="text"
            className="h-[150px]"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </LabelInputContainer>
        <p className="pb-2 text-r">{message}</p>
        <button
          className="bg-gradient-to-br relative group/btn from-black to-neutral-600 blockbg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
