/**
 * 🚀 Optimized Settings Component for bolt.diy
 * مكون إعدادات محسن للأداء والاستجابة
 */

import { memo, useState, useCallback, useMemo } from 'react';
import { useStore } from '@nanostores/react';
import { settingsStore } from '~/lib/stores/settings';
import { OptimizedButton } from '~/components/ui/OptimizedButton';
import { useOptimizedButton } from '~/utils/performanceOptimization';

interface OptimizedSettingsProps {
  className?: string;
}

export const OptimizedSettings = memo(({ className }: OptimizedSettingsProps) => {
  const settings = useStore(settingsStore);
  const [isLoading, setIsLoading] = useState(false);
  
  // تحسين معالج حفظ الإعدادات
  const { optimizedHandler: handleSave, isProcessing } = useOptimizedButton(
    useCallback(async () => {
      setIsLoading(true);
      try {
        // حفظ الإعدادات مع تحسين الأداء
        await settingsStore.save();
        
        // تطبيق التحسينات الجديدة
        document.dispatchEvent(new CustomEvent('settings-updated', {
          detail: settings
        }));
      } catch (error) {
        console.error('Error saving settings:', error);
      } finally {
        setIsLoading(false);
      }
    }, [settings])
  );
  
  // تحسين معالج إعادة التعيين
  const { optimizedHandler: handleReset } = useOptimizedButton(
    useCallback(() => {
      settingsStore.reset();
    }, [])
  );
  
  // تحسين القيم المحسوبة
  const settingsCategories = useMemo(() => [
    {
      id: 'appearance',
      title: 'المظهر',
      icon: 'i-ph:palette',
      settings: [
        { key: 'theme', label: 'الثيم', type: 'select' },
        { key: 'fontSize', label: 'حجم الخط', type: 'range' },
      ]
    },
    {
      id: 'performance',
      title: 'الأداء',
      icon: 'i-ph:lightning',
      settings: [
        { key: 'enableVirtualization', label: 'تفعيل Virtualization', type: 'toggle' },
        { key: 'optimizeAnimations', label: 'تحسين الحركات', type: 'toggle' },
      ]
    },
    {
      id: 'editor',
      title: 'المحرر',
      icon: 'i-ph:code',
      settings: [
        { key: 'autoSave', label: 'الحفظ التلقائي', type: 'toggle' },
        { key: 'lineNumbers', label: 'أرقام الأسطر', type: 'toggle' },
      ]
    }
  ], []);
  
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-bolt-elements-textPrimary">
          إعدادات التطبيق
        </h2>
        <div className="flex gap-2">
          <OptimizedButton
            variant="secondary"
            size="sm"
            onClick={handleReset}
            disabled={isProcessing}
          >
            إعادة تعيين
          </OptimizedButton>
          <OptimizedButton
            variant="primary"
            size="sm"
            onClick={handleSave}
            loading={isLoading || isProcessing}
          >
            حفظ التغييرات
          </OptimizedButton>
        </div>
      </div>
      
      <div className="grid gap-6">
        {settingsCategories.map((category) => (
          <div 
            key={category.id}
            className="bg-bolt-elements-bg-depth-2 rounded-lg p-4 border border-bolt-elements-borderColor"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`${category.icon} text-accent-500`} />
              <h3 className="font-medium text-bolt-elements-textPrimary">
                {category.title}
              </h3>
            </div>
            
            <div className="space-y-3">
              {category.settings.map((setting) => (
                <div key={setting.key} className="flex items-center justify-between">
                  <label className="text-sm text-bolt-elements-textSecondary">
                    {setting.label}
                  </label>
                  <div className="flex items-center">
                    {setting.type === 'toggle' && (
                      <button
                        className={`
                          relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                          ${settings[setting.key] ? 'bg-accent-500' : 'bg-gray-300'}
                        `}
                        onClick={() => {
                          settingsStore.updateSetting(setting.key, !settings[setting.key]);
                        }}
                      >
                        <span
                          className={`
                            inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                            ${settings[setting.key] ? 'translate-x-6' : 'translate-x-1'}
                          `}
                        />
                      </button>
                    )}
                    {setting.type === 'range' && (
                      <input
                        type="range"
                        min="12"
                        max="20"
                        value={settings[setting.key] || 14}
                        onChange={(e) => {
                          settingsStore.updateSetting(setting.key, parseInt(e.target.value));
                        }}
                        className="w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

OptimizedSettings.displayName = 'OptimizedSettings';