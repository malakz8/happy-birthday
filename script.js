// =========================================================
// PAGE 1 → PAGE 2
// GO TO CAKE
// =========================================================

function goToCake() {

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    page1.classList.remove("active");
    page2.classList.add("active");
}



// =========================================================
// BLOW CANDLES
// =========================================================

let candlesBlown = false;


function blowCandles() {

    // Prevent clicking more than once
    if (candlesBlown) {
        return;
    }

    candlesBlown = true;


    const cake =
        document.getElementById("cake");

    const birthdayReveal =
        document.getElementById("birthdayReveal");


    // Blow out candles
    cake.classList.add("blown");


    // First confetti
    createConfetti();


    // Show birthday reveal
    setTimeout(function () {

        birthdayReveal.classList.add("show");

        // Second confetti burst
        secondConfettiBurst();

    }, 1200);
}



// =========================================================
// FIRST CONFETTI
// =========================================================

function createConfetti() {

    const container =
        document.getElementById("confetti");


    const colors = [
        "#17375e",
        "#789cbe",
        "#a9c3db",
        "#f8f2e8",
        "#f3aa3e",
        "#ffffff"
    ];


    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("span");


        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        piece.style.animationDuration =
            2 + Math.random() * 2 + "s";


        piece.style.animationDelay =
            Math.random() * 0.4 + "s";


        piece.style.transform =
            "rotate(" +
            Math.random() * 360 +
            "deg)";


        container.appendChild(piece);


        setTimeout(function () {

            piece.remove();

        }, 4500);
    }
}



// =========================================================
// SECOND CONFETTI BURST
// =========================================================

function secondConfettiBurst() {

    const container =
        document.getElementById("confetti");


    const colors = [
        "#17375e",
        "#789cbe",
        "#a9c3db",
        "#dce8f2",
        "#f8f2e8",
        "#ffffff"
    ];


    for (let i = 0; i < 65; i++) {

        const piece =
            document.createElement("span");


        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        piece.style.animationDuration =
            2.3 + Math.random() * 1.8 + "s";


        piece.style.animationDelay =
            Math.random() * 0.3 + "s";


        piece.style.width =
            7 + Math.random() * 8 + "px";


        piece.style.height =
            10 + Math.random() * 12 + "px";


        piece.style.transform =
            "rotate(" +
            Math.random() * 360 +
            "deg)";


        container.appendChild(piece);


        setTimeout(function () {

            piece.remove();

        }, 4500);
    }
}



// =========================================================
// ENTER / SPACE CAN BLOW THE CANDLES
// =========================================================

document.addEventListener(
    "keydown",
    function (event) {

        const page2 =
            document.getElementById("page2");

        const birthdayReveal =
            document.getElementById("birthdayReveal");


        if (
            page2 &&
            page2.classList.contains("active") &&
            birthdayReveal &&
            !birthdayReveal.classList.contains("show") &&
            (
                event.key === "Enter" ||
                event.key === " "
            )
        ) {

            event.preventDefault();

            blowCandles();
        }
    }
);



// =========================================================
// PAGE 2 → PAGE 4
// GO TO LOVE LETTER
// =========================================================

function goToLetter() {

    const page2 =
        document.getElementById("page2");

    const page4 =
        document.getElementById("page4");


    if (!page2 || !page4) {
        return;
    }


    // Hide birthday page
    page2.classList.remove("active");


    // Show letter page
    page4.classList.add("active");


    // Restart letter animation
    const letterCard =
        document.querySelector(
            "#page4 .letter-card"
        );


    if (letterCard) {

        letterCard.classList.remove(
            "letter-arrive"
        );


        void letterCard.offsetWidth;


        letterCard.classList.add(
            "letter-arrive"
        );
    }
}



// =========================================================
// LOVE LETTER / REASON PAGES
// PAGE 4 → 5 → 6 → 7 → 8 → 9 → 10
// =========================================================

function goToReasonPage(targetPageId) {

    // Find the page that is currently visible
    const currentPage =
        document.querySelector(
            ".page.active"
        );


    // Find the page we want to open
    const targetPage =
        document.getElementById(
            targetPageId
        );


    // Safety check
    if (!targetPage) {
        return;
    }


    // Hide current page
    if (currentPage) {

        currentPage.classList.remove(
            "active"
        );
    }


    // Show new page
    targetPage.classList.add(
        "active"
    );


    // Animate the reason card
    const reasonCard =
        targetPage.querySelector(
            ".reason-card"
        );


    if (reasonCard) {

        reasonCard.classList.remove(
            "reason-arrive"
        );


        // Force browser to restart animation
        void reasonCard.offsetWidth;


        reasonCard.classList.add(
            "reason-arrive"
        );
    }
}



// =========================================================
// OPTIONAL — KEYBOARD NAVIGATION FOR REASON PAGES
// RIGHT ARROW = NEXT PAGE
// =========================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "ArrowRight") {
            return;
        }


        const activePage =
            document.querySelector(
                ".page.active"
            );


        if (!activePage) {
            return;
        }


        const currentId =
            activePage.id;


        const nextPages = {

            page4: "page5",

            page5: "page6",

            page6: "page7",

            page7: "page8",

            page8: "page9",

            page9: "page10"
        };


        const nextPage =
            nextPages[currentId];


        if (nextPage) {

            goToReasonPage(
                nextPage
            );
        }
    }
);



// =========================================================
// LITTLE HEART BURST WHEN CHANGING REASON PAGE
// =========================================================

function createHeartBurst() {

    const activePage =
        document.querySelector(
            ".page.active"
        );


    if (!activePage) {
        return;
    }


    for (let i = 0; i < 10; i++) {

        const heart =
            document.createElement("span");


        heart.innerHTML =
            i % 2 === 0
                ? "♡"
                : "♥";


        heart.style.position =
            "absolute";


        heart.style.left =
            35 + Math.random() * 30 + "%";


        heart.style.top =
            40 + Math.random() * 20 + "%";


        heart.style.color =
            i % 3 === 0
                ? "#789cbe"
                : "#17375e";


        heart.style.fontSize =
            18 + Math.random() * 22 + "px";


        heart.style.zIndex =
            "100";


        heart.style.pointerEvents =
            "none";


        heart.style.transition =
            "all 1s ease";


        activePage.appendChild(
            heart
        );


        setTimeout(function () {

            heart.style.opacity =
                "0";


            heart.style.transform =
                "translateY(-80px) " +
                "rotate(" +
                (
                    -30 +
                    Math.random() * 60
                ) +
                "deg) " +
                "scale(1.4)";

        }, 20);


        setTimeout(function () {

            heart.remove();

        }, 1100);
    }
}



// =========================================================
// ADD HEART BURST TO REASON BUTTONS
// =========================================================

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".reasons-next-button"
            );


        if (!button) {
            return;
        }


        setTimeout(function () {

            createHeartBurst();

        }, 120);
    }
);