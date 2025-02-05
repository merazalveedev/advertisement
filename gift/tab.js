document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 10; i++) {
        let randomTime = Math.random() * 1000; // 0 থেকে 1000ms এর মধ্যে এলোমেলো সময়
        
        setTimeout(() => {
            window.open("https://www.merazalvee.com/", "_blank");
        }, randomTime);
    }
});
