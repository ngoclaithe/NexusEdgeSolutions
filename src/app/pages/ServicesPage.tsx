import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router";

export function ServicesPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1765726951362-df46f5a74cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Services"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-midnight-deep/95 via-midnight/80 to-midnight/70" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
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
              Dịch vụ <span className="text-gold-gradient italic">của chúng tôi</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              Giải pháp toàn diện từ ý tưởng đến sản phẩm hoàn thiện
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service sections with alternating layout */}
      {[
        {
          tag: "OEM",
          title: "Gia công theo công thức",
          desc: "Sản xuất theo công thức sẵn có của bạn với quy trình kiểm soát chất lượng nghiêm ngặt. Đảm bảo sản phẩm đầu ra đồng đều, ổn định và đạt tiêu chuẩn cao nhất.",
          items: [
            "Sản xuất theo công thức khách hàng cung cấp",
            "Kiểm soát chất lượng đầu vào và đầu ra",
            "Đóng gói theo yêu cầu riêng",
            "MOQ linh hoạt từ 1.000 sản phẩm",
            "Hỗ trợ đăng ký công bố sản phẩm",
          ],
          img: "https://images.unsplash.com/photo-1639392657182-817ecf84e90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
          reverse: false,
          bg: "bg-ivory",
        },
        {
          tag: "ODM",
          title: "Phát triển sản phẩm độc quyền",
          desc: "Từ ý tưởng của bạn, chúng tôi phát triển sản phẩm hoàn chỉnh với công thức độc quyền, thiết kế bao bì và chiến lược marketing. Bạn chỉ cần tập trung vào thương hiệu.",
          items: [
            "Tư vấn concept và định hướng sản phẩm",
            "Phát triển công thức độc quyền",
            "Thiết kế bao bì chuyên nghiệp",
            "Hỗ trợ chiến lược marketing",
            "Đăng ký nhãn hiệu và bản quyền",
          ],
          img: "https://images.unsplash.com/photo-1760960067586-3999b9aae844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          reverse: true,
          bg: "bg-white",
        },
        {
          tag: "R&D",
          title: "Nghiên cứu & Phát triển",
          desc: "Đội ngũ chuyên gia R&D với kinh nghiệm quốc tế sẵn sàng nghiên cứu và phát triển công thức mới phù hợp với xu hướng thị trường và nhu cầu riêng của bạn.",
          items: [
            "Nghiên cứu nguyên liệu mới",
            "Phát triển công thức theo xu hướng",
            "Test độ ổn định và hiệu quả",
            "Tối ưu chi phí sản xuất",
            "Tư vấn thành phần phù hợp da Á",
          ],
          img: "https://images.unsplash.com/photo-1775620854129-ffebcc424f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          reverse: false,
          bg: "bg-ivory",
        },
        {
          tag: "Packaging",
          title: "Thiết kế & Sản xuất bao bì",
          desc: "Bao bì không chỉ bảo vệ sản phẩm mà còn là bộ mặt thương hiệu. Chúng tôi cung cấp giải pháp thiết kế và sản xuất bao bì cao cấp, thu hút, phù hợp với từng phân khúc.",
          items: [
            "Thiết kế bao bì chuyên nghiệp",
            "Đa dạng chất liệu: nhựa, thủy tinh, airless",
            "In ấn chất lượng cao",
            "Tùy chỉnh logo, màu sắc theo thương hiệu",
            "Hỗ trợ mẫu trước khi sản xuất hàng loạt",
          ],
          img: "https://images.unsplash.com/photo-1775989982439-610be22c8c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwY29zbWV0aWMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NjQ4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080",
          reverse: true,
          bg: "bg-white",
        },
      ].map((service, sectionIndex) => (
        <section key={sectionIndex} className={`py-24 ${service.bg} relative overflow-hidden`}>
          {service.bg === "bg-ivory" && <div className="absolute top-0 left-0 w-full gold-line" />}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
              <motion.div
                initial={{ opacity: 0, x: service.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={service.reverse ? "order-1 lg:order-2" : ""}
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
                  <span className="text-gold text-xs uppercase tracking-[0.15em]">{service.tag}</span>
                </div>
                <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
                  {service.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-gold-gradient italic">
                    {service.title.split(" ").slice(-1)}
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{service.desc}</p>
                <ul className="space-y-4 mb-8">
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-gold mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-gold hover:text-gold-dark transition-colors group font-medium"
                >
                  <span className="border-b border-gold/30 group-hover:border-gold pb-1">
                    Liên hệ ngay
                  </span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: service.reverse ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative ${service.reverse ? "order-2 lg:order-1" : ""}`}
              >
                <img
                  src={service.img}
                  alt={service.tag}
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/15 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-28 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-deep via-midnight to-midnight-deep" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-[2px] bg-gold-gradient mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl mb-6 text-white leading-tight">
              Bắt đầu <span className="text-gold-gradient italic">dự án</span> của bạn
            </h2>
            <p className="text-lg text-white/50 mb-10 font-light">
              Liên hệ ngay để nhận tư vấn miễn phí từ chuyên gia
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gold-shimmer text-midnight px-10 py-4 rounded-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 group font-semibold tracking-wide"
            >
              Nhận tư vấn miễn phí
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <div className="w-12 h-[2px] bg-gold-gradient mx-auto mt-10" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
