$(window).on('scroll', function () {
    if ($(window).scrollTop() >= $(
      '.services-counter').offset().top + $('.services-counter').
        outerHeight() - window.innerHeight) {

      const counters = document.querySelectorAll('.counter');
      const speed = 300; // The lower the slower
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;

          // Lower inc to slow and higher to slow
          const inc = parseInt(target / speed);

          // console.log(inc);
          // console.log(count);

          // Check if target is reached
          if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = count + inc;
            // Call function every ms
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      });

    }
  });



  var fade_div1 = document.querySelector("#fade_div1");
  var fade_div2 = document.querySelector("#fade_div2");
  var heading1 = document.querySelector("#fade_head1");
  var heading2 = document.querySelector("#fade_head2");

  fade_div1.classList.add("first");

  fade_div2.classList.add("second");
  // heading1.classList.add("word-first");
  // heading2.classList.add("word-second");
  setInterval(() => {
    fade_div1.classList.toggle("first");
    fade_div2.classList.toggle("first");
    fade_div1.classList.toggle("second");
    fade_div2.classList.toggle("second");
  }, 10000)