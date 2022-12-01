function quarterNickel() {
    for (let counter = 0; counter <= 100; counter += 1) {
        if ((counter % 5) && (counter % 10) && (counter % 25)) {
            console.log("quarterNickel")
        }
    }
}