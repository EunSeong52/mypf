//cursor
const coords={x:0,y:0};
const circles=document.querySelectorAll(".circle");
const svg=document.querySelector(".cursor img")
let timer;

svg.style.visibility="hidden";

circles.forEach((circle, index)=>{
    circle.x=0;
    circle.y=0;
})

window.addEventListener("mousemove",function(e){
    coords.x=e.clientX -12;
    coords.y=e.clientY -12;

   clearTimeout(timer)

   svg.style.visibility="hidden";
   circles.forEach((circle)=>{
    circle.style.display='block';
})
    
    timer=setTimeout(function(){
        circles.forEach((circle)=>{
            circle.style.display='none';
            svg.style.visibility="visible";
            svg.style.display="block"
        })
    },500)
})

function animateCircles(){
    let x=coords.x;
    let y=coords.y;

    circles.forEach((circle,index)=>{
        circle.style.left=x +"px";
        circle.style.top=y +"px";

        let len=circles.length * 2;
        circle.style.scale=((len - index) / len) * window.innerWidth / 1400;

        circle.x=x;
        circle.y=y;

        let nextCircle=circles[index + 1] || circles[0]
        x +=(nextCircle.x - x)*0.1;
        y +=(nextCircle.y - y)*0.1;
        
    })

   
    requestAnimationFrame(animateCircles)
}
animateCircles()

//----------------------------------------

//Theme Changer
let themeChanger = ()=>{
    let offsets=document.querySelector("#theme-changer").getBoundingClientRect();
    console.log(offsets)
    document.body.style.backgroundColor=offsets.top<0?"#fff":"#E3252F"
}
window.addEventListener("scroll",themeChanger)
window.addEventListener("load",themeChanger)


//----------------------------------------

gsap.registerPlugin(ScrollTrigger) 

let path1 = document.querySelector('#path');
let path1Length = path1.getTotalLength();
console.log(path1Length)

path1.style.strokeDasharray = path1Length;
path1.style.strokeDashoffset = path1Length;

let tl=gsap.timeline({
    scrollTrigger:{
      trigger:".page2-inner",
      start: "-20% top", 
      end:"30% bottom", 
      scrub:5,
      pin:true,
      /* markers:true, */
      
    }
})

tl.from(path1,{strokeDashoffset:0},"skate")
tl.from(".skate",{offsetDistance:"100%"},"skate")


//----------------------------------------

gsap.from(".line", {
    scrollTrigger: {
      trigger: ".line", 
      start: "-50% top", 
      end:"30% bottom", 
      scrub: 2,
    },
    height:-100,
    opacity:0
  });


//----------------------------------------

let horSection=document.querySelectorAll('.port_desc .port');

gsap.to(horSection,{
    xPercent:-97 * (horSection.length - 1),
    scrollTrigger:{
        trigger:".port_desc",
        start:"top 20%",
        end:"+=5000",
        scrub:1,
        pin:true,
    }
})

//----------------------------------------

gsap.registerPlugin(ScrollTrigger);



let executed = false;


function animateSkills(){
    document.querySelectorAll('.skill-per').forEach((perElement)=>{
        gsap.to(perElement,{
            duration:2,
            width:perElement.getAttribute('per') + "%",
            onUpdate:function (){
                perElement.setAttribute("per",Math.ceil(this.progress() * parseInt(perElement.style.width))+ "%")
            }
        })
    })
}

ScrollTrigger.create({
    trigger:"#page6",
    start:"top 30%",
    onEnter:()=>{
        if(!executed){
            animateSkills();
            executed=true
        }
    }
    
})

//----------------------------------------

gsap.registerPlugin(ScrollTrigger);

Splitting();

const fx16Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect16]')];

const scroll = () => {
    
    fx16Titles.forEach(title => {
        
        gsap.fromTo(title, {
            transformOrigin: '0% 50%',
            rotate: 1
        }, {
            ease: 'none',
            rotate: 0,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
            }
        });

        gsap.fromTo(title.querySelectorAll('.word'), {
            'will-change': 'opacity',
            opacity: 0.3
        }, 
        {
            ease: 'none',
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom-=20%',
                end: 'center top+=20%',
                scrub: true,
            }
        });

    });

};


window.addEventListener("load",() => {
    scroll();
});

//----------------------------------------




const wrapElements = (elems, wrapType, wrapClass) => {
    elems.forEach(char => {
        const wrapEl = document.createElement(wrapType);
        wrapEl.classList = wrapClass;
        char.parentNode.appendChild(wrapEl);
        wrapEl.appendChild(char);
    });
}

Splitting();

const fx1Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect1]')];
const fx4Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect4]')];
const fx8Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect8]')];
const fx10Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect10]')];
const fx11Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect11]')];
const fx18Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect18]')];
const fx20Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect20]')];
const fx25Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect25]')];

const scroll2 = () => {

  
  fx1Titles.forEach(title => {
        
    const chars = title.querySelectorAll('.char');

    gsap.fromTo(chars, { 
        'will-change': 'opacity, transform', 
        opacity: 0, 
        scale: 0.6,
        rotationZ: () => gsap.utils.random(-20,20)
    },
    {
        ease: 'power4',
        opacity: 1,
        scale: 1,
        rotation: 0,
        stagger: 0.4,
        scrollTrigger: {
            trigger: title,
            start: 'center+=20% bottom',
            end: '+=35%',
            scrub: true
        },
    });

});

fx4Titles.forEach(title => {
        
  const words = title.querySelectorAll('.word');
  
  for (const word of words) {
      
      const chars = word.querySelectorAll('.char');

      gsap.fromTo(chars,  { 
          'will-change': 'opacity, transform', 
          x: (position,_,arr) => 150*(position-arr.length/2) 
      },
      {
          ease: 'power1.inOut',
          x: 0,
          stagger: {
              grid: 'auto',
              from: 'center'
          },
          scrollTrigger: {
              trigger: word,
              start: 'center bottom+=30%',
              end: 'top top+=15%',
              scrub: true,
          }
      });

  };

});

    
    const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];
    fx8Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        chars.forEach((char, position) => {
            let initialHTML = char.innerHTML;
            
            gsap.fromTo(char, {
                opacity: 0
            },
            {
                duration: 0.03,
                innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
                repeat: 1,
                repeatRefresh: true,
                opacity: 1,
                repeatDelay: 0.03,
                delay: (position+1)*0.18,
                onComplete: () => gsap.set(char, {innerHTML: initialHTML, delay: 0.03}),
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'bottom center',
                    toggleActions: "play resume resume reset",
                    onEnter: () => gsap.set(char, {opacity: 0})
                }
            });

        });
        
    });
    
    fx11Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        wrapElements(chars, 'span', 'char-wrap');

        gsap.fromTo(chars, { 
            'will-change': 'transform', 
            transformOrigin: '0% 50%',
            xPercent: 105,
        }, 
        {
            duration: 1,
            ease: 'expo',
            xPercent: 0,
            stagger: 0.042,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'top top+=10%',
                toggleActions: "play resume resume reset",
            }
        });

    });

    
    fx10Titles.forEach(title => {
        
      const chars = title.querySelectorAll('.char');

      gsap.fromTo(chars, { 
          'will-change': 'opacity', 
          opacity: 0,
          filter: 'blur(20px)'
      },
      {
          duration: 0.25,
          ease: 'power1.inOut',
          opacity: 1,
          filter: 'blur(0px)',
          stagger: { each: 0.05, from: 'random'},
          scrollTrigger: {
              trigger: title,
              start: 'top bottom',
              end: 'center center',
              toggleActions: "play resume resume reset"
          }
      });

  });

  
  fx18Titles.forEach(title => {
        
    const chars = title.querySelectorAll('.char');
    
    chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
    
    gsap.fromTo(chars, { 
        'will-change': 'opacity, transform', 
        opacity: 0.2,
        z: -800
    }, 
    {
        ease: 'back.out(1.2)',
        opacity: 1,
        z: 0,
        stagger: 0.04,
        scrollTrigger: {
            trigger: title,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        }
    });

});
   
  fx20Titles.forEach(title => {
        
    const chars = title.querySelectorAll('.char');
    
    chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
    
    gsap.fromTo(chars, {
        'will-change': 'opacity, transform', 
        transformOrigin: '50% 100%',
        opacity: 0,
        rotationX: 90
    }, 
    {
        ease: 'power4',
        opacity: 1,
        stagger:  {
            each: 0.03,
            from: 'random'
        },
        rotationX: 0,
        scrollTrigger: {
            trigger: title,
            start: 'center bottom',
            end: 'bottom top+=20%',
            scrub: true,
        }
    });
    
});


fx25Titles.forEach(title => {
        
  gsap.fromTo(title.querySelectorAll('.char'), {
      'will-change': 'transform',
      transformOrigin: '50% 100%',
      scaleY: 0
  }, 
  {
      ease: 'power3.in',
      opacity: 1,
      scaleY: 1,
      stagger: 0.05,
      scrollTrigger: {
          trigger: title,
          start: 'center center',
          end: '+=500%',
          scrub: true,
          pin: title.parentNode,
      }
  });

});


};

window.addEventListener("load",() => {
    scroll2();
});



//----------------------------------------



const init = () => {

    const breakPoint = "53em";
    const mm = gsap.matchMedia();
  
    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint})`,
        isMobile: `(max-width: ${breakPoint})`,
      },
      (context) => {
        let { isDesktop } = context.conditions;
  
        const image = document.querySelector(".card__img");
        const cardList = gsap.utils.toArray(".card");
  
        const count = cardList.length;
        const radius = isDesktop ? 250 : 180; // Distance from the image center to the screen center.
  
        gsap
          .timeline({
            scrollTrigger: {
                trigger: '#page7',
                start: '-20% top', 
                end: '70% bottom',}
          })
          .from(cardList, {
            x: (index) => {
              return index % 2
                ? -window.innerWidth / 2 - image.clientWidth * 4
                : window.innerWidth / 2 + image.clientWidth * 4;
            },
            rotation: (index) => {
              return index % 2 ? -90 : 90;
            },
            delay: (index) => {
              return Math.floor(index / 2) * 0.1;
            },
            duration: 1,
            opacity: 0.8,
            scale: 5,
            ease: "power4.out",
          })
          .set(cardList, {
            // Flip the second half of the images.
            scale: (index) => {
              return index > count / 2 - 1 ? -1 : 1;
            },
          })
          .to(cardList, {
            y: (index) => {
              return (index >= Math.floor(count / 2) ? 1 : -1) * radius;
            },
            duration: 0.5,
            ease: "power2.out",
          })
          .set(cardList, {
            transformOrigin: `center ${radius + image.clientHeight / 2}px`,
            y: (index) => {
              if (index >= Math.floor(count / 2)) {
                return -radius;
              }
            },
          })
          .to(cardList, {
            rotation: (index) => {
              return index > count / 2 - 1
                ? ((count - index - 1) * 360) / count
                : (index * 360) / count;
            },
            opacity: 0.8,
            duration: 1,
            ease: "power2.out",
          })
          .from(
            ".headings",
            {
              opacity: 0,
              filter: "blur(60px)",
              duration: 1.5,
            },
            "<-=1"
          )
          .to(cardList, {
            repeat: -1,
            duration: 2,
            onRepeat: () => {
              gsap.to(cardList[Math.floor(Math.random() * count)], {
                rotateY: "+=180",
              });
            },
          })
          .to(
            ".group",
            {
              rotation: 360,
              duration: 20,
              repeat: -1,
              ease: "none",
            },
            "<-=1.5"
          );
  
        return () => {};
      }
    );
  };
  
  window.addEventListener('load',() => {
    document.body.classList.remove("loading");
    init();
  });
  

//----------------------------------------

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  // 이미지 애니
  let items = document.querySelectorAll(".anime-list li")
  items.forEach(function (el) {
      gsap.set(".hover-img", {
          xPercent: -50,
          yPercent: -50
      })
      let image = el.querySelector(".hover-img")
      let innerImage = el.querySelector(".hover-img img");
      let pos = {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2
      }
      let mouse = {
          x: pos.x
      }
      let speed = 0.1;
      let xSet = gsap.quickSetter(image, "x", "px") //
      let ySet = gsap.quickSetter(image, "y", "px") //

      window.addEventListener("mousemove", function (e) {
         // console.log(e)
          mouse.x = e.x;
      })

      gsap.ticker.add(function () { //requestAnimationFrame()
          pos.x += (mouse.x - pos.x)
          xSet(pos.x)
      })

      let direction = "",
          oldx = 0,
          lastCursorX = null,
          cursorThreshold = 150;

      let mousemovemethod = function (e) {
          if (e.pageX < oldx && e.clientX <= lastCursorX - cursorThreshold) {
              direction = "left"

              lastCursorX = e.clientX
              innerImage.style.transform = "rotate(-15deg)"

          } else if (e.pageX > oldx && e.clientX >= lastCursorX + cursorThreshold) {
              direction = "right"

              lastCursorX = e.clientX
              innerImage.style.transform = "rotate(15deg)"
          }
          oldx = e.pageX;
      }

      let mouseMoveTimer; // 마우스가 멈출 때 감지하는 변수

      document.addEventListener("mousemove", function () {
          

          clearTimeout(mouseMoveTimer) //기존 타이머 지움
          mouseMoveTimer = setTimeout(function () {
              innerImage.style.transform = "translateX(0%) rotate(0deg)"
          }, 100)
      })


      document.addEventListener("mousemove", mousemovemethod)



  })



  function ani() {
      //console.log("애니메이션")
      requestAnimationFrame(ani) //setInterval의 진화된 버전
  }
  ani()


  //Mouse cursor
  gsap.set(".ball",{xPercent:-50, yPercent:-50})
  let ball=document.querySelector(".ball");
  let pos={x:window.innerWidth/2,y:window.innerHeight/2}
  let mouse={x:pos.x,y:pos.y};
  let speed=0.08;

  let xSet=gsap.quickSetter(ball,"x","px");
  let ySet=gsap.quickSetter(ball,"y","px");

  window.addEventListener("mousemove",function(e){
      //console.log(e.x)
      mouse.x=e.x;
      mouse.y=e.y;
  })

  gsap.ticker.add(function(){
      console.log(gsap.ticker.deltaRatio)
      let dt=1.0 - Math.pow((1.0 - speed),gsap.ticker.deltaRatio())
      pos.x +=(mouse.x - pos.x)* dt;
      pos.y +=(mouse.y - pos.y)* dt;
      xSet(pos.x);
      ySet(pos.y);
  })





  // 글자 애니
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  let list = document.querySelectorAll(".anime-list li")
  
  list.forEach(function (el) {
     
      el.addEventListener("mouseenter", function (event) {
          let target_element = event.target.querySelector("h2")
          let iteration = 0;
          

          let interval = setInterval(function () {
              target_element.innerText = target_element.innerText
                  .split("") 
                  .map(function (letter, index) { 
                      if (index < iteration) {
                          return target_element.dataset.value[index]
                      }
                      return letters[Math.floor(Math.random() * 26)]
                  })
                  .join(""); 

              if (iteration >= target_element.dataset.value.length) {
                  clearInterval(interval)
              }

              iteration += 1 / 3; 
          }, 20)
      })

  })
});