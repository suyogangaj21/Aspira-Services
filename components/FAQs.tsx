import React from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center  my-20 mt-28 mx-5">
      <p className="flex gap-2 items-center rounded-xm shadow-sm border-neutral-200 border font-jet-mono text-neutral-500 rounded-3xl p-2 px-4">
        <FaCircleQuestion className="" />
        FAQ's
      </p>
      <h2 className="font-medium text-4xl leading-[44px] text-center max-w-[600px]">
        Have Questions? We’re Here to Clear Your Doubts.{" "}
      </h2>
      <Accordion
        type="single"
        collapsible
        className="max-w-[960px] w-full my-14 text-base sm:text-lg gap-5 flex flex-col "
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            I have a Figma design, can you turn it into a live website?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely, we can develop your Figma project and bring it to life
            using custom Code. We'll transform your design into a fully
            functional website with all the interactive elements and features
            you need.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Can you help redesign my existing website or product?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! We can revamp your current design to make it more
            modern, user-friendly, and effective.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is your service refundable?</AccordionTrigger>
          <AccordionContent>
            Due to the custom nature of our work, all services are
            non-refundable. However, we’re committed to ensuring your
            satisfaction through clear communication and high-quality results.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How long does a typical project take?
          </AccordionTrigger>
          <AccordionContent>
            Timelines vary based on project scope, but we take pride in
            ourselves on fast turn-around while maintaining high quality.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            What if I'm not happy with the design?
          </AccordionTrigger>
          <AccordionContent>
            We work iteratively, so there's never a "big reveal", and we build
            in room for a couple of revisions at each step along the way. Our
            business runs on referrals and we strive to go above and beyond to
            make sure everybody is confident enough to refer us to their
            friends.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQs;
