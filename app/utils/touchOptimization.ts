/**
 * 🚀 Touch Optimization Utilities for bolt.diy
 * تحسينات اللمس والاستجابة للأزرار
 */

import React from 'react';

// تحسين استجابة اللمس للأزرار
export const optimizeTouchResponse = () => {
  // إزالة تأخير 300ms على الأجهزة المحمولة
  if ('ontouchstart' in window) {
    document.addEventListener('touchstart', () => {}, { passive: true });
  }
  
  // تحسين CSS للمس
  const style = document.createElement('style');
  style.textContent = `
    /* تحسين استجابة اللمس */
    button, [role="button"], .clickable {
      touch-action: manipulation;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
      transition: all 0.15s ease-in-out;
    }
    
    /* تأثيرات اللمس المحسنة */
    button:active, [role="button"]:active, .clickable:active {
      transform: scale(0.98);
      transition: transform 0.1s ease-in-out;
    }
    
    /* تحسين التمرير */
    * {
      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;
    }
    
    /* تحسين التركيز للوحة المفاتيح */
    button:focus-visible, [role="button"]:focus-visible {
      outline: 2px solid #3B82F6;
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);
};

// تحسين معالجة الأحداث للأزرار
export const createOptimizedClickHandler = (handler: () => void) => {
  let isProcessing = false;
  
  return (event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    
    if (isProcessing) return;
    
    isProcessing = true;
    
    // تنفيذ فوري للتفاعل البصري
    const target = event.currentTarget as HTMLElement;
    target.style.transform = 'scale(0.98)';
    
    // استخدام requestAnimationFrame للأداء الأمثل
    requestAnimationFrame(() => {
      handler();
      
      // إعادة تعيين التأثير البصري
      setTimeout(() => {
        target.style.transform = '';
        isProcessing = false;
      }, 100);
    });
  };
};

// تحسين التمرير السلس
export const enableSmoothScrolling = () => {
  const style = document.createElement('style');
  style.textContent = `
    /* تمرير سلس محسن */
    html {
      scroll-behavior: smooth;
    }
    
    /* تحسين شريط التمرير */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
      background: rgba(156, 163, 175, 0.3);
      border-radius: 4px;
      transition: background 0.2s ease;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(156, 163, 175, 0.6);
    }
    
    /* تحسين التمرير للعناصر المحددة */
    .scroll-container {
      scroll-behavior: smooth;
      scrollbar-width: thin;
      scrollbar-color: rgba(156, 163, 175, 0.3) transparent;
    }
  `;
  document.head.appendChild(style);
};

// Hook لتحسين الأداء
export const usePerformanceOptimization = () => {
  React.useEffect(() => {
    optimizeTouchResponse();
    enableSmoothScrolling();
    
    // تحسين الذاكرة
    const cleanup = () => {
      // تنظيف المستمعين غير المستخدمة
      window.removeEventListener('resize', () => {});
    };
    
    return cleanup;
  }, []);
};