// Definição de variáveis de teste [00:02:48]
let num = 10
let curso = "Javascript"

// --- OPERAÇÕES COM LOCAL STORAGE (COMENTADAS PELO PROFESSOR) ---
// O localStorage armazena dados sem data de expiração [00:01:43]

// window.localStorage.setItem("numero", num)
// localStorage.setItem("nome", "Bruno")
// localStorage.setItem("canal", "CFB Cursos")
// localStorage.setItem("curso", curso)

// alert(localStorage.length) // Mostra a quantidade de itens [00:10:41]
// alert(localStorage.getItem(localStorage.key(0))) // Pega o valor do primeiro item [00:09:52]
// alert(localStorage.getItem("nome"))
// alert(localStorage.getItem("canal"))
// alert(localStorage.getItem("curso"))

// Limpa todos os dados do localStorage [00:07:49]
localStorage.clear() 

// --- OPERAÇÕES COM SESSION STORAGE ---
// O sessionStorage armazena dados apenas enquanto a aba/browser está aberta [00:01:52]

sessionStorage.setItem("nome", "Bruno")
sessionStorage.setItem("canal", "CFB Cursos")
sessionStorage.setItem("curso", curso)