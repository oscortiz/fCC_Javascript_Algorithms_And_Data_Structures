function rot13(str) {
    // 65: A --- 90: Z
    let decoded = [];
    let code = 0;

    str.split("").map(element => {
        if (element.charCodeAt() >= 65 && element.charCodeAt() <= 90) {
            code = element.charCodeAt() - 13;
            if (code < 65) {
                code += 26; // 64 - code - 90
            }
            decoded.push(String.fromCharCode(code));
        } else {
            decoded.push(element);
        }
    });

    return decoded.join("");
}
