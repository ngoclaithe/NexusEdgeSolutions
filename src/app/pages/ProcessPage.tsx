import { motion } from "motion/react";
import {
  MessageSquare,
  Beaker,
  Package,
  Factory,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

export function ProcessPage() {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Tư vấn & Lên concept",
      desc: "Trao đổi ý tưởng, xác định mục tiêu sản phẩm, phân khúc thị trường và ngân sách. Đội ngũ chuyên gia tư vấn công thức phù hợp.",
      img: "https://images.unsplash.com/photo-1765726951362-df46f5a74cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3-5 ngày",
    },
    {
      step: "02",
      icon: Beaker,
      title: "Phát triển công thức",
      desc: "Nghiên cứu và phát triển công thức trong phòng lab. Test độ ổn định, hiệu quả và an toàn. Điều chỉnh cho đến khi đạt yêu cầu.",
      img: "https://images.unsplash.com/photo-1760960067586-3999b9aae844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "7-14 ngày",
    },
    {
      step: "03",
      icon: Package,
      title: "Sản xuất mẫu",
      desc: "Sản xuất mẫu thử nghiệm với công thức đã hoàn thiện. Khách hàng kiểm tra chất lượng, mùi hương, kết cấu và đưa ra phản hồi.",
      img: "https://images.unsplash.com/photo-1775989982439-610be22c8c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwY29zbWV0aWMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NjQ4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "5-7 ngày",
    },
    {
      step: "04",
      icon: Factory,
      title: "Sản xuất hàng loạt",
      desc: "Sau khi mẫu được duyệt, tiến hành sản xuất hàng loạt theo quy trình GMP nghiêm ngặt. Kiểm soát chất lượng từng giai đoạn.",
      img: "https://images.unsplash.com/photo-1745420052527-a75fcc6aba58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "14-21 ngày",
    },
    {
      step: "05",
      icon: CheckCircle2,
      title: "Kiểm tra & Giao hàng",
      desc: "Kiểm tra chất lượng cuối cùng, đóng gói theo tiêu chuẩn. Hoàn thiện hồ sơ và giao hàng đúng hẹn.",
      img: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGZhY3RvcnklMjBpbnRlcmlvciUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3-5 ngày",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1639392657182-817ecf84e90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Process"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-midnight-deep/95 via-midnight/80 to-midnight/70" />
          <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
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
              Quy trình <span className="text-gold-gradient italic">sản xuất</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              5 bước đơn giản từ ý tưởng đến sản phẩm hoàn thiện
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-deep via-midnight to-midnight-deep" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-gold text-xs uppercase tracking-[0.15em]">Tổng quan</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 text-white">
              Thời gian <span className="text-gold-gradient italic">hoàn thành</span>
            </h2>
            <p className="text-lg text-white/50 font-light">
              Từ 32-52 ngày cho dự án hoàn chỉnh
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center hover:border-gold/30 transition-all duration-300">
                    <div className="w-16 h-16 bg-gold-gradient text-midnight rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-heading font-bold shadow-lg shadow-gold/20 relative z-10">
                      {step.step}
                    </div>
                    <h4 className="mb-2 text-white text-sm">{step.title}</h4>
                    <div className="text-xs text-gold">{step.duration}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      {steps.map((step, index) => (
        <section
          key={index}
          className={`py-24 ${index % 2 === 0 ? "bg-ivory" : "bg-white"} relative overflow-hidden`}
        >
          {index % 2 === 0 && <div className="absolute top-0 left-0 w-full gold-line" />}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? "lg:col-start-2" : ""}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="text-gold" size={28} />
                  </div>
                  <div>
                    <div className="text-xs text-gold uppercase tracking-[0.15em] mb-1">Bước {step.step}</div>
                    <h2 className="text-3xl md:text-4xl">{step.title}</h2>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{step.desc}</p>
                <div className="inline-flex items-center px-5 py-2.5 bg-gold/10 text-gold rounded-lg border border-gold/20 text-sm">
                  Thời gian: {step.duration}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/15 rounded-2xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Quality Control */}
      <section className="py-24 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-deep via-midnight to-midnight-deep" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-[2px] bg-gold-gradient mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl mb-4 text-white">
                Kiểm soát chất lượng <span className="text-gold-gradient italic">nghiêm ngặt</span>
              </h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
                Mỗi sản phẩm đều trải qua các bước kiểm tra kỹ lưỡng
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "Kiểm tra nguyên liệu đầu vào",
              "Giám sát quá trình sản xuất",
              "Test chất lượng sản phẩm",
              "Kiểm tra bao bì & đóng gói",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl text-center hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={22} className="text-gold" />
                </div>
                <p className="text-white/80 text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-ivory relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full gold-line" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
              Sẵn sàng <span className="text-gold-gradient italic">bắt đầu</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 font-light">
              Liên hệ ngay để nhận tư vấn chi tiết về quy trình và báo giá
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gold-shimmer text-midnight px-10 py-4 rounded-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 group font-semibold tracking-wide"
            >
              Nhận tư vấn miễn phí
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
