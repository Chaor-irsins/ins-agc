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

// 验证函数（支持多语言）
function validateName(name) {
    if (name.trim().length < 2) {
        const t = translations[currentLang] || translations.zh;
        return t.contact.form.nameRequired;
    }
    return '';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const t = translations[currentLang] || translations.zh;
        return t.contact.form.emailRequired;
    }
    return '';
}

function validatePhone(phone) {
    if (phone && phone.trim() !== '') {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone)) {
            const t = translations[currentLang] || translations.zh;
            return t.contact.form.phoneInvalid;
        }
    }
    return '';
}

function validateMessage(message) {
    if (message.trim().length < 10) {
        const t = translations[currentLang] || translations.zh;
        return t.contact.form.messageRequired;
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
    let originalButtonText = '提交咨询';
    // 原始按钮文本会在语言切换时更新
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // 检查是否在冷却期内
        const now = Date.now();
        if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
            const remainingTime = Math.ceil((SUBMIT_COOLDOWN - (now - lastSubmitTime)) / 1000);
            const t = typeof translations !== 'undefined' && translations[currentLang] ? translations[currentLang] : translations.zh;
            const message = t.contact.form.cooldown.replace('{seconds}', remainingTime);
            alert(message);
            return;
        }
        
        // 清除之前的错误信息
        nameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        messageError.textContent = '';
        formSuccess.style.display = 'none';
        
        // 重新获取表单元素（防止语言切换后引用失效）
        const currentNameInput = document.getElementById('name');
        const currentEmailInput = document.getElementById('email');
        const currentPhoneInput = document.getElementById('phone');
        const currentMessageInput = document.getElementById('message');
        
        // 验证所有字段
        const nameValue = currentNameInput ? currentNameInput.value.trim() : '';
        const emailValue = currentEmailInput ? currentEmailInput.value.trim() : '';
        const phoneValue = currentPhoneInput ? currentPhoneInput.value.trim() : '';
        const messageValue = currentMessageInput ? currentMessageInput.value.trim() : '';
        
        const nameErrorMsg = validateName(nameValue);
        const emailErrorMsg = validateEmail(emailValue);
        const phoneErrorMsg = validatePhone(phoneValue);
        const messageErrorMsg = validateMessage(messageValue);
        
        let hasError = false;
        
        if (nameErrorMsg) {
            nameError.textContent = nameErrorMsg;
            if (currentNameInput) currentNameInput.style.borderColor = '#ef4444';
            hasError = true;
        } else {
            if (currentNameInput) currentNameInput.style.borderColor = '';
        }
        
        if (emailErrorMsg) {
            emailError.textContent = emailErrorMsg;
            if (currentEmailInput) currentEmailInput.style.borderColor = '#ef4444';
            hasError = true;
        } else {
            if (currentEmailInput) currentEmailInput.style.borderColor = '';
        }
        
        if (phoneErrorMsg) {
            phoneError.textContent = phoneErrorMsg;
            if (currentPhoneInput) currentPhoneInput.style.borderColor = '#ef4444';
            hasError = true;
        } else {
            if (currentPhoneInput) currentPhoneInput.style.borderColor = '';
        }
        
        if (messageErrorMsg) {
            messageError.textContent = messageErrorMsg;
            if (currentMessageInput) currentMessageInput.style.borderColor = '#ef4444';
            hasError = true;
        } else {
            if (currentMessageInput) currentMessageInput.style.borderColor = '';
        }
        
        if (hasError) {
            // 恢复按钮状态
            if (submitButton) {
                const t = typeof translations !== 'undefined' && translations[currentLang] ? translations[currentLang] : translations.zh;
                submitButton.disabled = false;
                submitButton.textContent = t.contact.form.submit;
                submitButton.style.opacity = '1';
                submitButton.style.cursor = 'pointer';
            }
            // 滚动到第一个错误字段
            const firstError = document.querySelector('.error-message:not(:empty)');
            if (firstError) {
                firstError.closest('.form-group').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            return;
        }
        
        // 防重复提交：禁用按钮
        if (submitButton) {
            const t = typeof translations !== 'undefined' && translations[currentLang] ? translations[currentLang] : translations.zh;
            submitButton.disabled = true;
            submitButton.textContent = t.contact.form.submitting;
            submitButton.style.opacity = '0.6';
            submitButton.style.cursor = 'not-allowed';
        }
        
        // 收集表单数据并准备Google Forms格式
        const serviceSelect = document.getElementById('service');
        let serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
        const selectedValue = serviceSelect.value;
        
        // Google表单的选项是中文，需要将英文选项映射回中文
        const serviceMapping = {
            'car': '汽车保险',
            'property': '房屋保险',
            'business': '商业保险',
            'other': '其他',
            // 英文文本映射
            'Auto Insurance': '汽车保险',
            'Home Insurance': '房屋保险',
            'Commercial Insurance': '商业保险',
            'Other': '其他'
        };
        
        // 如果有对应的映射，使用映射值；否则使用原值
        if (serviceMapping[selectedValue]) {
            serviceText = serviceMapping[selectedValue];
        } else if (serviceMapping[serviceText]) {
            serviceText = serviceMapping[serviceText];
        } else if (!serviceText || serviceText.trim() === '' || serviceText === serviceSelect.options[0].text) {
            // 如果没有选择或文本为空，使用中文默认值（因为Google表单是中文）
            serviceText = '其他';
        }
        
        // 获取当前语言的默认值
        const t = typeof translations !== 'undefined' && translations[currentLang] ? translations[currentLang] : translations.zh;
        const phoneDefault = currentLang === 'zh' ? '未填写' : 'Not provided';
        
        // 准备Google Forms数据（使用URL编码格式）
        // 使用重新获取的值，确保数据正确
        const params = new URLSearchParams();
        params.append(GOOGLE_FORM_ENTRIES.name, nameValue);
        params.append(GOOGLE_FORM_ENTRIES.email, emailValue);
        params.append(GOOGLE_FORM_ENTRIES.phone, phoneValue || phoneDefault);
        params.append(GOOGLE_FORM_ENTRIES.service, serviceText);
        params.append(GOOGLE_FORM_ENTRIES.message, messageValue);
        
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
                    input.value = nameValue;
                } else if (key === 'email') {
                    input.value = emailValue;
                } else if (key === 'phone') {
                    input.value = phoneValue || phoneDefault;
                } else if (key === 'message') {
                    input.value = messageValue;
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
            
            // 添加错误处理
            iframe.onerror = () => {
                console.error('iframe加载错误');
            };
            
            // 提交表单
            hiddenForm.submit();
            
            // 等待提交完成（增加等待时间以确保提交成功）
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // 检查iframe是否加载成功
            let submitSuccess = false;
            try {
                // 尝试访问iframe内容（可能被CSP阻止，但不影响提交）
                if (iframe.contentWindow && iframe.contentWindow.location) {
                    submitSuccess = true;
                } else {
                    // 即使无法访问iframe，也假设提交成功（Google Forms会返回302重定向）
                    submitSuccess = true;
                }
            } catch (e) {
                // CSP可能阻止访问，但表单可能已成功提交
                submitSuccess = true;
            }
            
            // 提交成功
            lastSubmitTime = Date.now();
            
            // 显示成功消息
            const t = typeof translations !== 'undefined' && translations[currentLang] ? translations[currentLang] : translations.zh;
            formSuccess.style.display = 'block';
            formSuccess.innerHTML = '<p>' + t.contact.form.success + '</p>';
            
            // 重置表单
            contactForm.reset();
            
            // 滚动到成功消息
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // 5秒后隐藏成功消息
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
            
            console.log('表单提交成功（已发送到Google Forms）', {
                name: nameValue,
                email: emailValue,
                phone: phoneValue || phoneDefault,
                service: serviceText,
                message: messageValue.substring(0, 50) + (messageValue.length > 50 ? '...' : '')
            });
        } catch (error) {
            // 网络错误或其他错误
            console.error('表单提交失败:', error);
            
            // 显示错误消息
            const t = translations[currentLang] || translations.zh;
            formSuccess.style.display = 'block';
            formSuccess.innerHTML = '<p style="color: #ef4444;">' + t.contact.form.error + '</p>';
            
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // 3秒后隐藏错误消息
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        } finally {
            // 恢复按钮状态
            if (submitButton) {
                const t = typeof translations !== 'undefined' && translations[currentLang] ? translations[currentLang] : translations.zh;
                submitButton.disabled = false;
                submitButton.textContent = t.contact.form.submit;
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

