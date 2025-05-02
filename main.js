document.addEventListener("DOMContentLoaded", function () {
    // ===== Typing effect =====
    const texts = [
      "I'M Y NHÊN ADRƠNG.",
      "WEB DEVELOPER IN TRAINING.",
      "SKILLED IN HTML, CSS & JS.",
      "EXPLORING BACKEND & APIS.",
      "FUTURE FULL-STACK DEVELOPER."
    ];
  
    const target = document.getElementById("typing-text");
    let currentText = 0;
    let index = 0;
    let isDeleting = false;
  
    function type() {
      const fullText = texts[currentText];
      if (isDeleting) {
        index--;
      } else {
        index++;
      }
  
      target.textContent = fullText.substring(0, index);
  
      if (!isDeleting && index === fullText.length) {
        setTimeout(() => isDeleting = true, 1000);
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        currentText = (currentText + 1) % texts.length;
      }
  
      const speed = isDeleting ? 40 : 100;
      setTimeout(type, speed);
    }
  
    type();
  
    // ===== Scroll to section when menu item is clicked =====
    const menuItems = document.querySelectorAll('.menu-list li');
    const sectionIds = ['home', 'about', 'services', 'resume', 'portfolio', 'contact'];
  
    menuItems.forEach((item, index) => {
      item.style.cursor = "pointer";
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = sectionIds[index];
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
    // ===== Handle contact form submit =====
    const form = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Hiệu ứng đang gửi
      submitBtn.disabled = true;
      const originalText = submitBtn.textContent;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
  
      // Giả lập gửi form (sau 2 giây)
      setTimeout(() => {
        // Reset lại nút
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
  
        // Hiển thị thông báo thành công
        const successMsg = document.createElement("div");
        successMsg.className = "alert alert-success mt-3";
        successMsg.textContent = "Message sent successfully!";
        form.parentElement.appendChild(successMsg); // gắn vào ngoài form nếu bạn muốn thông báo dưới form
  
        // Xoá nội dung sau 5s
        setTimeout(() => {
          successMsg.remove();
          form.reset();
        }, 5000);
      }, 2000);
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('.menu-item');
  
    menuItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        // Xóa active khỏi tất cả các menu items
        menuItems.forEach((menuItem) => {
          menuItem.classList.remove('active');
        });
  
        // Thêm active cho mục hiện tại
        e.target.classList.add('active');
      });
    });
  });
    