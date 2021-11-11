// var courseItems = document.querySelectorAll(".course-item-wrapper");
// var courseItemsInterval = setInterval(function () {
//     for (var courseItem of courseItems) {
//         if (!courseItem.classList.contains("animated")) {
//             courseItem.classList.add("animated");
//             break;
//         }
//     }
// }, 500);


document.addEventListener("scroll", function () {
    var windowHeight = window.innerHeight;
    console.log("height: " + windowHeight)
    var scrollTop = document.documentElement.scrollTop;
    console.log("SCROLL:" + scrollTop)
    var courseItems = document.querySelectorAll(".course-item-wrapper");

    for (var courseItem of courseItems) {
        if (!courseItem.classList.contains("animated")) {
            var offsetTopOfCourseItem = window.pageYOffset + courseItem.getBoundingClientRect().top;
            console.log("offsett:" + offsetTopOfCourseItem)
            var animateCalc = offsetTopOfCourseItem - windowHeight+50;
            console.log(animateCalc)
            if (animateCalc <= scrollTop) {
                courseItem.classList.add("animated");
            }
        }

    }

})