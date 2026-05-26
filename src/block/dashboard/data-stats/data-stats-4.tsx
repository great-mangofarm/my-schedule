import { Progress } from '@/components/core/progress';
import { InfoCircle, MenuMeatballs1 } from '@tailgrids/icons';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/core/dropdown';

const GmailIcon = () => (
  <svg
    width="33"
    height="26"
    viewBox="0 0 33 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.5768 2.28467L16.5961 9.2933L7.41016 2.28467V2.28656L7.42125 2.29603V12.11L16.4926 19.2702L25.5768 12.3866V2.28467Z"
      fill="#EA4335"
    />
    <path
      d="M27.9351 0.579578L25.5767 2.28438V12.3863L32.998 6.68845V3.25612C32.998 3.25612 32.0971 -1.64614 27.9351 0.579578Z"
      fill="#FBBC05"
    />
    <path
      d="M25.5767 12.3865V25.4889H31.2647C31.2647 25.4889 32.8833 25.3222 32.9998 23.4772V6.68872L25.5767 12.3865Z"
      fill="#34A853"
    />
    <path
      d="M7.42168 25.4998V12.1096L7.41016 12.1001L7.42168 25.4998Z"
      fill="#C5221F"
    />
    <path
      d="M7.4102 2.28607L5.06469 0.590735C0.902691 -1.63498 0 3.26538 0 3.26538V6.69771L7.4102 12.1V2.28607Z"
      fill="#C5221F"
    />
    <path
      d="M7.41016 2.28638V12.1004L7.42168 12.1098V2.29585L7.41016 2.28638Z"
      fill="#C5221F"
    />
    <path
      d="M0 6.69995V23.4885C0.114686 25.3353 1.73509 25.5001 1.73509 25.5001H7.42315L7.4102 12.1004L0 6.69995Z"
      fill="#4285F4"
    />
  </svg>
);

export default function DataStats4() {
  return (
    <div className="bg-background-soft-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="bg-background-50 w-full max-w-[345px] rounded-2xl p-5">
        <div className="flex items-start justify-between">
          <div className="mb-7 flex items-center">
            <div>
              <GmailIcon />
            </div>
            <div className="ml-3">
              <h3 className="text-title-50 text-base leading-6 font-semibold">
                Gmail
              </h3>
              <p className="text-text-100 text-xs leading-4">
                Email Made Simple
              </p>
            </div>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-title-50 text-text-200 inline-flex h-6 w-6 cursor-pointer items-center justify-center outline-none">
                <MenuMeatballs1 />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                placement="bottom end"
                className="bg-background-50 border-base-100 min-w-[120px] rounded-lg border p-1 shadow-md"
              >
                <DropdownMenuItem className="text-text-100 hover:bg-background-soft-100 hover:text-title-50 cursor-pointer rounded-md px-3 py-1.5 text-sm">
                  View Details
                </DropdownMenuItem>
                <DropdownMenuItem className="text-text-100 hover:bg-background-soft-100 hover:text-title-50 cursor-pointer rounded-md px-3 py-1.5 text-sm">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div>
          <div>
            <span className="text-title-50 mb-1.5 inline-block font-medium">
              85% of 15 GB used
            </span>
            <Progress progress={85} className="mb-2.5 max-w-full" />
            <div className="text-text-100 flex items-center gap-1.5 text-sm">
              <InfoCircle className="size-5 shrink-0" />
              13.6GB already used
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
