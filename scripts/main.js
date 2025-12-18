// ===== 导航栏功能 =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 移动端菜单切换
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// 点击导航链接后关闭移动端菜单
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===== 平滑滚动 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // 考虑固定导航栏高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== 表单验证 =====
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

// 验证函数
function validateName(name) {
    if (name.trim().length < 2) {
        return '姓名至少需要2个字符';
    }
    return '';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return '请输入有效的邮箱地址';
    }
    return '';
}

function validatePhone(phone) {
    if (phone && phone.trim() !== '') {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone)) {
            return '请输入有效的电话号码';
        }
    }
    return '';
}

function validateMessage(message) {
    if (message.trim().length < 10) {
        return '留言至少需要10个字符';
    }
    return '';
}

// 实时验证
nameInput.addEventListener('blur', () => {
    const error = validateName(nameInput.value);
    nameError.textContent = error;
    if (error) {
        nameInput.style.borderColor = '#ef4444';
    } else {
        nameInput.style.borderColor = '';
    }
});

emailInput.addEventListener('blur', () => {
    const error = validateEmail(emailInput.value);
    emailError.textContent = error;
    if (error) {
        emailInput.style.borderColor = '#ef4444';
    } else {
        emailInput.style.borderColor = '';
    }
});

phoneInput.addEventListener('blur', () => {
    const error = validatePhone(phoneInput.value);
    phoneError.textContent = error;
    if (error) {
        phoneInput.style.borderColor = '#ef4444';
    } else {
        phoneInput.style.borderColor = '';
    }
});

messageInput.addEventListener('blur', () => {
    const error = validateMessage(messageInput.value);
    messageError.textContent = error;
    if (error) {
        messageInput.style.borderColor = '#ef4444';
    } else {
        messageInput.style.borderColor = '';
    }
});

// 表单提交
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 清除之前的错误信息
        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        messageError.textContent = '';
        formSuccess.style.display = 'none';
        
        // 验证所有字段
        const nameErrorMsg = validateName(nameInput.value);
        const emailErrorMsg = validateEmail(emailInput.value);
        const phoneErrorMsg = validatePhone(phoneInput.value);
        const messageErrorMsg = validateMessage(messageInput.value);
        
        let hasError = false;
        
        if (nameErrorMsg) {
            nameError.textContent = nameErrorMsg;
            nameInput.style.borderColor = '#ef4444';
            hasError = true;
        } else {
            nameInput.style.borderColor = '';
        }
        
        if (emailErrorMsg) {
            emailError.textContent = emailErrorMsg;
            emailInput.style.borderColor = '#ef4444';
            hasError = true;
        } else {
            emailInput.style.borderColor = '';
        }
        
        if (phoneErrorMsg) {
            phoneError.textContent = phoneErrorMsg;
            phoneInput.style.borderColor = '#ef4444';
            hasError = true;
        } else {
            phoneInput.style.borderColor = '';
        }
        
        if (messageErrorMsg) {
            messageError.textContent = messageErrorMsg;
            messageInput.style.borderColor = '#ef4444';
            hasError = true;
        } else {
            messageInput.style.borderColor = '';
        }
        
        if (!hasError) {
            // 收集表单数据
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value || '未填写',
                service: document.getElementById('service').value || '未选择',
                message: messageInput.value,
                timestamp: new Date().toLocaleString('zh-CN')
            };
            
            // 在控制台输出表单数据（用于测试）
            console.log('表单提交数据：', formData);
            
            // 方案1: 使用Google Forms（推荐用于Google Sites）
            // 需要创建一个Google Form，然后使用以下代码：
            /*
            const googleFormUrl = 'YOUR_GOOGLE_FORM_URL';
            const formDataToSend = new FormData();
            formDataToSend.append('entry.XXXXXXX', formData.name);  // 替换为实际的entry ID
            formDataToSend.append('entry.XXXXXXX', formData.email);
            formDataToSend.append('entry.XXXXXXX', formData.phone);
            formDataToSend.append('entry.XXXXXXX', formData.service);
            formDataToSend.append('entry.XXXXXXX', formData.message);
            
            fetch(googleFormUrl, {
                method: 'POST',
                mode: 'no-cors',
                body: formDataToSend
            });
            */
            
            // 方案2: 使用第三方表单服务（如Formspree）
            /*
            fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (response.ok) {
                    console.log('表单提交成功');
                }
            })
            .catch(error => {
                console.error('表单提交失败:', error);
            });
            */
            
            // 方案3: 发送邮件（需要后端支持）
            // 可以使用mailto链接（简单但不推荐）
            // window.location.href = `mailto:support@irs-ins.com?subject=咨询：${formData.service}&body=姓名：${formData.name}%0A邮箱：${formData.email}%0A电话：${formData.phone}%0A留言：${formData.message}`;
            
            // 显示成功消息
            formSuccess.style.display = 'block';
            contactForm.reset();
            
            // 3秒后隐藏成功消息
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
            
            // 滚动到成功消息
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            // 滚动到第一个错误字段
            const firstError = document.querySelector('.error-message:not(:empty)');
            if (firstError) {
                firstError.closest('.form-group').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    });
}

// ===== 滚动动画 =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

        // 观察需要动画的元素
        document.addEventListener('DOMContentLoaded', () => {
            const animateElements = document.querySelectorAll('.service-card, .stat-item, .contact-item, .section-header, .about-text, .core-service-card');
            animateElements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
                observer.observe(el);
            });
        });

// ===== 页面加载完成后的初始化 =====
document.addEventListener('DOMContentLoaded', () => {
    // 确保导航栏初始状态正确
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
    
    console.log('Insurance Agency网站已加载完成');
});

