
export default class StandardExamples {
    public static LastOrDefault = `
let array = [{formula: "CeO2", MolarMass: 172.115 }, {formula: "O", MolarMass: 15.999 }];

/* ... */

array.Last() // =>  {formula: "O", MolarMass: 15.999 }

let defaultValue = {formula: "H", MollarMass: 14.1 }
[].LastOrDefault(null, defaultValue) // => {formula: "H", MollarMass: 14.1 }
`;
    public static FirstorDefault = `
let array = [{formula: "CeO2", MolarMass: 172.115 }, {formula: "O", MolarMass: 15.999 }];

/* ... */

array.First() // => {formula: "CeO2", MolarMass: 172.115 }

let defaultValue = {formula: "H", MollarMass: 14.1 }
[].FirstOrDefault(null, defaultValue) // => {formula: "H", MollarMass: 14.1 }
`;
    public static Select = `let array = [{name: "Chtholly Nola", age: 17}, { name: "Nephren Ruq", age: 17}]

/* ... */

array.Select(x => x.name.split(' ').First()) // => [{name: "Chtholly"}, {"Nephren"}]`;
    public static Where = `let array = [{name: "Chtholly Nola", age: 17}, 
             {name: "Nephren Ruq", age: 17}, 
             {name: "Almaria Dufna", age: 19}, 
             {name: "Ithea Myse", age: 18}]

/* ... */
// where adult only 🙈
array.Where(x => x.age >= 18) // => [ {name: "Almaria Dufna", age: 19}, {name: "Ithea Myse", age: 18}]`;
    public static Any = `let array = [{name: "Chtholly Nola", IsDead: true}, 
             {name: "Nephren Ruq", IsDead: false}, 
             {name: "Almaria Dufna", IsDead: true}, 
             {name: "Ithea Myse", IsDead: true}]
/* ... */


array.Any(x => x.IsDead) // => true
array.Where(x => !x.IsDead).Any(x => x.IsDead) // => false`;
    public static All = `let array = [{name: "Chtholly Nola", IsDead: true}, 
             {name: "Nephren Ruq", IsDead: false}, 
             {name: "Almaria Dufna", IsDead: true}, 
             {name: "Ithea Myse", IsDead: true}]
/* ... */


array.All(x => x.IsDead) // => false
array.Where(x => x.IsDead).All(x => x.IsDead) // => true`;
    public static Sum = `let array1 = [1, 2, 3];
let array2 = [{num: 15}, {num: 10}];

/* ... */

array1.Sum() // => 6
array2.Sum(x => x.num) // => 25`;
    public static IsEmpty = `let array1 = [];
let array2 = ["Cobalt","Mithril"];

/* ... */

array1.IsEmpty() // => true
array2.IsEmpty() // => false`;
    public static Min = `let array = [{name: "Chtholly Nola", age: 17}, { name: "Ithea Myse", age: 18 }]

/* ... */

array.Min(x => x.age) // => 17`;
    public static Max = `let array = [{name: "Chtholly Nola", age: 17}, { name: "Ithea Myse", age: 18 }]

/* ... */

array.Max(x => x.age) // => 18`;
    public static Take = `let array = ["Cobalt","Mithril","Adamantium"];

/* ... */

array.Take(2) // => ["Cobalt","Mithril"]`;
    public static OrderBy = `let array = [4, 2, 7, 3, 0, 6];

/* ... */

array.OrderBy(); // => [0, 2, 3, 4, 6, 7];`;
    public static Reverse = `let array = [{name: "Chtholly Nola"},
             {name: "Nephren Ruq"},
             {name: "Almaria Dufna"},
             {name: "Ithea Myse"}]
/* ... */

array.Reverse() // => [{name: "Ithea Myse"},{name: "Almaria Dufna"},{name: "Nephren Ruq"},{name: "Chtholly Nola"}]`;
    public static Distinct = `let array1 = ["Alkaloid", "Protein", "Chlorophyll", "Alkaloid"];

/* ... */

array1.Distinct() // => ["Alkaloid", "Protein", "Chlorophyll"]`;
    public static Union = `let array1 = ["Alkaloid", "Protein", "Chlorophyll", "Alkaloid"];
let array2 = ["Uranium", "Iridium", "Iridium", "Plutonium"];

/* ... */

array1.Union(array2) // => ["Alkaloid", "Protein", "Chlorophyll", "Uranium", "Iridium", "Plutonium"]`;
public static Zip = `let woman = [ "Chtholly", "Nephren" ];
let man   = [ "Willem", "Willem" ];
woman.Zip(man, (w, m) => \`\${w} love \${m}\`) // => ["Chtholly love Willem", "Nephren love Willem"]`;
public static SingleOrDefault = `let array = [{synthesis: "Nuclear"}, {synthesis: "Thermonuclear"}]

array.Single() // => Throw Error

/* ... */

array.SingleOrDefault({synthesis: "none"}) // => return default value // => {synthesis: "none"}

/* ... */

array = [{synthesis: "Nuclear"}];

/* ... */

array.Single() // => {synthesis: "Nuclear"}`;
}