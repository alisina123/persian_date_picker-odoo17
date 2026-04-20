/** @odoo-module **/

import { localization } from "@web/core/l10n/localization";

const getLuxon = () => globalThis.luxon;

export function getDateTimeClass() {
    return getLuxon()?.DateTime || null;
}

function normalizeLocale(locale) {
    return String(locale || "")
        .trim()
        .replace("_", "-")
        .toLowerCase();
}

export function getCurrentLocale() {
    return (
        localization?.code ||
        localization?.languageCode ||
        document?.documentElement?.lang ||
        navigator?.language ||
        getDateTimeClass()?.now?.().locale ||
        ""
    );
}

export function isPersianLocale() {
    const normalizedLocale = normalizeLocale(getCurrentLocale());
    return normalizedLocale === "fa" || normalizedLocale.startsWith("fa-");
}

export function getFarvardin() {
    return globalThis.farvardin || null;
}
