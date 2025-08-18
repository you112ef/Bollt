/**
 * 🚀 Optimized Button Component for bolt.diy
 * مكون زر محسن للأداء والاستجابة
 */

import { memo, forwardRef, useState, useCallback } from 'react';
import { classNames } from '~/utils/classNames';

interface OptimizedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: string;
  children: React.ReactNode;
}

export const OptimizedButton = memo(forwardRef<HTMLButtonElement, OptimizedButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    loading = false, 
    icon, 
    className, 
    onClick,
    disabled,
    children, 
    ...props 
  }, ref) => {
    const [isPressed, setIsPressed] = useState(false);
    
    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) return;
      
      // تأثير بصري فوري
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 150);
      
      // تنفيذ المعالج
      onClick?.(event);
    }, [onClick, disabled, loading]);
    
    const baseClasses = classNames(
      // الأساسيات
      'relative inline-flex items-center justify-center gap-2',
      'font-medium rounded-lg transition-all duration-150 ease-in-out',
      'touch-manipulation select-none',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2',
      
      // الأحجام
      {
        'px-3 py-1.5 text-sm': size === 'sm',
        'px-4 py-2 text-sm': size === 'md',
        'px-6 py-3 text-base': size === 'lg',
      },
      
      // المتغيرات
      {
        'bg-accent-500 hover:bg-accent-600 text-white shadow-md hover:shadow-lg': variant === 'primary',
        'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300': variant === 'secondary',
        'bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg': variant === 'danger',
      },
      
      // الحالات
      {
        'opacity-50 cursor-not-allowed': disabled || loading,
        'transform scale-95': isPressed,
      },
      
      className
    );
    
    return (
      <button
        ref={ref}
        className={baseClasses}
        onClick={handleClick}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
        )}
        {icon && !loading && (
          <div className={icon} />
        )}
        {children}
      </button>
    );
  }
));

OptimizedButton.displayName = 'OptimizedButton';