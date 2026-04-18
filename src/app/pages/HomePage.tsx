import { Link } from "react-router";
import { ArrowRight, Award, CheckCircle, Users, TrendingUp, Clock } from "lucide-react";
import { motion } from "motion/react";

export function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1745420052527-a75fcc6aba58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern production line"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
              Gia công mỹ phẩm & TPCN chuẩn Hàn – Nhật
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Giải pháp OEM/ODM trọn gói từ R&D đến sản xuất
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-white/90 transition-all inline-flex items-center justify-center group"
              >
                Nhận tư vấn
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all inline-flex items-center justify-center"
              >
                Xem dịch vụ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Năm kinh nghiệm</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Sản phẩm phát triển</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Đối tác tin dùng</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl text-primary mb-2">GMP/ISO</div>
              <div className="text-muted-foreground">Chứng nhận quốc tế</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1721352192940-b3430ffb713b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern factory"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
                Về chúng tôi
              </div>
              <h2 className="text-4xl mb-6">
                Nhà máy sản xuất đạt chuẩn quốc tế
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Với hơn 15 năm kinh nghiệm trong lĩnh vực gia công OEM/ODM mỹ phẩm và thực phẩm chức năng, chúng tôi tự hào là đối tác tin cậy của hơn 200 thương hiệu tại Việt Nam, Hàn Quốc và Nhật Bản.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Nhà máy được trang bị công nghệ hiện đại, đạt chứng nhận GMP, ISO 22716 và tuân thủ nghiêm ngặt các tiêu chuẩn chất lượng quốc tế.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
              >
                Xem chi tiết
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
              Dịch vụ
            </div>
            <h2 className="text-4xl mb-4">Giải pháp toàn diện</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Từ ý tưởng đến sản phẩm hoàn thiện, chúng tôi đồng hành cùng bạn trong mọi bước
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
              Sản phẩm
            </div>
            <h2 className="text-4xl mb-4">Danh mục sản phẩm</h2>
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
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl text-center">{product.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
              Ưu điểm
            </div>
            <h2 className="text-4xl mb-4">Tại sao chọn chúng tôi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
              Quy trình
            </div>
            <h2 className="text-4xl mb-4">5 bước đơn giản</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Từ ý tưởng đến sản phẩm hoàn thiện chỉ trong 5 bước
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                  {item.step}
                </div>
                <h4 className="text-base">{item.title}</h4>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/process"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
            >
              Xem chi tiết quy trình
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Full Width Factory Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGZhY3RvcnklMjBpbnRlcmlvciUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Factory production"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white px-4"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Năng lực sản xuất đạt chuẩn xuất khẩu
            </h2>
            <p className="text-xl text-white/90">
              Đáp ứng đơn hàng lớn với chất lượng ổn định
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
              Đánh giá
            </div>
            <h2 className="text-4xl mb-4">Khách hàng nói gì về chúng tôi</h2>
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
                transition={{ delay: index * 0.1 }}
                className="bg-secondary p-8 rounded-2xl"
              >
                <div className="text-5xl text-accent mb-4">"</div>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="text-base">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Bắt đầu thương hiệu của bạn ngay hôm nay
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Đội ngũ chuyên gia sẵn sàng tư vấn miễn phí về công thức và quy trình sản xuất
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg hover:bg-white/90 transition-all group"
            >
              Nhận tư vấn miễn phí
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
