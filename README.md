# DevCase | Figma to Next.js

Proje, **Next.js** , **TypeScript** ve **Tailwind CSS** kullanılarak geliştirilmiştir. Ürün içerikleri Fetch API yardımı ile getirilmiştir. Responsive bir tasarım yapılmış ve mobil uyumludur. State management olarak Context API kullanılmış ve veri bu şekilde dağıtılmıştır. Component odaklı bir anlayışla, pixel perfect bir tasarıma ulaşılmaya çalışılmıştır.

Tasarımdaki ürün başlıklarıyla, api servisindeki data kategorileri eşleşmediği için uygun kategoriler eşleştirilerek doğru bir şekilde gösterilmeye çalışılmıştır.

Live Demo:

## Kullanılan Teknolojiler

### Ana Teknolojiler
- **React**: Kullanıcı arayüzü oluşturmak için.
- **Next.js**: Sunucu tarafı render (SSR) ve statik site oluşturma (SSG) için.
- **TypeScript**: Daha güvenli ve ölçeklenebilir bir kod tabanı için.
- **Tailwind CSS**: Hızlı ve özelleştirilebilir stil oluşturmak için.

### Ekstra Paketler ve Araçlar
- **Lucide Icons**: Modern ve özelleştirilebilir ikonlar.
- **@svgr/webpack**: SVG dosyalarını React bileşenleri olarak kullanmak için.
- **React Context API**: Uygulama genelinde durum yönetimi için.
- **ESLint ve Prettier**: Kod kalitesini artırmak ve kod stilini tutarlı hale getirmek için.
- **Fetch API**: API isteklerini gerçekleştirmek için.

---

## Gereksinimler

Projeyi çalıştırmadan önce aşağıdaki araçların sisteminizde kurulu olduğundan emin olun:
- **Node.js** (v16 veya üzeri)
- **npm** veya **yarn** (paket yöneticisi)

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

### 1. Depoyu Klonlayın
```bash
git clone https://github.com/kullaniciadi/devcase.git
cd devcase
npm run dev