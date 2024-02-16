let foydalanuvchi_nomi = prompt("Foydalanuvchi nomini kiriting:").toLocaleLowerCase()
let parol = prompt("Parolni kiriting:").toLocaleLowerCase()


if (foydalanuvchi_nomi === "foydalanuvchi" && parol === "o'tish") {
    alert("Kirish muvaffaqiyatli");
} else {
    alert("Kirish amalga oshmadi");
}
