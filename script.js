function calculateScore(callback) {
    const userAnswers = [
        document.getElementById('q1').value.trim(),
        document.getElementById('q2').value.trim(),
        document.getElementById('q3').value.trim(),
        document.getElementById('q4').value.trim()
    ];

    const correctAnswers = ["Luffy", "Zoro", "One Piece","Oda"];
    const score = callback(userAnswers, correctAnswers);

    document.getElementById("result").textContent = `Your Score: ${score} / ${correctAnswers.length}`;
}

function strictScoring(userAns, correctAns) {
    let score = 0;
    for (let i = 0; i < correctAns.length; i++) {
        if (userAns[i] === correctAns[i]) {
            score++;
        }
    }
    return score;
}

function lenientScoring(userAns, correctAns) {
    let score = 0;
    for (let i = 0; i < correctAns.length; i++) {
        if (userAns[i].toLowerCase() === correctAns[i].toLowerCase()) {
            score++;
        }
    }
    return score;
}