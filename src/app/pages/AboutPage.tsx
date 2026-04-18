import { motion } from "motion/react";
import { Award, Users, Target, TrendingUp } from "lucide-react";

export function AboutPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1745420052704-f70b1d30c8b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Factory"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-midnight-deep/95 via-midnight/80 to-midnight/70" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
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
              Về <span className="text-gold-gradient italic">chúng tôi</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              Đối tác tin cậy trong sản xuất mỹ phẩm và TPCN chất lượng cao
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-ivory relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full gold-line" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
                <span className="text-gold text-xs uppercase tracking-[0.15em]">Câu chuyện</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
                15 năm <span className="text-gold-gradient italic">kiến tạo</span> thương hiệu
              </h2>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                Thành lập từ năm 2011, NexusEdge Solutions bắt đầu với tầm nhìn mang công nghệ sản xuất mỹ phẩm và thực phẩm chức năng đẳng cấp quốc tế về Việt Nam.
              </p>
              <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                Qua hơn một thập kỷ phát triển, chúng tôi đã xây dựng được uy tín vững chắc với hơn 200 đối tác trong và ngoài nước, sản xuất thành công hơn 500 sản phẩm mang nhiều thương hiệu khác nhau.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Với đội ngũ chuyên gia giàu kinh nghiệm và nhà máy hiện đại đạt chuẩn GMP, ISO 22716, chúng tôi cam kết đồng hành cùng khách hàng từ khâu R&D đến sản xuất và hoàn thiện sản phẩm.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1639392657182-817ecf84e90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Factory 1"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/15 rounded-2xl -z-10" />
              </div>
              <div className="relative mt-8">
                <img
                  src="https://images.unsplash.com/photo-1765726951362-df46f5a74cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Lab"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/15 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-gold text-xs uppercase tracking-[0.15em]">Giá trị cốt lõi</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Những gì chúng tôi <span className="text-gold-gradient italic">tin tưởng</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Chất lượng", desc: "Cam kết chất lượng cao nhất trong từng sản phẩm" },
              { icon: Users, title: "Đồng hành", desc: "Hỗ trợ khách hàng trong mọi giai đoạn phát triển" },
              { icon: Target, title: "Chuyên nghiệp", desc: "Quy trình sản xuất chuyên nghiệp, minh bạch" },
              { icon: TrendingUp, title: "Đổi mới", desc: "Không ngừng cập nhật công nghệ và xu hướng mới" },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-luxury bg-ivory p-8 rounded-2xl text-center border border-border group"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <value.icon className="text-gold" size={28} />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-deep via-midnight to-midnight-deep" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-gold text-xs uppercase tracking-[0.15em]">Chứng nhận</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Tiêu chuẩn <span className="text-gold-gradient italic">quốc tế</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto font-light">
              Nhà máy đạt đầy đủ các chứng nhận chất lượng hàng đầu
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["GMP", "ISO 22716", "HACCP", "FDA"].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:border-gold/30 transition-all duration-300"
              >
                <div className="text-3xl font-heading font-bold text-gold-gradient mb-2">{cert}</div>
                <div className="text-sm text-white/40 uppercase tracking-wider">Chứng nhận</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Images */}
      <section className="py-24 bg-ivory relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full gold-line" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-gold text-xs uppercase tracking-[0.15em]">Cơ sở vật chất</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Nhà máy <span className="text-gold-gradient italic">hiện đại</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                src: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGZhY3RvcnklMjBpbnRlcmlvciUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
                alt: "Factory interior",
              },
              {
                src: "https://images.unsplash.com/photo-1760960067586-3999b9aae844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
                alt: "Laboratory",
              },
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-96 rounded-2xl overflow-hidden group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
