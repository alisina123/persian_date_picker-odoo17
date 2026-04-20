/** @odoo-module **/

import { onWillStart } from "@odoo/owl";
import { loadBundle } from "@web/core/assets";
import { isPersianLocale } from "./compat";
import { patch } from "@web/core/utils/patch";
import { WebClient } from "@web/webclient/webclient";



patch(WebClient.prototype, {
    setup() {
        super.setup();
        onWillStart(async () => {
            if (isPersianLocale()) {
                await loadBundle("shamsi_calendar.calendar_persian");
            }
        });
    }
})