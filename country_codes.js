// country_codes.js
const countryCodes = [
    { value: "+93", text: "+93 (Afghanistan)" },
    { value: "+355", text: "+355 (Albania)" },
    { value: "+213", text: "+213 (Algeria)" },
    { value: "+376", text: "+376 (Andorra)" },
    { value: "+244", text: "+244 (Angola)" },
    { value: "+54", text: "+54 (Argentina)" },
    { value: "+374", text: "+374 (Armenia)" },
    { value: "+61", text: "+61 (Australia)" },
    { value: "+43", text: "+43 (Austria)" },
    { value: "+994", text: "+994 (Azerbaijan)" },
    { value: "+1", text: "+1 (Bahamas)" },
    { value: "+973", text: "+973 (Bahrain)" },
    { value: "+880", text: "+880 (Bangladesh)" },
    { value: "+1", text: "+1 (Barbados)" },
    { value: "+375", text: "+375 (Belarus)" },
    { value: "+32", text: "+32 (Belgium)" },
    { value: "+501", text: "+501 (Belize)" },
    { value: "+229", text: "+229 (Benin)" },
    { value: "+975", text: "+975 (Bhutan)" },
    { value: "+591", text: "+591 (Bolivia)" },
    { value: "+387", text: "+387 (Bosnia)" },
    { value: "+267", text: "+267 (Botswana)" },
    { value: "+55", text: "+55 (Brazil)" },
    { value: "+673", text: "+673 (Brunei)" },
    { value: "+359", text: "+359 (Bulgaria)" },
    { value: "+226", text: "+226 (Burkina Faso)" },
    { value: "+257", text: "+257 (Burundi)" },
    { value: "+855", text: "+855 (Cambodia)" },
    { value: "+237", text: "+237 (Cameroon)" },
    { value: "+1", text: "+1 (Canada)" },
    { value: "+238", text: "+238 (Cape Verde)" },
    { value: "+236", text: "+236 (Central African Republic)" },
    { value: "+235", text: "+235 (Chad)" },
    { value: "+56", text: "+56 (Chile)" },
    { value: "+86", text: "+86 (China)" },
    { value: "+57", text: "+57 (Colombia)" },
    { value: "+269", text: "+269 (Comoros)" },
    { value: "+242", text: "+242 (Congo)" },
    { value: "+506", text: "+506 (Costa Rica)" },
    { value: "+385", text: "+385 (Croatia)" },
    { value: "+53", text: "+53 (Cuba)" },
    { value: "+357", text: "+357 (Cyprus)" },
    { value: "+420", text: "+420 (Czech Republic)" },
    { value: "+45", text: "+45 (Denmark)" },
    { value: "+253", text: "+253 (Djibouti)" },
    { value: "+1", text: "+1 (Dominica)" },
    { value: "+1", text: "+1 (Dominican Republic)" },
    { value: "+593", text: "+593 (Ecuador)" },
    { value: "+20", text: "+20 (Egypt)" },
    { value: "+503", text: "+503 (El Salvador)" },
    { value: "+240", text: "+240 (Equatorial Guinea)" },
    { value: "+291", text: "+291 (Eritrea)" },
    { value: "+372", text: "+372 (Estonia)" },
    { value: "+268", text: "+268 (Eswatini)" },
    { value: "+251", text: "+251 (Ethiopia)" },
    { value: "+679", text: "+679 (Fiji)" },
    { value: "+358", text: "+358 (Finland)" },
    { value: "+33", text: "+33 (France)" },
    { value: "+241", text: "+241 (Gabon)" },
    { value: "+220", text: "+220 (Gambia)" },
    { value: "+995", text: "+995 (Georgia)" },
    { value: "+49", text: "+49 (Germany)" },
    { value: "+233", text: "+233 (Ghana)" },
    { value: "+30", text: "+30 (Greece)" },
    { value: "+1", text: "+1 (Grenada)" },
    { value: "+502", text: "+502 (Guatemala)" },
    { value: "+224", text: "+224 (Guinea)" },
    { value: "+245", text: "+245 (Guinea-Bissau)" },
    { value: "+592", text: "+592 (Guyana)" },
    { value: "+509", text: "+509 (Haiti)" },
    { value: "+504", text: "+504 (Honduras)" },
    { value: "+36", text: "+36 (Hungary)" },
    { value: "+354", text: "+354 (Iceland)" },
    { value: "+91", text: "+91 (India)" },
    { value: "+62", text: "+62 (Indonesia)" },
    { value: "+98", text: "+98 (Iran)" },
    { value: "+964", text: "+964 (Iraq)" },
    { value: "+353", text: "+353 (Ireland)" },
    { value: "+972", text: "+972 (Israel)" },
    { value: "+39", text: "+39 (Italy)" },
    { value: "+1", text: "+1 (Jamaica)" },
    { value: "+81", text: "+81 (Japan)" },
    { value: "+962", text: "+962 (Jordan)" },
    { value: "+7", text: "+7 (Kazakhstan)" },
    { value: "+254", text: "+254 (Kenya)" },
    { value: "+686", text: "+686 (Kiribati)" },
    { value: "+850", text: "+850 (North Korea)" },
    { value: "+82", text: "+82 (South Korea)" },
    { value: "+965", text: "+965 (Kuwait)" },
    { value: "+996", text: "+996 (Kyrgyzstan)" },
    { value: "+856", text: "+856 (Laos)" },
    { value: "+371", text: "+371 (Latvia)" },
    { value: "+961", text: "+961 (Lebanon)" },
    { value: "+266", text: "+266 (Lesotho)" },
    { value: "+231", text: "+231 (Liberia)" },
    { value: "+218", text: "+218 (Libya)" },
    { value: "+423", text: "+423 (Liechtenstein)" },
    { value: "+370", text: "+370 (Lithuania)" },
    { value: "+352", text: "+352 (Luxembourg)" },
    { value: "+261", text: "+261 (Madagascar)" },
    { value: "+265", text: "+265 (Malawi)" },
    { value: "+60", text: "+60 (Malaysia)" },
    { value: "+960", text: "+960 (Maldives)" },
    { value: "+223", text: "+223 (Mali)" },
    { value: "+356", text: "+356 (Malta)" },
    { value: "+692", text: "+692 (Marshall Islands)" },
    { value: "+222", text: "+222 (Mauritania)" },
    { value: "+230", text: "+230 (Mauritius)" },
    { value: "+52", text: "+52 (Mexico)" },
    { value: "+691", text: "+691 (Micronesia)" },
    { value: "+373", text: "+373 (Moldova)" },
    { value: "+377", text: "+377 (Monaco)" },
    { value: "+976", text: "+976 (Mongolia)" },
    { value: "+382", text: "+382 (Montenegro)" },
    { value: "+212", text: "+212 (Morocco)" },
    { value: "+258", text: "+258 (Mozambique)" },
    { value: "+95", text: "+95 (Myanmar)" },
    { value: "+264", text: "+264 (Namibia)" },
    { value: "+674", text: "+674 (Nauru)" },
    { value: "+977", text: "+977 (Nepal)" },
    { value: "+31", text: "+31 (Netherlands)" },
    { value: "+64", text: "+64 (New Zealand)" },
    { value: "+505", text: "+505 (Nicaragua)" },
    { value: "+227", text: "+227 (Niger)" },
    { value: "+234", text: "+234 (Nigeria)" },
    { value: "+47", text: "+47 (Norway)" },
    { value: "+968", text: "+968 (Oman)" },
    { value: "+92", text: "+92 (Pakistan)" },
    { value: "+680", text: "+680 (Palau)" },
    { value: "+507", text: "+507 (Panama)" },
    { value: "+675", text: "+675 (Papua New Guinea)" },
    { value: "+595", text: "+595 (Paraguay)" },
    { value: "+51", text: "+51 (Peru)" },
    { value: "+63", text: "+63 (Philippines)" },
    { value: "+48", text: "+48 (Poland)" },
    { value: "+351", text: "+351 (Portugal)" },
    { value: "+974", text: "+974 (Qatar)" },
    { value: "+40", text: "+40 (Romania)" },
    { value: "+7", text: "+7 (Russia)" },
    { value: "+250", text: "+250 (Rwanda)" },
    { value: "+1", text: "+1 (Saint Kitts and Nevis)" },
    { value: "+1", text: "+1 (Saint Lucia)" },
    { value: "+685", text: "+685 (Samoa)" },
    { value: "+378", text: "+378 (San Marino)" },
    { value: "+966", text: "+966 (Saudi Arabia)" },
    { value: "+221", text: "+221 (Senegal)" },
    { value: "+381", text: "+381 (Serbia)" },
    { value: "+248", text: "+248 (Seychelles)" },
    { value: "+232", text: "+232 (Sierra Leone)" },
    { value: "+65", text: "+65 (Singapore)" },
    { value: "+421", text: "+421 (Slovakia)" },
    { value: "+386", text: "+386 (Slovenia)" },
    { value: "+677", text: "+677 (Solomon Islands)" },
    { value: "+252", text: "+252 (Somalia)" },
    { value: "+27", text: "+27 (South Africa)" },
    { value: "+211", text: "+211 (South Sudan)" },
    { value: "+34", text: "+34 (Spain)" },
    { value: "+94", text: "+94 (Sri Lanka)" },
    { value: "+249", text: "+249 (Sudan)" },
    { value: "+597", text: "+597 (Suriname)" },
    { value: "+46", text: "+46 (Sweden)" },
    { value: "+41", text: "+41 (Switzerland)" },
    { value: "+963", text: "+963 (Syria)" },
    { value: "+886", text: "+886 (Taiwan)" },
    { value: "+992", text: "+992 (Tajikistan)" },
    { value: "+255", text: "+255 (Tanzania)" },
    { value: "+66", text: "+66 (Thailand)" },
    { value: "+228", text: "+228 (Togo)" },
    { value: "+676", text: "+676 (Tonga)" },
    { value: "+1", text: "+1 (Trinidad and Tobago)" },
    { value: "+216", text: "+216 (Tunisia)" },
    { value: "+90", text: "+90 (Turkey)" },
    { value: "+993", text: "+993 (Turkmenistan)" },
    { value: "+688", text: "+688 (Tuvalu)" },
    { value: "+256", text: "+256 (Uganda)" },
    { value: "+380", text: "+380 (Ukraine)" },
    { value: "+971", text: "+971 (United Arab Emirates)" },
    { value: "+44", text: "+44 (United Kingdom)" },
    { value: "+1", text: "+1 (United States)" },
    { value: "+598", text: "+598 (Uruguay)" },
    { value: "+998", text: "+998 (Uzbekistan)" },
    { value: "+678", text: "+678 (Vanuatu)" },
    { value: "+58", text: "+58 (Venezuela)" },
    { value: "+84", text: "+84 (Vietnam)" },
    { value: "+967", text: "+967 (Yemen)" },
    { value: "+260", text: "+260 (Zambia)" },
    { value: "+263", text: "+263 (Zimbabwe)" }
];

// Populate country code select
document.addEventListener('DOMContentLoaded', () => {
    const countryCodeSelect = document.getElementById('countryCode');
    if (countryCodeSelect) {
        countryCodes.forEach(code => {
            const option = document.createElement('option');
            option.value = code.value;
            option.textContent = code.text;
            countryCodeSelect.appendChild(option);
        });
    }
});