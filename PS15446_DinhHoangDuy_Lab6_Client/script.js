
const type = document.querySelector("select");
const translateBtn = document.querySelector("#translate-btn");
const input = document.querySelector("textarea");
const output = document.querySelector(".data");

input.focus();

input.addEventListener("keydown", function (e) {
    if (e.keyCode == 8) {
        output.innerHTML = "";
    }
})

translateBtn.addEventListener("click", function () {
    let from, to, word;
    if (type.value == "ENG") {
        from = 'ENG';
        to = "VN";
    }
    if (type.value == "VN") {
        from = "VN";
        to = "ENG";
    }
    word = input.value.trim();
    word = word.replace(/\s+/g, "%20");

    let url = `http://localhost:3000/translator/${from}/${to}/${word}`;
    fetch(url)
        .then(blob => blob.json())
        .then(data => {
            console.log(data);

            if (data == "") {
                output.innerHTML = "không tìm thấy từ bạn muốn dịch";
                return false;
            }
            if (from == "ENG") {

                output.innerHTML = data[0].detail;
            }
            if (from == "VN") {
                let res = "";
                data.forEach(i => {
                    res += `<p>${i.word}</p>`;
                })
                output.innerHTML = res;
            }
        })
        .catch(e => {
            console.log(e);
            return e;
        });
})




