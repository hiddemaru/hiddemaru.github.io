// event pd saat link di klk
$('.page-scroll').on('click', function(e){

	// mengambil href
	var tujuan = $(this).attr('href');
	
	// tangkap element ybs
	var elemenTujuan = $(tujuan);

	// animasi scroll saat klik nav
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top
	}, 1000, 'easeOutExpo');



	e.preventDefault(); 

});







        // nav animation start
        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#trigger1",
            start: "center bottom"
            }
        });

        const ask = gsap.timeline({
        scrollTrigger: {
            trigger: "#ask-trigger",
            start: "center bottom"
            }
        });

        const footer = gsap.timeline({
        scrollTrigger: {
            trigger: "#footer-trigger",
            start: "center bottom"
            }
        });

        const portfolio = gsap.timeline({
        scrollTrigger: {
            trigger: "#portfolio-work",
            start: "center bottom"
            }
        });

        const line = gsap.timeline({
        scrollTrigger: {
            trigger: "#navbar",
            start: "center bottom"
            }
        });



        ask.from(".how", {y: 50, opacity:0, duration:.8}, "-=1")
        ask.from(".interst", {y: 50, opacity:0, duration:.8}, "-=1")
        ask.from(".qtext", {y: 50, opacity:0, duration:.8}, "-=1")
        ask.from(".quotes", {y: 50, opacity:0, duration:.8}, "-=1")
        ask.from(".hr", {y: 50, opacity:0, duration:1}, "-=1")
        portfolio.from(".tittle", {y: 50, opacity:0, duration:.6}, "-=1")
        portfolio.from(".tittle2", {y: 50, opacity:0, duration:.8}, "-=1")
        portfolio.from(".tittle3", {y: 50, opacity:0, duration:1}, "-=1")
        portfolio.from(".tittle4", {y: 50, opacity:0, duration:1.2}, "-=1")
        portfolio.from(".tittle-content", {y: 50, opacity:0, duration:1.2}, "-=1")
        portfolio.from(".tittle-content2", {y: 50, opacity:0, duration:2}, "-=1")
        footer.from(".contact", {y: 50, opacity:0, duration:1.5}, "-=1")
        footer.from(".hello", {y: 50, opacity:0, duration:1.5}, "-=1")
        footer.from("#git", {y: 50, opacity:0, duration:.5}, "-=1")
        footer.from("#ig", {y: 50, opacity:0, duration:1.2}, "-=1")
        footer.from("#wa", {y: 50, opacity:0, duration:1.5}, "-=1")
    

        // nav animation end
        