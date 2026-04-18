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
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1721352192940-b3430ffb713b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMGZhY3RvcnklMjBwcm9kdWN0aW9uJTIwbGluZXxlbnwxfHx8fDE3NzY0ODk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact"
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
            <h1 className="text-5xl md:text-6xl mb-6">Liên hệ</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Sẵn sàng hỗ trợ bạn xây dựng thương hiệu mỹ phẩm & TPCN
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
                Gửi yêu cầu
              </div>
              <h2 className="text-4xl mb-6">Để lại thông tin</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại trong vòng 24 giờ
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-foreground">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-foreground">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-foreground">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="0901 234 567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-foreground">
                    Công ty
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tên công ty"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-foreground">
                    Dịch vụ quan tâm
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
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
                  <label className="block mb-2 text-foreground">
                    Nội dung *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Mô tả ngắn gọn về dự án của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all inline-flex items-center justify-center group"
                >
                  <Send className="mr-2" size={20} />
                  Gửi yêu cầu
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-24">
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
                  Thông tin liên hệ
                </div>
                <h2 className="text-4xl mb-8">Kết nối với chúng tôi</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-1">Địa chỉ</h4>
                      <p className="text-muted-foreground">
                        Khu công nghiệp Tân Bình
                        <br />
                        Thành phố Hồ Chí Minh, Việt Nam
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-1">Điện thoại</h4>
                      <p className="text-muted-foreground">+84 28 1234 5678</p>
                      <p className="text-muted-foreground">+84 90 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-1">Email</h4>
                      <p className="text-muted-foreground">info@vietkorea.vn</p>
                      <p className="text-muted-foreground">sales@vietkorea.vn</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-1">Giờ làm việc</h4>
                      <p className="text-muted-foreground">
                        Thứ 2 - Thứ 6: 8:00 - 17:30
                      </p>
                      <p className="text-muted-foreground">Thứ 7: 8:00 - 12:00</p>
                      <p className="text-muted-foreground">Chủ nhật: Nghỉ</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-secondary rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGZhY3RvcnklMjBpbnRlcmlvciUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzc2NDg5OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Factory location"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm mb-4">
              FAQ
            </div>
            <h2 className="text-4xl mb-4">Câu hỏi thường gặp</h2>
          </div>

          <div className="space-y-6">
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
                className="bg-white p-6 rounded-2xl"
              >
                <h4 className="mb-3">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
