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

// ===== 表单提交（集成Google Forms - 完全免费） =====
// 配置说明：
// 1. 创建Google Form：访问 https://forms.google.com
// 2. 获取表单URL：点击"发送" → "链接"，复制URL
// 3. 获取Entry ID：在表单编辑页面按F12，查找每个字段的 name="entry.XXXXXXXXX"
// 4. 替换下面的URL和Entry ID

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfyyvpXGTPcmaTpk3Wwmib6GLrw26Q2C_-I5j0aL4DdiqBzMQ/formResponse';
const GOOGLE_FORM_ENTRIES = {
    name: 'entry.399725318',      // 姓名字段的Entry ID
    email: 'entry.1504004171',    // 邮箱字段的Entry ID
    phone: 'entry.1384423353',    // 电话字段的Entry ID
    service: 'entry.1118686692',  // 咨询类型字段的Entry ID
    message: 'entry.2064625578'   // 留言字段的Entry ID
};

// 备用方案：Formspree（如果不想用Google Forms）
// const FORMSPREEE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// 防重复提交：记录上次提交时间
let lastSubmitTime = 0;
const SUBMIT_COOLDOWN = 30000; // 30秒内不能重复提交（毫秒）

if (contactForm) {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.textContent : '提交咨询';
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // 检查是否在冷却期内
        const now = Date.now();
        if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
            const remainingTime = Math.ceil((SUBMIT_COOLDOWN - (now - lastSubmitTime)) / 1000);
            alert(`请稍候再试，距离上次提交还需等待 ${remainingTime} 秒`);
            return;
        }
        
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
        
        if (hasError) {
            // 滚动到第一个错误字段
            const firstError = document.querySelector('.error-message:not(:empty)');
            if (firstError) {
                firstError.closest('.form-group').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            return;
        }
        
        // 防重复提交：禁用按钮
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = '提交中...';
            submitButton.style.opacity = '0.6';
            submitButton.style.cursor = 'not-allowed';
        }
        
        // 收集表单数据并准备Google Forms格式
        const serviceSelect = document.getElementById('service');
        const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text || '其他';
        
        // 准备Google Forms数据（使用URL编码格式）
        const params = new URLSearchParams();
        params.append(GOOGLE_FORM_ENTRIES.name, nameInput.value.trim());
        params.append(GOOGLE_FORM_ENTRIES.email, emailInput.value.trim());
        params.append(GOOGLE_FORM_ENTRIES.phone, phoneInput.value.trim() || '未填写');
        params.append(GOOGLE_FORM_ENTRIES.service, serviceText);
        params.append(GOOGLE_FORM_ENTRIES.message, messageInput.value.trim());
        
        try {
            // 使用隐藏的iframe提交到Google Forms（避免403错误）
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.style.width = '0';
            iframe.style.height = '0';
            iframe.style.border = 'none';
            iframe.style.position = 'absolute';
            iframe.style.left = '-9999px';
            iframe.name = 'hidden_iframe_' + Date.now();
            document.body.appendChild(iframe);
            
            // 创建隐藏表单并提交
            const hiddenForm = document.createElement('form');
            hiddenForm.method = 'POST';
            hiddenForm.action = GOOGLE_FORM_URL;
            hiddenForm.target = iframe.name;
            hiddenForm.style.display = 'none';
            hiddenForm.acceptCharset = 'UTF-8';
            
            // 添加所有字段
            Object.keys(GOOGLE_FORM_ENTRIES).forEach(key => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = GOOGLE_FORM_ENTRIES[key];
                if (key === 'service') {
                    input.value = serviceText;
                } else if (key === 'name') {
                    input.value = nameInput.value.trim();
                } else if (key === 'email') {
                    input.value = emailInput.value.trim();
                } else if (key === 'phone') {
                    input.value = phoneInput.value.trim() || '未填写';
                } else if (key === 'message') {
                    input.value = messageInput.value.trim();
                }
                hiddenForm.appendChild(input);
            });
            
            document.body.appendChild(hiddenForm);
            
            // 等待iframe加载完成后再提交
            iframe.onload = () => {
                setTimeout(() => {
                    try {
                        document.body.removeChild(hiddenForm);
                        document.body.removeChild(iframe);
                    } catch(e) {
                        // 忽略清理错误
                    }
                }, 2000);
            };
            
            hiddenForm.submit();
            
            // 等待提交完成
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // 提交成功
            lastSubmitTime = Date.now();
            
            // 显示成功消息
            formSuccess.style.display = 'block';
            formSuccess.innerHTML = '<p>✓ 感谢您的咨询！我们会尽快与您联系。</p>';
            
            // 重置表单
            contactForm.reset();
            
            // 滚动到成功消息
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // 5秒后隐藏成功消息
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
            
            console.log('表单提交成功（已发送到Google Forms）');
        } catch (error) {
            // 网络错误或其他错误
            console.error('表单提交失败:', error);
            
            // 显示错误消息
            formSuccess.style.display = 'block';
            formSuccess.innerHTML = '<p style="color: #ef4444;">✗ 提交失败，请检查网络连接后重试。如果问题持续，请直接致电联系我们。</p>';
            
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // 3秒后隐藏错误消息
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        } finally {
            // 恢复按钮状态
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                submitButton.style.opacity = '1';
                submitButton.style.cursor = 'pointer';
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
    
    // 抑制浏览器扩展的错误（如Grammarly等）
    window.addEventListener('error', (e) => {
        if (e.message && (
            e.message.includes('No tab with id') ||
            e.message.includes('Grammarly') ||
            e.message.includes('grm ERROR')
        )) {
            e.preventDefault();
            return false;
        }
    }, true);
    
    console.log('Insurance Agency网站已加载完成');
});

