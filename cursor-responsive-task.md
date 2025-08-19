# 🛠️ مهمة تعديل مشروع bolt.diy لتناسب الشاشات الصغيرة

## 🎯 الهدف
- تحسين تصميم واجهة مشروع **bolt.diy** ليكون متوافقًا مع الهواتف ذات الشاشات الصغيرة (≤ 400px).
- يشمل التعديل:
  1. الصفحة الرئيسية و **Center Panel**.
  2. صفحة **الإعدادات**.
  3. العناصر **المنبثقة (Modals / Dialogs)**.

---

## ✏️ التعديلات المطلوبة

### 1) إضافة دعم الـ Responsive
في ملف `index.html` أو القالب الرئيسي للمشروع:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
```
ملاحظة (Remix): تم تطبيق هذه الميتا داخل `app/root.tsx`.

---

### 2) إنشاء ملف CSS جديد للتصغير
قم بإنشاء ملف جديد باسم:

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
.center-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  gap: 12px;
}

.center-panel .card {
  width: 100%;
  max-width: 340px;
  padding: 12px;
  font-size: 0.9rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.center-panel h2,
.center-panel h3 {
  font-size: 1.1rem;
  text-align: center;
  margin: 6px 0;
}

.center-panel p {
  font-size: 0.85rem;
  margin: 4px 0;
}

.center-panel button {
  font-size: 0.9rem;
  padding: 8px 14px;
  border-radius: 8px;
}

.center-panel .icon {
  width: 24px;
  height: 24px;
}

/* ⚙️ صفحة الإعدادات */
.settings-page {
  padding: 12px;
}

.settings-page .form-group {
  width: 100%;
  margin-bottom: 12px;
}

.settings-page label {
  font-size: 0.9rem;
  margin-bottom: 4px;
  display: block;
}

.settings-page input,
.settings-page select,
.settings-page textarea {
  width: 100%;
  padding: 10px;
  font-size: 0.9rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

/* 🔔 العناصر المنبثقة */
.modal {
  width: 90%;
  max-width: 360px;
  padding: 14px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.modal h2 {
  font-size: 1rem;
  margin: 0 0 10px 0;
}

.modal p {
  font-size: 0.85rem;
}

.modal button {
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 8px;
}

/* 📏 للشاشات الصغيرة جدًا */
@media (max-width: 400px) {
  body {
    font-size: 14px;
  }

  .center-panel {
    padding: 8px;
    gap: 8px;
  }

  .center-panel .card {
    padding: 8px;
    font-size: 0.8rem;
  }

  .center-panel button {
    font-size: 0.8rem;
    padding: 6px 10px;
  }

  .settings-page input,
  .settings-page select,
  .settings-page textarea {
    font-size: 0.8rem;
    padding: 8px;
  }

  .modal {
    width: 95%;
    padding: 10px;
  }

  .modal h2 {
    font-size: 0.9rem;
  }

  .modal p {
    font-size: 0.75rem;
  }

  .modal button {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
}
```

ملاحظة (هيكلة المشروع): الملف فعليًا داخل المستودع تحت `public/src/assets/css/responsive.css` ليكون متاحًا عبر الرابط `/src/assets/css/responsive.css`.

---

### 3) ربط الملف الجديد
في `index.html` أو أي قالب HTML رئيسي:
```html
<link rel="stylesheet" href="src/assets/css/responsive.css">
```
ملاحظة (Remix): تم ربط الملف في `app/root.tsx` ضمن `links` كآخر `stylesheet` عبر المسار العام: `/src/assets/css/responsive.css` حتى يطغى على الأنماط السابقة.

---

## ✅ النتيجة المتوقعة
- جميع عناصر المشروع سيتم تصغيرها تلقائيًا على الشاشات الصغيرة.
- center panel سيصبح ببطاقات مضغوطة ومرتبة عموديًا.
- صفحة الإعدادات ستظهر الحقول بعرض كامل مع خطوط أصغر.
- العناصر المنبثقة ستصغر وتتمركز بشكل أنيق على الشاشة.
- متوافق مع الهواتف (360px – 400px) بدون تجاوز للشاشة.

---

## ⚙️ (اختياري) أتمتة التحقق عبر GitHub Actions
أضف وركفلو بسيطًا يتأكد في كل دفع (push/PR) من وجود الملف والربط:
```yaml
name: Verify responsive setup
on:
  push:
    branches: ["main"]
  pull_request: {}

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Check responsive.css exists
        run: |
          test -f public/src/assets/css/responsive.css
      - name: Check link is present in app/root.tsx
        run: |
          grep -R "/src/assets/css/responsive.css" app/root.tsx
      - name: Check viewport meta present
        run: |
          grep -R "name=\"viewport\"" app/root.tsx
```

إذا رغبت نستبدل خطوة التحقق بنسخ الملف تلقائيًا قبل البناء، لكن التحقق يضمن عدم انكسار التصميم مستقبلًا.