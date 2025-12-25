# Copetract Notification - Server

Bu kısım projenin backend tarafıdır. Node.js, Express ve Prisma kullanılmıştır.

### Neler Yaptım?
* Veritabanı yönetimi Prisma ile yapıldı. (PostgreSQL kullandım veritabanı olarak.)
* Bildirimleri yöneten (ekleme, silme, listeleme) API servisleri oluşturdum.
* Sunucu 5000 portu üzerinden erişim sağladım.

### Çalıştırma
1. `npm install`
2. `npx prisma migrate dev` (Veritabanı tabloları için)
3. `npm run start`
