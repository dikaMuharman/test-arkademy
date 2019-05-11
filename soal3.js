let data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function cetak(limit) {
    for (let j = 0; j < limit; j++) {
        let arr = [];
        for (let i = 0; i < 32; i++) {
            random = Math.floor(Math.random() * data.length)
            arr.push(data[random]);
        }
        console.log(arr.join(""));
    }
}
cetak(2);