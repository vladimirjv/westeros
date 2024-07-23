import { SwordMember } from "@/components/SwordMember";
import { AccordionContent } from "@/components/ui/accordion";
import { HouseIceAndFire } from "@/types/Houses";
import { AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { Card, CardContent } from "./ui/card";

type HouseCardProps = {
  house: HouseIceAndFire;
};

export default function HouseCard({ house }: HouseCardProps) {
  return (
    <Card className="border-none my-4 w-full group">
      <CardContent className="pt-6 flex flex-1 w-full">
        <AccordionItem
          value={house.url}
          className="flex flex-col w-full"
        >
          <AccordionTrigger
            className="flex flex-1 flex-col space-y-2 group/trigger"
          >
            <div className="flex flex-1 w-full items-center justify-between">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold">{house.name}</h2>
              </div>
              <p className="text-lg">{house.region}</p>
            </div>
            {house.words !== "" && (
              <blockquote className="flex flex-col mt-6 border-l-2 pl-6 italic items-start">
                <p className="leading-7 [&:not(:first-child)]:mt-6 font-bold">
                  Words
                </p>
                {house.words}
              </blockquote>
            )}
            <div className="flex flex-1 w-full justify-between">
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                <span className="font-bold mr-2">Sworn Members: </span>
                {house.swornMembers.length}
              </p>
              <p className="group-hover:text-muted-foreground/85 text-sm text-muted-foreground group-data-[state=open]/trigger:hidden">
                (click to show below)
              </p>
            </div>
          </AccordionTrigger>
            <AccordionContent className="mt-2 pb-0 space-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {house.swornMembers.map((member) => (
                <SwordMember key={member} url={member as string} />
              ))}
              {house.swornMembers.length === 0 && 
                <p className="text-muted-foreground">This house has no sworn members</p>
              }
            </AccordionContent>
        </AccordionItem>
      </CardContent>
    </Card>
  );
}
