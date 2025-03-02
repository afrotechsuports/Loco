// countries.js
const countries = [
    { value: "", text: "-- Select a country --" },
    { value: "afghanistan", text: "Afghanistan" },
    { value: "albania", text: "Albania" },
    { value: "algeria", text: "Algeria" },
    { value: "andorra", text: "Andorra" },
    { value: "angola", text: "Angola" },
    { value: "argentina", text: "Argentina" },
    { value: "armenia", text: "Armenia" },
    { value: "australia", text: "Australia" },
    { value: "austria", text: "Austria" },
    { value: "azerbaijan", text: "Azerbaijan" },
    { value: "bahamas", text: "Bahamas" },
    { value: "bahrain", text: "Bahrain" },
    { value: "bangladesh", text: "Bangladesh" },
    { value: "barbados", text: "Barbados" },
    { value: "belarus", text: "Belarus" },
    { value: "belgium", text: "Belgium" },
    { value: "belize", text: "Belize" },
    { value: "benin", text: "Benin" },
    { value: "bhutan", text: "Bhutan" },
    { value: "bolivia", text: "Bolivia" },
    { value: "bosnia", text: "Bosnia and Herzegovina" },
    { value: "botswana", text: "Botswana" },
    { value: "brazil", text: "Brazil" },
    { value: "brunei", text: "Brunei" },
    { value: "bulgaria", text: "Bulgaria" },
    { value: "burkina", text: "Burkina Faso" },
    { value: "burundi", text: "Burundi" },
    { value: "cambodia", text: "Cambodia" },
    { value: "cameroon", text: "Cameroon" },
    { value: "canada", text: "Canada" },
    { value: "cape_verde", text: "Cape Verde" },
    { value: "central_african_republic", text: "Central African Republic" },
    { value: "chad", text: "Chad" },
    { value: "chile", text: "Chile" },
    { value: "china", text: "China" },
    { value: "colombia", text: "Colombia" },
    { value: "comoros", text: "Comoros" },
    { value: "congo", text: "Congo" },
    { value: "costa_rica", text: "Costa Rica" },
    { value: "croatia", text: "Croatia" },
    { value: "cuba", text: "Cuba" },
    { value: "cyprus", text: "Cyprus" },
    { value: "czech_republic", text: "Czech Republic" },
    { value: "denmark", text: "Denmark" },
    { value: "djibouti", text: "Djibouti" },
    { value: "dominica", text: "Dominica" },
    { value: "dominican_republic", text: "Dominican Republic" },
    { value: "ecuador", text: "Ecuador" },
    { value: "egypt", text: "Egypt" },
    { value: "el_salvador", text: "El Salvador" },
    { value: "equatorial_guinea", text: "Equatorial Guinea" },
    { value: "eritrea", text: "Eritrea" },
    { value: "estonia", text: "Estonia" },
    { value: "eswatini", text: "Eswatini" },
    { value: "ethiopia", text: "Ethiopia" },
    { value: "fiji", text: "Fiji" },
    { value: "finland", text: "Finland" },
    { value: "france", text: "France" },
    { value: "gabon", text: "Gabon" },
    { value: "gambia", text: "Gambia" },
    { value: "georgia", text: "Georgia" },
    { value: "germany", text: "Germany" },
    { value: "ghana", text: "Ghana" },
    { value: "greece", text: "Greece" },
    { value: "grenada", text: "Grenada" },
    { value: "guatemala", text: "Guatemala" },
    { value: "guinea", text: "Guinea" },
    { value: "guinea_bissau", text: "Guinea-Bissau" },
    { value: "guyana", text: "Guyana" },
    { value: "haiti", text: "Haiti" },
    { value: "honduras", text: "Honduras" },
    { value: "hungary", text: "Hungary" },
    { value: "iceland", text: "Iceland" },
    { value: "india", text: "India" },
    { value: "indonesia", text: "Indonesia" },
    { value: "iran", text: "Iran" },
    { value: "iraq", text: "Iraq" },
    { value: "ireland", text: "Ireland" },
    { value: "israel", text: "Israel" },
    { value: "italy", text: "Italy" },
    { value: "jamaica", text: "Jamaica" },
    { value: "japan", text: "Japan" },
    { value: "jordan", text: "Jordan" },
    { value: "kazakhstan", text: "Kazakhstan" },
    { value: "kenya", text: "Kenya" },
    { value: "kiribati", text: "Kiribati" },
    { value: "north_korea", text: "North Korea" },
    { value: "south_korea", text: "South Korea" },
    { value: "kuwait", text: "Kuwait" },
    { value: "kyrgyzstan", text: "Kyrgyzstan" },
    { value: "laos", text: "Laos" },
    { value: "latvia", text: "Latvia" },
    { value: "lebanon", text: "Lebanon" },
    { value: "lesotho", text: "Lesotho" },
    { value: "liberia", text: "Liberia" },
    { value: "libya", text: "Libya" },
    { value: "liechtenstein", text: "Liechtenstein" },
    { value: "lithuania", text: "Lithuania" },
    { value: "luxembourg", text: "Luxembourg" },
    { value: "madagascar", text: "Madagascar" },
    { value: "malawi", text: "Malawi" },
    { value: "malaysia", text: "Malaysia" },
    { value: "maldives", text: "Maldives" },
    { value: "mali", text: "Mali" },
    { value: "malta", text: "Malta" },
    { value: "marshall_islands", text: "Marshall Islands" },
    { value: "mauritania", text: "Mauritania" },
    { value: "mauritius", text: "Mauritius" },
    { value: "mexico", text: "Mexico" },
    { value: "micronesia", text: "Micronesia" },
    { value: "moldova", text: "Moldova" },
    { value: "monaco", text: "Monaco" },
    { value: "mongolia", text: "Mongolia" },
    { value: "montenegro", text: "Montenegro" },
    { value: "morocco", text: "Morocco" },
    { value: "mozambique", text: "Mozambique" },
    { value: "myanmar", text: "Myanmar" },
    { value: "namibia", text: "Namibia" },
    { value: "nauru", text: "Nauru" },
    { value: "nepal", text: "Nepal" },
    { value: "netherlands", text: "Netherlands" },
    { value: "new_zealand", text: "New Zealand" },
    { value: "nicaragua", text: "Nicaragua" },
    { value: "niger", text: "Niger" },
    { value: "nigeria", text: "Nigeria" },
    { value: "norway", text: "Norway" },
    { value: "oman", text: "Oman" },
    { value: "pakistan", text: "Pakistan" },
    { value: "palau", text: "Palau" },
    { value: "panama", text: "Panama" },
    { value: "papua_new_guinea", text: "Papua New Guinea" },
    { value: "paraguay", text: "Paraguay" },
    { value: "peru", text: "Peru" },
    { value: "philippines", text: "Philippines" },
    { value: "poland", text: "Poland" },
    { value: "portugal", text: "Portugal" },
    { value: "qatar", text: "Qatar" },
    { value: "romania", text: "Romania" },
    { value: "russia", text: "Russia" },
    { value: "rwanda", text: "Rwanda" },
    { value: "saint_kitts", text: "Saint Kitts and Nevis" },
    { value: "saint_lucia", text: "Saint Lucia" },
    { value: "samoa", text: "Samoa" },
    { value: "san_marino", text: "San Marino" },
    { value: "saudi_arabia", text: "Saudi Arabia" },
    { value: "senegal", text: "Senegal" },
    { value: "serbia", text: "Serbia" },
    { value: "seychelles", text: "Seychelles" },
    { value: "sierra_leone", text: "Sierra Leone" },
    { value: "singapore", text: "Singapore" },
    { value: "slovakia", text: "Slovakia" },
    { value: "slovenia", text: "Slovenia" },
    { value: "solomon_islands", text: "Solomon Islands" },
    { value: "somalia", text: "Somalia" },
    { value: "south_africa", text: "South Africa" },
    { value: "south_sudan", text: "South Sudan" },
    { value: "spain", text: "Spain" },
    { value: "sri_lanka", text: "Sri Lanka" },
    { value: "sudan", text: "Sudan" },
    { value: "suriname", text: "Suriname" },
    { value: "sweden", text: "Sweden" },
    { value: "switzerland", text: "Switzerland" },
    { value: "syria", text: "Syria" },
    { value: "taiwan", text: "Taiwan" },
    { value: "tajikistan", text: "Tajikistan" },
    { value: "tanzania", text: "Tanzania" },
    { value: "thailand", text: "Thailand" },
    { value: "togo", text: "Togo" },
    { value: "tonga", text: "Tonga" },
    { value: "trinidad", text: "Trinidad and Tobago" },
    { value: "tunisia", text: "Tunisia" },
    { value: "turkey", text: "Turkey" },
    { value: "turkmenistan", text: "Turkmenistan" },
    { value: "tuvalu", text: "Tuvalu" },
    { value: "uganda", text: "Uganda" },
    { value: "ukraine", text: "Ukraine" },
    { value: "uae", text: "United Arab Emirates" },
    { value: "uk", text: "United Kingdom" },
    { value: "usa", text: "United States" },
    { value: "uruguay", text: "Uruguay" },
    { value: "uzbekistan", text: "Uzbekistan" },
    { value: "vanuatu", text: "Vanuatu" },
    { value: "venezuela", text: "Venezuela" },
    { value: "vietnam", text: "Vietnam" },
    { value: "yemen", text: "Yemen" },
    { value: "zambia", text: "Zambia" },
    { value: "zimbabwe", text: "Zimbabwe" }
];

// Populate country select
document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('country');
    if (countrySelect) {
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.value;
            option.textContent = country.text;
            countrySelect.appendChild(option);
        });
    }
});