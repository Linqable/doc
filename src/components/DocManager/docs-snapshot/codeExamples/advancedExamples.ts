
export default class AdvancedExamples {
    public static Transpose = `let array = [
    [
        "Nola", "Myse"
    ],
    [
        "Ruq"
    ],
    [
        "Dufna",
        "Nygglatho",
        "Kumesh"
    ]
];

/* ... */

array.Transpose();
// result ->
    [
      [
        'Nola',
        'Ruq',
        'Dufna',
      ],
      [
        'Myse',
        'Nygglatho',
      ],
      [
        'Kumesh',
      ],
    ]
`;
    public static Evaluate = `let array = [() => "Chtholly", () => "Ithea", () => 1 + 1, () => !true]

/* ... */

array.Evaluate(); // => ["Chtholly", "Ithea", 2, false]`;
    public static Acquire = `let array = [{name: "Chtholly Nola", age: 17}, { name: "Ithea Myse", age: 18 }]

/* ... */

array.Acquire(); // => success // => [{name: "Chtholly Nola", age: 17}, { name: "Ithea Myse", age: 18 }]
array.Acquire(); // => fail // => [] // => throw`;
    public static Consume = `let array = [{name: "Chtholly Nola", age: 17}, { name: "Ithea Myse", age: 18 }]

/* ... */

array.Comsume();`;
    public static Batch = `let array = [{name: "Chtholly Nola"}, 
             {name: "Nephren Ruq"}, 
             {name: "Almaria Dufna"}, 
             {name: "Ithea Myse"}]

/* ... */

array.Batch(2); // => [[{name: "Chtholly Nola"}, {name: "Nephren Ruq"}],[{name: "Almaria Dufna"}, {name: "Ithea Myse"}]]
// Returns an array with 2 arrays 😏`;
    public static MaxBy = `let array = [{name: "Chtholly Nola", age: 17}, { name: "Ithea Myse", age: 18 }]

/* ... */

array.MaxBy(x => x.age) // => { name: "Ithea Myse", age: 18 }`;
    public static MinBy = `let array = [{name: "Chtholly Nola", age: 17}, { name: "Ithea Myse", age: 18 }]

/* ... */

array.MinBy(x => x.age) // => {name: "Chtholly Nola", age: 17}`;
    public static Exclude = `let array = ["CO2", "Ir2O", "C2O3", "NH3", "C2H6", "H2C03"]

/* ... */

array.Exclude(1, 2) // -> ["CO2", "NH3", "C2H6", "H2C03"]`;
    public static Flatten = `let array = ["CO2", ["C2O3", ["NH3", 127.4], 241, "H2C03"]

/* ... */

array.Flatten() // -> ["CO2", "C2O3", "NH3", 127.4, 241, "H2C03"]`;
    public static Pairwise = 'let array = ["atom", "core", "neutron"];' +
        '/* ... */' +
        'array.Pairwise((x, y) => `${x} contains ${y}`) // -> ["atom contains core", "core contains neutron"]';
    public static Pipe = `let array = [{name: 'neutron', lifetime: 880}, {name: "proton", lifetime: Infinity}]

/* ... */

array.Pipe(x => x.lifetime++);
array.Where(x => x.name == "neutron").lifetime // -> 881`;
    public static Lag = `let array = [0, 1, 2, 3, 4];

/* ... */

array.Lag(/*step*/2, /*defaultValue*/0, (a, b) => { return { A: a, B: b}; })
//returned -> [{"A":0,"B":0},{"A":1,"B":0},{"A":2,"B":0},{"A":3,"B":1},{"A":4,"B":2}]`;
}