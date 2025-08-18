/**
 * 🚀 Comprehensive App Enhancements for bolt.diy
 * تحسينات شاملة للتطبيق
 */

// إعدادات التحسين الشاملة
export const APP_OPTIMIZATION_CONFIG = {
  // تحسين الاستجابة
  touch: {
    tapDelay: 0,
    touchCallout: false,
    userSelect: false,
    highlightColor: 'transparent',
  },
  
  // تحسين الأداء
  performance: {
    debounceDelay: 300,
    throttleDelay: 100,
    animationDuration: 200,
    lazyLoadThreshold: 100,
  },
  
  // تحسين الذاكرة
  memory: {
    cleanupInterval: 5 * 60 * 1000, // 5 دقائق
    maxCacheSize: 50,
    gcInterval: 10 * 60 * 1000, // 10 دقائق
  },
  
  // تحسين التمرير
  scrolling: {
    behavior: 'smooth',
    sensitivity: 5,
    duration: 150,
  }
};

// تطبيق تحسينات CSS شاملة
export const applyGlobalOptimizations = () => {
  const optimizationCSS = `
    /* 🚀 تحسينات الأداء الشاملة */
    
    /* تحسين الخطوط */
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
    
    /* تحسين الأساسيات */
    * {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    html {
      scroll-behavior: smooth;
      text-rendering: optimizeLegibility;
    }
    
    body {
      overscroll-behavior: none;
      touch-action: pan-x pan-y;
    }
    
    /* تحسين التفاعل */
    button, [role="button"], .interactive {
      touch-action: manipulation;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }
    
    button:active, [role="button"]:active, .interactive:active {
      transform: scale(0.98);
    }
    
    button:disabled, [role="button"][aria-disabled="true"] {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none !important;
    }
    
    /* تحسين النماذج */
    input, textarea, select {
      touch-action: manipulation;
      transition: all 0.15s ease;
    }
    
    input:focus, textarea:focus, select:focus {
      outline: 2px solid #0EA5E9;
      outline-offset: 2px;
      border-color: #0EA5E9;
    }
    
    /* تحسين التمرير */
    .scroll-container {
      scroll-behavior: smooth;
      scrollbar-width: thin;
      scrollbar-color: rgba(14, 165, 233, 0.3) transparent;
    }
    
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
      background: rgba(14, 165, 233, 0.3);
      border-radius: 4px;
      transition: background 0.2s ease;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(14, 165, 233, 0.6);
    }
    
    /* تحسين الحركات */
    .animate-fade-in {
      animation: fadeIn 0.2s ease-out;
    }
    
    .animate-slide-up {
      animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { 
        opacity: 0; 
        transform: translateY(10px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    
    /* تحسين الظلال بالألوان الجديدة */
    .shadow-accent {
      box-shadow: 0 4px 14px 0 rgba(14, 165, 233, 0.15);
    }
    
    .shadow-accent-lg {
      box-shadow: 0 10px 25px -3px rgba(14, 165, 233, 0.1), 0 4px 6px -2px rgba(14, 165, 233, 0.05);
    }
    
    /* تحسين الحدود */
    .border-accent {
      border-color: #0EA5E9;
    }
    
    .border-accent-light {
      border-color: rgba(14, 165, 233, 0.3);
    }
    
    /* تحسين الخلفيات */
    .bg-accent-gradient {
      background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
    }
    
    .bg-accent-soft {
      background: rgba(14, 165, 233, 0.1);
    }
    
    /* تحسين النصوص */
    .text-accent {
      color: #0EA5E9;
    }
    
    .text-accent-dark {
      color: #0369A1;
    }
    
    /* تحسين التركيز */
    .focus-accent:focus {
      outline: 2px solid #0EA5E9;
      outline-offset: 2px;
    }
    
    /* تحسين الحالة النشطة */
    .active-accent {
      background-color: rgba(14, 165, 233, 0.1);
      color: #0369A1;
    }
    
    /* تحسين للأجهزة المحمولة */
    @media (max-width: 768px) {
      button, [role="button"] {
        min-height: 44px; /* معيار Apple للمس */
        min-width: 44px;
      }
      
      input, textarea, select {
        min-height: 44px;
        font-size: 16px; /* منع التكبير في iOS */
      }
      
      .touch-target {
        min-height: 44px;
        min-width: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    
    /* تحسين الأداء للحركات */
    .will-change-transform {
      will-change: transform;
    }
    
    .will-change-opacity {
      will-change: opacity;
    }
    
    .gpu-accelerated {
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
    
    /* تحسين التحميل */
    .loading-skeleton {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }
    
    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    
    /* تحسين الشفافية */
    .backdrop-blur-optimized {
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      background: rgba(255, 255, 255, 0.8);
    }
    
    [data-theme="dark"] .backdrop-blur-optimized {
      background: rgba(0, 0, 0, 0.8);
    }
  `;
  
  // إضافة الأنماط إلى الصفحة
  const styleElement = document.createElement('style');
  styleElement.id = 'app-enhancements';
  styleElement.textContent = optimizationCSS;
  
  // إزالة الأنماط القديمة
  const existingStyles = document.getElementById('app-enhancements');
  if (existingStyles) {
    existingStyles.remove();
  }
  
  document.head.appendChild(styleElement);
};

// تطبيق تحسينات JavaScript
export const applyJavaScriptOptimizations = () => {
  // تحسين Event Delegation
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    
    // تحسين النقر على الأزرار
    if (target.matches('button, [role="button"]')) {
      // منع الضغط المتكرر
      if (target.dataset.processing === 'true') {
        event.preventDefault();
        return;
      }
      
      target.dataset.processing = 'true';
      setTimeout(() => {
        delete target.dataset.processing;
      }, 300);
    }
  }, { passive: false });
  
  // تحسين تحميل الصور
  const images = document.querySelectorAll('img[data-lazy]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.removeAttribute('data-lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach((img) => imageObserver.observe(img));
  
  // تحسين الذاكرة
  const memoryCleanup = () => {
    // تنظيف Event Listeners المنتهية الصلاحية
    const expiredElements = document.querySelectorAll('[data-expired]');
    expiredElements.forEach((element) => {
      element.remove();
    });
    
    // تشغيل Garbage Collection إذا كان متاحاً
    if (window.gc && typeof window.gc === 'function') {
      window.gc();
    }
  };
  
  // تنظيف الذاكرة كل 5 دقائق
  setInterval(memoryCleanup, 5 * 60 * 1000);
};

// تحسين تحميل الخطوط
export const optimizeFontLoading = () => {
  const fontDisplay = document.createElement('style');
  fontDisplay.textContent = `
    @font-face {
      font-family: 'JetBrains Mono';
      font-display: swap;
      src: url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
    }
  `;
  document.head.appendChild(fontDisplay);
};

// تشغيل جميع التحسينات
export const initializeAppEnhancements = () => {
  // تطبيق التحسينات عند تحميل DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      applyGlobalOptimizations();
      applyJavaScriptOptimizations();
      optimizeFontLoading();
    });
  } else {
    applyGlobalOptimizations();
    applyJavaScriptOptimizations();
    optimizeFontLoading();
  }
};