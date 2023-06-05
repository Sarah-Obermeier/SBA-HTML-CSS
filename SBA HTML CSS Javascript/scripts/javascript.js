
document.getElementById('start').onclick = startQuiz();

function startQuiz()
{
    var kanaType = document.getElementById('kanaSelect').value;

    if (kanaType == "hiragana")
    {
        document.getElementById("kanaImage").src ="../images/Hiragana A.png";
    }
    else if (kanaType == "katakana")
    {
        document.getElementById("kanaImage").src ="../images/Katakana A.png";
    }
    else
    {
        document.getElementById('kanaImage').src="../images/Hiragana A.png";
    }
}
