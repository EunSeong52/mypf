// 전체 background


gsap.fromTo("body", {
    backgroundColor: "#E3252F"},{
    scrollTrigger: {
      trigger: "#page2",
      start: "top top",
      end: "100% bottom",
      scrub: true
    },
    backgroundColor: "#fff"
  })

gsap.fromTo("body",{
    backgroundColor:"#fff"
  },{
    scrollTrigger:{
      trigger:"#page6",
      start:"top top",
      end:"bottom top",
      scrub:1,
       markers:true
    },
    backgroundColor:"#000"
  });