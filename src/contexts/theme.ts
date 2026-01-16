import IconSun from "/images/icon-sun.svg";
import MoonIcon from "/images/icon-moon.svg";

export const themeConfig = {
    light: {
        name: 'light',
        layout: {
            heroClass: "theme-light",
            backgroundColor: 'bg-light-purple-300',
            textColor: 'text-light-navy-850',
        },
        todo: {
            backgroundColor: "bg-light-gray-50",
            borderColor: "border-light-purple-300",
            textColor: "text-light-navy-850",
            textFooter:"text-light-gray-600",
            textHoverFooter:"hover:text-light-navy-850",
        },
        icon: MoonIcon
    },

    dark: {
        name: 'dark',
        layout: {
            heroClass: "theme-dark",
            backgroundColor: 'bg-dark-navy-950',
            textColor: 'text-dark-gray-600',
        },
        todo: {
            backgroundColor: "bg-dark-navy-900",
            borderColor: "border-dark-purple-800",
            textColor: "text-dark-gray-600",
            textFooter: "text-dark-purple-600",
            textHoverFooter:"hover:text-dark-purple-100",
        },
        icon: IconSun
    }
}