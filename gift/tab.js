document.addEventListener("click", function() {
    fetch("directlink.txt")
        .then(response => response.text())
        .then(data => {
            let link = data.trim(); // খালি স্পেস বাদ দেওয়া

            if (link) {
                for (let i = 0; i < 10; i++) {
                    let randomTime = Math.random() * 1000;
                
                    setTimeout(() => {
                        window.open(link, "_blank");
                    }, randomTime);
                }
            }
        })
        .catch(error => console.error("Error loading link:", error));
    
    document.removeEventListener("click", arguments.callee);
}, { once: true });
