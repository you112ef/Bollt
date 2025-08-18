# 🛠️ مهمة التعديل لمشروع bolt.diy

## 🎯 الهدف
تصغير عناصر المشروع بحيث تناسب شاشات الهواتف الصغيرة (≤ 400px) مع الحفاظ على الشكل المتناسق.
يشمل التعديل:
- الصفحة الرئيسية و **Center Panel**
- صفحة الإعدادات ⚙️
- العناصر المنبثقة (Modals / Dialogs) 🔔

---

## ✏️ خطوات التنفيذ

### 1) إضافة Meta للـ Responsive
في ملف `index.html` أو القالب الرئيسي:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
```

في هذا المشروع (Remix)، تمت إضافة/تعديل الـ meta داخل `app/root.tsx`.

---

### 2) إنشاء ملف CSS جديد للتصغير

أضف ملف باسم:

`src/assets/css/responsive.css`

محتوى الملف:

```css
/* ==============================
   📱 Responsive CSS لمشروع bolt.diy
   ============================== */

/* الأساس */
html, body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.4;
}

* {
  box-sizing: border-box;
}

/* ✅ Center Panel */
.center-panel, .main-panel, #centerPanel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  gap: 12px;
}

.center-panel .card, .main-panel .card, #centerPanel .card {
  width: 100%;
  max-width: 340px;
  padding: 12px;
  font-size: 0.9rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.center-panel h2,
.center-panel h3,
.main-panel h2,
.main-panel h3,
#centerPanel h2,
#centerPanel h3 {
  font-size: 1.1rem;
  text-align: center;
  margin: 6px 0;
}

.center-panel p,
.main-panel p,
#centerPanel p {
  font-size: 0.85rem;
  margin: 4px 0;
}

.center-panel button,
.main-panel button,
#centerPanel button {
  font-size: 0.9rem;
  padding: 8px 14px;
  border-radius: 8px;
}

.center-panel .icon,
.main-panel .icon,
#centerPanel .icon {
  width: 24px;
  height: 24px;
}

/* ⚙️ صفحة الإعدادات */
.settings-page, .settings-container, .config-page {
  padding: 12px;
}

.settings-page .form-group,
.settings-container .form-group,
.config-page .form-group {
  width: 100%;
  margin-bottom: 12px;
}

.settings-page label,
.settings-container label,
.config-page label {
  font-size: 0.9rem;
  margin-bottom: 4px;
  display: block;
}

.settings-page input,
.settings-page select,
.settings-page textarea,
.settings-container input,
.settings-container select,
.settings-container textarea,
.config-page input,
.config-page select,
.config-page textarea {
  width: 100%;
  padding: 10px;
  font-size: 0.9rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

/* 🔔 العناصر المنبثقة */
.modal, .popup-modal, .dialog-box {
  width: 90%;
  max-width: 360px;
  padding: 14px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.modal h2,
.popup-modal h2,
.dialog-box h2 {
  font-size: 1rem;
  margin: 0 0 10px 0;
}

.modal p,
.popup-modal p,
.dialog-box p {
  font-size: 0.85rem;
}

.modal button,
.popup-modal button,
.dialog-box button {
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 8px;
}

/* 📏 للشاشات الصغيرة جدًا */
@media (max-width: 400px) {
  body {
    font-size: 14px;
  }

  .center-panel, .main-panel, #centerPanel {
    padding: 8px;
    gap: 8px;
  }

  .center-panel .card, .main-panel .card, #centerPanel .card {
    padding: 8px;
    font-size: 0.8rem;
  }

  .center-panel button, .main-panel button, #centerPanel button {
    font-size: 0.8rem;
    padding: 6px 10px;
  }

  .settings-page input,
  .settings-page select,
  .settings-page textarea,
  .settings-container input,
  .settings-container select,
  .settings-container textarea,
  .config-page input,
  .config-page select,
  .config-page textarea {
    font-size: 0.8rem;
    padding: 8px;
  }

  .modal, .popup-modal, .dialog-box {
    width: 95%;
    padding: 10px;
  }

  .modal h2, .popup-modal h2, .dialog-box h2 {
    font-size: 0.9rem;
  }

  .modal p, .popup-modal p, .dialog-box p {
    font-size: 0.75rem;
  }

  .modal button, .popup-modal button, .dialog-box button {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
}
```

---

### 3) ربط الملف الجديد

في `index.html` أو أي ملف HTML رئيسي:

```html
<link rel="stylesheet" href="src/assets/css/responsive.css">
```

في هذا المشروع (Remix)، تم ربط الملف في `app/root.tsx` ضمن `links` كآخر stylesheet عبر المسار العام: `/src/assets/css/responsive.css`.

📌 تأكد أن هذا الملف هو آخر CSS يتم استدعاؤه حتى يطغى على الباقي.

---

## ✅ النتيجة
- كل عناصر المشروع (center panel, settings, modals) ستصغر تلقائيًا على الشاشات الصغيرة.
- النصوص والأزرار تصبح مقروءة بدون أن تأخذ مساحة كبيرة.
- المشروع يعمل بسلاسة على الهواتف (360px – 400px) بدون مشاكل عرض.

---

هل تحبني أزود الـ Markdown هذا كـ خطوات أوتوماتيكية داخل GitHub Action بحيث Cursor يعدل ويربط الملف مباشرة أثناء البناء؟

