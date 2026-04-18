import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router";

export function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1765726951362-df46f5a74cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Services"
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
            <h1 className="text-5xl md:text-6xl mb-6">Dịch vụ</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Giải pháp toàn diện từ ý tưởng đến sản phẩm hoàn thiện
            </p>
          </motion.div>
        </div>
      </section>

      {/* OEM Service */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
                OEM
              </div>
              <h2 className="text-4xl mb-6">Gia công theo công thức</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sản xuất theo công thức sẵn có của bạn với quy trình kiểm soát chất lượng nghiêm ngặt. Đảm bảo sản phẩm đầu ra đồng đều, ổn định và đạt tiêu chuẩn cao nhất.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Sản xuất theo công thức khách hàng cung cấp",
                  "Kiểm soát chất lượng đầu vào và đầu ra",
                  "Đóng gói theo yêu cầu riêng",
                  "MOQ linh hoạt từ 1.000 sản phẩm",
                  "Hỗ trợ đăng ký công bố sản phẩm",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
              >
                Liên hệ ngay
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1639392657182-817ecf84e90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="OEM Production"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ODM Service */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1760960067586-3999b9aae844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="ODM Development"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
                ODM
              </div>
              <h2 className="text-4xl mb-6">Phát triển sản phẩm độc quyền</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Từ ý tưởng của bạn, chúng tôi phát triển sản phẩm hoàn chỉnh với công thức độc quyền, thiết kế bao bì và chiến lược marketing. Bạn chỉ cần tập trung vào thương hiệu.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Tư vấn concept và định hướng sản phẩm",
                  "Phát triển công thức độc quyền",
                  "Thiết kế bao bì chuyên nghiệp",
                  "Hỗ trợ chiến lược marketing",
                  "Đăng ký nhãn hiệu và bản quyền",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
              >
                Liên hệ ngay
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* R&D Service */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
                R&D
              </div>
              <h2 className="text-4xl mb-6">Nghiên cứu & Phát triển</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Đội ngũ chuyên gia R&D với kinh nghiệm quốc tế sẵn sàng nghiên cứu và phát triển công thức mới phù hợp với xu hướng thị trường và nhu cầu riêng của bạn.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Nghiên cứu nguyên liệu mới",
                  "Phát triển công thức theo xu hướng",
                  "Test độ ổn định và hiệu quả",
                  "Tối ưu chi phí sản xuất",
                  "Tư vấn thành phần phù hợp da Á",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
              >
                Liên hệ ngay
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1775620854129-ffebcc424f83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb3NtZXRpYyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaCUyMHNjaWVuY2V8ZW58MXx8fHwxNzc2NDg5OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="R&D Lab"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packaging Service */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1775989982439-610be22c8c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwY29zbWV0aWMlMjBwcm9kdWN0fGVufDF8fHx8MTc3NjQ4OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Packaging"
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
                Packaging
              </div>
              <h2 className="text-4xl mb-6">Thiết kế & Sản xuất bao bì</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bao bì không chỉ bảo vệ sản phẩm mà còn là bộ mặt thương hiệu. Chúng tôi cung cấp giải pháp thiết kế và sản xuất bao bì cao cấp, thu hút, phù hợp với từng phân khúc.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Thiết kế bao bì chuyên nghiệp",
                  "Đa dạng chất liệu: nhựa, thủy tinh, airless",
                  "In ấn chất lượng cao",
                  "Tùy chỉnh logo, màu sắc theo thương hiệu",
                  "Hỗ trợ mẫu trước khi sản xuất hàng loạt",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
              >
                Liên hệ ngay
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
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
            <h2 className="text-4xl mb-6">Bắt đầu dự án của bạn</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Liên hệ ngay để nhận tư vấn miễn phí từ chuyên gia
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
