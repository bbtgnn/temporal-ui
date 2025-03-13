/// <reference types="svelte" />
export declare const TIME_UNIT_OPTIONS: string[];
export declare const timeFormat: Pick<import("svelte/store").Writable<"UTC" | "local" | "Greenwich Mean Time" | "East Africa Time" | "Central European Standard Time" | "West Africa Standard Time" | "Central Africa Time" | "Eastern European Summer Time" | "GMT+01:00" | "Central European Summer Time" | "South Africa Standard Time" | "Eastern European Standard Time" | "Hawaii-Aleutian Daylight Time" | "Alaska Daylight Time" | "Atlantic Standard Time" | "Brasilia Standard Time" | "Argentina Standard Time" | "Paraguay Standard Time" | "Central Standard Time" | "Amazon Standard Time" | "Colombia Standard Time" | "Mountain Daylight Time" | "Eastern Standard Time" | "Venezuela Time" | "French Guiana Time" | "Central Daylight Time" | "Mountain Standard Time" | "Yukon Time" | "Eastern Daylight Time" | "Acre Standard Time" | "Atlantic Daylight Time" | "West Greenland Summer Time" | "Ecuador Time" | "Guyana Time" | "Cuba Daylight Time" | "Mexican Pacific Standard Time" | "Bolivia Time" | "Peru Standard Time" | "Pacific Daylight Time" | "St. Pierre & Miquelon Daylight Time" | "Uruguay Standard Time" | "GMT-04:00" | "Fernando de Noronha Standard Time" | "Suriname Time" | "GMT-03:00" | "Northwest Mexico Daylight Time" | "Chile Standard Time" | "East Greenland Summer Time" | "Newfoundland Daylight Time" | "Casey Time" | "Davis Time" | "Dumont-d’Urville Time" | "Australian Eastern Standard Time" | "Mawson Time" | "New Zealand Standard Time" | "Rothera Time" | "Syowa Time" | "GMT+02:00" | "Vostok Time" | "Arabian Standard Time" | "East Kazakhstan Time" | "GMT+03:00" | "Anadyr Standard Time" | "West Kazakhstan Time" | "Turkmenistan Standard Time" | "Azerbaijan Standard Time" | "Indochina Time" | "GMT+07:00" | "Kyrgyzstan Time" | "Brunei Darussalam Time" | "India Standard Time" | "Yakutsk Standard Time" | "Ulaanbaatar Standard Time" | "Bangladesh Standard Time" | "East Timor Time" | "Gulf Standard Time" | "Tajikistan Time" | "Hong Kong Standard Time" | "Hovd Standard Time" | "Irkutsk Standard Time" | "Western Indonesia Time" | "Eastern Indonesia Time" | "Israel Daylight Time" | "Afghanistan Time" | "Petropavlovsk-Kamchatski Standard Time" | "Pakistan Standard Time" | "Nepal Time" | "Krasnoyarsk Standard Time" | "Malaysia Time" | "China Standard Time" | "Magadan Standard Time" | "Central Indonesia Time" | "Philippine Standard Time" | "Novosibirsk Standard Time" | "Omsk Standard Time" | "Korean Standard Time" | "Myanmar Time" | "Sakhalin Standard Time" | "Uzbekistan Standard Time" | "Singapore Standard Time" | "GMT+11:00" | "Taipei Standard Time" | "Georgia Standard Time" | "Iran Standard Time" | "Bhutan Time" | "Japan Standard Time" | "GMT+06:00" | "Vladivostok Standard Time" | "Yekaterinburg Standard Time" | "Armenia Standard Time" | "Azores Summer Time" | "Western European Summer Time" | "Cape Verde Standard Time" | "South Georgia Time" | "Falkland Islands Standard Time" | "Australian Central Standard Time" | "Australian Central Western Standard Time" | "Lord Howe Standard Time" | "Australian Western Standard Time" | "GMT+04:00" | "Irish Standard Time" | "British Summer Time" | "Moscow Standard Time" | "Samara Standard Time" | "Volgograd Standard Time" | "Indian Ocean Time" | "Christmas Island Time" | "Cocos Islands Time" | "French Southern & Antarctic Time" | "Seychelles Time" | "Maldives Time" | "Mauritius Standard Time" | "Réunion Time" | "Apia Standard Time" | "Chatham Standard Time" | "Easter Island Standard Time" | "Vanuatu Standard Time" | "Phoenix Islands Time" | "Tokelau Time" | "Fiji Standard Time" | "Tuvalu Time" | "Galapagos Time" | "Gambier Time" | "Solomon Islands Time" | "Chamorro Standard Time" | "Hawaii-Aleutian Standard Time" | "Line Islands Time" | "Kosrae Time" | "Marshall Islands Time" | "Marquesas Time" | "Samoa Standard Time" | "Nauru Time" | "Niue Time" | "Norfolk Island Standard Time" | "New Caledonia Standard Time" | "Palau Time" | "Pitcairn Time" | "Ponape Time" | "Papua New Guinea Time" | "Cook Islands Standard Time" | "Tahiti Time" | "Gilbert Islands Time" | "Tonga Standard Time" | "Chuuk Time" | "Wake Island Time" | "Wallis & Futuna Time">, "update" | "subscribe" | "set">;
export declare const timeFormatType: Pick<import("svelte/store").Writable<"relative" | "absolute">, "update" | "subscribe" | "set">;
export declare const relativeTime: Pick<import("svelte/store").Writable<boolean>, "update" | "subscribe" | "set">;
export declare const relativeTimeDuration: Pick<import("svelte/store").Writable<string>, "update" | "subscribe" | "set">;
export declare const relativeTimeUnit: Pick<import("svelte/store").Writable<string>, "update" | "subscribe" | "set">;
export declare const startDate: Pick<import("svelte/store").Writable<Date>, "update" | "subscribe" | "set">;
export declare const startHour: Pick<import("svelte/store").Writable<string>, "update" | "subscribe" | "set">;
export declare const startMinute: Pick<import("svelte/store").Writable<string>, "update" | "subscribe" | "set">;
export declare const startSecond: Pick<import("svelte/store").Writable<string>, "update" | "subscribe" | "set">;
export declare const endDate: Pick<import("svelte/store").Writable<Date>, "update" | "subscribe" | "set">;
export declare const endHour: Pick<import("svelte/store").Writable<string>, "update" | "subscribe" | "set">;
export declare const endMinute: Pick<import("svelte/store").Writable<string>, "update" | "subscribe" | "set">;
export declare const endSecond: Pick<import("svelte/store").Writable<string>, "update" | "subscribe" | "set">;
export type TimeFormat = keyof typeof Timezones | 'UTC' | 'local';
type TimeFormatOption = {
    label: string;
    value: TimeFormat;
    abbr?: string;
    offset?: number;
    zones?: string[];
};
export type TimeFormatOptions = TimeFormatOption[];
export declare const Timezones: {
    readonly 'Greenwich Mean Time': {
        readonly abbr: "GMT";
        readonly offset: 0;
        readonly zones: readonly ["Africa/Abidjan", "Africa/Accra", "Africa/Bamako", "Africa/Banjul", "Africa/Bissau", "Africa/Conakry", "Africa/Dakar", "Africa/Freetown", "Africa/Lome", "Africa/Monrovia", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Sao_Tome", "America/Danmarkshavn", "Atlantic/Reykjavik", "Atlantic/St_Helena"];
    };
    readonly 'East Africa Time': {
        readonly abbr: "GMT+3";
        readonly offset: 3;
        readonly zones: readonly ["Africa/Addis_Ababa", "Africa/Asmera", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Kampala", "Africa/Mogadishu", "Africa/Nairobi", "Indian/Antananarivo", "Indian/Comoro", "Indian/Mayotte"];
    };
    readonly 'Central European Standard Time': {
        readonly abbr: "GMT+1";
        readonly offset: 1;
        readonly zones: readonly ["Africa/Algiers", "Africa/Tunis"];
    };
    readonly 'West Africa Standard Time': {
        readonly abbr: "GMT+1";
        readonly offset: 1;
        readonly zones: readonly ["Africa/Bangui", "Africa/Brazzaville", "Africa/Douala", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Luanda", "Africa/Malabo", "Africa/Ndjamena", "Africa/Niamey", "Africa/Porto-Novo"];
    };
    readonly 'Central Africa Time': {
        readonly abbr: "GMT+2";
        readonly offset: 2;
        readonly zones: readonly ["Africa/Blantyre", "Africa/Bujumbura", "Africa/Gaborone", "Africa/Harare", "Africa/Juba", "Africa/Khartoum", "Africa/Kigali", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Maputo", "Africa/Windhoek"];
    };
    readonly 'Eastern European Summer Time': {
        readonly abbr: "GMT+3";
        readonly offset: 3;
        readonly zones: readonly ["Africa/Cairo", "Asia/Beirut", "Asia/Gaza", "Asia/Hebron", "Asia/Nicosia", "Europe/Athens", "Europe/Bucharest", "Europe/Chisinau", "Europe/Helsinki", "Europe/Kiev", "Europe/Mariehamn", "Europe/Riga", "Europe/Sofia", "Europe/Tallinn", "Europe/Uzhgorod", "Europe/Vilnius", "Europe/Zaporozhye"];
    };
    readonly 'GMT+01:00': {
        readonly abbr: "GMT+1";
        readonly offset: 1;
        readonly zones: readonly ["Africa/Casablanca", "Africa/El_Aaiun", "Europe/Guernsey", "Europe/Isle_of_Man", "Europe/Jersey"];
    };
    readonly 'Central European Summer Time': {
        readonly abbr: "GMT+2";
        readonly offset: 2;
        readonly zones: readonly ["Africa/Ceuta", "Arctic/Longyearbyen", "Europe/Amsterdam", "Europe/Andorra", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Budapest", "Europe/Busingen", "Europe/Copenhagen", "Europe/Gibraltar", "Europe/Ljubljana", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Monaco", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Rome", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Skopje", "Europe/Stockholm", "Europe/Tirane", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zurich"];
    };
    readonly 'South Africa Standard Time': {
        readonly abbr: "GMT+2";
        readonly offset: 2;
        readonly zones: readonly ["Africa/Johannesburg", "Africa/Maseru", "Africa/Mbabane"];
    };
    readonly 'Eastern European Standard Time': {
        readonly abbr: "GMT+2";
        readonly offset: 2;
        readonly zones: readonly ["Africa/Tripoli", "Europe/Kaliningrad"];
    };
    readonly 'Hawaii-Aleutian Daylight Time': {
        readonly abbr: "HADT";
        readonly offset: -9;
        readonly zones: readonly ["America/Adak"];
    };
    readonly 'Alaska Daylight Time': {
        readonly abbr: "AKDT";
        readonly offset: -8;
        readonly zones: readonly ["America/Anchorage", "America/Juneau", "America/Metlakatla", "America/Nome", "America/Sitka", "America/Yakutat"];
    };
    readonly 'Atlantic Standard Time': {
        readonly abbr: "AST";
        readonly offset: -4;
        readonly zones: readonly ["America/Anguilla", "America/Antigua", "America/Aruba", "America/Barbados", "America/Blanc-Sablon", "America/Curacao", "America/Dominica", "America/Grenada", "America/Guadeloupe", "America/Kralendijk", "America/Lower_Princes", "America/Marigot", "America/Martinique", "America/Montserrat", "America/Port_of_Spain", "America/Puerto_Rico", "America/Santo_Domingo", "America/St_Barthelemy", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Tortola"];
    };
    readonly 'Brasilia Standard Time': {
        readonly abbr: "GMT-3";
        readonly offset: -3;
        readonly zones: readonly ["America/Araguaina", "America/Bahia", "America/Belem", "America/Fortaleza", "America/Maceio", "America/Recife", "America/Santarem", "America/Sao_Paulo"];
    };
    readonly 'Argentina Standard Time': {
        readonly abbr: "GMT-3";
        readonly offset: -3;
        readonly zones: readonly ["America/Argentina/La_Rioja", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Buenos_Aires", "America/Catamarca", "America/Cordoba", "America/Jujuy", "America/Mendoza"];
    };
    readonly 'Paraguay Standard Time': {
        readonly abbr: "GMT-4";
        readonly offset: -4;
        readonly zones: readonly ["America/Asuncion"];
    };
    readonly 'Central Standard Time': {
        readonly abbr: "CST";
        readonly offset: -6;
        readonly zones: readonly ["America/Bahia_Banderas", "America/Belize", "America/Chihuahua", "America/Costa_Rica", "America/El_Salvador", "America/Guatemala", "America/Managua", "America/Merida", "America/Mexico_City", "America/Monterrey", "America/Regina", "America/Swift_Current", "America/Tegucigalpa"];
    };
    readonly 'Amazon Standard Time': {
        readonly abbr: "GMT-4";
        readonly offset: -4;
        readonly zones: readonly ["America/Boa_Vista", "America/Campo_Grande", "America/Cuiaba", "America/Manaus", "America/Porto_Velho"];
    };
    readonly 'Colombia Standard Time': {
        readonly abbr: "GMT-5";
        readonly offset: -5;
        readonly zones: readonly ["America/Bogota"];
    };
    readonly 'Mountain Daylight Time': {
        readonly abbr: "MDT";
        readonly offset: -6;
        readonly zones: readonly ["America/Boise", "America/Cambridge_Bay", "America/Ciudad_Juarez", "America/Denver", "America/Edmonton", "America/Inuvik", "America/Yellowknife"];
    };
    readonly 'Eastern Standard Time': {
        readonly abbr: "EST";
        readonly offset: -5;
        readonly zones: readonly ["America/Cancun", "America/Cayman", "America/Coral_Harbour", "America/Jamaica", "America/Panama"];
    };
    readonly 'Venezuela Time': {
        readonly abbr: "GMT-4";
        readonly offset: -4;
        readonly zones: readonly ["America/Caracas"];
    };
    readonly 'French Guiana Time': {
        readonly abbr: "GMT-3";
        readonly offset: -3;
        readonly zones: readonly ["America/Cayenne"];
    };
    readonly 'Central Daylight Time': {
        readonly abbr: "CDT";
        readonly offset: -5;
        readonly zones: readonly ["America/Chicago", "America/Indiana/Knox", "America/Indiana/Tell_City", "America/Matamoros", "America/Menominee", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Ojinaga", "America/Rainy_River", "America/Rankin_Inlet", "America/Resolute", "America/Winnipeg"];
    };
    readonly 'Mountain Standard Time': {
        readonly abbr: "MST";
        readonly offset: -7;
        readonly zones: readonly ["America/Creston", "America/Dawson_Creek", "America/Fort_Nelson", "America/Phoenix"];
    };
    readonly 'Yukon Time': {
        readonly abbr: "GMT-7";
        readonly offset: -7;
        readonly zones: readonly ["America/Dawson", "America/Whitehorse"];
    };
    readonly 'Eastern Daylight Time': {
        readonly abbr: "EDT";
        readonly offset: -4;
        readonly zones: readonly ["America/Detroit", "America/Grand_Turk", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Indianapolis", "America/Iqaluit", "America/Kentucky/Monticello", "America/Louisville", "America/Nassau", "America/New_York", "America/Nipigon", "America/Pangnirtung", "America/Port-au-Prince", "America/Thunder_Bay", "America/Toronto"];
    };
    readonly 'Acre Standard Time': {
        readonly abbr: "GMT-5";
        readonly offset: -5;
        readonly zones: readonly ["America/Eirunepe", "America/Rio_Branco"];
    };
    readonly 'Atlantic Daylight Time': {
        readonly abbr: "ADT";
        readonly offset: -3;
        readonly zones: readonly ["America/Glace_Bay", "America/Goose_Bay", "America/Halifax", "America/Moncton", "America/Thule", "Atlantic/Bermuda"];
    };
    readonly 'West Greenland Summer Time': {
        readonly abbr: "GMT-2";
        readonly offset: -2;
        readonly zones: readonly ["America/Godthab"];
    };
    readonly 'Ecuador Time': {
        readonly abbr: "GMT-5";
        readonly offset: -5;
        readonly zones: readonly ["America/Guayaquil"];
    };
    readonly 'Guyana Time': {
        readonly abbr: "GMT-4";
        readonly offset: -4;
        readonly zones: readonly ["America/Guyana"];
    };
    readonly 'Cuba Daylight Time': {
        readonly abbr: "GMT-4";
        readonly offset: -4;
        readonly zones: readonly ["America/Havana"];
    };
    readonly 'Mexican Pacific Standard Time': {
        readonly abbr: "GMT-7";
        readonly offset: -7;
        readonly zones: readonly ["America/Hermosillo", "America/Mazatlan"];
    };
    readonly 'Bolivia Time': {
        readonly abbr: "GMT-4";
        readonly offset: -4;
        readonly zones: readonly ["America/La_Paz"];
    };
    readonly 'Peru Standard Time': {
        readonly abbr: "GMT-5";
        readonly offset: -5;
        readonly zones: readonly ["America/Lima"];
    };
    readonly 'Pacific Daylight Time': {
        readonly abbr: "PDT";
        readonly offset: -7;
        readonly zones: readonly ["America/Los_Angeles", "America/Tijuana", "America/Vancouver"];
    };
    readonly 'St. Pierre & Miquelon Daylight Time': {
        readonly abbr: "GMT-2";
        readonly offset: -2;
        readonly zones: readonly ["America/Miquelon"];
    };
    readonly 'Uruguay Standard Time': {
        readonly abbr: "GMT-3";
        readonly offset: -3;
        readonly zones: readonly ["America/Montevideo"];
    };
    readonly 'GMT-04:00': {
        readonly abbr: "GMT-4";
        readonly offset: -4;
        readonly zones: readonly ["America/Montreal"];
    };
    readonly 'Fernando de Noronha Standard Time': {
        readonly abbr: "GMT-2";
        readonly offset: -2;
        readonly zones: readonly ["America/Noronha"];
    };
    readonly 'Suriname Time': {
        readonly abbr: "GMT-3";
        readonly offset: -3;
        readonly zones: readonly ["America/Paramaribo"];
    };
    readonly 'GMT-03:00': {
        readonly abbr: "GMT-3";
        readonly offset: -3;
        readonly zones: readonly ["America/Punta_Arenas", "Antarctica/Palmer"];
    };
    readonly 'Northwest Mexico Daylight Time': {
        readonly abbr: "GMT-7";
        readonly offset: -7;
        readonly zones: readonly ["America/Santa_Isabel"];
    };
    readonly 'Chile Standard Time': {
        readonly abbr: "GMT-4";
        readonly offset: -4;
        readonly zones: readonly ["America/Santiago"];
    };
    readonly 'East Greenland Summer Time': {
        readonly abbr: "GMT";
        readonly offset: 0;
        readonly zones: readonly ["America/Scoresbysund"];
    };
    readonly 'Newfoundland Daylight Time': {
        readonly abbr: "GMT-2:30";
        readonly offset: -3;
        readonly zones: readonly ["America/St_Johns"];
    };
    readonly 'Casey Time': {
        readonly abbr: "GMT+11";
        readonly offset: 11;
        readonly zones: readonly ["Antarctica/Casey"];
    };
    readonly 'Davis Time': {
        readonly abbr: "GMT+7";
        readonly offset: 7;
        readonly zones: readonly ["Antarctica/Davis"];
    };
    readonly 'Dumont-d\u2019Urville Time': {
        readonly abbr: "GMT+10";
        readonly offset: 10;
        readonly zones: readonly ["Antarctica/DumontDUrville"];
    };
    readonly 'Australian Eastern Standard Time': {
        readonly abbr: "GMT+10";
        readonly offset: 10;
        readonly zones: readonly ["Antarctica/Macquarie", "Australia/Brisbane", "Australia/Currie", "Australia/Hobart", "Australia/Lindeman", "Australia/Melbourne", "Australia/Sydney"];
    };
    readonly 'Mawson Time': {
        readonly abbr: "GMT+5";
        readonly offset: 5;
        readonly zones: readonly ["Antarctica/Mawson"];
    };
    readonly 'New Zealand Standard Time': {
        readonly abbr: "GMT+12";
        readonly offset: 12;
        readonly zones: readonly ["Antarctica/McMurdo", "Pacific/Auckland"];
    };
    readonly 'Rothera Time': {
        readonly abbr: "GMT-3";
        readonly offset: -3;
        readonly zones: readonly ["Antarctica/Rothera"];
    };
    readonly 'Syowa Time': {
        readonly abbr: "GMT+3";
        readonly offset: 3;
        readonly zones: readonly ["Antarctica/Syowa"];
    };
    readonly 'GMT+02:00': {
        readonly abbr: "GMT+2";
        readonly offset: 2;
        readonly zones: readonly ["Antarctica/Troll"];
    };
    readonly 'Vostok Time': {
        readonly abbr: "GMT+6";
        readonly offset: 6;
        readonly zones: readonly ["Antarctica/Vostok"];
    };
    readonly 'Arabian Standard Time': {
        readonly abbr: "GMT+3";
        readonly offset: 3;
        readonly zones: readonly ["Asia/Aden", "Asia/Baghdad", "Asia/Bahrain", "Asia/Kuwait", "Asia/Qatar", "Asia/Riyadh"];
    };
    readonly 'East Kazakhstan Time': {
        readonly abbr: "GMT+6";
        readonly offset: 6;
        readonly zones: readonly ["Asia/Almaty", "Asia/Qostanay"];
    };
    readonly 'GMT+03:00': {
        readonly abbr: "GMT+3";
        readonly offset: 3;
        readonly zones: readonly ["Asia/Amman", "Asia/Damascus", "Asia/Famagusta", "Europe/Istanbul", "Europe/Kirov"];
    };
    readonly 'Anadyr Standard Time': {
        readonly abbr: "GMT+12";
        readonly offset: 12;
        readonly zones: readonly ["Asia/Anadyr"];
    };
    readonly 'West Kazakhstan Time': {
        readonly abbr: "GMT+5";
        readonly offset: 5;
        readonly zones: readonly ["Asia/Aqtau", "Asia/Aqtobe", "Asia/Atyrau", "Asia/Oral", "Asia/Qyzylorda"];
    };
    readonly 'Turkmenistan Standard Time': {
        readonly abbr: "GMT+5";
        readonly offset: 5;
        readonly zones: readonly ["Asia/Ashgabat"];
    };
    readonly 'Azerbaijan Standard Time': {
        readonly abbr: "GMT+4";
        readonly offset: 4;
        readonly zones: readonly ["Asia/Baku"];
    };
    readonly 'Indochina Time': {
        readonly abbr: "GMT+7";
        readonly offset: 7;
        readonly zones: readonly ["Asia/Bangkok", "Asia/Phnom_Penh", "Asia/Saigon", "Asia/Vientiane"];
    };
    readonly 'GMT+07:00': {
        readonly abbr: "GMT+7";
        readonly offset: 7;
        readonly zones: readonly ["Asia/Barnaul", "Asia/Tomsk"];
    };
    readonly 'Kyrgyzstan Time': {
        readonly abbr: "GMT+6";
        readonly offset: 6;
        readonly zones: readonly ["Asia/Bishkek"];
    };
    readonly 'Brunei Darussalam Time': {
        readonly abbr: "GMT+8";
        readonly offset: 8;
        readonly zones: readonly ["Asia/Brunei"];
    };
    readonly 'India Standard Time': {
        readonly abbr: "GMT+5:30";
        readonly offset: 5;
        readonly zones: readonly ["Asia/Calcutta", "Asia/Colombo"];
    };
    readonly 'Yakutsk Standard Time': {
        readonly abbr: "GMT+9";
        readonly offset: 9;
        readonly zones: readonly ["Asia/Chita", "Asia/Khandyga", "Asia/Yakutsk"];
    };
    readonly 'Ulaanbaatar Standard Time': {
        readonly abbr: "GMT+8";
        readonly offset: 8;
        readonly zones: readonly ["Asia/Choibalsan", "Asia/Ulaanbaatar"];
    };
    readonly 'Bangladesh Standard Time': {
        readonly abbr: "GMT+6";
        readonly offset: 6;
        readonly zones: readonly ["Asia/Dhaka"];
    };
    readonly 'East Timor Time': {
        readonly abbr: "GMT+9";
        readonly offset: 9;
        readonly zones: readonly ["Asia/Dili"];
    };
    readonly 'Gulf Standard Time': {
        readonly abbr: "GMT+4";
        readonly offset: 4;
        readonly zones: readonly ["Asia/Dubai", "Asia/Muscat"];
    };
    readonly 'Tajikistan Time': {
        readonly abbr: "GMT+5";
        readonly offset: 5;
        readonly zones: readonly ["Asia/Dushanbe"];
    };
    readonly 'Hong Kong Standard Time': {
        readonly abbr: "GMT+8";
        readonly offset: 8;
        readonly zones: readonly ["Asia/Hong_Kong"];
    };
    readonly 'Hovd Standard Time': {
        readonly abbr: "GMT+7";
        readonly offset: 7;
        readonly zones: readonly ["Asia/Hovd"];
    };
    readonly 'Irkutsk Standard Time': {
        readonly abbr: "GMT+8";
        readonly offset: 8;
        readonly zones: readonly ["Asia/Irkutsk"];
    };
    readonly 'Western Indonesia Time': {
        readonly abbr: "GMT+7";
        readonly offset: 7;
        readonly zones: readonly ["Asia/Jakarta", "Asia/Pontianak"];
    };
    readonly 'Eastern Indonesia Time': {
        readonly abbr: "GMT+9";
        readonly offset: 9;
        readonly zones: readonly ["Asia/Jayapura"];
    };
    readonly 'Israel Daylight Time': {
        readonly abbr: "GMT+3";
        readonly offset: 3;
        readonly zones: readonly ["Asia/Jerusalem"];
    };
    readonly 'Afghanistan Time': {
        readonly abbr: "GMT+4:30";
        readonly offset: 4;
        readonly zones: readonly ["Asia/Kabul"];
    };
    readonly 'Petropavlovsk-Kamchatski Standard Time': {
        readonly abbr: "GMT+12";
        readonly offset: 12;
        readonly zones: readonly ["Asia/Kamchatka"];
    };
    readonly 'Pakistan Standard Time': {
        readonly abbr: "GMT+5";
        readonly offset: 5;
        readonly zones: readonly ["Asia/Karachi"];
    };
    readonly 'Nepal Time': {
        readonly abbr: "GMT+5:45";
        readonly offset: 5;
        readonly zones: readonly ["Asia/Katmandu"];
    };
    readonly 'Krasnoyarsk Standard Time': {
        readonly abbr: "GMT+7";
        readonly offset: 7;
        readonly zones: readonly ["Asia/Krasnoyarsk", "Asia/Novokuznetsk"];
    };
    readonly 'Malaysia Time': {
        readonly abbr: "GMT+8";
        readonly offset: 8;
        readonly zones: readonly ["Asia/Kuala_Lumpur", "Asia/Kuching"];
    };
    readonly 'China Standard Time': {
        readonly abbr: "GMT+8";
        readonly offset: 8;
        readonly zones: readonly ["Asia/Macau", "Asia/Shanghai"];
    };
    readonly 'Magadan Standard Time': {
        readonly abbr: "GMT+11";
        readonly offset: 11;
        readonly zones: readonly ["Asia/Magadan"];
    };
    readonly 'Central Indonesia Time': {
        readonly abbr: "GMT+8";
        readonly offset: 8;
        readonly zones: readonly ["Asia/Makassar"];
    };
    readonly 'Philippine Standard Time': {
        readonly abbr: "GMT+8";
        readonly offset: 8;
        readonly zones: readonly ["Asia/Manila"];
    };
    readonly 'Novosibirsk Standard Time': {
        readonly abbr: "GMT+7";
        readonly offset: 7;
        readonly zones: readonly ["Asia/Novosibirsk"];
    };
    readonly 'Omsk Standard Time': {
        readonly abbr: "GMT+6";
        readonly offset: 6;
        readonly zones: readonly ["Asia/Omsk"];
    };
    readonly 'Korean Standard Time': {
        readonly abbr: "GMT+9";
        readonly offset: 9;
        readonly zones: readonly ["Asia/Pyongyang", "Asia/Seoul"];
    };
    readonly 'Myanmar Time': {
        readonly abbr: "GMT+6:30";
        readonly offset: 6;
        readonly zones: readonly ["Asia/Rangoon"];
    };
    readonly 'Sakhalin Standard Time': {
        readonly abbr: "GMT+11";
        readonly offset: 11;
        readonly zones: readonly ["Asia/Sakhalin"];
    };
    readonly 'Uzbekistan Standard Time': {
        readonly abbr: "GMT+5";
        readonly offset: 5;
        readonly zones: readonly ["Asia/Samarkand", "Asia/Tashkent"];
    };
    readonly 'Singapore Standard Time': {
        readonly abbr: "GMT+8";
        readonly offset: 8;
        readonly zones: readonly ["Asia/Singapore"];
    };
    readonly 'GMT+11:00': {
        readonly abbr: "GMT+11";
        readonly offset: 11;
        readonly zones: readonly ["Asia/Srednekolymsk", "Pacific/Bougainville"];
    };
    readonly 'Taipei Standard Time': {
        readonly abbr: "GMT+8";
        readonly offset: 8;
        readonly zones: readonly ["Asia/Taipei"];
    };
    readonly 'Georgia Standard Time': {
        readonly abbr: "GMT+4";
        readonly offset: 4;
        readonly zones: readonly ["Asia/Tbilisi"];
    };
    readonly 'Iran Standard Time': {
        readonly abbr: "GMT+3:30";
        readonly offset: 3;
        readonly zones: readonly ["Asia/Tehran"];
    };
    readonly 'Bhutan Time': {
        readonly abbr: "GMT+6";
        readonly offset: 6;
        readonly zones: readonly ["Asia/Thimphu"];
    };
    readonly 'Japan Standard Time': {
        readonly abbr: "GMT+9";
        readonly offset: 9;
        readonly zones: readonly ["Asia/Tokyo"];
    };
    readonly 'GMT+06:00': {
        readonly abbr: "GMT+6";
        readonly offset: 6;
        readonly zones: readonly ["Asia/Urumqi"];
    };
    readonly 'Vladivostok Standard Time': {
        readonly abbr: "GMT+10";
        readonly offset: 10;
        readonly zones: readonly ["Asia/Ust-Nera", "Asia/Vladivostok"];
    };
    readonly 'Yekaterinburg Standard Time': {
        readonly abbr: "GMT+5";
        readonly offset: 5;
        readonly zones: readonly ["Asia/Yekaterinburg"];
    };
    readonly 'Armenia Standard Time': {
        readonly abbr: "GMT+4";
        readonly offset: 4;
        readonly zones: readonly ["Asia/Yerevan"];
    };
    readonly 'Azores Summer Time': {
        readonly abbr: "GMT";
        readonly offset: 0;
        readonly zones: readonly ["Atlantic/Azores"];
    };
    readonly 'Western European Summer Time': {
        readonly abbr: "GMT+1";
        readonly offset: 1;
        readonly zones: readonly ["Atlantic/Canary", "Atlantic/Faeroe", "Atlantic/Madeira", "Europe/Lisbon"];
    };
    readonly 'Cape Verde Standard Time': {
        readonly abbr: "GMT-1";
        readonly offset: -1;
        readonly zones: readonly ["Atlantic/Cape_Verde"];
    };
    readonly 'South Georgia Time': {
        readonly abbr: "GMT-2";
        readonly offset: -2;
        readonly zones: readonly ["Atlantic/South_Georgia"];
    };
    readonly 'Falkland Islands Standard Time': {
        readonly abbr: "GMT-3";
        readonly offset: -3;
        readonly zones: readonly ["Atlantic/Stanley"];
    };
    readonly 'Australian Central Standard Time': {
        readonly abbr: "GMT+9:30";
        readonly offset: 9;
        readonly zones: readonly ["Australia/Adelaide", "Australia/Broken_Hill", "Australia/Darwin"];
    };
    readonly 'Australian Central Western Standard Time': {
        readonly abbr: "GMT+8:45";
        readonly offset: 8;
        readonly zones: readonly ["Australia/Eucla"];
    };
    readonly 'Lord Howe Standard Time': {
        readonly abbr: "GMT+10:30";
        readonly offset: 10;
        readonly zones: readonly ["Australia/Lord_Howe"];
    };
    readonly 'Australian Western Standard Time': {
        readonly abbr: "GMT+8";
        readonly offset: 8;
        readonly zones: readonly ["Australia/Perth"];
    };
    readonly 'GMT+04:00': {
        readonly abbr: "GMT+4";
        readonly offset: 4;
        readonly zones: readonly ["Europe/Astrakhan", "Europe/Saratov", "Europe/Ulyanovsk"];
    };
    readonly 'Irish Standard Time': {
        readonly abbr: "GMT+1";
        readonly offset: 1;
        readonly zones: readonly ["Europe/Dublin"];
    };
    readonly 'British Summer Time': {
        readonly abbr: "GMT+1";
        readonly offset: 1;
        readonly zones: readonly ["Europe/London"];
    };
    readonly 'Moscow Standard Time': {
        readonly abbr: "GMT+3";
        readonly offset: 3;
        readonly zones: readonly ["Europe/Minsk", "Europe/Moscow", "Europe/Simferopol"];
    };
    readonly 'Samara Standard Time': {
        readonly abbr: "GMT+4";
        readonly offset: 4;
        readonly zones: readonly ["Europe/Samara"];
    };
    readonly 'Volgograd Standard Time': {
        readonly abbr: "GMT+3";
        readonly offset: 3;
        readonly zones: readonly ["Europe/Volgograd"];
    };
    readonly 'Indian Ocean Time': {
        readonly abbr: "GMT+6";
        readonly offset: 6;
        readonly zones: readonly ["Indian/Chagos"];
    };
    readonly 'Christmas Island Time': {
        readonly abbr: "GMT+7";
        readonly offset: 7;
        readonly zones: readonly ["Indian/Christmas"];
    };
    readonly 'Cocos Islands Time': {
        readonly abbr: "GMT+6:30";
        readonly offset: 6;
        readonly zones: readonly ["Indian/Cocos"];
    };
    readonly 'French Southern & Antarctic Time': {
        readonly abbr: "GMT+5";
        readonly offset: 5;
        readonly zones: readonly ["Indian/Kerguelen"];
    };
    readonly 'Seychelles Time': {
        readonly abbr: "GMT+4";
        readonly offset: 4;
        readonly zones: readonly ["Indian/Mahe"];
    };
    readonly 'Maldives Time': {
        readonly abbr: "GMT+5";
        readonly offset: 5;
        readonly zones: readonly ["Indian/Maldives"];
    };
    readonly 'Mauritius Standard Time': {
        readonly abbr: "GMT+4";
        readonly offset: 4;
        readonly zones: readonly ["Indian/Mauritius"];
    };
    readonly 'R\u00E9union Time': {
        readonly abbr: "GMT+4";
        readonly offset: 4;
        readonly zones: readonly ["Indian/Reunion"];
    };
    readonly 'Apia Standard Time': {
        readonly abbr: "GMT+13";
        readonly offset: 13;
        readonly zones: readonly ["Pacific/Apia"];
    };
    readonly 'Chatham Standard Time': {
        readonly abbr: "GMT+12:45";
        readonly offset: 12;
        readonly zones: readonly ["Pacific/Chatham"];
    };
    readonly 'Easter Island Standard Time': {
        readonly abbr: "GMT-6";
        readonly offset: -6;
        readonly zones: readonly ["Pacific/Easter"];
    };
    readonly 'Vanuatu Standard Time': {
        readonly abbr: "GMT+11";
        readonly offset: 11;
        readonly zones: readonly ["Pacific/Efate"];
    };
    readonly 'Phoenix Islands Time': {
        readonly abbr: "GMT+13";
        readonly offset: 13;
        readonly zones: readonly ["Pacific/Enderbury"];
    };
    readonly 'Tokelau Time': {
        readonly abbr: "GMT+13";
        readonly offset: 13;
        readonly zones: readonly ["Pacific/Fakaofo"];
    };
    readonly 'Fiji Standard Time': {
        readonly abbr: "GMT+12";
        readonly offset: 12;
        readonly zones: readonly ["Pacific/Fiji"];
    };
    readonly 'Tuvalu Time': {
        readonly abbr: "GMT+12";
        readonly offset: 12;
        readonly zones: readonly ["Pacific/Funafuti"];
    };
    readonly 'Galapagos Time': {
        readonly abbr: "GMT-6";
        readonly offset: -6;
        readonly zones: readonly ["Pacific/Galapagos"];
    };
    readonly 'Gambier Time': {
        readonly abbr: "GMT-9";
        readonly offset: -9;
        readonly zones: readonly ["Pacific/Gambier"];
    };
    readonly 'Solomon Islands Time': {
        readonly abbr: "GMT+11";
        readonly offset: 11;
        readonly zones: readonly ["Pacific/Guadalcanal"];
    };
    readonly 'Chamorro Standard Time': {
        readonly abbr: "GMT+10";
        readonly offset: 10;
        readonly zones: readonly ["Pacific/Guam", "Pacific/Saipan"];
    };
    readonly 'Hawaii-Aleutian Standard Time': {
        readonly abbr: "HST";
        readonly offset: -10;
        readonly zones: readonly ["Pacific/Honolulu", "Pacific/Johnston"];
    };
    readonly 'Line Islands Time': {
        readonly abbr: "GMT+14";
        readonly offset: 14;
        readonly zones: readonly ["Pacific/Kiritimati"];
    };
    readonly 'Kosrae Time': {
        readonly abbr: "GMT+11";
        readonly offset: 11;
        readonly zones: readonly ["Pacific/Kosrae"];
    };
    readonly 'Marshall Islands Time': {
        readonly abbr: "GMT+12";
        readonly offset: 12;
        readonly zones: readonly ["Pacific/Kwajalein", "Pacific/Majuro"];
    };
    readonly 'Marquesas Time': {
        readonly abbr: "GMT-9:30";
        readonly offset: -10;
        readonly zones: readonly ["Pacific/Marquesas"];
    };
    readonly 'Samoa Standard Time': {
        readonly abbr: "GMT-11";
        readonly offset: -11;
        readonly zones: readonly ["Pacific/Midway", "Pacific/Pago_Pago"];
    };
    readonly 'Nauru Time': {
        readonly abbr: "GMT+12";
        readonly offset: 12;
        readonly zones: readonly ["Pacific/Nauru"];
    };
    readonly 'Niue Time': {
        readonly abbr: "GMT-11";
        readonly offset: -11;
        readonly zones: readonly ["Pacific/Niue"];
    };
    readonly 'Norfolk Island Standard Time': {
        readonly abbr: "GMT+11";
        readonly offset: 11;
        readonly zones: readonly ["Pacific/Norfolk"];
    };
    readonly 'New Caledonia Standard Time': {
        readonly abbr: "GMT+11";
        readonly offset: 11;
        readonly zones: readonly ["Pacific/Noumea"];
    };
    readonly 'Palau Time': {
        readonly abbr: "GMT+9";
        readonly offset: 9;
        readonly zones: readonly ["Pacific/Palau"];
    };
    readonly 'Pitcairn Time': {
        readonly abbr: "GMT-8";
        readonly offset: -8;
        readonly zones: readonly ["Pacific/Pitcairn"];
    };
    readonly 'Ponape Time': {
        readonly abbr: "GMT+11";
        readonly offset: 11;
        readonly zones: readonly ["Pacific/Ponape"];
    };
    readonly 'Papua New Guinea Time': {
        readonly abbr: "GMT+10";
        readonly offset: 10;
        readonly zones: readonly ["Pacific/Port_Moresby"];
    };
    readonly 'Cook Islands Standard Time': {
        readonly abbr: "GMT-10";
        readonly offset: -10;
        readonly zones: readonly ["Pacific/Rarotonga"];
    };
    readonly 'Tahiti Time': {
        readonly abbr: "GMT-10";
        readonly offset: -10;
        readonly zones: readonly ["Pacific/Tahiti"];
    };
    readonly 'Gilbert Islands Time': {
        readonly abbr: "GMT+12";
        readonly offset: 12;
        readonly zones: readonly ["Pacific/Tarawa"];
    };
    readonly 'Tonga Standard Time': {
        readonly abbr: "GMT+13";
        readonly offset: 13;
        readonly zones: readonly ["Pacific/Tongatapu"];
    };
    readonly 'Chuuk Time': {
        readonly abbr: "GMT+10";
        readonly offset: 10;
        readonly zones: readonly ["Pacific/Truk"];
    };
    readonly 'Wake Island Time': {
        readonly abbr: "GMT+12";
        readonly offset: 12;
        readonly zones: readonly ["Pacific/Wake"];
    };
    readonly 'Wallis & Futuna Time': {
        readonly abbr: "GMT+12";
        readonly offset: 12;
        readonly zones: readonly ["Pacific/Wallis"];
    };
};
export declare const TimezoneOptions: TimeFormatOptions;
export declare const getTimezone: (timeFormat: TimeFormat) => string;
export declare const formatOffset: (offset: number) => string;
export declare const getUTCOffset: (timeFormat: TimeFormat) => string;
export {};
