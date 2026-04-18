import { motion } from "motion/react";
import { Award, Users, Target, TrendingUp } from "lucide-react";

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1745420052704-f70b1d30c8b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Factory"
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
            <h1 className="text-5xl md:text-6xl mb-6">Về chúng tôi</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Đối tác tin cậy trong sản xuất mỹ phẩm và TPCN chất lượng cao
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
                Câu chuyện
              </div>
              <h2 className="text-4xl mb-6">15 năm kiến tạo thương hiệu</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Thành lập từ năm 2011, VietKorea OEM bắt đầu với tầm nhìn mang công nghệ sản xuất mỹ phẩm và thực phẩm chức năng đẳng cấp quốc tế về Việt Nam.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Qua hơn một thập kỷ phát triển, chúng tôi đã xây dựng được uy tín vững chắc với hơn 200 đối tác trong và ngoài nước, sản xuất thành công hơn 500 sản phẩm mang nhiều thương hiệu khác nhau.
              </p>
              <p className="text-lg text-muted-foreground">
                Với đội ngũ chuyên gia giàu kinh nghiệm và nhà máy hiện đại đạt chuẩn GMP, ISO 22716, chúng tôi cam kết đồng hành cùng khách hàng từ khâu R&D đến sản xuất và hoàn thiện sản phẩm.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1639392657182-817ecf84e90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Factory 1"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1765726951362-df46f5a74cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Lab"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
              Giá trị cốt lõi
            </div>
            <h2 className="text-4xl mb-4">Những gì chúng tôi tin tưởng</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Chất lượng",
                desc: "Cam kết chất lượng cao nhất trong từng sản phẩm",
              },
              {
                icon: Users,
                title: "Đồng hành",
                desc: "Hỗ trợ khách hàng trong mọi giai đoạn phát triển",
              },
              {
                icon: Target,
                title: "Chuyên nghiệp",
                desc: "Quy trình sản xuất chuyên nghiệp, minh bạch",
              },
              {
                icon: TrendingUp,
                title: "Đổi mới",
                desc: "Không ngừng cập nhật công nghệ và xu hướng mới",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
              Chứng nhận
            </div>
            <h2 className="text-4xl mb-4">Tiêu chuẩn quốc tế</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nhà máy đạt đầy đủ các chứng nhận chất lượng hàng đầu
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["GMP", "ISO 22716", "HACCP", "FDA"].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary p-8 rounded-2xl text-center"
              >
                <div className="text-3xl text-primary mb-2">{cert}</div>
                <div className="text-sm text-muted-foreground">Chứng nhận</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Images */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
              Cơ sở vật chất
            </div>
            <h2 className="text-4xl mb-4">Nhà máy hiện đại</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-96 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGZhY3RvcnklMjBpbnRlcmlvciUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Factory interior"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-96 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1760960067586-3999b9aae844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Laboratory"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
