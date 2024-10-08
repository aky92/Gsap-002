
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
    // markers:true,

}});

t1.to('#main-orgsliceleft',{
    x:'-110px',
},'onetime')
t1.to('#main-orgsliceright',{
    x:'110px',
},'onetime')


let t2=gsap.timeline({scrollTrigger:{
    trigger:'#main-leaf1',
    scroller:'body',
    scrub:true,
    start:'bottom 90%',
    end:'top 10%',
    // markers:true

}});
t2.to('#main-leaf1',{
    x:'65px',
},'onetime2')
t2.to('#main-leaf2',{
    x:'-65px',
},'onetime2')
t2.to('#main-leaf3',{
    x:'-65px',
},'onetime2')
t2.to('#main-leaf4',{
    x:'65px',
},'onetime2')

t2.to('#main-leaf5',{
    x:'-65px',
},'onetime2')

t2.to('#main-leaf6',{
    x:'65px',
},'onetime2')

let tt=gsap.timeline();

tt.to(maincan,{
    y:'630px',
        rotate:'25deg',
    x:'-290px',
    width:"20%",
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
},'aa')


tt.to(maincan,{
    top: "100%",
    left: "63%",
    width:'10%',
    rotate:'0deg',
    duration:2.6,
    ease: "slow(0.7,0.7,false)",
   
    scrollTrigger:{
        trigger:'.sec__three',
        scroller:'body',
        scrub:true,
        start:'top 90%',
        end:'top 10%',
        markers:true,

    }
},'aa')