function pattern(rowCount) {
    for (let i = rowCount; i > 0; i--) {
        let pat = "";
        for (let j = 0; j < i; j++) {
            pat += "*";
        }
        console.log(pat);
    }
}

pattern(5);