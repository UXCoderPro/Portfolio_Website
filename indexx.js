// navbar scroll background function
const $navBar = $('#navbar');

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $navBar.addClass('scrolled');
    } else {
        $navBar.removeClass('scrolled');
    }
});

 

// Side Menu

const $icon = $('#icon');
const $sideMenu = $('#sidemenu');
const $overlay = $('#overlay');
const $close = $('#close');

$icon.on('click', function () {
    $sideMenu.toggleClass('open');
    $overlay.toggleClass('active');
    $('body').addClass('side-open');
});

$overlay.on('click', function () {
    $sideMenu.removeClass('open');
    $overlay.removeClass('active');
    $('body').removeClass('side-open');
});

$close.on('click', function () {
    $sideMenu.removeClass('open');
    $overlay.removeClass('active');
    $('body').removeClass('side-open');
});





const $parallaxImage = $('#parallaxImage');
const $secondSection = $('.second');
const $mainSection = $('#main');

$(window).on('scroll', function () {
    const scrollY = $(window).scrollTop(); // Current scroll position
    const secondSectionTop = $secondSection.offset().top; // Top of the second section
    const secondSectionBottom = secondSectionTop + $secondSection.outerHeight();
    const mainSectionBottom = $mainSection.offset().top + $mainSection.outerHeight();

    if (scrollY >= secondSectionTop && scrollY < secondSectionBottom) {
        $parallaxImage.addClass('animate').removeClass('reset hidden');
    } else if (scrollY >= secondSectionBottom) {
        $parallaxImage.addClass('hidden').removeClass('animate');
    } else if (scrollY < mainSectionBottom) {
        $parallaxImage.addClass('reset').removeClass('animate hidden');
    }
});


// resume download

function viewAndDownloadResume() {
    const viewUrl = 'https://drive.google.com/file/d/1OREiAgBMfuDaIn54CArz5oc8YiO0VB4S/view?usp=sharing';
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1OREiAgBMfuDaIn54CArz5oc8YiO0VB4S';

    // Open the view URL in a new tab
    window.open(viewUrl, '_blank');

    // Create a temporary link for downloading
    const $link = $('<a>', {
        href: resumeUrl,
        download: 'Abdul_Aziz_VI_CV.pdf'
    });

    $('body').append($link); // Append the link to the body
    $link[0].click();        // Trigger the click event
    $link.remove();          // Remove the link after the click
}


// scroll effect

$(document).on('scroll', function () {
    const scrollPosition = $(window).scrollTop(); // Get the vertical scroll position
    const rotation = scrollPosition / 5; // Adjust the divisor to control rotation speed
    
    $('#rotate').css('transform', `rotate(${rotation}deg)`); // Apply rotation
});



// thirdsection star

$(document).ready(function () {
    const $starSections = $('.stars-container');
    const starCount = 50; // Adjust the number of stars

    // Function to generate random positions and timings for stars
    function createStars($container) {
        for (let i = 0; i < starCount; i++) {
            const $star = $('<div>').addClass('star');

            // Randomize star position
            const xPos = Math.random() * 100; // Percentage of container width
            const yPos = Math.random() * 100; // Percentage of container height

            // Apply position
            $star.css({
                left: `${xPos}%`,
                top: `${yPos}%`,
                animationDelay: `${Math.random() * 5}s`, // Randomize animation delay
            });

            // Add star to the container
            $container.append($star);
        }
    }

    // Create stars for each section
    $starSections.each(function () {
        createStars($(this));
    });
});


// skill animation

$(document).ready(function () {
    const $rows = $('.tools');

    $rows.each(function () {
        const $row = $(this);
        
        // Clone the content to create a seamless loop
        $row.children().each(function () {
            const $item = $(this);
            const $clone = $item.clone();
            $row.append($clone);
        });
    });
});











