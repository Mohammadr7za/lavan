import localFont from "next/font/local";

export const iranSans = localFont({
    name: "iranSans",
    src: [
        {
            path: "FontsFree-Net-ir_sans.ttf",
            weight: '400',
        },
        {
            path: 'FontsFree-Net-ir_sans.ttf',
            weight: '700',
        },
    ],
    variable: '--font-iranSans'
});