document.addEventListener("DOMContentLoaded", function () {
    const sections = {
        home: `
            <section id="home" class="section">
                <h1>Hi, I'm <span>Rishav Singh Negi</span></h1>
                <p>Pursuing B.Tech (CSE) from Graphic Era Hill University, Dehradun.</p>
                <div class="social-icons">
                    <a href="https://www.linkedin.com/in/rishav-singh-negi-333ab52b7" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://leetcode.com/u/RISHAV_09/" target="_blank"><i class="fab fa-leetcode"></i></a>
                </div>
                <a href="#contact" class="btn">Hire me</a>
            </section>
        `,
        skills: `
            <section id="skills" class="section">
                <h2>Skills</h2>
                <p>Programming: C++, Python, JavaScript | Web Development: HTML, CSS, React</p>
            </section>
        `,
        education: `
            <section id="education" class="section">
                <h2>Education</h2>
                <p>B.Tech (CSE) - Graphic Era Hill University, Dehradun</p>
            </section>
        `,
        contact: `
            <section id="contact" class="section">
                <h2>Contact Me</h2>
                <p>Email: yourname@gmail.com | Phone: +91 9876543210</p>
            </section>
        `
    };

    const contentDiv = document.getElementById("content");
    const navLinks = document.querySelectorAll("nav a");

    function loadSection(section) {
        contentDiv.innerHTML = sections[section];
        navLinks.forEach(link => link.classList.remove("active"));
        document.querySelector(`nav a[href="#${section}"]`).classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const section = this.getAttribute("href").substring(1);
            loadSection(section);
        });
    });

    // Load Home section by default
    loadSection("home");
});
