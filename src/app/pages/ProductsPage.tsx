import { motion } from "motion/react";
import { useState } from "react";

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "skincare", name: "Mỹ phẩm dưỡng da" },
    { id: "supplements", name: "Thực phẩm chức năng" },
  ];

  const products = [
    { id: 1, name: "Serum Vitamin C", category: "skincare", img: "https://images.unsplash.com/photo-1775620854129-ffebcc424f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080", desc: "Serum dưỡng trắng, chống lão hóa" },
    { id: 2, name: "Retinol Serum", category: "skincare", img: "https://images.unsplash.com/photo-1770732766528-d0e9fd0df233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwY29zbWV0aWMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NjQ4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080", desc: "Tinh chất chống lão hóa cao cấp" },
    { id: 3, name: "Hyaluronic Acid", category: "skincare", img: "https://images.unsplash.com/photo-1775989982439-610be22c8c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwY29zbWV0aWMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NjQ4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080", desc: "Serum cấp ẩm chuyên sâu" },
    { id: 4, name: "Anti-Aging Cream", category: "skincare", img: "https://images.unsplash.com/photo-1751131964776-57e3cbca0a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwY29zbWV0aWMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NjQ4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080", desc: "Kem dưỡng chống lão hóa" },
    { id: 5, name: "Collagen Premium", category: "supplements", img: "https://images.unsplash.com/photo-1670850757896-e1b6c3e311ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdXBwbGVtZW50JTIwY2Fwc3VsZXMlMjB2aXRhbWlucyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080", desc: "Viên uống collagen từ Nhật" },
    { id: 6, name: "Vitamin Complex", category: "supplements", img: "https://images.unsplash.com/photo-1732667000289-0451f8ca4104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzdXBwbGVtZW50JTIwY2Fwc3VsZXMlMjB2aXRhbWlucyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080", desc: "Tổng hợp vitamin thiết yếu" },
    { id: 7, name: "Omega-3 Premium", category: "supplements", img: "https://images.unsplash.com/photo-1584912262782-d828d56a1d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbGVtZW50JTIwY2Fwc3VsZXMlMjB2aXRhbWlucyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080", desc: "Viên uống hỗ trợ tim mạch" },
    { id: 8, name: "Detox Complex", category: "supplements", img: "https://images.unsplash.com/photo-1740592753807-43e58cdd9ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdXBwbGVtZW50JTIwY2Fwc3VsZXMlMjB2aXRhbWlucyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080", desc: "Thực phẩm hỗ trợ giải độc" },
    { id: 9, name: "Niacinamide Serum", category: "skincare", img: "https://images.unsplash.com/photo-1765726951362-df46f5a74cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080", desc: "Serum se khít lỗ chân lông" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1771329064159-33f758d91f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwY29zbWV0aWMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NjQ4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Products"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-midnight-deep/95 via-midnight/80 to-midnight/70" />
          <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="w-12 h-[2px] bg-gold-gradient mb-8" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.1]">
              Sản phẩm <span className="text-gold-gradient italic">cao cấp</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              Danh mục sản phẩm đa dạng, chất lượng cao
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-ivory sticky top-20 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-lg text-sm uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gold-gradient text-midnight font-semibold shadow-md shadow-gold/20"
                    : "bg-white text-muted-foreground border border-border hover:border-gold/30 hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="card-luxury bg-white rounded-2xl overflow-hidden border border-border group cursor-pointer"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-6 h-[2px] bg-gold-gradient mb-3" />
                  <h3 className="text-xl mb-2 group-hover:text-gold transition-colors duration-300">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-gold text-xs uppercase tracking-[0.15em]">Danh mục</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Chúng tôi <span className="text-gold-gradient italic">sản xuất</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mỹ phẩm dưỡng da",
                items: [
                  "Serum các loại (Vitamin C, Retinol, HA)",
                  "Kem dưỡng ẩm, chống lão hóa",
                  "Toner, essence, ampoule",
                  "Mặt nạ (sheet mask, wash-off)",
                  "Sữa rửa mặt, tẩy trang",
                ],
              },
              {
                title: "Thực phẩm chức năng",
                items: [
                  "Viên nang cứng/mềm",
                  "Viên nén",
                  "Bột pha sẵn (sachet)",
                  "Siro, nước uống",
                  "Collagen, vitamin tổng hợp",
                ],
              },
            ].map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-ivory p-10 rounded-2xl border border-border"
              >
                <div className="w-8 h-[2px] bg-gold-gradient mb-4" />
                <h3 className="text-2xl mb-5">{cat.title}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
