/** @odoo-module **/

import { localization } from "@web/core/l10n/localization";

const getLuxon = () => globalThis.luxon;

export function getDateTimeClass() {
    return getLuxon()?.DateTime || null;
}

export function isPersianLocale() {
    const locale = localization?.code || getDateTimeClass()?.now?.().locale || "";
    return ["fa", "fa-IR"].includes(locale) || locale.startsWith("fa-");
}

export function getFarvardin() {
    return globalThis.farvardin || null;
}
