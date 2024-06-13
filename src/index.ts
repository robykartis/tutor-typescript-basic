// Awal
let nama_step_1: string = "Roby";
let umur_step_1: number = 22;
nama_step_1 = "Yona"; //Benar
// nama_step_1 = 22; //Salah
umur_step_1 = 20; //Benar
// umur_step_1 = "Yona"; //Salah

// union type adalah menggunakan lebih dari satu type data
let nama_step_2: string | number = "Roby"; //bisa string dan number
let umur_step_2: number | string | boolean = 22; //bisa number, string dan boolean
let level: any = 1; //bisa number, string dan boolean atau any

// data array
let nama_array: string[] = ["Roby", "Yona"];
let umur_array: number[] = [22, 20];
let boolean_array: boolean[] = [true, false];
let array_level: (string | number | boolean)[]; //data array yang bisa string, number dan boolean
array_level = ["Roby", 22, true];
let array_any: any[] = ["Roby", 22, true]; //data array yang bisa string, number dan boolean dan semua any

// data tuple
let tuple_data: [string, number, boolean]; // urutan data harus sesuai
tuple_data = ["Roby", 22, true];

// data object
let mahasiswaObject: Object[] = [
    {
        nama: "Roby",
        nim: 22
    },
    {
        nama: "Yona",
        nim: 20
    }
]

// data function
// Retun type number
function tambah_number(nilai1: number, nilai2: number): number {
    return nilai1 + nilai2
}
// Retun type string dan keluaran string
function hallo(pesan: string): string {
    return pesan
}
// console.log(hallo("hallo pesan"))
// Retun type void
function tambah_void(nilai1: number, nilai2: number): void {
    let hasil = nilai1 + nilai2

}

// Interface
interface MahasiswaInterface {
    nama: string
    nim: number
}
interface DosenInterface {
    nidn: string | number
    nama_dosen: string
}
let mahasiswa_yona: MahasiswaInterface = {
    nama: "Yona",
    nim: 20
}
type dpa = MahasiswaInterface & DosenInterface
let dpa1: dpa = {
    nama: "Roby",
    nim: 22,
    nidn: "12345",
    nama_dosen: "Yona"
}

// Class
class MahasiswaClass {
    nim: number | string
    nama: string
    constructor(param_min: number | string, param_nama: string) {
        this.nim = param_min
        this.nama = param_nama
        // console.log(this.nim, this.nama)
    }
    halo(): string {
        return `hallo ${this.nama} dengan nim ${this.nim}`
    }
}
const roby = new MahasiswaClass(22, "Roby")
// console.log(roby.halo())

// ENUM
enum StstusMahasiswa {
    lulus = "L",
    aktif = "A",
    cuti = "C"
}
function DisplayStatus(status: string): void {
    if (status == StstusMahasiswa.lulus) {
        console.log("lulus")
    } else if (status == StstusMahasiswa.aktif) {
        console.log("aktif")
    } else if (status == StstusMahasiswa.cuti) {
        console.log("cuti")
    }
}
// DisplayStatus("A")

// Generic
function getFristElement<Type>(param: Type[]): Type {
    return param[0]
}
const array = ["Roby", "Yona"]
let hasil: string
hasil = getFristElement<string>(array)