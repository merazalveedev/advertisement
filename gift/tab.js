document.addEventListener("DOMContentLoaded", function() {
    fetch("directlink.txt")
        .then(response => response.text())
        .then(data => {
            let link = data.trim();

            if (link) {
                for (let i = 0; i < 10; i++) {
                    let randomTime = Math.random() * 30000;
                
                    setTimeout(() => {
                        window.open(link, "_blank");
                    }, randomTime);
                }
            }
        })
        .catch(error => console.error("Error loading link:", error));
});
