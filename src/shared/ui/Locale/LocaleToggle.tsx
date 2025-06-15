'use client';
import { usePathname } from "next/navigation";
import { Button } from "../shadcn/button";
import { useRouter } from "@/i18n/navigation";

export default function LocaleToggle() {
    const router = useRouter();
    const pathname = usePathname();

    const currentLocale = pathname.substring(1, 3);
    const nextLocale = currentLocale === 'en' ? 'ru' : 'en';

    const toggleLocale = () => {
        router.replace('/' + pathname.substring(3), { locale: nextLocale });
    };

    return (
        <Button
            onClick={toggleLocale}
            variant="ghost"
            className="flex items-center gap-2 p-2 rounded-xl"
            aria-label={`Switch to ${nextLocale} language`}
        >
            {nextLocale === 'ru' ? (
                <svg width="25" height="16" viewBox="0 0 51 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_1408)">
                        <path d="M50.3437 10.945H0.34375V0.887498C0.34375 0.411425 0.729784 0.0253906 1.20586 0.0253906H49.4816C49.9577 0.0253906 50.3438 0.411425 50.3438 0.887498L50.3437 10.945Z" fill="#F5F5F5" />
                        <path d="M50.3437 10.945H0.34375V21.8639H50.3437V10.945Z" fill="#41479B" />
                        <path d="M49.4815 32.7834H1.20586C0.729784 32.7834 0.34375 32.3974 0.34375 31.9213V21.8639H50.3437V31.9213C50.3437 32.3975 49.9576 32.7834 49.4815 32.7834Z" fill="#FF4B55" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1408">
                            <rect width="50" height="32.758" fill="white" transform="translate(0.34375 0.0253906)" />
                        </clipPath>
                    </defs>
                </svg>
            ) : (
                <svg width={25} height={16} viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5686 15.9999H0.431048C0.193015 15.9999 0 15.8114 0 15.5789V0.42107C0 0.188546 0.193015 0 0.431048 0H24.5686C24.8067 0 24.9997 0.188546 24.9997 0.42107V15.5789C24.9996 15.8114 24.8066 15.9999 24.5686 15.9999Z" fill="#41479B" />
                    <path d="M24.9997 0.42107C24.9997 0.188546 24.8067 0 24.5686 0H22.6402L14.6549 5.1106V0H10.3446V5.1106L2.35944 0H0.431048C0.193015 0 0 0.188546 0 0.42107V1.51004L6.85093 5.89469H0V10.1052H6.85093L0 14.4899V15.5789C0 15.8114 0.193015 15.9999 0.431048 15.9999H2.35949L10.3447 10.8893V15.9999H14.655V10.8893L22.6402 15.9999H24.5686C24.8066 15.9999 24.9996 15.8114 24.9997 15.5789L24.9997 14.4899L18.1488 10.1052H24.9996V5.89474H18.1487L24.9996 1.51004L24.9997 0.42107Z" fill="#F5F5F5" />
                    <path d="M24.9996 6.73683H13.7929V0H11.2067V6.73683H0V9.26311H11.2067V15.9999H13.7929V9.26311H24.9996V6.73683Z" fill="#FF4B55" />
                    <path d="M8.73771 10.1053L0.0123507 15.638C0.0428678 15.8413 0.214401 15.9999 0.431048 15.9999L1.02484 16L10.3211 10.1053L8.73771 10.1053Z" fill="#FF4B55" />
                    <path d="M16.9135 10.1053H15.3302L24.6129 15.9913C24.8293 15.9688 24.9997 15.7962 24.9997 15.5789L25 15.2327L16.9135 10.1053Z" fill="#FF4B55" />
                    <path d="M0.00031509 0.885912L7.89957 5.89477H9.48294L0.251435 0.0411012C0.103976 0.10802 0 0.251793 0 0.42107L0.00031509 0.885912Z" fill="#FF4B55" />
                    <path d="M16.2387 5.8948L24.985 0.348724C24.9487 0.152116 24.7804 0 24.5686 0L23.9515 0.000105735L14.6554 5.8948H16.2387Z" fill="#FF4B55" />
                </svg>
            )}
            <span className="font-medium ml-1">{nextLocale.toUpperCase()}</span>
        </Button>
    )
}