// Criando símbolos únicos [00:01:40]
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false

// Usando o Registro Global [00:05:09]
const s3 = Symbol.for("CFB");
const s4 = Symbol.for("CFB");
console.log(s3 === s4); // true (são o mesmo identificador global)

// Recuperando a chave global [00:07:30]
console.log(Symbol.keyFor(s3)); // "CFB"
console.log(Symbol.keyFor(s1)); // undefined (não está no registro global)