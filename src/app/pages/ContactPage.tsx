import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24 giờ.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1721352192940-b3430ffb713b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-midnight-deep/95 via-midnight/80 to-midnight/70" />
          <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
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
              Liên hệ <span className="text-gold-gradient italic">với chúng tôi</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              Sẵn sàng hỗ trợ bạn xây dựng thương hiệu mỹ phẩm & TPCN
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-ivory relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full gold-line" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
                <span className="text-gold text-xs uppercase tracking-[0.15em]">Gửi yêu cầu</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-4 leading-tight">
                Để lại <span className="text-gold-gradient italic">thông tin</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại trong vòng 24 giờ
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-2 text-sm text-foreground uppercase tracking-wider">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-white rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 text-sm text-foreground uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 bg-white rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-foreground uppercase tracking-wider">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 bg-white rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                      placeholder="0901 234 567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-foreground uppercase tracking-wider">
                    Công ty
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                    placeholder="Tên công ty"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-foreground uppercase tracking-wider">
                    Dịch vụ quan tâm
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                  >
                    <option value="">Chọn dịch vụ</option>
                    <option value="oem">Gia công OEM</option>
                    <option value="odm">Phát triển ODM</option>
                    <option value="rd">R&D</option>
                    <option value="packaging">Thiết kế bao bì</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-foreground uppercase tracking-wider">
                    Nội dung *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-3.5 bg-white rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 resize-none transition-all"
                    placeholder="Mô tả ngắn gọn về dự án của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-shimmer text-midnight px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 inline-flex items-center justify-center group font-semibold tracking-wide"
                >
                  <Send className="mr-2" size={18} />
                  Gửi yêu cầu
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-28">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
                  <span className="text-gold text-xs uppercase tracking-[0.15em]">Thông tin liên hệ</span>
                </div>
                <h2 className="text-4xl md:text-5xl mb-10 leading-tight">
                  Kết nối <span className="text-gold-gradient italic">với chúng tôi</span>
                </h2>

                <div className="space-y-6 mb-10">
                  {[
                    {
                      icon: MapPin,
                      title: "Địa chỉ",
                      lines: ["Khu công nghiệp Tân Bình", "Thành phố Hồ Chí Minh, Việt Nam"],
                    },
                    {
                      icon: Phone,
                      title: "Điện thoại",
                      lines: ["+84 28 1234 5678", "+84 90 123 4567"],
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      lines: ["info@nexusedge.vn", "sales@nexusedge.vn"],
                    },
                    {
                      icon: Clock,
                      title: "Giờ làm việc",
                      lines: ["Thứ 2 - Thứ 6: 8:00 - 17:30", "Thứ 7: 8:00 - 12:00", "Chủ nhật: Nghỉ"],
                    },
                  ].map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-gold" size={20} />
                      </div>
                      <div>
                        <h4 className="mb-1 text-sm font-heading">{info.title}</h4>
                        {info.lines.map((line, i) => (
                          <p key={i} className="text-muted-foreground text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="rounded-2xl h-64 overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGZhY3RvcnklMjBpbnRlcmlvciUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Factory location"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <span className="text-gold text-xs uppercase tracking-[0.15em]">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Câu hỏi <span className="text-gold-gradient italic">thường gặp</span>
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                q: "MOQ (số lượng đặt hàng tối thiểu) là bao nhiêu?",
                a: "MOQ linh hoạt từ 1.000 sản phẩm tùy theo loại sản phẩm. Chúng tôi hỗ trợ đặc biệt cho startup và doanh nghiệp mới.",
              },
              {
                q: "Thời gian sản xuất mất bao lâu?",
                a: "Từ 32-52 ngày cho dự án hoàn chỉnh, bao gồm R&D, sản xuất mẫu và sản xuất hàng loạt. Thời gian cụ thể tùy thuộc vào độ phức tạp của sản phẩm.",
              },
              {
                q: "Có hỗ trợ đăng ký công bố sản phẩm không?",
                a: "Có, chúng tôi hỗ trợ toàn bộ quy trình đăng ký công bố sản phẩm với Bộ Y tế và các cơ quan có thẩm quyền.",
              },
              {
                q: "Tôi chưa có công thức, có được tư vấn không?",
                a: "Hoàn toàn có thể! Đội ngũ R&D của chúng tôi sẽ tư vấn và phát triển công thức phù hợp với nhu cầu và ngân sách của bạn.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-ivory p-8 rounded-2xl border border-border hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-6 h-[2px] bg-gold-gradient mb-4" />
                <h4 className="mb-3 text-lg">{faq.q}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
