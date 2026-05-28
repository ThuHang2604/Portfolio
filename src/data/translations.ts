export interface SlideTranslation {
  src: string;
  label: string;
  desc: string;
}

export interface ProjectTranslation {
  title: string;
  shortDesc: string;
  purpose: string;
  solves: string;
  problems: string;
  solutions: string;
  techStack: string[];
  githubFront?: string;
  githubBack?: string;
  slides?: SlideTranslation[];
  academicInstitution?: string;
  projectCode?: string;
  teamTitle?: string;
  teamMembers?: string[];
  supervisorTitle?: string;
  supervisorName?: string;
  featuresTitle?: string;
  featuresScope?: string[];
}

export interface TranslationSchema {
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
    cv: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    viewProjects: string;
    contactMe: string;
    downloadCv: string;
  };
  about: {
    title: string;
    intro: string;
    orientationTitle: string;
    orientationDesc: string;
    goalsTitle: string;
    goalsDesc: string;
    valuesTitle: string;
    valuesDesc: string;
  };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    tools: string;
    databases: string;
  };
  experience: {
    title: string;
    internRole: string;
    internCompany: string;
    internPeriod: string;
    internLocation: string;
    internPoints: string[];
  };
  education: {
    title: string;
    school: string;
    degree: string;
    period: string;
    major: string;
    majorLabel: string;
    subjectsTitle: string;
    subjects: string[];
    extracurricularTitle: string;
    extracurricularDesc: string;
  };
  projects: {
    title: string;
    viewDetails: string;
    backToList: string;
    purposeLabel: string;
    solvesLabel: string;
    problemsLabel: string;
    solutionsLabel: string;
    techStackLabel: string;
    items: {
      furniture: ProjectTranslation;
      trading: ProjectTranslation;
      quiz: ProjectTranslation;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendBtn: string;
    sending: string;
    successMsg: string;
    infoTitle: string;
    phoneLabel: string;
    locationLabel: string;
    printCvBtn: string;
  };
}

export const translations: Record<'en' | 'vi' | 'fr', TranslationSchema> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About Me",
      contact: "Contact",
      cv: "CV",
    },
    hero: {
      greeting: "Hello, my name is",
      name: "Thu Hang",
      role: "Software Engineer",
      tagline: "Backend-focused full-stack developer with hands-on experience building web applications using Spring Boot, Node.js, ReactJS, and SQL databases. Interested in scalable backend systems and secure software development.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCv: "View / Print CV",
    },
    about: {
      title: "About Me",
      intro: "I am a dedicated Software Engineer based in Ho Chi Minh City, Vietnam. As a full-stack developer, I possess a deep affinity for backend technologies, enjoying the process of designing robust APIs, structuring relational databases, and implementing reliable application security logic. I thrive on solving complex system challenges and optimizing API performance.",
      orientationTitle: "Career Orientation & Choices",
      orientationDesc: "I have specifically chosen to specialize in backend systems because I find great satisfaction in building the architecture that powers modern digital platforms. Designing data flows, ensuring high availability, and securing web interfaces are my primary focuses. I aim to master distributed systems, microservices design, and containerized deployments.",
      goalsTitle: "Career Goals",
      goalsDesc: "My short-term goal is to integrate into a professional engineering team where I can contribute to real-world applications using Spring Boot and Node.js while learning industry best practices. In the long-term, I aspire to become a Backend Solutions Architect, designing enterprise-level, high-throughput software architectures.",
      valuesTitle: "Core Values",
      valuesDesc: "Prioritizing database efficiency, writing clean testable code (Jest/JUnit), building secure APIs (JWT, HTTPS, input validation), and collaborating in fast-paced Agile sprint teams.",
    },
    skills: {
      title: "Skills & Technologies",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools & DevOps",
      databases: "Databases",
    },
    experience: {
      title: "Work Experience",
      internRole: "Software Engineering Intern",
      internCompany: "FPT Software",
      internPeriod: "Jan 2024 - Apr 2024",
      internLocation: "Ho Chi Minh City, Vietnam",
      internPoints: [
        "Developed frontend components and backend business logic for internship management modules using ReactJS and Spring Boot in an Agile/Scrum team.",
        "Participated in 2-week sprint cycles, collaborating through GitLab, Jira, code reviews, and CI/CD processes to support continuous integration and iterative feature delivery.",
        "Performed frontend testing using Jest, contributing to improved UI reliability and maintainability.",
        "Tech Stack: Java, Spring Boot, ReactJS, GitLab"
      ],
    },
    education: {
      title: "Education",
      school: "FPT University",
      degree: "Bachelor of Software Engineering",
      period: "2021 - 2026",
      majorLabel: "Major",
      major: "Software Engineering",
      subjectsTitle: "Typical Subjects Studied",
      subjects: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming (Java)",
        "Database Management Systems (SQL)",
        "Web Application Development",
        "Software Engineering Project",
        "Software Testing & Quality Assurance",
        "Operating Systems & Networks",
        "Cloud Computing"
      ],
      extracurricularTitle: "Extracurricular Activities",
      extracurricularDesc: "Traditional Instrument Club – FPT University (FTI): Supported event organization, member coordination, and exhibition activities for university cultural events, promoting traditional Vietnamese music."
    },
    projects: {
      title: "Featured Projects",
      viewDetails: "View Details",
      backToList: "Back to Projects",
      purposeLabel: "Project Purpose",
      solvesLabel: "What It Solves",
      problemsLabel: "Problems Encountered",
      solutionsLabel: "How I Solved Them",
      techStackLabel: "Tech Stack",
      items: {
        furniture: {
          title: "3D Furniture E-Commerce Platform with Real-Time Inventory & Chat System",
          shortDesc: "A complete responsive shopping and warehouse management platform featuring interactive 3D model visualization and real-time support.",
          purpose: "Created to modernize the online furniture shopping experience, allowing customers to view items in a simulated 3D space, coordinate orders, and interact instantly with staff, while providing warehouse managers a comprehensive inventory dashboard.",
          solves: "Solves the limitation of standard 2D image catalogs which lead to customer uncertainty about furniture sizes and shapes, and streamlines warehouse stock tracking with immediate sync.",
          problems: "Rendering multiple heavy 3D assets on low-end client devices caused significant UI lag. Real-time chat threads would lose synchrony if connections flickered.",
          solutions: "Implemented lazy loading and level-of-detail optimization for three.js components, reducing polygon counts. Designed a robust Socket.io event queue with local storage fallback to handle connection drops seamlessly.",
          techStack: ["ReactJS", "Vite", "TypeScript", "TailwindCSS", "Socket.io", "Three.js"],
          githubFront: "https://github.com/TonTon1410/furnimart-web",
          githubBack: "https://github.com/Oggie26/FurniMart-BE",
          academicInstitution: "FPT University (HCM, 12/2024)",
          projectCode: "FA25SE153 | Team GFA25SE147",
          teamTitle: "Capstone Project Team",
          teamMembers: [
            "Phan Hoàng Nam (Leader) - SE173453",
            "Phạm Văn Toàn - SE172763",
            "Lê Nguyễn Thanh Phong - SE130383",
            "Đỗ Thị Thu Hằng - SE161271",
            "Trần Ngọc Yên Thảo - SE161001"
          ],
          supervisorTitle: "Academic Supervisor",
          supervisorName: "Mr. Nguyễn Minh Sang",
          featuresTitle: "Core Modules & Features",
          featuresScope: [
            "FE-01: Multi-role Authentication (Customer, Store Staff, Delivery, Manager, Admin)",
            "FE-02: Interactive Client Store (3D Product viewer, dynamic filters, instant checkout)",
            "FE-04 & FE-05: Seller & Manager dashboard (Inventory alerts, order status logs, sales reports)",
            "FE-06 & FE-10: Internal delivery map grid & visual warehouse layouts",
            "FE-11: Real-time messaging (Socket.io Customer support chat & push updates)"
          ],
          slides: [
            {
              src: "/furnimart-image/home-page.png",
              label: "Customer Landing Homepage",
              desc: "A minimalist e-commerce landing page showing the hero banner and navigation promoting the online interactive 3D furniture viewer."
            },
            {
              src: "/furnimart-image/product-catalog.png",
              label: "Client-side Products Grid & Filtering",
              desc: "User catalog interface displaying categories, descriptions, price tags, and category filters for items."
            },
            {
              src: "/furnimart-image/product-detail-3d.png",
              label: "Interactive 3D & AR Viewer Page",
              desc: "Enables customers to zoom, rotate, and interact with 3D product models using WebGL and Three.js, alongside specific item specifications."
            },
            {
              src: "/furnimart-image/checkout-out.png",
              label: "Checkout Confirmation & Payment Selection",
              desc: "Billing information and checkout page containing cart summary, delivery address configuration, and payment option selectors (VNPAY/COD)."
            },
            {
              src: "/furnimart-image/pos-dashboard.png",
              label: "POS Counter Sales Dashboard Terminal",
              desc: "A comprehensive dark-mode checkout panel for store clerks, supporting real-time product search, cart management, and Leaflet map location pickers."
            },
            {
              src: "/furnimart-image/dashboard-seller.png",
              label: "Seller/Employee Workspace Dashboard",
              desc: "Operational dashboard showing order approvals, inventory alert metrics, performance analysis charts, and active customer chat list."
            },
            {
              src: "/furnimart-image/warehouse-layout.png",
              label: "Interactive Warehouse Layout Grid Map",
              desc: "A real-time 2D grid mapping warehouse storage bins, color-coded by occupancy, with sidebars listing details of items stored in each shelf slot."
            }
          ]
        },
        trading: {
          title: "Second-Hand EV & Battery Trading Platform with Real-Time Chat & PayPal Integration",
          shortDesc: "A secure trade market for electric vehicles and batteries with integrated messaging and transaction verification.",
          purpose: "Designed to build trust and simplify the trade-in and resale of used electric vehicles and lithium batteries, providing detailed safety certifications and reliable payment workflows.",
          solves: "Addresses the lack of dedicated, secure platforms for EV components where buyer-seller communication and verified battery health metrics are critical for transaction trust.",
          problems: "Securing financial transaction endpoints against tampering and dealing with complex, nested MySQL database schemas for car-battery pairings.",
          solutions: "Implemented PayPal SDK with backend payment capture verification, using webhook confirmations. Constructed optimized indexing on MySQL schemas with Sequelize ORM to prevent slow database queries on listings.",
          techStack: ["Node.js", "ExpressJS", "MySQL", "Sequelize ORM", "JWT Auth", "PayPal API"],
          githubFront: "https://github.com/PhanKhanhSE/used-ev-battery-marketplace-frontend",
          githubBack: "https://github.com/ThuHang2604/FPTU-SWP391-Fall2025-BackEnd",
          slides: [
            {
              src: "/ev-battery-image/home-page.png",
              label: "Marketplace Landing Page",
              desc: "Marketplace homepage listing featured EV cars and battery packs, current promotions, and trading market guidelines."
            },
            {
              src: "/ev-battery-image/login.png",
              label: "Secure Portal Login Entrance",
              desc: "An elegant login and registration page for buyers and sellers, highlighting member benefits like quick listing creation, smart comparison, and escrow battery contracts."
            },
            {
              src: "/ev-battery-image/search.png",
              label: "Catalog Search & Filters",
              desc: "Advanced search engine allowing users to filter electric vehicles and batteries by manufacturer, price range, location, and State of Health (SoH)."
            },
            {
              src: "/ev-battery-image/detail.png",
              label: "EV / Battery Product Details",
              desc: "Comprehensive detail page showing EV specifications, battery health reports, safety certificates, and seller contact card."
            },
            {
              src: "/ev-battery-image/post-page.png",
              label: "Create New Sale Listing",
              desc: "Intuitive form for registered sellers to publish new EV or battery listings, upload pictures, and define technical metrics."
            },
            {
              src: "/ev-battery-image/chat.png",
              label: "Real-time Buyer-Seller Chat",
              desc: "Direct messaging chat screen utilizing Socket.io, enabling prompt trade negotiations and coordination between buyers and sellers."
            },
            {
              src: "/ev-battery-image/admin-dashboard.png",
              label: "System Admin Console",
              desc: "Administrator dashboard workspace to monitor registered users, moderate trading posts, view transaction logs, and manage system alerts."
            },
            {
              src: "/ev-battery-image/api-docs_.png",
              label: "Backend Swagger REST API Docs",
              desc: "Interactive OpenAPI/Swagger documentation outlining all system server routes and API payloads, aiding frontend connection."
            }
          ]
        },
        quiz: {
          title: "Online Quiz Management Platform with RESTful API & Result Tracking System",
          shortDesc: "A high-performance assessment server supporting active test sessions, submissions, and detailed student reporting.",
          purpose: "Developed to assist educational departments in conducting exams online, providing teachers with quiz creation tools and students with immediate feedback on performance.",
          solves: "Eliminates physical grading delays, provides visual performance reports, and monitors quiz environments to ensure test integrity.",
          problems: "Handling heavy concurrent write requests to MongoDB when multiple classes submit exams at the exact same minute. Preventing tab-switching during exams.",
          solutions: "Structured the quiz submission backend to queue requests and optimize MongoDB writes using lean queries and update operations. Used frontend Page Visibility APIs to log and warn users when they switched tabs.",
          techStack: ["ReactJS", "Redux Toolkit", "Node.js", "ExpressJS", "MongoDB", "Mongoose"],
          githubFront: "https://github.com/ThuHang2604/FPTU_FA25_SDN301m-Ass_Frontend",
          githubBack: "https://github.com/ThuHang2604/FPTU_FA25_SDN301m-Assignment",
          slides: [
            {
              src: "/quiz-image/login-page.png",
              label: "Portal Authentication Entrance",
              desc: "Secure login and registration entrance interface for students and teachers to access the quiz assessment platform."
            },
            {
              src: "/quiz-image/student-home.png",
              label: "Student Dashboard Hub",
              desc: "Workspace for active students showing available exams, deadlines, overall progression metrics, and historical test reports."
            },
            {
              src: "/quiz-image/take-the-quiz.png",
              label: "Active Test Assessment Page",
              desc: "Clean testing room layout displaying multiple-choice questions, answer options, and a precise real-time countdown timer."
            },
            {
              src: "/quiz-image/quiz-result.png",
              label: "Detailed Performance & Grade Report",
              desc: "Summary dashboard displaying quiz scores, percentage grade, correct/incorrect answer details, and question explanation cards."
            },
            {
              src: "/quiz-image/admin-dashboard.png",
              label: "Teacher Analytics Control Panel",
              desc: "Management dashboard for teachers containing statistical averages, passing rates, submission activities, and system usage graphs."
            },
            {
              src: "/quiz-image/manage-question.png",
              label: "Question Repository Management",
              desc: "List of available questions in the question bank, sorted by subject and difficulty, with search and edit operations."
            },
            {
              src: "/quiz-image/create-quiz.png",
              label: "New Quiz Parameter Form",
              desc: "Setup form to customize quiz parameters, defining title, time limit, question count, and student class visibility."
            }
          ]
        }
      }
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Interested in collaboration or hiring? Send a message or reach out via my coordinates.",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      messageLabel: "Message",
      sendBtn: "Send Message",
      sending: "Sending...",
      successMsg: "Thank you! Your message has been sent successfully.",
      infoTitle: "Contact Information",
      phoneLabel: "Phone",
      locationLabel: "Location",
      printCvBtn: "Print/Download CV",
    }
  },
  vi: {
    nav: {
      home: "Trang chủ",
      projects: "Dự án",
      about: "Giới thiệu",
      contact: "Liên hệ",
      cv: "CV",
    },
    hero: {
      greeting: "Xin chào, tôi là",
      name: "Thu Hằng",
      role: "Kỹ sư Phần mềm",
      tagline: "Nhà phát triển Full-stack định hướng Backend, có kinh nghiệm thực tế xây dựng ứng dụng web bằng Spring Boot, Node.js, ReactJS và cơ sở dữ liệu SQL. Đam mê thiết kế các hệ thống backend mở rộng và phát triển phần mềm bảo mật.",
      viewProjects: "Xem các Dự án",
      contactMe: "Liên hệ với tôi",
      downloadCv: "Xem / In CV",
    },
    about: {
      title: "Giới thiệu về tôi",
      intro: "Tôi là một Kỹ sư phần mềm đang làm việc tại Thành phố Hồ Chí Minh, Việt Nam. Là một nhà phát triển Full-stack với niềm đam mê lớn dành cho các công nghệ Backend, tôi thích thú với công việc thiết kế các API mạnh mẽ, chuẩn hóa cơ sở dữ liệu và triển khai logic bảo mật ứng dụng. Tôi luôn sẵn sàng đối mặt và giải quyết các bài toán hệ thống phức tạp cùng tối ưu hóa hiệu năng API.",
      orientationTitle: "Định hướng & Lựa chọn nghề nghiệp",
      orientationDesc: "Tôi lựa chọn chuyên sâu về các hệ thống backend vì cảm thấy rất hứng thú khi xây dựng kiến trúc làm nền tảng cho các ứng dụng số hiện đại. Thiết kế dòng chảy dữ liệu, đảm bảo hệ thống có độ sẵn sàng cao và bảo mật các giao diện web là mục tiêu chính của tôi. Tôi hướng tới làm chủ các hệ thống phân tán, thiết kế microservices và triển khai ứng dụng bằng container.",
      goalsTitle: "Mục tiêu nghề nghiệp",
      goalsDesc: "Mục tiêu ngắn hạn của tôi là tham gia vào một đội ngũ kỹ sư chuyên nghiệp, nơi tôi có thể đóng góp xây dựng các ứng dụng thực tế sử dụng Spring Boot và Node.js, đồng thời học hỏi các quy chuẩn công nghiệp. Về dài hạn, tôi mong muốn trở thành một Kiến trúc sư Giải pháp Backend (Backend Solutions Architect), tự tay thiết kế các kiến trúc phần mềm quy mô lớn và lưu lượng truy cập cao.",
      valuesTitle: "Giá trị cốt lõi",
      valuesDesc: "Ưu tiên tối ưu hóa hiệu năng cơ sở dữ liệu, viết mã nguồn sạch dễ kiểm thử (Jest/JUnit), xây dựng API bảo mật (JWT, HTTPS, kiểm thực dữ liệu đầu vào) và cộng tác hiệu quả trong các đội ngũ Agile sprint.",
    },
    skills: {
      title: "Kỹ năng & Công nghệ",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Công cụ & DevOps",
      databases: "Cơ sở dữ liệu",
    },
    experience: {
      title: "Kinh nghiệm làm việc",
      internRole: "Thực tập sinh Kỹ thuật Phần mềm",
      internCompany: "FPT Software",
      internPeriod: "Tháng 1/2024 - Tháng 4/2024",
      internLocation: "Thành phố Hồ Chí Minh, Việt Nam",
      internPoints: [
        "Phát triển các component frontend và xử lý logic nghiệp vụ backend cho phân hệ quản lý thực tập sinh sử dụng ReactJS và Spring Boot trong một đội ngũ Agile/Scrum.",
        "Tham gia vào các chu kỳ sprint 2 tuần, cộng tác qua GitLab, Jira, code review và quy trình CI/CD để đảm bảo tích hợp liên tục và phát triển tính năng đều đặn.",
        "Thực hiện kiểm thử frontend sử dụng Jest, đóng góp nâng cao độ tin cậy và khả năng bảo trì của giao diện người dùng.",
        "Công nghệ sử dụng: Java, Spring Boot, ReactJS, GitLab"
      ],
    },
    education: {
      title: "Học vấn",
      school: "Đại học FPT",
      degree: "Cử nhân Kỹ thuật Phần mềm",
      period: "2021 - 2026",
      majorLabel: "Chuyên ngành",
      major: "Kỹ thuật Phần mềm",
      subjectsTitle: "Các môn học tiêu biểu",
      subjects: [
        "Cấu trúc dữ liệu và Giải thuật",
        "Lập trình hướng đối tượng (Java)",
        "Hệ quản trị cơ sở dữ liệu (SQL)",
        "Phát triển ứng dụng Web",
        "Dự án Kỹ nghệ phần mềm",
        "Kiểm thử & Đảm bảo chất lượng phần mềm",
        "Hệ điều hành & Mạng máy tính",
        "Điện toán đám mây"
      ],
      extracurricularTitle: "Hoạt động ngoại khóa",
      extracurricularDesc: "Câu lạc bộ Nhạc cụ truyền thống – Đại học FPT (FTI): Hỗ trợ tổ chức sự kiện, điều phối thành viên và tham gia các hoạt động biểu diễn trong các ngày hội văn hóa của trường, lan tỏa âm nhạc truyền thống Việt Nam."
    },
    projects: {
      title: "Dự án tiêu biểu",
      viewDetails: "Xem chi tiết",
      backToList: "Quay lại danh sách",
      purposeLabel: "Mục đích dự án",
      solvesLabel: "Vấn đề giải quyết",
      problemsLabel: "Khó khăn gặp phải",
      solutionsLabel: "Cách giải quyết",
      techStackLabel: "Công nghệ sử dụng",
      items: {
        furniture: {
          title: "Nền tảng thương mại điện tử nội thất 3D với quản lý kho & chat thời gian thực",
          shortDesc: "Một nền tảng mua sắm và quản lý kho toàn diện, giao diện responsive tích hợp trực quan hóa mô hình 3D và chat hỗ trợ trực tuyến.",
          purpose: "Được tạo ra nhằm hiện đại hóa trải nghiệm mua sắm nội thất trực tuyến, cho phép khách hàng xem đồ đạc trong không gian mô phỏng 3D, đặt hàng và trò chuyện ngay với nhân viên, đồng thời hỗ trợ người quản lý kho theo dõi tồn kho trực quan.",
          solves: "Giải quyết hạn chế của các catalogue ảnh 2D thông thường (khách hàng khó hình dung kích thước, hình dáng thực tế) và đồng bộ kho hàng lập tức với hoạt động bán lẻ.",
          problems: "Việc render nhiều asset 3D nặng trên trình duyệt của thiết bị cấu hình yếu gây giật lag giao diện. Các luồng chat thời gian thực bị mất đồng bộ khi kết nối mạng chập chờn.",
          solutions: "Áp dụng kỹ thuật lazy loading và tối ưu hóa cấp độ chi tiết (LOD) cho ba.js để giảm số lượng đa giác. Thiết kế hàng đợi sự kiện Socket.io kết hợp local storage để lưu tạm tin nhắn khi mất mạng.",
          techStack: ["ReactJS", "Vite", "TypeScript", "TailwindCSS", "Socket.io", "Three.js"],
          githubFront: "https://github.com/TonTon1410/furnimart-web",
          githubBack: "https://github.com/Oggie26/FurniMart-BE",
          academicInstitution: "Đại học FPT (TP. HCM, 12/2024)",
          projectCode: "FA25SE153 | Nhóm GFA25SE147",
          teamTitle: "Thành viên nhóm dự án",
          teamMembers: [
            "Phan Hoàng Nam (Trưởng nhóm) - SE173453",
            "Phạm Văn Toàn - SE172763",
            "Lê Nguyễn Thanh Phong - SE130383",
            "Đỗ Thị Thu Hằng - SE161271",
            "Trần Ngọc Yên Thảo - SE161001"
          ],
          supervisorTitle: "Giảng viên hướng dẫn",
          supervisorName: "Thầy Nguyễn Minh Sang",
          featuresTitle: "Các tính năng & Module cốt lõi",
          featuresScope: [
            "FE-01: Xác thực phân quyền (Khách hàng, Nhân viên, Giao hàng, Quản lý, Admin)",
            "FE-02: Cửa hàng trực tuyến (Xem chi tiết đồ nội thất 3D, thanh toán VNPay QR)",
            "FE-04 & FE-05: Dashboard của Nhân viên & Quản lý (Quản lý tồn kho, duyệt đơn hàng)",
            "FE-06 & FE-10: Quy trình giao hàng nội bộ & Bản đồ sơ đồ kệ kho kệ hàng",
            "FE-11: Hệ thống trò chuyện thời gian thực (Socket.io chat nhân viên & khách hàng)"
          ],
          slides: [
            {
              src: "/furnimart-image/home-page.png",
              label: "Trang chủ của Khách hàng",
              desc: "Trang chủ thương mại điện tử tối giản với giao diện biểu ngữ giới thiệu công nghệ tương tác 3D trực quan."
            },
            {
              src: "/furnimart-image/product-catalog.png",
              label: "Trang Danh mục Sản phẩm & Bộ lọc",
              desc: "Thiết kế giao diện danh mục sản phẩm hiển thị dạng lưới kèm theo thanh bộ lọc phân loại."
            },
            {
              src: "/furnimart-image/product-detail-3d.png",
              label: "Trang Chi tiết Sản phẩm tích hợp 3D/AR",
              desc: "Khách hàng có thể tương tác trực quan với mô hình đồ nội thất 3D (xoay, phóng to bằng Three.js) và xem thông tin chi tiết của sản phẩm."
            },
            {
              src: "/furnimart-image/checkout-out.png",
              label: "Trang Xác nhận Đặt hàng & Chọn Phương thức Thanh toán",
              desc: "Giao diện cổng đặt hàng hiển thị tóm tắt giỏ hàng, thông tin địa chỉ giao nhận và tùy chọn thanh toán qua VNPAY hoặc COD."
            },
            {
              src: "/furnimart-image/pos-dashboard.png",
              label: "Bảng POS Bán hàng tại Quầy",
              desc: "Giao diện bán hàng tại quầy dành cho nhân viên cửa hàng, hỗ trợ tạo đơn hàng nhanh, chọn phương thức thanh toán và tích hợp bản đồ định vị."
            },
            {
              src: "/furnimart-image/dashboard-seller.png",
              label: "Bàn Làm việc & Dashboard của Nhân viên",
              desc: "Trang quản trị hiển thị biểu đồ hiệu suất làm việc ngày, thống kê đơn chờ xác nhận, cảnh báo tồn kho và quản lý danh sách tin nhắn hỗ trợ khách hàng."
            },
            {
              src: "/furnimart-image/warehouse-layout.png",
              label: "Sơ đồ Bố trí Kệ kho Hàng trực quan",
              desc: "Bản đồ phân chia kệ kho hàng theo khu vực, hiển thị chi tiết mã ô chứa, sức chứa sản phẩm và danh sách sản phẩm thực tế trong từng ô."
            }
          ]
        },
        trading: {
          title: "Sàn giao dịch xe điện & Pin cũ với chat trực tiếp & Tích hợp thanh toán PayPal",
          shortDesc: "Chợ giao dịch an toàn dành cho ô tô điện và các mô-đun pin cũ, tích hợp nhắn tin trực tiếp và xác thực thanh toán tự động.",
          purpose: "Được xây dựng nhằm tạo dựng niềm tin và đơn giản hóa quy trình mua bán xe điện đã qua sử dụng cùng pin lithium, cung cấp quy trình xác thực chứng chỉ an toàn và thanh toán đáng tin cậy.",
          solves: "Giải quyết việc thiếu các nền tảng chuyên biệt và an toàn cho linh kiện xe điện, nơi giao tiếp giữa người mua - người bán và kiểm định pin là tối quan trọng.",
          problems: "Bảo mật các endpoint giao dịch tài chính trước các hành vi tấn công giả mạo và thiết kế lược đồ cơ sở dữ liệu MySQL phức tạp liên quan đến xe - pin.",
          solutions: "Tích hợp PayPal SDK với quy trình xác thực giao dịch phía backend qua webhook. Xây dựng index tối ưu trên cơ sở dữ liệu MySQL thông qua Sequelize ORM để ngăn ngừa các câu truy vấn chậm.",
          techStack: ["Node.js", "ExpressJS", "MySQL", "Sequelize ORM", "JWT Auth", "PayPal API"],
          githubFront: "https://github.com/PhanKhanhSE/used-ev-battery-marketplace-frontend",
          githubBack: "https://github.com/ThuHang2604/FPTU-SWP391-Fall2025-BackEnd",
          slides: [
            {
              src: "/ev-battery-image/home-page.png",
              label: "Trang chủ Sàn Giao dịch",
              desc: "Trang chủ hiển thị danh sách tin đăng nổi bật, dòng sản phẩm xe điện và pin cùng bảng giá thị trường mới nhất."
            },
            {
              src: "/ev-battery-image/login.png",
              label: "Cổng Đăng nhập Thành viên Bảo mật",
              desc: "Giao diện đăng nhập và đăng ký tài khoản bảo mật dành cho người mua và người bán, nêu bật các lợi ích thành viên như đăng tin nhanh, so sánh thông minh và hợp đồng điện tử."
            },
            {
              src: "/ev-battery-image/search.png",
              label: "Trang Tìm kiếm & Lọc Sản phẩm",
              desc: "Bộ tìm kiếm nâng cao cho phép lọc xe và pin theo thương hiệu, giá cả, khu vực và các chỉ số sức khỏe của pin (SoH)."
            },
            {
              src: "/ev-battery-image/detail.png",
              label: "Trang Chi tiết Tin đăng Xe & Pin",
              desc: "Trang thông tin chi tiết hiển thị đầy đủ thông số kỹ thuật xe điện, tình trạng pin, giấy tờ chứng nhận an toàn và thông tin người bán."
            },
            {
              src: "/ev-battery-image/post-page.png",
              label: "Đăng tin Bán hàng Mới",
              desc: "Biểu mẫu đăng tin trực quan cho phép nhập chi tiết thông tin xe hoặc pin, đăng tải hình ảnh và điền các chỉ số kỹ thuật liên quan."
            },
            {
              src: "/ev-battery-image/chat.png",
              label: "Trò chuyện Trực tiếp Thời gian Thực",
              desc: "Kênh chat thời gian thực giữa người mua và người bán hỗ trợ đàm phán giá cả và trao đổi thông tin giao dịch trực tiếp."
            },
            {
              src: "/ev-battery-image/admin-dashboard.png",
              label: "Bảng Quản trị Hệ thống (Admin)",
              desc: "Bảng điều khiển dành cho quản trị viên theo dõi người dùng, duyệt tin đăng bán hàng, thống kê giao dịch và quản lý các báo cáo vi phạm."
            },
            {
              src: "/ev-battery-image/api-docs_.png",
              label: "Tài liệu API Backend (Swagger)",
              desc: "Tài liệu Swagger tự động hóa liệt kê toàn bộ các RESTful API endpoints của hệ thống, hỗ trợ phát triển và tích hợp frontend nhanh chóng."
            }
          ]
        },
        quiz: {
          title: "Hệ thống quản lý thi trắc nghiệm trực tuyến với RESTful API & Theo dõi kết quả",
          shortDesc: "Server đánh giá năng lực hiệu năng cao, hỗ trợ làm bài thi trực tiếp, tự động chấm điểm và báo cáo tiến trình chi tiết.",
          purpose: "Phát triển để hỗ trợ các phòng đào tạo tổ chức kiểm tra trực tuyến, cung cấp bộ công cụ tạo đề cho giáo viên và trả kết quả học tập tức thì cho học sinh.",
          solves: "Loại bỏ sự chậm trễ của việc chấm bài thủ công, cung cấp biểu đồ trực quan về kết quả và giám sát tính minh bạch của bài kiểm tra.",
          problems: "Gặp tình trạng quá tải khi hàng loạt học sinh cùng nhấn nút nộp bài vào cùng một phút. Học sinh chuyển tab để tra cứu tài liệu.",
          solutions: "Thiết kế cơ chế nộp bài hàng đợi ở backend và tối ưu hóa ghi MongoDB bằng các câu lệnh cập nhật tinh gọn. Sử dụng Page Visibility API phía frontend để ghi nhận và cảnh báo số lần học sinh rời khỏi tab thi.",
          techStack: ["ReactJS", "Redux Toolkit", "Node.js", "ExpressJS", "MongoDB", "Mongoose"],
          githubFront: "https://github.com/ThuHang2604/FPTU_FA25_SDN301m-Ass_Frontend",
          githubBack: "https://github.com/ThuHang2604/FPTU_FA25_SDN301m-Assignment",
          slides: [
            {
              src: "/quiz-image/login-page.png",
              label: "Trang Đăng nhập Cổng Kiểm tra",
              desc: "Giao diện xác thực bảo mật dành cho học sinh và giáo viên truy cập vào hệ thống làm bài kiểm tra trực tuyến."
            },
            {
              src: "/quiz-image/student-home.png",
              label: "Bảng điều khiển của Học sinh",
              desc: "Bàn làm việc của học sinh hiển thị danh sách các bài thi đang mở, tiến độ học tập và lịch sử kết quả thi trước đó."
            },
            {
              src: "/quiz-image/take-the-quiz.png",
              label: "Giao diện Làm bài thi Trực tuyến",
              desc: "Màn hình làm bài thi hiển thị câu hỏi trắc nghiệm, các lựa chọn đáp án cùng bộ đếm ngược thời gian làm bài chính xác."
            },
            {
              src: "/quiz-image/quiz-result.png",
              label: "Kết quả Kiểm tra & Thống kê",
              desc: "Trang tổng kết bài làm hiển thị điểm số đạt được, danh sách câu trả lời đúng/sai và lời giải thích chi tiết cho từng câu."
            },
            {
              src: "/quiz-image/admin-dashboard.png",
              label: "Bảng Thống kê của Giáo viên (Admin)",
              desc: "Bàn làm việc của quản trị viên và giáo viên hiển thị biểu đồ thống kê điểm số trung bình, tỷ lệ hoàn thành bài thi và hoạt động hệ thống."
            },
            {
              src: "/quiz-image/manage-question.png",
              label: "Quản lý Ngân hàng Câu hỏi",
              desc: "Giao diện hiển thị danh sách các câu hỏi kiểm tra kèm bộ lọc môn học, độ khó và chức năng tạo, sửa, xóa nhanh."
            },
            {
              src: "/quiz-image/create-quiz.png",
              label: "Tạo Đề thi Mới",
              desc: "Biểu mẫu thiết lập tham số bài thi mới gồm tên bài thi, thời gian làm bài, số lượng câu hỏi và phân quyền lớp học tham gia."
            }
          ]
        }
      }
    },
    contact: {
      title: "Liên hệ",
      subtitle: "Bạn muốn hợp tác hay tuyển dụng? Hãy gửi tin nhắn hoặc kết nối với tôi qua thông tin bên dưới.",
      nameLabel: "Tên của bạn",
      emailLabel: "Email của bạn",
      messageLabel: "Nội dung tin nhắn",
      sendBtn: "Gửi tin nhắn",
      sending: "Đang gửi...",
      successMsg: "Cảm ơn bạn! Tin nhắn của bạn đã được gửi đi thành công.",
      infoTitle: "Thông tin liên hệ",
      phoneLabel: "Điện thoại",
      locationLabel: "Địa chỉ",
      printCvBtn: "In/Tải CV PDF",
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      about: "À Propos",
      contact: "Contact",
      cv: "CV",
    },
    hero: {
      greeting: "Bonjour, je m'appelle",
      name: "Thu Hang",
      role: "Ingénieur Logiciel",
      tagline: "Développeuse Full-stack orientée Backend, avec une expérience pratique dans la création d'applications web en utilisant Spring Boot, Node.js, ReactJS et bases de données SQL. Intéressée par les systèmes backend évolutifs et le développement sécurisé.",
      viewProjects: "Voir les projets",
      contactMe: "Me Contacter",
      downloadCv: "Voir / Imprimer le CV",
    },
    about: {
      title: "À Propos de Moi",
      intro: "Je suis une ingénieure logiciel basée à Ho Chi Minh Ville, au Vietnam. En tant que développeuse Full-stack passionnée par le Backend, j'aime concevoir des API robustes, structurer des bases de données relationnelles et implémenter une logique de sécurité applicative fiable. J'adore résoudre des défis système complexes et optimiser les performances des API.",
      orientationTitle: "Orientation Professionnelle & Choix",
      orientationDesc: "J'ai choisi de me spécialiser dans le backend car j'éprouve une grande satisfaction à concevoir l'architecture qui propulse les applications numériques modernes. Mes priorités sont la conception de flux de données, la garantie d'une haute disponibilité et la sécurisation des échanges. Mon but est de maîtriser les systèmes distribués, le microservices et le déploiement containerisé.",
      goalsTitle: "Objectifs de Carrière",
      goalsDesc: "Mon objectif à court terme est de rejoindre une équipe d'ingénierie professionnelle où je pourrai contribuer à des applications réelles avec Spring Boot et Node.js. À long terme, j'aspire à devenir Architecte Solutions Backend, en concevant des architectures logicielles d'entreprise à haut débit.",
      valuesTitle: "Valeurs Fondamentales",
      valuesDesc: "Prioriser l'efficacité des bases de données, écrire du code propre et testable (Jest/JUnit), concevoir des API sécurisées (JWT, HTTPS, validation des entrées) et collaborer dans des équipes Agile en sprint.",
    },
    skills: {
      title: "Compétences & Technologies",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Outils & DevOps",
      databases: "Bases de données",
    },
    experience: {
      title: "Expérience Professionnelle",
      internRole: "Stagiaire en Ingénierie Logicielle",
      internCompany: "FPT Software",
      internPeriod: "Jan 2024 - Avr 2024",
      internLocation: "Ho Chi Minh Ville, Vietnam",
      internPoints: [
        "Développement de composants frontend et de la logique métier backend pour les modules de gestion des stages avec ReactJS et Spring Boot au sein d'une équipe Agile/Scrum.",
        "Participation à des sprints de 2 semaines, collaboration via GitLab, Jira, revues de code et processus CI/CD pour assurer une livraison itérative.",
        "Réalisation de tests frontend avec Jest, contribuant à améliorer la fiabilité et la maintenabilité de l'interface utilisateur.",
        "Stack Tech: Java, Spring Boot, ReactJS, GitLab"
      ],
    },
    education: {
      title: "Éducation",
      school: "Université FPT",
      degree: "Licence en Ingénierie Logicielle",
      period: "2021 - 2026",
      majorLabel: "Spécialité",
      major: "Génie Logiciel",
      subjectsTitle: "Matières Principales Étudiées",
      subjects: [
        "Structures de Données et Algorithmes",
        "Programmation Orientée Objet (Java)",
        "Systèmes de Gestion de Bases de Données (SQL)",
        "Développement d'Applications Web",
        "Projet d'Ingénierie Logicielle",
        "Tests de Logiciels & Assurance Qualité",
        "Systèmes d'Exploitation & Réseaux",
        "Cloud Computing"
      ],
      extracurricularTitle: "Activités Extra-scolaires",
      extracurricularDesc: "Club d'Instruments Traditionnels – Université FPT (FTI): Soutien à l'organisation d'événements, coordination des membres et prestations lors des festivals culturels de l'université pour promouvoir la musique traditionnelle vietnamienne."
    },
    projects: {
      title: "Projets Principaux",
      viewDetails: "Voir les détails",
      backToList: "Retour aux projets",
      purposeLabel: "Objectif du Projet",
      solvesLabel: "Problème Résolu",
      problemsLabel: "Difficultés Rencontrées",
      solutionsLabel: "Solutions Apportées",
      techStackLabel: "Technologies Utilisées",
      items: {
        furniture: {
          title: "Plateforme E-Commerce de Meubles 3D avec Stock et Chat en Temps Réel",
          shortDesc: "Une plateforme d'achat réactive et de gestion d'entrepôt avec visualisation interactive 3D et support client en direct.",
          purpose: "Créée pour moderniser l'achat de meubles en ligne, permettant aux clients de visualiser les articles dans un espace 3D simulé et de chatter en direct avec le personnel, tout en offrant aux gestionnaires d'entrepôt un tableau de bord des stocks.",
          solves: "Résout les limites des catalogues 2D statiques qui créent de l'incertitude chez les acheteurs sur l'encombrement des meubles, et synchronise instantanément les niveaux de stocks.",
          problems: "Le rendu de multiples fichiers 3D lourds causait des ralentissements majeurs sur les smartphones d'entrée de gamme. Les conversations perdaient la connexion lors de micro-coupures.",
          solutions: "Mise en œuvre du chargement différé (lazy loading) et optimisation des niveaux de détails pour three.js. Création d'une file d'attente d'événements Socket.io avec sauvegarde locale en cas de perte réseau.",
          techStack: ["ReactJS", "Vite", "TypeScript", "TailwindCSS", "Socket.io", "Three.js"],
          githubFront: "https://github.com/TonTon1410/furnimart-web",
          githubBack: "https://github.com/Oggie26/FurniMart-BE",
          academicInstitution: "Université FPT (HCM, 12/2024)",
          projectCode: "FA25SE153 | Équipe GFA25SE147",
          teamTitle: "Équipe du Projet Capstone",
          teamMembers: [
            "Phan Hoàng Nam (Chef d'équipe) - SE173453",
            "Phạm Văn Toàn - SE172763",
            "Lê Nguyễn Thanh Phong - SE130383",
            "Đỗ Thị Thu Hằng - SE161271",
            "Trần Ngọc Yên Thảo - SE161001"
          ],
          supervisorTitle: "Directeur Académique",
          supervisorName: "M. Nguyễn Minh Sang",
          featuresTitle: "Modules & Fonctionnalités Clés",
          featuresScope: [
            "FE-01: Authentification multi-rôles (Client, Personnel de magasin, Livreur, Manager, Admin)",
            "FE-02: Boutique client interactive (Visualisation 3D, filtres dynamiques, commande immédiate)",
            "FE-04 & FE-05: Dashboard d'opérations (Alertes de stocks, validations, rapports)",
            "FE-06 & FE-10: Flux de livraison interne & disposition de grille d'entrepôt interactive",
            "FE-11: Messagerie en temps réel (Chat client via Socket.io & notifications de commande)"
          ],
          slides: [
            {
              src: "/furnimart-image/home-page.png",
              label: "Page d'Accueil Client",
              desc: "Une page d'accueil e-commerce minimaliste présentant la bannière principale promouvant le visualiseur de meubles 3D interactif."
            },
            {
              src: "/furnimart-image/product-catalog.png",
              label: "Grille de Produits & Filtrage Client",
              desc: "Interface de catalogue affichant les cartes de meubles, les filtres de catégories et les variations de produits."
            },
            {
              src: "/furnimart-image/product-detail-3d.png",
              label: "Page Détail Produit avec Visionneuse 3D/AR",
              desc: "Permet aux clients d'interagir avec les modèles 3D à l'aide de Three.js, ainsi que de vérifier les stocks par succursale."
            },
            {
              src: "/furnimart-image/checkout-out.png",
              label: "Confirmation de Commande & Sélection de Paiement",
              desc: "Page de facturation contenant le résumé du panier, l'adresse de livraison et la sélection des modes de paiement (VNPAY/COD)."
            },
            {
              src: "/furnimart-image/pos-dashboard.png",
              label: "Terminal Dashboard Vente POS au Comptoir",
              desc: "Panneau de caisse complet en mode sombre pour les employés, prenant en charge la recherche de produits, le panier et la localisation par carte."
            },
            {
              src: "/furnimart-image/dashboard-seller.png",
              label: "Dashboard d'Opérations de l'Employé",
              desc: "Tableau de bord affichant les approbations de commandes, les alertes de stock, les graphiques d'activité et la liste de chat actif."
            },
            {
              src: "/furnimart-image/warehouse-layout.png",
              label: "Carte de Disposition des Étagères de l'Entrepôt",
              desc: "Visualisation en temps réel de la disposition du stockage, affichant les capacités et la liste des articles de chaque emplacement."
            }
          ]
        },
        trading: {
          title: "Plateforme de Vente de Véhicules Électriques et de Batteries d'Occasion",
          shortDesc: "Un marché sécurisé pour voitures électriques et batteries usagées, avec chat et vérification des paiements PayPal.",
          purpose: "Conçue pour instaurer la confiance et simplifier la revente de véhicules électriques et de batteries au lithium d'occasion, avec des certifications de santé de batterie et des flux de paiement fiables.",
          solves: "Répond à l'absence de plateformes sécurisées dédiées aux composants de VE, où la communication acheteur-vendeur et les scores de santé de la batterie sont clés pour sécuriser la transaction.",
          problems: "Sécurisation des points de terminaison des transactions financières contre la falsification et gestion de schémas de base de données relationnels MySQL complexes.",
          solutions: "Intégration du SDK PayPal avec vérification de capture de paiement côté serveur par webhooks. Optimisation des index sur la base de données MySQL via Sequelize ORM pour éviter des temps de réponse lents.",
          techStack: ["Node.js", "ExpressJS", "MySQL", "Sequelize ORM", "JWT Auth", "PayPal API"],
          githubFront: "https://github.com/PhanKhanhSE/used-ev-battery-marketplace-frontend",
          githubBack: "https://github.com/ThuHang2604/FPTU-SWP391-Fall2025-BackEnd",
          slides: [
            {
              src: "/ev-battery-image/home-page.png",
              label: "Page d'Accueil de la Plateforme",
              desc: "Page d'accueil affichant les annonces vedettes de véhicules électriques et de batteries, les guides d'achat et les prix du marché."
            },
            {
              src: "/ev-battery-image/login.png",
              label: "Portail de Connexion Sécurisé",
              desc: "Une page d'authentification élégante pour les acheteurs et vendeurs, mettant en avant les avantages des membres (création d'annonces, comparaison intelligente et contrats de batteries sécurisés)."
            },
            {
              src: "/ev-battery-image/search.png",
              label: "Recherche & Filtres Avancés",
              desc: "Moteur de recherche avancé permettant de filtrer les véhicules électriques et les batteries par marque, prix, localisation et l'état de santé (SoH)."
            },
            {
              src: "/ev-battery-image/detail.png",
              label: "Détails de l'Annonce EV / Batterie",
              desc: "Page complète affichant les spécifications du véhicule électrique, l'état de santé de la batterie et le contact du vendeur."
            },
            {
              src: "/ev-battery-image/post-page.png",
              label: "Créer une Nouvelle Annonce",
              desc: "Formulaire intuitif permettant aux vendeurs de publier de nouvelles annonces, de charger des photos et de définir les spécifications."
            },
            {
              src: "/ev-battery-image/chat.png",
              label: "Messagerie en Temps Réel",
              desc: "Chat en temps réel via Socket.io entre acheteurs et vendeurs pour négocier et finaliser les détails de la transaction."
            },
            {
              src: "/ev-battery-image/admin-dashboard.png",
              label: "Console d'Administration Système",
              desc: "Tableau de bord d'administration pour gérer les utilisateurs, approuver les annonces, consulter les logs et gérer les signalements."
            },
            {
              src: "/ev-battery-image/api-docs_.png",
              label: "Documentation API Backend (Swagger)",
              desc: "Documentation interactive Swagger répertoriant tous les endpoints API RESTful pour faciliter l'intégration frontend."
            }
          ]
        },
        quiz: {
          title: "Plateforme de Gestion de Quiz en Ligne avec API REST et Suivi de Résultats",
          shortDesc: "Serveur d'évaluation haute performance prenant en charge les sessions de tests en direct, la correction automatique et les rapports.",
          purpose: "Développée pour aider les départements scolaires à organiser des examens en ligne, offrant aux enseignants des outils de création de quiz et aux étudiants un feedback instantané.",
          solves: "Élimine les délais de correction manuelle, fournit des graphiques de performance et surveille l'environnement des quiz pour assurer l'intégrité de l'évaluation.",
          problems: "Traitement de requêtes d'écriture massives et simultanées sur MongoDB lors des soumissions de fin d'examen. Triche par changement d'onglet.",
          solutions: "Conception d'une file d'attente backend pour les soumissions et requêtes MongoDB optimisées. Utilisation des API Page Visibility au frontend pour enregistrer et alerter en cas de changement d'onglet.",
          techStack: ["ReactJS", "Redux Toolkit", "Node.js", "ExpressJS", "MongoDB", "Mongoose"],
          githubFront: "https://github.com/ThuHang2604/FPTU_FA25_SDN301m-Ass_Frontend",
          githubBack: "https://github.com/ThuHang2604/FPTU_FA25_SDN301m-Assignment",
          slides: [
            {
              src: "/quiz-image/login-page.png",
              label: "Portail d'Authentification Sécurisé",
              desc: "Interface de connexion sécurisée pour les étudiants et les enseignants afin d'accéder à la plateforme d'évaluation en ligne."
            },
            {
              src: "/quiz-image/student-home.png",
              label: "Tableau de Bord de l'Étudiant",
              desc: "Espace de travail de l'étudiant affichant les quiz ouverts, les dates limites, la progression globale et l'historique des résultats."
            },
            {
              src: "/quiz-image/take-the-quiz.png",
              label: "Interface de Session de Test Actif",
              desc: "Gabarit de salle de test affichant les questions à choix multiples, les options de réponse et un compte à rebours précis en temps réel."
            },
            {
              src: "/quiz-image/quiz-result.png",
              label: "Rapport de Performance Détaillé",
              desc: "Tableau de bord récapitulatif affichant les notes, le pourcentage de réussite, le détail des réponses correctes/incorrectes et les explications."
            },
            {
              src: "/quiz-image/admin-dashboard.png",
              label: "Panneau de Contrôle et d'Analyses Enseignant",
              desc: "Tableau de bord pour les enseignants contenant les moyennes, les taux de réussite, l'activité de soumission et les rapports."
            },
            {
              src: "/quiz-image/manage-question.png",
              label: "Gestion de la Banque de Questions",
              desc: "Liste des questions de test triables par matière et difficulté, avec options de filtrage et de modification."
            },
            {
              src: "/quiz-image/create-quiz.png",
              label: "Formulaire de Paramètres de Quiz",
              desc: "Formulaire permettant de personnaliser les quiz (titre, durée, nombre de questions et classes autorisées)."
            }
          ]
        }
      }
    },
    contact: {
      title: "Contactez-Moi",
      subtitle: "Intéressé par une collaboration ou une embauche ? Envoyez un message ou contactez-moi par mes coordonnées.",
      nameLabel: "Votre Nom",
      emailLabel: "Votre Email",
      messageLabel: "Message",
      sendBtn: "Envoyer le Message",
      sending: "Envoi en cours...",
      successMsg: "Merci ! Votre message a été envoyé avec succès.",
      infoTitle: "Coordonnées de Contact",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation",
      printCvBtn: "Imprimer / Télécharger CV",
    }
  }
};
