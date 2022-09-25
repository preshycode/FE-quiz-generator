const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json();

    
    document.getElementById("id").innerHTML = `ADVICE #${data.slip.id}`;
    document.getElementById("advice").innerHTML = data.slip.advice;
}

document.getElementById("button").addEventListener("click", () => {
    fetchAdvice()
})