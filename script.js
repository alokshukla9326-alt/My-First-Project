function route(){var h=location.hash.replace('#','');if(h!=='company')h='teen';
['teen','company'].forEach(function(k){document.getElementById('v-'+k).classList.toggle('on',k===h);document.getElementById('t-'+k).classList.toggle('on',k===h)});
document.title=h==='company'?'Funngro for Brands – Reach Gen Z India at Scale':'Funngro – Earn Online with India’s Biggest Brands | Teen & Brand Platform'}
window.addEventListener('hashchange',route);route();
