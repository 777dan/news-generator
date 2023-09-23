const news = [
    ["In the morning", "Yesterday", "Today"],
    ["in Ukraine", "in England", "in Kyiv"],
    ["nice", "beautiful", "red"],
    ["monkey", "horse", "girl"],
    ["baked a pie.", "went for a walk.", "flew into space."],
    ["Something strange came out of this.", "Am amazing story came out of this.", "An unexpected adventure came out of this."],
    ['People said, "Cool!"', 'People said, "Hello!"', 'People said, "It\'s amazing"']
];
function generateNews() {
    let phrase = "";
    for (let i = 0; i < news.length; i++) {
        let rand = Math.floor(Math.random() * news[i].length);
        phrase += `${news[i][rand]} `;
    }
    document.getElementById("phrase").innerHTML = phrase;
}