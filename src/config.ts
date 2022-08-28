// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import IconA1 from './components/icons/IconA1.astro';
import IconLife from './components/icons/IconLife.astro';
import IconMail from './components/icons/IconMail.astro';
import IconWhatsapp from './components/icons/IconWhatsapp.astro';
import IconTelegram from './components/icons/IconTelegram.astro';
import IconViber from './components/icons/IconViber.astro';
import IconVk from './components/icons/IconVk.astro';

export const SITE_TITLE_1 = 'Усадьба';
export const SITE_TITLE_2 = 'На реке Бобр';
export const TITLE = 'Усадьба На реке Бобр, Крупки, Гостиница, Отдых летом';
export const DESCRIPTION = 'Тихое место, отдых на природе. Все удобства, сауна, баня, мини-бассейн камин, печь барбекю. C комфортом до 15 человек. 15 минут озеро Селява. Квартира на сутки';
export const KEYWORDS = 'Усадьба На реке Бобр, Крупки, гостиница, трасса М1, отдых, остановка, на ночь, агроусадьба, агротуризм, квартира, на сутки, отдых летом, сауна, баня';

export const ROOT_PATH = '/narekebobr/';

export const IMG_IDX = [
    '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
];

interface Link {
    Icon: any;
    link: string;
    title: string;
    text: string;
}

const phoneLife: Link = {
    Icon: IconLife,
    link: 'tel:+375256277120',
    title: 'Позвонить оператор Life',
    text: '+375 25 627-71-20',
};
const phoneA1: Link = {
    Icon: IconA1,
    link: 'tel:+375447657861',
    title: 'Позвонить оператор A1',
    text: '+375 44 765-78-61',
};
const email: Link = {
    Icon: IconMail,
    link: 'mailto:belare@list.ru',
    title: 'Написать на почту',
    text: 'belare@list.ru',
};
const whatsApp: Link = {
    Icon: IconWhatsapp,
    link: 'whatsapp://send?phone=375447657861',
    title: 'Отправить сообщение в WhatsApp',
    text: 'WhatsApp',
};
const telegram: Link = {
    Icon: IconTelegram,
    link: 'tg://resolve?domain=narekebobr',
    title: 'Отправить сообщение в Telegram',
    text: 'Telegram',
};
const viber: Link = {
    Icon: IconViber,
    link: 'viber://chat?number=375447657861',
    title: 'Отправить сообщение в Viber',
    text: 'Viber',
};
const vk: Link = {
    Icon: IconVk,
    link: 'vk://vk.com/narekebobr',
    title: 'Отправить сообщение в VK',
    text: 'VK',
};

export const CONTACTS = [phoneLife, phoneA1, email, whatsApp, telegram, viber, vk];

export const LD_JSON = JSON.stringify({
    "@context": "http://schema.org/",
    "@type": "Organization",
    "name": "Усадьба «На реке Бобр», Крупки, Гостиница, Отдых летом",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Набережная, 10",
        "addressLocality": "Крупки",
        "addressRegion": "Минская область",
        "postalCode": "222001"
    },
    "telephone": "+375447657861"
});
