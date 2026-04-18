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
    {
      id: 1,
      name: "Serum Vitamin C",
      category: "skincare",
      img: "https://images.unsplash.com/photo-1775620854129-ffebcc424f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      desc: "Serum dưỡng trắng, chống lão hóa",
    },
    {
      id: 2,
      name: "Retinol Serum",
      category: "skincare",
      img: "https://images.unsplash.com/photo-1770732766528-d0e9fd0df233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwY29zbWV0aWMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NjQ4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080",
      desc: "Tinh chất chống lão hóa cao cấp",
    },
    {
      id: 3,
      name: "Hyaluronic Acid",
      category: "skincare",
      img: "https://images.unsplash.com/photo-1775989982439-610be22c8c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwY29zbWV0aWMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NjQ4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080",
      desc: "Serum cấp ẩm chuyên sâu",
    },
    {
      id: 4,
      name: "Anti-Aging Cream",
      category: "skincare",
      img: "https://images.unsplash.com/photo-1751131964776-57e3cbca0a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwY29zbWV0aWMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NjQ4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080",
      desc: "Kem dưỡng chống lão hóa",
    },
    {
      id: 5,
      name: "Collagen Premium",
      category: "supplements",
      img: "https://images.unsplash.com/photo-1670850757896-e1b6c3e311ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdXBwbGVtZW50JTIwY2Fwc3VsZXMlMjB2aXRhbWlucyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      desc: "Viên uống collagen từ Nhật",
    },
    {
      id: 6,
      name: "Vitamin Complex",
      category: "supplements",
      img: "https://images.unsplash.com/photo-1732667000289-0451f8ca4104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzdXBwbGVtZW50JTIwY2Fwc3VsZXMlMjB2aXRhbWlucyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      desc: "Tổng hợp vitamin thiết yếu",
    },
    {
      id: 7,
      name: "Omega-3 Premium",
      category: "supplements",
      img: "https://images.unsplash.com/photo-1584912262782-d828d56a1d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbGVtZW50JTIwY2Fwc3VsZXMlMjB2aXRhbWlucyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      desc: "Viên uống hỗ trợ tim mạch",
    },
    {
      id: 8,
      name: "Detox Complex",
      category: "supplements",
      img: "https://images.unsplash.com/photo-1740592753807-43e58cdd9ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdXBwbGVtZW50JTIwY2Fwc3VsZXMlMjB2aXRhbWlucyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      desc: "Thực phẩm hỗ trợ giải độc",
    },
    {
      id: 9,
      name: "Niacinamide Serum",
      category: "skincare",
      img: "https://images.unsplash.com/photo-1765726951362-df46f5a74cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      desc: "Serum se khít lỗ chân lông",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1771329064159-33f758d91f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwY29zbWV0aWMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NjQ4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl mb-6">Sản phẩm</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Danh mục sản phẩm đa dạng, chất lượng cao
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary sticky top-16 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-white text-foreground hover:bg-white/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Info */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
              Danh mục
            </div>
            <h2 className="text-4xl mb-4">Chúng tôi sản xuất</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-2xl mb-4">Mỹ phẩm dưỡng da</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Serum các loại (Vitamin C, Retinol, HA)</li>
                <li>• Kem dưỡng ẩm, chống lão hóa</li>
                <li>• Toner, essence, ampoule</li>
                <li>• Mặt nạ (sheet mask, wash-off)</li>
                <li>• Sữa rửa mặt, tẩy trang</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-2xl mb-4">Thực phẩm chức năng</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Viên nang cứng/mềm</li>
                <li>• Viên nén</li>
                <li>• Bột pha sẵn (sachet)</li>
                <li>• Siro, nước uống</li>
                <li>• Collagen, vitamin tổng hợp</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
