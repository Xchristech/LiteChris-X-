var spin = require('spinnies');

var spinner = {
    "interval": 120,
    "frames": [
        "",
        "LiteChris X Is Active",
        "LiteChris X Is Active",
        "LiteChris X Is Active",
        "LiteChris X Is Active",
        "LiteChris X Is Active",
        "LiteChris X Is Active",
        "Loading Messages",
        "Loading Messages.",
        "Loading Messages..",
        "Loading Messages...",
        ""
    ]
};

let globalSpinner;

var getGlobalSpinner = (disableSpins = false) => {
    if (!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins });
    return globalSpinner;
};

let spins = getGlobalSpinner(false);

module.exports.start = (id, text) => {
    spins.add(id, { text: text });
};
