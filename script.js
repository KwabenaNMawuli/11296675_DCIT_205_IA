const subSections = document.querySelectorAll('.sub-section-h');

    subSections.forEach(section => {
      section.addEventListener('mouseenter', () => {
        section.classList.toggle('hovered');
      });

      section.addEventListener('mouseleave', () => {
        section.classList.toggle('hovered');
      });
    });

    // JavaScript for Responsive Touches
    window.addEventListener('resize', () => {
    });
    document.getElementById("registerbtn").addEventListener('click', function(){
        window.location.href = "index.html";
    })
    document.getElementById("").addEventListener('click', function(){
        window.location.href = "faculty.html";
    })
    document.getElementById("").addEventListener('click', function(){
        window.location.href = "faculty.html";
    })
    document.getElementById("").addEventListener('click', function(){
        window.location.href = "faculty.html";
    })