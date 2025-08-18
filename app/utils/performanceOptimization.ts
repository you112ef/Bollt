/**
 * 🚀 Performance Optimization Utilities for bolt.diy
 * أدوات تحسين الأداء والسرعة
 */

import { memo, lazy, Suspense, useMemo, useCallback, useState, useEffect } from 'react';

// تحسين تحميل المكونات الكبيرة
export const LazyWorkbench = lazy(() => import('~/components/workbench/Workbench.client'));
export const LazyTerminal = lazy(() => import('~/components/workbench/terminal/Terminal'));
export const LazyCodeEditor = lazy(() => import('~/components/editor/codemirror/CodeMirrorEditor'));
export const LazyPreview = lazy(() => import('~/components/workbench/Preview'));

// مكون Loading محسن
export const OptimizedLoading = memo(() => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-500"></div>
  </div>
));

// Hook لتحسين الذاكرة
export const useMemoryOptimization = () => {
  useEffect(() => {
    // تنظيف الذاكرة كل 5 دقائق
    const cleanupInterval = setInterval(() => {
      if (window.gc) {
        window.gc();
      }
    }, 5 * 60 * 1000);

    return () => clearInterval(cleanupInterval);
  }, []);
};

// تحسين استجابة الأزرار مع منع الضغط المتكرر
export const useOptimizedButton = (handler: () => void, delay = 300) => {
  const [isProcessing, setIsProcessing] = useState(false);
  
  const optimizedHandler = useCallback(async () => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    
    try {
      await handler();
    } finally {
      setTimeout(() => setIsProcessing(false), delay);
    }
  }, [handler, delay, isProcessing]);
  
  return { optimizedHandler, isProcessing };
};

// تحسين Virtual Scrolling للقوائم الطويلة
export const VirtualizedList = memo(({ 
  items, 
  renderItem, 
  itemHeight = 40,
  containerHeight = 400 
}: {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  itemHeight?: number;
  containerHeight?: number;
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  
  const visibleStart = Math.floor(scrollTop / itemHeight);
  const visibleEnd = Math.min(
    visibleStart + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );
  
  const visibleItems = items.slice(visibleStart, visibleEnd);
  
  return (
    <div 
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${visibleStart * itemHeight}px)` }}>
          {visibleItems.map((item, index) => 
            renderItem(item, visibleStart + index)
          )}
        </div>
      </div>
    </div>
  );
});

// تحسين تحميل الصور
export const OptimizedImage = memo(({ 
  src, 
  alt, 
  className,
  ...props 
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        {...props}
      />
    </div>
  );
});

// تحسين إدارة الحالة
export const useOptimizedState = <T>(initialValue: T) => {
  const [state, setState] = useState(initialValue);
  
  const optimizedSetState = useCallback((newValue: T | ((prev: T) => T)) => {
    setState(prev => {
      const nextValue = typeof newValue === 'function' 
        ? (newValue as (prev: T) => T)(prev)
        : newValue;
      
      // منع التحديثات غير الضرورية
      return JSON.stringify(prev) === JSON.stringify(nextValue) ? prev : nextValue;
    });
  }, []);
  
  return [state, optimizedSetState] as const;
};

// تحسين Event Listeners
export const useOptimizedEventListener = (
  eventName: string,
  handler: (event: Event) => void,
  element: Element | Window = window,
  options: AddEventListenerOptions = { passive: true }
) => {
  useEffect(() => {
    const optimizedHandler = (event: Event) => {
      // تأخير قصير لتجميع الأحداث المتتالية
      requestAnimationFrame(() => handler(event));
    };
    
    element.addEventListener(eventName, optimizedHandler, options);
    
    return () => {
      element.removeEventListener(eventName, optimizedHandler);
    };
  }, [eventName, handler, element]);
};

// تحسين تحميل البيانات
export const useOptimizedDataFetch = <T>(
  fetchFunction: () => Promise<T>,
  dependencies: any[] = []
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  const memoizedFetch = useMemo(() => fetchFunction, dependencies);
  
  useEffect(() => {
    let cancelled = false;
    
    const loadData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const result = await memoizedFetch();
        if (!cancelled) {
          setData(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err as Error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };
    
    loadData();
    
    return () => {
      cancelled = true;
    };
  }, [memoizedFetch]);
  
  return { data, loading, error };
};