# -*- coding: utf-8 -*-
# Copyright (C) 2025-Today: Mcit Odoo Community
# License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl.html).
{
    'name': "Hijri Shamsi Calendar",
    'summary': """Hijri Calendar""",
    'description': """Hijri Calendar include views, form, list, calendar, chat, activities, etc.""",
    'author': "Mohammad Hameed Masjedi",
    'website': "https:mcit.gov.af",
    "category": "Calender",
    "installable": True,
    "application": True,
    "auto_install": False,
    'images': ['static/description/theme_screenshot.jpg'],
    'version': '1.0.3',
    'license': 'LGPL-3',
    'depends': ['base', 'web',],
    'assets': {
        'web.assets_backend': [
            'shamsi_calendar/static/src/js/main.js',
            'shamsi_calendar/static/src/js/persian-date.js',
            'shamsi_calendar/static/src/js/farvardin.js',
            'shamsi_calendar/static/src/js/compat.js',
            'shamsi_calendar/static/src/js/datetimepicker_service.js',
            'shamsi_calendar/static/src/js/loader.js',
        ],
        'shamsi_calendar.calendar_persian':[
            'shamsi_calendar/static/src/js/format_utils.js',
            'shamsi_calendar/static/src/js/list.js',
            'shamsi_calendar/static/src/js/datetime_field.js',
            'shamsi_calendar/static/src/js/jdatetime.js',
            'shamsi_calendar/static/src/js/calendar_hook.js',
            'shamsi_calendar/static/src/js/jfullcalendar.js',
        ]
    }
}