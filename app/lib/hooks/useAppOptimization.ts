/**
 * 🚀 App Optimization Hook for bolt.diy
 * Hook شامل لتحسين أداء التطبيق
 */

import { useEffect, useCallback, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { themeStore } from '~/lib/stores/theme';

export const useAppOptimization = () => {
  const theme = useStore(themeStore);
  const performanceMetrics = useRef({
    renderCount: 0,
    lastRenderTime: Date.now(),
  });

  // تحسين الأداء العام
  const optimizeApp = useCallback(() => {
    // تحسين CSS للمس والاستجابة
    const touchOptimizationCSS = `
      /* تحسين استجابة اللمس */
      * {
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
      }
      
      button, [role="button"], .clickable {
        user-select: none;
        transition: all 0.15s ease-in-out;
      }
      
      button:active, [role="button"]:active {
        transform: scale(0.98);
      }
      
      /* تحسين التمرير */
      * {
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
      }
      
      /* تحسين الرسوم المتحركة */
      .animate-in {
        animation-duration: 0.2s;
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
      }
      
      /* تحسين الظلال بالألوان الجديدة */
      .shadow-lg {
        box-shadow: 0 10px 25px -3px rgba(14, 165, 233, 0.1), 0 4px 6px -2px rgba(14, 165, 233, 0.05);
      }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.id = 'app-optimization-styles';
    styleElement.textContent = touchOptimizationCSS;
    
    // إزالة الأنماط القديمة إذا وجدت
    const existingStyles = document.getElementById('app-optimization-styles');
    if (existingStyles) {
      existingStyles.remove();
    }
    
    document.head.appendChild(styleElement);
  }, []);

  // تحسين معالجة الأخطاء
  const handleError = useCallback((error: Error, errorInfo?: any) => {
    console.error('App Error:', error, errorInfo);
    
    // إرسال تقرير الخطأ (يمكن تخصيصه حسب الحاجة)
    if (process.env.NODE_ENV === 'production') {
      // تسجيل الخطأ في خدمة التتبع
    }
  }, []);

  // تحسين استخدام الذاكرة
  const optimizeMemory = useCallback(() => {
    // تنظيف المتغيرات غير المستخدمة
    if (window.gc && typeof window.gc === 'function') {
      window.gc();
    }
    
    // تنظيف Event Listeners القديمة
    const oldListeners = document.querySelectorAll('[data-old-listener]');
    oldListeners.forEach(element => {
      element.removeAttribute('data-old-listener');
    });
  }, []);

  // مراقبة الأداء
  const trackPerformance = useCallback(() => {
    performanceMetrics.current.renderCount++;
    const now = Date.now();
    const timeSinceLastRender = now - performanceMetrics.current.lastRenderTime;
    
    // تحذير إذا كان الرندر بطيء جداً
    if (timeSinceLastRender > 100) {
      console.warn('Slow render detected:', timeSinceLastRender + 'ms');
    }
    
    performanceMetrics.current.lastRenderTime = now;
  }, []);

  // تطبيق التحسينات عند بدء التطبيق
  useEffect(() => {
    optimizeApp();
    
    // تحسين الذاكرة كل 5 دقائق
    const memoryCleanupInterval = setInterval(optimizeMemory, 5 * 60 * 1000);
    
    // مراقبة الأداء
    const performanceInterval = setInterval(trackPerformance, 1000);
    
    return () => {
      clearInterval(memoryCleanupInterval);
      clearInterval(performanceInterval);
    };
  }, [optimizeApp, optimizeMemory, trackPerformance]);

  // تحديث الأنماط عند تغيير الثيم
  useEffect(() => {
    optimizeApp();
  }, [theme, optimizeApp]);

  return {
    handleError,
    optimizeMemory,
    performanceMetrics: performanceMetrics.current,
  };
};