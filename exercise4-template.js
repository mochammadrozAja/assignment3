/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

//Cara1

function subArray(arr) {
    let nilaiMax='';
    let subarray=[];
    for (let i = 0; i < arr.length; i++) {
        let nilai = arr[i];
        // console.log(nilai)
        for (let j = i+1; j < arr.length; j++) {
            nilai += arr[j];
            // console.log(">> after : ", nilai, " nilaiMax : ",nilaiMax);
            // console.log(nilai,arr[j], nilaiMax);
            if (nilaiMax < nilai) {
                nilaiMax = nilai;
                subarray = arr.slice(i,j+1);
                // console.log(nilaiMax);
                // console.log(subarray);
            }
        }
    }
    return [subarray, nilaiMax];
}
// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]

//Cara2

function tambah(total, num) {
  return total + num;
}

function subArray2(arr) {
    let nilaiMax='';
    let subarray=[];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (nilaiMax < arr.slice(i,j+1).reduce(tambah)) {
                nilaiMax = arr.slice(i,j+1).reduce(tambah);
                subarray = arr.slice(i,j+1);
            }
            // console.log(subarray, subarray.reduce(tambah));
        }
    }
    return [subarray, nilaiMax];
}

// Test Case
let input2 = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray2(input2)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
