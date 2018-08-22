function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }

    console.log(string);
    return string;
}

zeroPad(4, 6);