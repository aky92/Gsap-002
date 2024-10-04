
let mainOrgslice=document.querySelector('#main-orgslice');
let maincan=document.querySelector('#main-can');

gsap.from(mainOrgslice,{
    left:0,
    rotate:'-180deg',
    ease: "slow(0.7,0.7,false)",
    duration:1.5,
})

let t1=gsap.timeline({scrollTrigger:{
    trigger:'#main-orgsliceleft',
    scroller:'body',
    scrub:true,
    start:'bottom 90%',
    end:'top 10%',
    markers:true,

}});

t1.to('#main-orgsliceleft',{
    x:'-110px',
},'onetime')
t1.to('#main-orgsliceright',{
    x:'110px',
},'onetime')


gsap.to(maincan,{
    y:'650px',
        rotate:'30deg',
    x:'-290px',
    duration:2.6,
    ease: "slow(0.7,0.7,false)",
   
    scrollTrigger:{
        trigger:'.sec__two',
        scroller:'body',
        scrub:true,
        start:'top 90%',
        end:'top 10%',
        // markers:true,

    }
})

