import { Link } from "react-router";
import { ArrowRight, Award, CheckCircle, Users, TrendingUp, Star, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function HomePage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1745420052527-a75fcc6aba58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern production line"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-midnight-deep/95 via-midnight/85 to-midnight/70" />
          {/* Decorative gold glow */}
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm mb-8"
            >
              <Sparkles size={14} className="text-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.2em]">
                Chuẩn quốc tế Hàn – Nhật
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] text-white">
              Kiến tạo{" "}
              <span className="text-gold-gradient italic">vẻ đẹp</span>
              <br />
              chuẩn quốc tế
            </h1>

            <p className="text-lg md:text-xl mb-10 text-white/70 max-w-xl leading-relaxed font-light">
              Giải pháp OEM/ODM trọn gói từ R&D đến sản xuất mỹ phẩm & thực phẩm chức năng cao cấp
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-gold-shimmer text-midnight px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 inline-flex items-center justify-center group font-semibold tracking-wide"
              >
                Nhận tư vấn miễn phí
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link
                to="/services"
                className="border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/5 hover:border-white/30 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
              >
                Khám phá dịch vụ
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] mb-3">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent" />
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-deep via-midnight to-midnight-deep" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Năm kinh nghiệm" },
              { value: "500+", label: "Sản phẩm phát triển" },
              { value: "200+", label: "Đối tác tin dùng" },
              { value: "GMP/ISO", label: "Chứng nhận quốc tế" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-gold-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-ivory relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full gold-line" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1721352192940-b3430ffb713b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern factory"
                  className="w-full h-[550px] object-cover rounded-2xl"
                />
                {/* Gold accent frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 rounded-2xl -z-10" />
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-gold/10">
                  <div className="text-3xl font-heading font-bold text-gold">15+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Năm kinh nghiệm</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
                <span className="text-gold text-xs uppercase tracking-[0.15em]">Về chúng tôi</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 text-foreground leading-tight">
                Nhà máy sản xuất đạt chuẩn{" "}
                <span className="text-gold-gradient italic">quốc tế</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Với hơn 15 năm kinh nghiệm trong lĩnh vực gia công OEM/ODM mỹ phẩm và thực phẩm chức năng, chúng tôi tự hào là đối tác tin cậy của hơn 200 thương hiệu tại Việt Nam, Hàn Quốc và Nhật Bản.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nhà máy được trang bị công nghệ hiện đại, đạt chứng nhận GMP, ISO 22716 và tuân thủ nghiêm ngặt các tiêu chuẩn chất lượng quốc tế.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-gold hover:text-gold-dark transition-colors group font-medium"
              >
                <span className="border-b border-gold/30 group-hover:border-gold pb-1">
                  Xem chi tiết
                </span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-gold text-xs uppercase tracking-[0.15em]">Dịch vụ</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Giải pháp <span className="text-gold-gradient italic">toàn diện</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Từ ý tưởng đến sản phẩm hoàn thiện, chúng tôi đồng hành cùng bạn trong mọi bước
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "OEM",
                desc: "Sản xuất theo công thức của bạn với tiêu chuẩn cao nhất",
                img: "https://images.unsplash.com/photo-1639392657182-817ecf84e90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "ODM",
                desc: "Phát triển sản phẩm độc quyền cho thương hiệu của bạn",
                img: "https://images.unsplash.com/photo-1765726951362-df46f5a74cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "R&D",
                desc: "Nghiên cứu và phát triển công thức mới cùng chuyên gia",
                img: "https://images.unsplash.com/photo-1760960067586-3999b9aae844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "Packaging",
                desc: "Thiết kế và sản xuất bao bì cao cấp, thu hút",
                img: "https://images.unsplash.com/photo-1775989982439-610be22c8c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwY29zbWV0aWMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NjQ4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group card-luxury bg-white rounded-2xl overflow-hidden border border-border"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <div className="w-8 h-[2px] bg-gold-gradient mb-4" />
                  <h3 className="text-xl mb-2 group-hover:text-gold transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-ivory relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full gold-line" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-gold text-xs uppercase tracking-[0.15em]">Sản phẩm</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Danh mục sản phẩm <span className="text-gold-gradient italic">đa dạng</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chuyên sản xuất mỹ phẩm và thực phẩm chức năng đa dạng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Serum & Essence",
                img: "https://images.unsplash.com/photo-1775620854129-ffebcc424f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "Cream & Lotion",
                img: "https://images.unsplash.com/photo-1770732766528-d0e9fd0df233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwY29zbWV0aWMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NjQ4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "Viên nang & Bột TPCN",
                img: "https://images.unsplash.com/photo-1670850757896-e1b6c3e311ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdXBwbGVtZW50JTIwY2Fwc3VsZXMlMjB2aXRhbWlucyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[420px] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="w-8 h-[2px] bg-gold-gradient mb-3 group-hover:w-12 transition-all duration-500" />
                    <h3 className="text-2xl text-white mb-1">{product.title}</h3>
                    <p className="text-white/50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Xem chi tiết →
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-gold text-xs uppercase tracking-[0.15em]">Ưu điểm</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">Tại sao chọn <span className="text-gold-gradient italic">chúng tôi</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Công nghệ Hàn – Nhật",
                desc: "Ứng dụng công nghệ và nguyên liệu nhập khẩu",
              },
              {
                icon: CheckCircle,
                title: "Nhà máy đạt chuẩn",
                desc: "GMP, ISO 22716, HACCP đầy đủ",
              },
              {
                icon: Users,
                title: "MOQ linh hoạt",
                desc: "Hỗ trợ doanh nghiệp mới khởi nghiệp",
              },
              {
                icon: TrendingUp,
                title: "Hỗ trợ từ A–Z",
                desc: "Tư vấn công thức, đăng ký, marketing",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-luxury bg-ivory p-8 rounded-2xl border border-border group"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <item.icon className="text-gold" size={26} />
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-24 bg-ivory relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full gold-line" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-gold text-xs uppercase tracking-[0.15em]">Quy trình</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">5 bước <span className="text-gold-gradient italic">đơn giản</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Từ ý tưởng đến sản phẩm hoàn thiện chỉ trong 5 bước
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Tư vấn & lên concept" },
                { step: "02", title: "Phát triển công thức" },
                { step: "03", title: "Sản xuất mẫu" },
                { step: "04", title: "Sản xuất hàng loạt" },
                { step: "05", title: "Kiểm tra & giao hàng" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-gold-gradient text-midnight rounded-full flex items-center justify-center mx-auto mb-5 text-lg font-heading font-bold shadow-lg shadow-gold/20 relative z-10">
                    {item.step}
                  </div>
                  <h4 className="text-sm font-medium">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/process"
              className="inline-flex items-center text-gold hover:text-gold-dark transition-colors group font-medium"
            >
              <span className="border-b border-gold/30 group-hover:border-gold pb-1">
                Xem chi tiết quy trình
              </span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Full Width Banner */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGZhY3RvcnklMjBpbnRlcmlvciUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Factory production"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-deep/95 via-midnight/80 to-midnight-deep/95" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center px-4 max-w-3xl"
          >
            <div className="w-12 h-[2px] bg-gold-gradient mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl mb-6 text-white leading-tight">
              Năng lực sản xuất đạt chuẩn{" "}
              <span className="text-gold-gradient italic">xuất khẩu</span>
            </h2>
            <p className="text-xl text-white/60 font-light">
              Đáp ứng đơn hàng lớn với chất lượng ổn định
            </p>
            <div className="w-12 h-[2px] bg-gold-gradient mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <Star size={14} className="text-gold" />
              <span className="text-gold text-xs uppercase tracking-[0.15em]">Đánh giá</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Khách hàng nói gì <span className="text-gold-gradient italic">về chúng tôi</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Chất lượng sản phẩm vượt mong đợi, quy trình sản xuất chuyên nghiệp. Đội ngũ luôn hỗ trợ nhiệt tình từ khâu phát triển công thức đến hoàn thiện bao bì.",
                author: "Nguyễn Minh Anh",
                role: "CEO, BeautyLux Vietnam",
              },
              {
                quote:
                  "Đối tác đáng tin cậy cho dòng sản phẩm TPCN của chúng tôi. MOQ linh hoạt giúp startup như chúng tôi dễ dàng khởi động thương hiệu.",
                author: "Trần Hoàng Nam",
                role: "Founder, VitaHealth",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-ivory p-10 rounded-2xl border border-border relative"
              >
                <div className="text-6xl font-heading text-gold/20 absolute top-6 left-8 leading-none">"</div>
                <p className="text-lg text-foreground mb-8 leading-relaxed italic relative z-10 pt-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-midnight font-heading font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-deep via-midnight to-midnight-deep" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-[2px] bg-gold-gradient mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight">
              Bắt đầu <span className="text-gold-gradient italic">thương hiệu</span> của bạn ngay hôm nay
            </h2>
            <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto font-light">
              Đội ngũ chuyên gia sẵn sàng tư vấn miễn phí về công thức và quy trình sản xuất
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gold-shimmer text-midnight px-10 py-4 rounded-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 group font-semibold tracking-wide"
            >
              Nhận tư vấn miễn phí
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <div className="w-12 h-[2px] bg-gold-gradient mx-auto mt-12" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
