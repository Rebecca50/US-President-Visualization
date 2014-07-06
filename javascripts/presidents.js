var presidents = [
{name: "Washington "   , days: 2864, start: 1789, end: 1797},
{name: "J.Adams    "   , days: 1460, start: 1797, end: 1801},
{name: "Jefferson  "   , days: 2921, start: 1801, end: 1809},
{name: "Madison    "   , days: 2921, start: 1809, end: 1817},
{name: "Monroe     "   , days: 2921, start: 1817, end: 1825},
{name: "JQ.Adams   "   , days: 1460, start: 1825, end: 1829},
{name: "Jackson    "   , days: 2921, start: 1829, end: 1837},
{name: "VanBuren   "   , days: 1460, start: 1837, end: 1841},
{name: "Harrison   "   , days:   31, start: 1841, end: 1841},
{name: "Tyler      "   , days: 1427, start: 1841, end: 1845},
{name: "Polk       "   , days: 1460, start: 1845, end: 1849},
{name: "Taylor     "   , days:  491, start: 1849, end: 1850},
{name: "Filmore    "   , days:  967, start: 1850, end: 1853},
{name: "Pierce     "   , days: 1460, start: 1853, end: 1857},
{name: "Buchanan   "   , days: 1460, start: 1857, end: 1861},
{name: "Lincoln    "   , days: 1503, start: 1861, end: 1865},
{name: "Johnson    "   , days: 1418, start: 1865, end: 1869},
{name: "Grant      "   , days: 2921, start: 1869, end: 1877},
{name: "Hayes      "   , days: 1460, start: 1877, end: 1881},
{name: "Garfield   "   , days:  199, start: 1881, end: 1881},
{name: "Arthur     "   , days: 1260, start: 1881, end: 1885},
{name: "Cleveland  "   , days: 1460, start: 1885, end: 1889},
{name: "Harrison   "   , days: 1460, start: 1889, end: 1893},
{name: "Cleveland  "   , days: 1460, start: 1893, end: 1897},
{name: "McKinley   "   , days: 1655, start: 1897, end: 1901},
{name: "T.Roosevelt"   , days: 2727, start: 1901, end: 1909},
{name: "Taft       "   , days: 1460, start: 1909, end: 1913},
{name: "Wilson     "   , days: 2921, start: 1913, end: 1921},
{name: "Harding    "   , days:  881, start: 1921, end: 1923},
{name: "Coolidge   "   , days: 2039, start: 1923, end: 1929},
{name: "Hoover     "   , days: 1460, start: 1929, end: 1933},
{name: "FD.Roosevelt"  , days: 4452, start: 1933, end: 1945},
{name: "Truman     "   , days: 2810, start: 1945, end: 1953},
{name: "Eisenhower "   , days: 2922, start: 1953, end: 1961},
{name: "Kennedy    "   , days: 1036, start: 1961, end: 1963},
{name: "Johnson    "   , days: 1886, start: 1963, end: 1969},
{name: "Nixon      "   , days: 2027, start: 1969, end: 1974},
{name: "Ford       "   , days:  895, start: 1974, end: 1977},
{name: "Carter     "   , days: 1461, start: 1977, end: 1981},
{name: "Reagan     "   , days: 2922, start: 1981, end: 1989},
{name: "GHW.Bush   "   , days: 1461, start: 1989, end: 1993},
{name: "Clinton    "   , days: 2922, start: 1993, end: 2001},
{name: "GW.Bush    "   , days: 2922, start: 2001, end: 2009},
{name: "Obama      "   , days: 1461, start: 2009, end: 2017}
];

for (var i = 0; i < presidents.length; i++) {
  presidents[i].name = presidents[i].name.trim();
};
