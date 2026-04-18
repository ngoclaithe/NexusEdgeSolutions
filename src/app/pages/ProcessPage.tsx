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
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1639392657182-817ecf84e90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Process"
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
            <h1 className="text-5xl md:text-6xl mb-6">Quy trình sản xuất</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              5 bước đơn giản từ ý tưởng đến sản phẩm hoàn thiện
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
              Tổng quan
            </div>
            <h2 className="text-4xl mb-4">Thời gian hoàn thành</h2>
            <p className="text-lg text-muted-foreground">
              Từ 32-52 ngày cho dự án hoàn chỉnh
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20"></div>
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
                  <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl relative z-10">
                      {step.step}
                    </div>
                    <h4 className="mb-2">{step.title}</h4>
                    <div className="text-sm text-accent">{step.duration}</div>
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
          className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-secondary"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "lg:col-start-2" : ""}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="text-primary" size={32} />
                  </div>
                  <div>
                    <div className="text-sm text-accent mb-1">Bước {step.step}</div>
                    <h2 className="text-3xl">{step.title}</h2>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6">{step.desc}</p>
                <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-lg">
                  Thời gian: {step.duration}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Quality Control */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl mb-4">Kiểm soát chất lượng nghiêm ngặt</h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Mỗi sản phẩm đều trải qua các bước kiểm tra kỹ lưỡng
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                className="bg-white/10 p-6 rounded-2xl text-center backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-6">Sẵn sàng bắt đầu?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Liên hệ ngay để nhận tư vấn chi tiết về quy trình và báo giá
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all group"
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
