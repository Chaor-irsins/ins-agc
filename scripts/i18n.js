// ===== 多语言支持 =====
const translations = {
    zh: {
        // 页面标题
        pageTitle: '诚信保险代理公司 | Integrity Risk Solutions LLC',
        
        // 导航栏
        nav: {
            home: '首页',
            about: '关于我们',
            services: '服务介绍',
            contact: '联系方式'
        },
        
        // Hero部分
        hero: {
            title: '专业的保险代理服务',
            subtitle: '为您和您的家人,以及您的企业提供全方位的保险保障方案',
            btnServices: '了解服务',
            btnContact: '联系我们'
        },
        
        // 关于我们
        about: {
            title: '关于我们',
            subtitle: '值得信赖的保险合作伙伴',
            heading: '关于我们',
            intro: '我们是一家专业的保险代理机构，致力于为客户提供最专业、最可靠的保险代理服务。凭借多年的行业经验和专业的团队，我们专注于商业保险、汽车保险和房屋保险领域，帮助客户找到最适合的保险解决方案。',
            servicesTitle: '我们的服务范围',
            businessInsurance: '商业保险',
            businessInsuranceDesc: '为各类企业提供全面的商业保险解决方案，涵盖餐饮、零售、服务、物流、建筑等多个行业。我们深入了解不同行业的风险特点，为企业量身定制最合适的保障方案。',
            carInsurance: '汽车保险',
            carInsuranceDesc: '为汽车、摩托车、游艇等各类交通工具提供全方位保障。通过快速报价、多家保险公司对比和专业的理赔协助，确保您以最优惠的价格获得最全面的保障。',
            homeInsurance: '房屋保险',
            homeInsuranceDesc: '为自住房和出租房提供专业的财产保障方案，包括财产评估、保障方案设计、快速理赔和24小时专业咨询。',
            ownerOccupied: '自住房',
            rental: '出租房',
            whyTitle: '为什么选择我们',
            whyDesc: '我们以专业、诚信、高效为服务理念，通过深入了解客户需求，提供个性化的保险方案。无论您是个人客户还是企业客户，我们都能为您提供专业、贴心的服务，成为您最值得信赖的保险合作伙伴。',
            yearsExp: '年行业经验',
            clients: '满意客户',
            partners: '合作保险公司'
        },
        
        // 服务介绍
        services: {
            title: '服务介绍',
            subtitle: '全方位的保险解决方案',
            businessInsurance: '商业保险',
            businessInsuranceDesc: '为企业提供全面的保险解决方案，包括商业责任险、员工保险等，助力企业稳健发展。',
            carInsurance: '汽车保险',
            carInsuranceDesc: '提供全面的汽车，摩托车，游艇等提供全方位保障。',
            homeInsurance: '房屋保险',
            homeInsuranceDesc: '保护您的财产安全，为您的资产提供全方位保障。',
            features: {
                business: [
                    '餐饮业（外卖店，奶茶店，自助，烧烤等各类）',
                    '零售业（超市，美甲店，饰品等）',
                    '服务业（会计，房产，律师等）',
                    '物流业（卡车，仓库等）',
                    '建筑业（购物中心，公寓，办公楼，装修责任险，施工风险险等）'
                ],
                car: [
                    '快速报价',
                    '多家保险公司对比',
                    '在线投保',
                    '理赔协助'
                ],
                home: [
                    '自住房，出租房',
                    '全面保障方案',
                    '快速理赔服务',
                    '24小时专业咨询'
                ]
            }
        },
        
        // 联系方式
        contact: {
            title: '联系方式',
            subtitle: '我们随时为您服务',
            address: '地址',
            addressValue: '请填写您的公司地址',
            phone: '电话',
            email: '邮箱',
            hours: '营业时间',
            hoursValue: '周一至周五：9:00 - 18:00',
            form: {
                name: '姓名',
                nameRequired: '姓名至少需要2个字符',
                email: '邮箱',
                emailRequired: '请输入有效的邮箱地址',
                phone: '电话',
                phoneInvalid: '请输入有效的电话号码',
                service: '咨询类型',
                servicePlaceholder: '请选择',
                serviceCar: '汽车保险',
                serviceProperty: '房屋保险',
                serviceBusiness: '商业保险',
                serviceOther: '其他',
                message: '留言',
                messageRequired: '留言至少需要10个字符',
                submit: '提交咨询',
                success: '✓ 感谢您的咨询！我们会尽快与您联系。',
                error: '✗ 提交失败，请检查网络连接后重试。如果问题持续，请直接致电联系我们。',
                submitting: '提交中...',
                cooldown: '请稍候再试，距离上次提交还需等待 {seconds} 秒'
            }
        },
        
        // 页脚
        footer: {
            tagline: '专业的保险代理服务，为您的未来保驾护航。',
            quickLinks: '快速链接',
            services: '服务项目',
            copyright: '© 2025 Integrity Risk Solutions LLC. 保留所有权利。'
        }
    },
    
    en: {
        // 页面标题
        pageTitle: 'Integrity Risk Solutions LLC | Professional Insurance Agency',
        
        // 导航栏
        nav: {
            home: 'Home',
            about: 'About Us',
            services: 'Services',
            contact: 'Contact'
        },
        
        // Hero部分
        hero: {
            title: 'Professional Insurance Agency Services',
            subtitle: 'Comprehensive insurance solutions for you, your family, and your business',
            btnServices: 'Our Services',
            btnContact: 'Contact Us'
        },
        
        // 关于我们
        about: {
            title: 'About Us',
            subtitle: 'Your Trusted Insurance Partner',
            heading: 'About Us',
            intro: 'We are a professional insurance agency dedicated to providing the most professional and reliable insurance services to our clients. With years of industry experience and a professional team, we specialize in commercial insurance, auto insurance, and home insurance, helping clients find the most suitable insurance solutions.',
            servicesTitle: 'Our Services',
            businessInsurance: 'Commercial Insurance',
            businessInsuranceDesc: 'We provide comprehensive commercial insurance solutions for various businesses, covering industries such as food service, retail, professional services, logistics, and construction. We understand the unique risk characteristics of different industries and tailor the most suitable coverage plans for businesses.',
            carInsurance: 'Auto Insurance',
            carInsuranceDesc: 'We provide comprehensive coverage for automobiles, motorcycles, boats, and other vehicles. Through quick quotes, multi-insurer comparisons, and professional claims assistance, we ensure you get the most comprehensive coverage at the best price.',
            homeInsurance: 'Home Insurance',
            homeInsuranceDesc: 'We provide professional property protection plans for owner-occupied and rental properties, including property assessment, coverage plan design, fast claims processing, and 24/7 professional consultation.',
            ownerOccupied: 'Homeowner',
            rental: 'Rental',
            whyTitle: 'Why Choose Us',
            whyDesc: 'We adhere to the service principles of professionalism, integrity, and efficiency. By deeply understanding customer needs, we provide personalized insurance solutions. Whether you are an individual or business client, we can provide professional and attentive service, becoming your most trusted insurance partner.',
            yearsExp: 'Years of Experience',
            clients: 'Satisfied Clients',
            partners: 'Insurance Partners'
        },
        
        // 服务介绍
        services: {
            title: 'Our Services',
            subtitle: 'Comprehensive Insurance Solutions',
            businessInsurance: 'Commercial Insurance',
            businessInsuranceDesc: 'Comprehensive insurance solutions for businesses, including commercial liability insurance, employee insurance, and more, helping businesses grow steadily.',
            carInsurance: 'Auto Insurance',
            carInsuranceDesc: 'Comprehensive coverage for automobiles, motorcycles, boats, and more.',
            homeInsurance: 'Home Insurance',
            homeInsuranceDesc: 'Protect your property assets with comprehensive coverage solutions.',
            features: {
                business: [
                    'Food Service (To-go, bubble tea, buffet, BBQ, etc.)',
                    'Retail (supermarkets, nail salons, accessories, etc.)',
                    'Professional Services (accounting, real estate, legal, etc.)',
                    'Logistics (trucks, warehouses, etc.)',
                    'Construction (shopping centers, apartments, office buildings, renovation liability, construction risk, etc.)'
                ],
                car: [
                    'Quick Quotes',
                    'Multi-Insurer Comparison',
                    'Online Enrollment',
                    'Claims Assistance'
                ],
                home: [
                    'Homeowner & Rental Properties',
                    'Comprehensive Coverage Plans',
                    'Fast Claims Service',
                    '24/7 Professional Consultation'
                ]
            }
        },
        
        // 联系方式
        contact: {
            title: 'Contact Us',
            subtitle: 'We Are Here to Serve You',
            address: 'Address',
            addressValue: 'Please enter your company address',
            phone: 'Phone',
            email: 'Email',
            hours: 'Business Hours',
            hoursValue: 'Monday - Friday: 9:00 AM - 6:00 PM',
            form: {
                name: 'Name',
                nameRequired: 'Name must be at least 2 characters',
                email: 'Email',
                emailRequired: 'Please enter a valid email address',
                phone: 'Phone',
                phoneInvalid: 'Please enter a valid phone number',
                service: 'Service Type',
                servicePlaceholder: 'Please select',
                serviceCar: 'Auto Insurance',
                serviceProperty: 'Home Insurance',
                serviceBusiness: 'Commercial Insurance',
                serviceOther: 'Other',
                message: 'Message',
                messageRequired: 'Message must be at least 10 characters',
                submit: 'Submit Inquiry',
                success: '✓ Thank you for your inquiry! We will contact you soon.',
                error: '✗ Submission failed. Please check your network connection and try again. If the problem persists, please call us directly.',
                submitting: 'Submitting...',
                cooldown: 'Please wait. You can submit again in {seconds} seconds'
            }
        },
        
        // 页脚
        footer: {
            tagline: 'Professional insurance agency services, protecting your future.',
            quickLinks: 'Quick Links',
            services: 'Services',
            copyright: '© 2025 Integrity Risk Solutions LLC. All rights reserved.'
        }
    }
};

// 当前语言
let currentLang = localStorage.getItem('preferredLanguage') || 'zh';

// 切换语言
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    updatePageLanguage();
    updateLanguageButtons();
}

// 更新页面语言
function updatePageLanguage() {
    const t = translations[currentLang];
    
    // 更新页面标题
    document.getElementById('pageTitle').textContent = t.pageTitle;
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;
        for (const k of keys) {
            value = value[k];
        }
        if (value !== undefined) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.type === 'submit' || element.type === 'button') {
                    element.value = value;
                } else if (element.hasAttribute('placeholder')) {
                    element.placeholder = value;
                }
            } else if (element.tagName === 'OPTION') {
                element.textContent = value;
            } else {
                element.textContent = value;
            }
        }
    });
    
    // 更新公司名称
    const companyName = currentLang === 'zh' ? '诚信保险代理公司' : 'Integrity Risk Solutions LLC';
    const companyNameElement = document.querySelector('.nav-brand h2');
    if (companyNameElement) {
        companyNameElement.textContent = companyName;
    }
    
    // 更新Hero部分
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroTitle) heroTitle.textContent = t.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
    
    const btnServices = document.querySelector('.hero-buttons .btn-primary');
    const btnContact = document.querySelector('.hero-buttons .btn-secondary');
    if (btnServices) btnServices.textContent = t.hero.btnServices;
    if (btnContact) btnContact.textContent = t.hero.btnContact;
    
    // 更新关于我们部分
    updateAboutSection(t);
    
    // 更新服务介绍部分
    updateServicesSection(t);
    
    // 更新联系方式部分
    updateContactSection(t);
    
    // 更新页脚
    updateFooter(t);
}

// 更新关于我们部分
function updateAboutSection(t) {
    const sectionTitle = document.querySelector('#about .section-title');
    const sectionSubtitle = document.querySelector('#about .section-subtitle');
    if (sectionTitle) sectionTitle.textContent = t.about.title;
    if (sectionSubtitle) sectionSubtitle.textContent = t.about.subtitle;
    
    const aboutHeading = document.querySelector('#about .about-text h3:first-child');
    if (aboutHeading) aboutHeading.textContent = t.about.heading;
    
    const aboutTexts = document.querySelectorAll('#about .about-text p');
    if (aboutTexts.length >= 1) {
        aboutTexts[0].textContent = t.about.intro;
    }
    
    // 更新"我们的服务范围"标题 - 查找所有h3，找到包含"服务范围"的那个
    const allH3 = document.querySelectorAll('#about .about-text h3');
    allH3.forEach(h3 => {
        if (h3.textContent.includes('服务范围') || h3.textContent.includes('Services')) {
            h3.textContent = t.about.servicesTitle;
        }
    });
    
    // 更新服务范围描述
    const serviceDescriptions = document.querySelectorAll('#about .about-text p strong');
    if (serviceDescriptions.length >= 3) {
        serviceDescriptions[0].textContent = t.about.businessInsurance + ' - ';
        serviceDescriptions[1].textContent = t.about.carInsurance + ' - ';
        serviceDescriptions[2].textContent = t.about.homeInsurance + ' - ';
    }
    
    const serviceParas = document.querySelectorAll('#about .about-text p');
    if (serviceParas.length >= 4) {
        serviceParas[1].innerHTML = '<strong>' + t.about.businessInsurance + ' - </strong>' + t.about.businessInsuranceDesc;
        serviceParas[2].innerHTML = '<strong>' + t.about.carInsurance + ' - </strong>' + t.about.carInsuranceDesc;
        serviceParas[3].innerHTML = '<strong>' + t.about.homeInsurance + ' - </strong>' + t.about.homeInsuranceDesc;
    }
    
    // 更新"为什么选择我们"标题 - 使用之前获取的allH3
    allH3.forEach(h3 => {
        if (h3.textContent.includes('为什么') || h3.textContent.includes('Why')) {
            h3.textContent = t.about.whyTitle;
        }
    });
    
    const whyDesc = document.querySelector('#about .about-text p:last-child');
    if (whyDesc && !whyDesc.querySelector('strong')) {
        whyDesc.textContent = t.about.whyDesc;
    }
    
    // 更新统计数据标签
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 3) {
        statLabels[0].textContent = t.about.yearsExp;
        statLabels[1].textContent = t.about.clients;
        statLabels[2].textContent = t.about.partners;
    }
}

// 更新服务介绍部分
function updateServicesSection(t) {
    try {
        const sectionTitle = document.querySelector('#services .section-title');
        const sectionSubtitle = document.querySelector('#services .section-subtitle');
        if (sectionTitle) sectionTitle.textContent = t.services.title;
        if (sectionSubtitle) sectionSubtitle.textContent = t.services.subtitle;
        
        // 更新商业保险
        const businessCard = document.querySelector('.service-card-featured');
        if (businessCard) {
            const businessTitle = businessCard.querySelector('h3');
            // 修复：使用正确的选择器，找到直接子元素p（在service-card-header之后）
            let businessDesc = businessCard.querySelector('.service-card-header + p');
            if (!businessDesc) {
                // 如果找不到，尝试查找所有p元素，找到不是service-features父元素的p
                const allP = businessCard.querySelectorAll('p');
                businessDesc = Array.from(allP).find(p => {
                    return p.parentElement === businessCard && 
                           !p.classList.contains('service-features') &&
                           !p.querySelector('.service-features');
                });
            }
            const businessFeatures = businessCard.querySelectorAll('.service-features li');
            if (businessTitle) businessTitle.textContent = t.services.businessInsurance;
            if (businessDesc) businessDesc.textContent = t.services.businessInsuranceDesc;
            businessFeatures.forEach((li, index) => {
                if (t.services.features.business[index]) {
                    li.textContent = t.services.features.business[index];
                }
            });
        }
        
        // 更新汽车保险和房屋保险
        const cards = document.querySelectorAll('.services-row .service-card');
        if (cards.length >= 1) {
            // 汽车保险（第一个卡片）
            const carTitle = cards[0].querySelector('h3');
            let carDesc = cards[0].querySelector('.service-card-header + p');
            if (!carDesc) {
                const allP = cards[0].querySelectorAll('p');
                carDesc = Array.from(allP).find(p => {
                    return p.parentElement === cards[0] && 
                           !p.classList.contains('service-features') &&
                           !p.querySelector('.service-features');
                });
            }
            const carFeatures = cards[0].querySelectorAll('.service-features li');
            if (carTitle) carTitle.textContent = t.services.carInsurance;
            if (carDesc) carDesc.textContent = t.services.carInsuranceDesc;
            carFeatures.forEach((li, index) => {
                if (t.services.features.car[index]) {
                    li.textContent = t.services.features.car[index];
                }
            });
        }
        
        if (cards.length >= 2) {
            // 房屋保险（第二个卡片）
            const homeTitle = cards[1].querySelector('h3');
            let homeDesc = cards[1].querySelector('.service-card-header + p');
            if (!homeDesc) {
                const allP = cards[1].querySelectorAll('p');
                homeDesc = Array.from(allP).find(p => {
                    return p.parentElement === cards[1] && 
                           !p.classList.contains('service-features') &&
                           !p.querySelector('.service-features');
                });
            }
            const homeFeatures = cards[1].querySelectorAll('.service-features li');
            if (homeTitle) homeTitle.textContent = t.services.homeInsurance;
            if (homeDesc) homeDesc.textContent = t.services.homeInsuranceDesc;
            homeFeatures.forEach((li, index) => {
                if (t.services.features.home[index]) {
                    li.textContent = t.services.features.home[index];
                }
            });
        }
    } catch (error) {
        console.error('更新服务介绍部分时出错:', error);
    }
}

// 更新联系方式部分
function updateContactSection(t) {
    const sectionTitle = document.querySelector('#contact .section-title');
    const sectionSubtitle = document.querySelector('#contact .section-subtitle');
    if (sectionTitle) sectionTitle.textContent = t.contact.title;
    if (sectionSubtitle) sectionSubtitle.textContent = t.contact.subtitle;
    
    // 更新联系信息
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item) => {
        const icon = item.querySelector('.contact-icon');
        const h3 = item.querySelector('.contact-details h3');
        const p = item.querySelector('.contact-details p');
        
        if (icon && h3) {
            const iconText = icon.textContent.trim();
            if (iconText === '📍') {
                h3.textContent = t.contact.address;
                if (p && (p.textContent.includes('请填写') || p.textContent.includes('Please'))) {
                    p.textContent = t.contact.addressValue;
                }
            } else if (iconText === '📞') {
                h3.textContent = t.contact.phone;
            } else if (iconText === '📧') {
                h3.textContent = t.contact.email;
            } else if (iconText === '🕒') {
                h3.textContent = t.contact.hours;
                if (p && (p.textContent.includes('周一') || p.textContent.includes('Monday'))) {
                    p.textContent = t.contact.hoursValue;
                }
            }
        }
    });
    
    // 更新表单
    const formLabels = document.querySelectorAll('.form-group label');
    formLabels.forEach(label => {
        const forAttr = label.getAttribute('for');
        if (forAttr === 'name') label.textContent = t.contact.form.name + ' *';
        else if (forAttr === 'email') label.textContent = t.contact.form.email + ' *';
        else if (forAttr === 'phone') label.textContent = t.contact.form.phone;
        else if (forAttr === 'service') label.textContent = t.contact.form.service;
        else if (forAttr === 'message') label.textContent = t.contact.form.message + ' *';
    });
    
    // 更新表单选项
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        const options = serviceSelect.querySelectorAll('option');
        if (options.length >= 4) {
            options[1].textContent = t.contact.form.serviceCar;
            options[2].textContent = t.contact.form.serviceProperty;
            options[3].textContent = t.contact.form.serviceBusiness;
            options[4].textContent = t.contact.form.serviceOther;
        }
    }
    
    // 更新提交按钮
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    if (submitBtn) submitBtn.textContent = t.contact.form.submit;
}

// 更新页脚
function updateFooter(t) {
    const footerTagline = document.querySelector('.footer-section p');
    if (footerTagline) footerTagline.textContent = t.footer.tagline;
    
    const quickLinks = document.querySelector('.footer-section h4');
    if (quickLinks && quickLinks.nextElementSibling) {
        const nextH4 = quickLinks.nextElementSibling;
        if (nextH4.tagName === 'H4') {
            nextH4.textContent = t.footer.services;
        }
    }
    
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) copyright.textContent = t.footer.copyright;
}

// 更新语言按钮状态
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// 初始化语言
function initLanguage() {
    updatePageLanguage();
    updateLanguageButtons();
    
    // 语言切换按钮事件 - 使用事件委托
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            if (btn) {
                e.preventDefault();
                e.stopPropagation();
                const lang = btn.getAttribute('data-lang');
                if (lang && lang !== currentLang) {
                    switchLanguage(lang);
                }
            }
        });
    }
}

// DOMContentLoaded时初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    // DOM已经加载完成，立即执行
    initLanguage();
}

