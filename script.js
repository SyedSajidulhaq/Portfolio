// Typing Animation
const heroText = "SYED SAJID UL HAQ";
let i = 0;
function typeWriter() {
  if (i < heroText.length) {
    document.getElementById("hero-name").innerHTML += heroText.charAt(i);
    i++;
    setTimeout(typeWriter,120);
  }
}
window.onload = () => {
  typeWriter();
  animateProgressBars();
};

// Sidebar Toggle
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebarToggle');
toggleBtn.addEventListener('click',()=>{
  sidebar.style.transform = sidebar.style.transform==='translateX(0px)'?'translateX(-100%)':'translateX(0)';
});

// Dark Mode Toggle
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark-mode');
  darkToggle.innerHTML = document.body.classList.contains('dark-mode')? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Scroll reveal
const observer = new IntersectionObserver((entries, obs)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('reveal');
      obs.unobserve(entry.target);
    }
  });
},{threshold:0.1});

document.querySelectorAll('section, .card, .achievement, .event').forEach(el=>{
  el.classList.add('before-reveal');
  observer.observe(el);
});

// Animate Progress Bars
function animateProgressBars(){
  const bars = document.querySelectorAll('.progress');
  bars.forEach(bar=>{
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(()=>{ bar.style.width = width; }, 500);
  });
}
  