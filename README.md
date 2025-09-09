# 🛒 Tailor - E-Commerce Web App

## 📌 Overview

**Tailor** هو تطبيق ويب للتجارة الإلكترونية يتيح للمستخدمين:

* تصفح المنتجات من خلال API خارجي.
* إضافة المنتجات إلى **عربة التسوق (Cart)** أو **المفضلة (Wishlist)**.
* إدارة حساباتهم من خلال **تسجيل الدخول والتسجيل**.
* تخزين بياناتهم محليًا باستخدام **LocalStorage**.

---

## 🚀 Features

### 👤 Authentication

* **Register**: إنشاء حساب جديد (Name, Email, Password).
* **Login**: تسجيل الدخول باستخدام بيانات المستخدم.
* **Logout**: تسجيل الخروج (إزالة بيانات الجلسة من LocalStorage).

### 🏠 Home

* صفحة ترحيبية وروابط للتنقل بين الصفحات.

### 🛍️ Products

* جلب المنتجات من [DummyJson API](https://dummyjson.com/docs/products).
* عرض (صورة، اسم، سعر).
* أزرار: **Add to Cart** و **Add to Wishlist**.

### 🛒 Cart

* عرض المنتجات المضافة للسلة.
* تحديث الكمية وحساب السعر الإجمالي .
* حذف منتج معين أو تفريغ السلة بالكامل.

### ❤️ Wishlist

* حفظ المنتجات المفضلة.
* إمكانية حذف منتج من المفضلة أو نقله إلى السلة.

---

## 🛠️ Tech Stack

* **HTML5, CSS3 (Bootstrap 5), JavaScript (ES6)**
* **LocalStorage** لإدارة بيانات المستخدم والـ state
* **Fake Store API** كمصدر للمنتجات

---

## 🔮 Future Improvements

* إضافة نظام دفع وهمي (Dummy Payment).
* تحسين تجربة المستخدم (UI/UX).
* استخدام Backend حقيقي بدلاً من LocalStorage.
