## TailwindCSS responsive setup (≤ 400px)

This project currently uses UnoCSS. If you prefer TailwindCSS-style responsiveness, use the following instructions. Note that integrating Tailwind into the build is optional; we keep UnoCSS as-is and provide Tailwind-equivalent styles you can adopt if you enable Tailwind.

### 1) Tailwind screens
Add an extra screen in `tailwind.config.ts` (or `tailwind.config.js`):

```js
module.exports = {
  theme: {
    extend: {},
    screens: {
      xs: { max: '400px' },
    },
  },
  plugins: [],
};
```

### 2) Tailwind components/utilities mapping
If Tailwind is enabled, you can use the CSS below as a reference for `@apply` rules. Otherwise, keep using the already-added `public/src/assets/css/responsive.css` which ships plain CSS and is loaded last from `app/root.tsx`.

```css
/* Tailwind-equivalent layer (requires Tailwind enabled) */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html, body { @apply m-0 p-0 font-sans text-base leading-snug; }
  * { @apply box-border; }
}

@layer components {
  .center-panel, .main-panel, #centerPanel { @apply flex flex-col items-center p-3 gap-3; }
  .center-panel .card, .main-panel .card, #centerPanel .card { @apply w-full max-w-[340px] p-3 text-[0.9rem] rounded-xl shadow; }
  .center-panel h2, .center-panel h3,
  .main-panel h2, .main-panel h3,
  #centerPanel h2, #centerPanel h3 { @apply text-[1.1rem] text-center my-1.5; }
  .center-panel p, .main-panel p, #centerPanel p { @apply text-[0.85rem] my-1; }
  .center-panel button, .main-panel button, #centerPanel button { @apply text-[0.9rem] py-2 px-3.5 rounded-lg; }
  .center-panel .icon, .main-panel .icon, #centerPanel .icon { @apply w-6 h-6; }

  .settings-page, .settings-container, .config-page { @apply p-3; }
  .settings-page .form-group, .settings-container .form-group, .config-page .form-group { @apply w-full mb-3; }
  .settings-page label, .settings-container label, .config-page label { @apply text-[0.9rem] mb-1 block; }
  .settings-page input, .settings-page select, .settings-page textarea,
  .settings-container input, .settings-container select, .settings-container textarea,
  .config-page input, .config-page select, .config-page textarea { @apply w-full p-2.5 text-[0.9rem] rounded-lg border border-gray-300; }

  .modal, .popup-modal, .dialog-box { @apply w-[90%] max-w-[360px] p-3.5 bg-white rounded-xl shadow-lg; }
  .modal h2, .popup-modal h2, .dialog-box h2 { @apply text-base mb-2.5; }
  .modal p, .popup-modal p, .dialog-box p { @apply text-[0.85rem]; }
  .modal button, .popup-modal button, .dialog-box button { @apply text-[0.85rem] py-1.5 px-3 rounded-lg; }
}

@layer utilities {
  @screen xs {
    body { @apply text-[14px]; }
    .center-panel, .main-panel, #centerPanel { @apply p-2 gap-2; }
    .center-panel .card, .main-panel .card, #centerPanel .card { @apply p-2 text-[0.8rem]; }
    .center-panel button, .main-panel button, #centerPanel button { @apply text-[0.8rem] py-1.5 px-2.5; }
    .settings-page input, .settings-page select, .settings-page textarea,
    .settings-container input, .settings-container select, .settings-container textarea,
    .config-page input, .config-page select, .config-page textarea { @apply text-[0.8rem] p-2; }
    .modal, .popup-modal, .dialog-box { @apply w-[95%] p-2.5; }
    .modal h2, .popup-modal h2, .dialog-box h2 { @apply text-[0.9rem]; }
    .modal p, .popup-modal p, .dialog-box p { @apply text-[0.75rem]; }
    .modal button, .popup-modal button, .dialog-box button { @apply text-[0.8rem] py-1.5 px-2.5; }
  }
}
```

If you want full Tailwind integration here, we can add Tailwind to the toolchain (PostCSS config, plugin wiring) alongside UnoCSS in a follow-up.

