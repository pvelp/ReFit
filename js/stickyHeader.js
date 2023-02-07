// фиксация хэдера
$(window).scroll(function () {
    let wst = $(window).scrollTop(),
        height = 0,
        navfixed = $(".header");
    let mainWindow = document.querySelector(".testMain");
    if (wst > height) {
        navfixed.css({
            top: "0",
            position: "sticky",
            width: "100%",
            "z-index": "1",
            background: "rgba(22, 26, 30, 0.9)",
        });
    } else {
        navfixed.css({
            "margin-top": "0",
            top: "0",
            position: "sticky",
            width: "100%",
            background: "rgba(22, 26, 30, 1)",
        });
    }
});

// плановсть при переходе
jQuery(($) => {
    const nav = $(".nav");
    let navHeight = nav.outerHeight(); // получаем высоту навигации

    nav.find("a").on("click", function () {
        const id = $(this).attr("href");

        $("html, body").animate(
            {
                scrollTop: $(id).offset().top - navHeight,
            },
            470
        );

        return false;
    });
});
// плавность при скролле
window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY + 320;
    if (window.innerWidth > 768) {
        document.querySelectorAll(".section").forEach((el, i) => {
            if (
                el.offsetTop - document.querySelector(".nav").clientHeight <=
                scrollDistance
            ) {
                document.querySelectorAll(".nav a").forEach((el) => {
                    if (el.classList.contains("active")) {
                        el.classList.remove("active");
                    }
                });

                document
                    .querySelectorAll(".nav li")
                    [i].querySelector(".nav-link")
                    .classList.add("active");
            }
        });
    }
});
