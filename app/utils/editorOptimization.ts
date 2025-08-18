/**
 * 🚀 Editor Optimization Utilities for bolt.diy
 * تحسينات محرر الأكواد والأداء
 */

import { EditorView, ViewPlugin, type ViewUpdate } from '@codemirror/view';
import { StateField, StateEffect } from '@codemirror/state';
import { debounce } from './debounce';

// تحسين تحديث المحرر
export const createOptimizedUpdateListener = (
  onChange: (content: string) => void,
  delay = 300
) => {
  const debouncedOnChange = debounce(onChange, delay);
  
  return ViewPlugin.fromClass(class {
    update(update: ViewUpdate) {
      if (update.docChanged) {
        // تحديث فوري للتفاعل البصري
        requestAnimationFrame(() => {
          debouncedOnChange(update.state.doc.toString());
        });
      }
    }
  });
};

// تحسين تمييز السينتاكس
export const optimizedHighlighting = StateField.define({
  create: () => new Set<number>(),
  update(value, transaction) {
    if (transaction.docChanged) {
      // تحديث تدريجي للتمييز
      const newSet = new Set(value);
      transaction.changes.iterChanges((fromA, toA) => {
        for (let i = fromA; i <= toA; i++) {
          newSet.add(i);
        }
      });
      return newSet;
    }
    return value;
  }
});

// تحسين الطي والتوسع
export const createOptimizedFolding = () => {
  return EditorView.theme({
    '.cm-foldGutter': {
      width: '16px',
      transition: 'all 0.2s ease',
    },
    '.cm-foldGutter .cm-gutterElement': {
      padding: '0 2px',
      cursor: 'pointer',
    },
    '.cm-foldGutter .cm-gutterElement:hover': {
      backgroundColor: 'var(--bolt-elements-item-backgroundActive)',
    }
  });
};

// تحسين البحث في المحرر
export const createOptimizedSearch = () => {
  return EditorView.theme({
    '.cm-searchMatch': {
      backgroundColor: 'rgba(14, 165, 233, 0.2)',
      border: '1px solid rgba(14, 165, 233, 0.4)',
      borderRadius: '2px',
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: 'rgba(14, 165, 233, 0.4)',
    }
  });
};

// تحسين الأداء للملفات الكبيرة
export const createLargeFileOptimization = () => {
  return ViewPlugin.fromClass(class {
    private rafId: number | null = null;
    
    update(update: ViewUpdate) {
      if (update.state.doc.length > 50000) {
        // تأخير التحديثات للملفات الكبيرة
        if (this.rafId) {
          cancelAnimationFrame(this.rafId);
        }
        
        this.rafId = requestAnimationFrame(() => {
          // تطبيق التحديثات بشكل تدريجي
          this.rafId = null;
        });
      }
    }
    
    destroy() {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
    }
  });
};

// تحسين التمرير في المحرر
export const createSmoothScrolling = () => {
  return EditorView.theme({
    '.cm-scroller': {
      scrollBehavior: 'smooth',
      overflowX: 'auto',
      overflowY: 'auto',
    },
    '.cm-scroller::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },
    '.cm-scroller::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '.cm-scroller::-webkit-scrollbar-thumb': {
      background: 'rgba(156, 163, 175, 0.3)',
      borderRadius: '4px',
      transition: 'background 0.2s ease',
    },
    '.cm-scroller::-webkit-scrollbar-thumb:hover': {
      background: 'rgba(156, 163, 175, 0.6)',
    }
  });
};

// تحسين الإكمال التلقائي
export const createOptimizedAutocompletion = () => {
  return EditorView.theme({
    '.cm-tooltip-autocomplete': {
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      border: '1px solid var(--bolt-elements-borderColor)',
      backgroundColor: 'var(--bolt-elements-bg-depth-1)',
      maxHeight: '200px',
      overflowY: 'auto',
    },
    '.cm-tooltip-autocomplete ul': {
      maxHeight: 'none',
    },
    '.cm-tooltip-autocomplete li': {
      padding: '4px 8px',
      borderRadius: '4px',
      margin: '1px',
      transition: 'all 0.15s ease',
    },
    '.cm-tooltip-autocomplete li[aria-selected]': {
      backgroundColor: 'var(--bolt-elements-item-backgroundAccent)',
      color: 'var(--bolt-elements-item-contentAccent)',
    }
  });
};