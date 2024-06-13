"use strict";
// Awal
let nama_step_1 = "Roby";
let umur_step_1 = 22;
nama_step_1 = "Yona"; //Benar
// nama_step_1 = 22; //Salah
umur_step_1 = 20; //Benar
// umur_step_1 = "Yona"; //Salah
// union type adalah menggunakan lebih dari satu type data
let nama_step_2 = "Roby"; //bisa string dan number
let umur_step_2 = 22; //bisa number, string dan boolean
let level = 1; //bisa number, string dan boolean atau any
// data array
let nama_array = ["Roby", "Yona"];
let umur_array = [22, 20];
let boolean_array = [true, false];
let array_level; //data array yang bisa string, number dan boolean
array_level = ["Roby", 22, true];
let array_any = ["Roby", 22, true]; //data array yang bisa string, number dan boolean dan semua any
// data tuple
let tuple_data; // urutan data harus sesuai
tuple_data = ["Roby", 22, true];
// data object
let mahasiswaObject = [
    {
        nama: "Roby",
        nim: 22
    },
    {
        nama: "Yona",
        nim: 20
    }
];
// data function
// Retun type number
function tambah_number(nilai1, nilai2) {
    return nilai1 + nilai2;
}
// Retun type string dan keluaran string
function hallo(pesan) {
    return pesan;
}
// console.log(hallo("hallo pesan"))
// Retun type void
function tambah_void(nilai1, nilai2) {
    let hasil = nilai1 + nilai2;
}
let mahasiswa_yona = {
    nama: "Yona",
    nim: 20
};
let dpa1 = {
    nama: "Roby",
    nim: 22,
    nidn: "12345",
    nama_dosen: "Yona"
};
// Class
class MahasiswaClass {
    constructor(param_min, param_nama) {
        this.nim = param_min;
        this.nama = param_nama;
        // console.log(this.nim, this.nama)
    }
    halo() {
        return `hallo ${this.nama} dengan nim ${this.nim}`;
    }
}
const roby = new MahasiswaClass(22, "Roby");
// console.log(roby.halo())
// ENUM
var StstusMahasiswa;
(function (StstusMahasiswa) {
    StstusMahasiswa["lulus"] = "L";
    StstusMahasiswa["aktif"] = "A";
    StstusMahasiswa["cuti"] = "C";
})(StstusMahasiswa || (StstusMahasiswa = {}));
function DisplayStatus(status) {
    if (status == StstusMahasiswa.lulus) {
        console.log("lulus");
    }
    else if (status == StstusMahasiswa.aktif) {
        console.log("aktif");
    }
    else if (status == StstusMahasiswa.cuti) {
        console.log("cuti");
    }
}
// DisplayStatus("A")
// Generic
function getFristElement(param) {
    return param[0];
}
const array = ["Roby", "Yona"];
let hasil;
hasil = getFristElement(array);
