$(document).ready(function() {
    var toggle = 0;

    $('.navbar a').on('click', function() {
        $('.navbar a').not(this).removeClass('underline');
        $(this).toggleClass('underline');
        if (!$(this).hasClass('dropbtn') && toggle == 1) {
            $('.dropdown-content').hide();
            toggle = 0;
        }
    });
    
    $('.dropbtn').click(function() {
        if (toggle == 0) {
            toggle = 1;
            $('.dropdown-content').show();
        }
        else {
            $('.dropdown-content').hide();
            toggle = 0;
        }
    });

    date = new Date();
    const monthList = [
        "January", "February", 
        "March", "April", 
        "May", "June", 
        "July", "August", 
        "September", "October", 
        "November", "December"
    ];
    const dayOfWeekList = [
        "Monday", "Tuesday",
        "Wednesday", "Thursday",
        "Friday", "Saturday", 
        "Sunday"
    ]

    y = date.getFullYear();
    m = monthList[date.getMonth()];
    d = date.getDate();
    dayOfWeek = dayOfWeekList[date.getDay()];
    hourOfDay = date.getHours();
    minuteOfDay = date.getMinutes();
    restOpen = document.getElementById('hour-minute').innerHTML = "We are currently: OPEN"
    restClosed = document.getElementById('hour-minute').innerHTML = "We are currently: CLOSED"

    document.getElementById('date').innerHTML = m.toUpperCase() + " " + d + ", " + y;
    if (dayOfWeek in dayOfWeekList.splice(4,3)) {
        if (hourOfDay < 22) {
            if (hourOfDay >= 10) {
                if (hourOfDay == 10 && minuteOfDay >= 30) {
                    restOpen;
                }
                else if (hourOfDay == 10 && minuteOfDay < 30) {
                    restClosed;
                }
                else {
                    restOpen;
                } 
            }
            else {
                restOpen;
            }
        }
        else {
            restClosed;
        }
    }
    else if (dayOfWeek == "Friday" || dayOfWeek == "Saturday") {
        if (hourOfDay < 23) {
            if (hourOfDay >= 10) {
                if (hourOfDay == 10 && minuteOfDay >= 30) {
                    restOpen;
                }
                else if (hourOfDay == 10 && minuteOfDay < 30) {
                    restClosed;
                }
                else {
                    restOpen;
                } 
            } 
            else {
                restOpen;
            } 
        }
        else {
            restClosed;
        }
    }
    else {
        if (hourOfDay < 22) {
            if (hourOfDay >= 11) {
                if (hourOfDay == 11 && minuteOfDay >= 30) {
                    restOpen;
                }
                else if (hourOfDay == 11 && minuteOfDay < 30) {
                    restClosed;
                }
                else {
                    restOpen;
                }
            }
            else {
                restOpen;
            }
        }
        else {
            restClosed;
        }
    }
    
    let slideIndex = 1;
    showSlides(slideIndex);
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}