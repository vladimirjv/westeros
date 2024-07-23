import { fetchSwordMember } from "@/lib/api";
import { JSX, SVGProps } from "react";


function CircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
function SkullIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <path d="M8 20v2h8v-2" />
      <path d="m12.5 17-.5-1-.5 1h1z" />
      <path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20" />
    </svg>
  )
}

const SwordMember =  async ({url}: {url: string}) => {
  const data = await fetchSwordMember(url);
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12">
          <UserIcon className="w-6 h-6 text-muted-foreground" />
        </div>
        <div className="grid">
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">{data.name}
          </h3>
          {/* <span>{data.url.split("/").at(-1)}</span> */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            
            {!!data.died && <div className="flex items-center gap-1">
              <SkullIcon className="w-2.5 h-2.5" />
              <span>Deceased</span>
            </div>}
            {!data.died && !!data.born && <div className="flex items-center gap-1">
              <CircleIcon className="w-2.5 h-2.5 fill-green-500" />
              <span>Not Deceased</span>
            </div>}
            {!data.died && !data.born && <div className="flex items-center gap-1">
              <CircleIcon className="w-2.5 h-2.5 fill-gray-300" />
              <span>Unkonw</span>
            </div>}
            <span>{data.died}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export { SwordMember };