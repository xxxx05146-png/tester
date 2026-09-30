const questions = [
    {
        id: 1,
        question: "Dù trong thời phong kiến, thời kỳ tư bản chủ nghĩa hay thời kỳ định hướng xã hội chủ nghĩa như hiện nay, giáo dục vẫn giúp chăm sóc, răn dạy và giáo dục điều hay lẽ phải cho con người. Điều này thể hiện tính chất gì của giáo dục?",
        options: [
            "Tính xã hội - lịch sử",
            "Tính nhân văn",
            "Tính phổ biến và vĩnh hằng",
            "Tính giai cấp"
        ],
        answer: 2 // C
    },
    {
        id: 2,
        question: "Trong quá trình học tập tại trường, Hoa được tham gia nhiều hoạt động trải nghiệm như thi đua gói bánh ít, làm bánh chưng, thi múa dân gian,... Qua các hoạt động, Hoa cảm thấy quý trọng hơn các giá trị truyền thống của đất nước. Điều này thể hiện chức năng gì của giáo dục?",
        options: [
            "Kinh tế - sản xuất",
            "Văn hóa – xã hội",
            "Chính trị - tư tưởng",
            "Quốc phòng – an ninh"
        ],
        answer: 1 // B
    },
    {
        id: 3,
        question: "Thời kỳ đầu, công nhân xưởng may A làm việc với năng suất thấp, may ra những chiếc áo thường xuyên bị lỗi. Nhờ sự tận tình tạo điều kiện của công ty cho công nhân trau dồi kỹ năng nghề nghiệp, chỉ sau 3 tháng, công nhân đã làm ra sản phẩm không những nhiều mà còn đẹp. Điều này thể hiện chức năng gì của giáo dục?",
        options: [
            "Kinh tế - sản xuất",
            "Quốc phòng – an ninh",
            "Văn hóa – xã hội",
            "Chính trị - tư tưởng"
        ],
        answer: 0 // A
    },
    {
        id: 4,
        question: "“Dân trí” được hiểu là gì?",
        options: [
            "Trình độ thành thạo kĩ năng, trình độ văn hóa của người dân trong từng thời kỳ lịch sử nhất định.",
            "Trình độ hiểu biết, trình độ thẩm thấu của người dân trong từng thời kỳ lịch sử nhất định.",
            "Trình độ hiểu biết, trình độ văn hóa của người dân trong các thời kỳ lịch sử.",
            "Trình độ hiểu biết, trình độ văn hóa của người dân trong từng thời kỳ lịch sử nhất định."
        ],
        answer: 3 // D
    },
    {
        id: 5,
        question: "Đâu KHÔNG PHẢI là một trong những năng lực thuộc nhóm năng lực tìm hiểu và nắm vững đặc điểm học sinh?",
        options: [
            "Xác định cách thức để tìm hiểu, nắm vững học sinh",
            "Xác định mục tiêu tìm hiểu học sinh",
            "Lập kế hoạch cụ thể để tìm hiểu học sinh",
            "Xác định nội dung tìm hiểu học sinh"
        ],
        answer: 1 // B
    },
    {
        id: 6,
        question: "Theo Thông tư số 32/2018/TT-BGDĐT (2018), Chương trình giáo dục phổ thông hướng tới việc giúp học sinh vận dụng thực tiễn và xây dựng quá trình nào ở học sinh?",
        options: [
            "Tự học suốt đời",
            "Tự học tăng cường",
            "Tự học theo năng lực",
            "Tự học có định hướng"
        ],
        answer: 0 // A
    },
    {
        id: 7,
        question: "Thời kỳ Bắc thuộc, chế độ bóc lột phương Bắc ép dân ta phải học chữ Hán, nội dung chương trình học và các sách báo dạy chữ Hán được đưa vào trong đời sống người Việt. Điều này thể hiện tính chất gì của giáo dục?",
        options: [
            "Tính giai cấp",
            "Tính phổ biến và vĩnh hằng",
            "Tính xã hội - lịch sử",
            "Tính nhân văn"
        ],
        answer: 0 // A
    },
    {
        id: 8,
        question: "Cấp học nào có tỷ trọng mạch nội dung “Hoạt động hướng nghiệp” trong chương trình hoạt động trải nghiệm, hướng nghiệp (2018) cao nhất?",
        options: [
            "Tiểu học",
            "Trung học phổ thông",
            "Trung học cơ sở",
            "Mầm non"
        ],
        answer: 1 // B
    },
    {
        id: 9,
        question: "Theo nhà thơ Ấn Độ Tagore: “… Giáo dục một người thầy được cả một _____.”. Hãy điền vào chỗ trống.",
        options: [
            "Gia đình",
            "Người đàn ông",
            "Xã hội",
            "Người đàn bà"
        ],
        answer: 2 // C
    },
    {
        id: 10,
        question: "Trong một tập thể học sinh, thỉnh thoảng sẽ có các học sinh không tuân theo kỷ luật của lớp học. Ta gọi đây là nhóm học sinh như thế nào?",
        options: [
            "Cá biệt",
            "Thụ động",
            "Tích cực",
            "Mâu thuẫn"
        ],
        answer: 0 // A
    },
    {
        id: 11,
        question: "Điều vào chỗ trống trong câu sau: “Nền giáo dục xã hội chủ nghĩa của Việt Nam là nền dân chủ mang tính _______, tính _______ sâu sắc.”",
        options: [
            "dân tộc – dân chủ",
            "nhân dân – nhân đạo",
            "dân chủ - nhân dân",
            "dân chủ - nhân đạo"
        ],
        answer: 3 // D
    },
    {
        id: 12,
        question: "Hình thức hoạt động giáo dục theo chủ đề trong việc tổ chức hoạt động trải nghiệm được tổ chức thành 2 dạng:",
        options: [
            "học kỳ - năm học",
            "tuần – tháng",
            "thường xuyên – định kỳ",
            "quý – năm học"
        ],
        answer: 2 // C
    },
    {
        id: 13,
        question: "Bản chất chung của giáo dục là:",
        options: [
            "Quá trình xã hội hóa nội dung giảng dạy",
            "Quá trình xã hội hóa con người",
            "Quá trình xã hội hóa giáo dục",
            "Quá trình xã hội hóa thói quen đời sống"
        ],
        answer: 1 // B
    },
    {
        id: 14,
        question: "Đâu KHÔNG PHẢI là mục đích giáo dục trên bình diện xã hội?",
        options: [
            "Nâng cao dân trí",
            "Giáo dục phẩm chất",
            "Đào tạo nhân lực",
            "Bồi dưỡng nhân tài"
        ],
        answer: 1 // B
    },
    {
        id: 15,
        question: "Trong những cách phân công đội ngũ cán bộ lớp, phương án nào sau đây có phần dân chủ hơn các phương án còn lại?",
        options: [
            "Dựa trên kết quả học tập của ứng cử viên",
            "Dựa trên kết quả bầu chọn của tất cả các học sinh trong lớp học",
            "Dựa trên quyết định chủ quan của giáo viên chủ nhiệm",
            "Dựa trên ý kiến từ phía phụ huynh học sinh"
        ],
        answer: 1 // B
    },
    {
        id: 16,
        question: "“Tổ chức trò chơi” là một hình thức có thể tổ chức trong hoạt động nào sau đây thuộc Chương trình hoạt động trải nghiệm, hướng nghiệp (2018)?",
        options: [
            "Hoạt động thực hành",
            "Hoạt động kết nối kinh nghiệm",
            "Hoạt động khám phá",
            "Hoạt động đánh giá"
        ],
        answer: 1 // B
    },
    {
        id: 17,
        question: "Cụm từ nào sau đây miêu tả rõ nhất vai trò, trọng trách của giáo viên?",
        options: [
            "“Dũng sĩ áo trắng”",
            "“Sợi dây chuyền giữa các thế hệ”",
            "“Bàn tay thầm lặng”",
            "“Người bảo vệ công lý”"
        ],
        answer: 1 // B
    },
    {
        id: 18,
        question: "Đâu là mục tiêu của chương trình Hoạt động trải nghiệm, hướng nghiệp 2018 đối với cấp THCS?",
        options: [
            "Hình thành các giá trị của cá nhân theo chuẩn mực chung của xã hội.",
            "Thích ứng với những thay đổi của xã hội hiện đại.",
            "Hình thành những hành vi giao tiếp, ứng xử có văn hóa.",
            "Xây dựng được kế hoạch rèn luyện đáp ứng yêu cầu nghề nghiệp và trở thành người công dân có ích."
        ],
        answer: 0 // A
    },
    {
        id: 19,
        question: "Mục tiêu đổi mới được Nghị quyết số 88/2013/QH13 ngày 28 tháng 11 năm 2014 quy định có đoạn: “… góp phần chuyển nền giáo dục nặng về _______ sang nền giáo dục phát triển toàn diện…”. Hãy điền vào chỗ trống trong đoạn trích trên.",
        options: [
            "Lý thuyết giáo điều",
            "Xây dựng bài học",
            "Thực hành tích hợp",
            "Truyền thụ kiến thức"
        ],
        answer: 3 // D
    },
    {
        id: 20,
        question: "Sản phẩm của hoạt động sư phạm là gì?",
        options: [
            "Sự tái tạo tri thức có mục đích của học sinh",
            "Nhân cách toàn diện của người học",
            "Bài học gắn với chủ đề môn học",
            "Thái độ, tình cảm tích cực của học sinh"
        ],
        answer: 1 // B
    },
    {
        id: 21,
        question: "Hãy hoàn thành nhận định sau của Hồ Chí Minh: “Người thầy giáo tốt là những ____”.",
        options: [
            "anh hùng áo vải",
            "người lính vẻ vang",
            "chiến sĩ mặt trận",
            "anh hùng vô danh"
        ],
        answer: 3 // D
    },
    {
        id: 22,
        question: "Đâu là một trong những thành tố của môi trường giáo dục an toàn?",
        options: [
            "Môi trường tinh thần",
            "Môi trường văn hóa – xã hội",
            "Môi trường tâm lý – xã hội",
            "Môi trường tâm lý – giáo dục"
        ],
        answer: 2 // C
    },
    {
        id: 23,
        question: "Hội đồng thi đua khen thưởng được thành lập vào thời gian nào ở trường phổ thông?",
        options: [
            "Đầu năm học",
            "Giữa năm học",
            "Cuối năm học",
            "Không có thời gian cụ thể"
        ],
        answer: 0 // A
    },
    {
        id: 24,
        question: "Học sinh trong thời đại công nghệ 4.0 ngoài việc nghe những lời dạy của cha mẹ, thầy cô thì cũng dễ tiếp xúc với những tư tưởng, quan điểm tích cực hoặc sai trái trên mạng xã hội, Internet. Điều này phản ánh rõ nhất đặc điểm gì trong hoạt động giáo dục?",
        options: [
            "Tính mục đích",
            "Tính lâu dài",
            "Tính thống nhất biện chứng",
            "Tính phức hợp"
        ],
        answer: 3 // D
    },
    {
        id: 25,
        question: "Mối quan hệ giữa mục đích và mục tiêu giáo dục là gì?",
        options: [
            "Giao nhau",
            "Bao hàm",
            "Đối chọi",
            "Mâu thuẫn"
        ],
        answer: 1 // B
    },
    {
        id: 26,
        question: "Người giáo viên trong quá trình tổ chức hoạt động sư phạm cần phải nắm được kiến thức về tâm lý và giáo dục có hệ thống. Điều này phản ánh tính chất gì trong hoạt động sư phạm của giáo viên?",
        options: [
            "Tính nghệ thuật",
            "Tính khoa học",
            "Tính sáng tạo",
            "Tính độc lập"
        ],
        answer: 1 // B
    },
    {
        id: 27,
        question: "Nội dung nào sau đây là một trong những thành tố của nguyên lí giáo dục của Việt Nam?",
        options: [
            "Nội dung dạy học gắn liền với nhu cầu người học",
            "Gắn tính tích cực chủ động của người học và tính chủ đạo của nhà giáo dục",
            "Lí luận gắn liền với thực tiễn",
            "Đổi mới giáo dục gắn liền với đổi mới cách thức kiểm tra, đánh giá"
        ],
        answer: 2 // C
    },
    {
        id: 28,
        question: "Mối quan hệ giữa nhà giáo dục và người học trong hoạt động giáo dục mang tính chất nào dưới đây?",
        options: [
            "Hoàn toàn độc lập",
            "Tương đối ổn định",
            "Liên kết đa lĩnh vực",
            "Tương tác biện chứng"
        ],
        answer: 3 // D
    },
    {
        id: 29,
        question: "Theo điều 20, Thông tư 27/2020/TT-BGDĐT về đánh giá học sinh THCS và THPT, giáo viên chủ nhiệm cần thực hiện công việc nào sau đây đối với học sinh?",
        options: [
            "Đánh giá kết quả rèn luyện theo quyết định của tổ bộ môn",
            "Đánh giá kết quả rèn luyện mỗi ngày",
            "Đánh giá kết quả rèn luyện trên giấy",
            "Đánh giá kết quả rèn luyện từng học kỳ và cả năm học"
        ],
        answer: 3 // D
    },
    {
        id: 30,
        question: "Đâu là chức năng đặc trưng của người giáo viên chủ nhiệm?",
        options: [
            "Giáo viên chủ nhiệm là người tổ chức, phối hợp với các lực lượng giáo dục ngoài nhà trường",
            "Giáo viên chủ nhiệm là cố vấn cho các hoạt động tự quản của tập thể học sinh",
            "Giáo viên chủ nhiệm là cầu nối giữa tập thể học sinh với các lực lượng giáo dục trong nhà trường.",
            "Giáo viên chủ nhiệm là người quản lý – giáo dục toàn diện học sinh một lớp học."
        ],
        answer: 2 // C
    },
    {
        id: 31,
        question: "Lớp 10/5 có một số học sinh chưa hòa nhập với lớp học đầu năm học, mục tiêu nào sau đây KHÔNG góp phần khắc phục, hạn chế bớt thách thức trên?",
        options: [
            "Đảm bảo 100% học sinh tham gia hoạt động sinh hoạt tập thể tại lớp học trong tháng 12.",
            "Đảm bảo 100% học sinh phát biểu ít nhất 1 lần trong tiết học.",
            "Đảm bảo 100% học sinh có tinh thần tham gia làm việc nhóm trong các hoạt động giáo dục do giáo viên tổ chức.",
            "Đảm bảo 100% học sinh tích cực giao tiếp, trao đổi trong tiết sinh hoạt lớp."
        ],
        answer: 1 // B
    },
    {
        id: 32,
        question: "Phương pháp nào sau đây thuộc hình thức thể nghiệm, tương tác?",
        options: [
            "Phương pháp tổ chức hoạt động tình nguyện",
            "Phương pháp tổ chức diễn đàn, giao lưu",
            "Phương pháp tổ chức tham quan",
            "Phương pháp tổ chức lao động công ích"
        ],
        answer: 1 // B
    },
    {
        id: 33,
        question: "Đâu KHÔNG PHẢI là một thành tố trong mạch nội dung “Hoạt động hướng nghiệp” (CT 2018)?",
        options: [
            "Hoạt động lựa chọn hướng nghề nghiệp và lập kế hoạch học tập theo định hướng nghề nghiệp",
            "Hoạt động tìm hiểu về nghề nghiệp",
            "Hoạt động khám phá bản thân",
            "Hoạt động rèn luyện phẩm chất, năng lực phù hợp với định hướng nghề nghiệp"
        ],
        answer: 2 // C
    },
    {
        id: 34,
        question: "Ý nào sau đây là mục tiêu ngắn hạn để tập thể học sinh có thể phát triển?",
        options: [
            "Tổ chức thực địa môn học",
            "Tổ chức cắm trại cho lớp học vào cuối năm",
            "Hoàn thành bài tập về nhà môn Vật Lý",
            "Thi tốt nghiệp THPT quốc gia"
        ],
        answer: 2 // C
    },
    {
        id: 35,
        question: "Cô B là Giáo viên chủ nhiệm của lớp 11A5. Khi nhà trường thông báo về vấn đề đóng học phí cho học kỳ sắp tới, cô chủ động thông báo cho học sinh ngay lập tức. Điều này thể hiện rằng người giáo viên đã:",
        options: [
            "bác bỏ chủ trương của nhà trường",
            "đề xuất các nguyện vọng của học sinh về học phí đến Ban giám hiệu",
            "lắng nghe học sinh",
            "truyền đạt chủ trương của nhà trường cho học sinh"
        ],
        answer: 3 // D
    },
    {
        id: 36,
        question: "“Sư phạm” được hiểu theo nghĩa thông thường là:",
        options: [
            "Người định hướng chiến lược phát triển nhân cách của học sinh.",
            "Người soi đường cho con đường học tập của học sinh.",
            "Người thầy khuôn phép, mẫu mực, tấm gương sáng.",
            "Người chuyển giao của thế hệ"
        ],
        answer: 2 // C
    },
    {
        id: 37,
        question: "Khi thiết kế một bài dạy về chủ đề “Bạo lực học đường”, cô A đã ghi rõ những phẩm chất và năng lực mà cô nghĩ học sinh cần đáp ứng. Điều này phản ánh rõ nhất tính chất gì trong hoạt động giáo dục?",
        options: [
            "Tính lâu dài",
            "Tính cá biệt",
            "Tính thống nhất biện chứng",
            "Tính mục đích"
        ],
        answer: 3 // D
    },
    {
        id: 38,
        question: "Hành vi nào sau đây KHÔNG PHẢI là hành vi kiến tạo môi trường giáo dục an toàn?",
        options: [
            "Trang trí lớp học được chú trọng mỗi tháng",
            "Thường xuyên kiểm tra chất lượng bàn ghế",
            "Xây dựng bầu không khí vui tươi",
            "Bắt học sinh uống nước giẻ lau bảng"
        ],
        answer: 3 // D
    },
    {
        id: 39,
        question: "Hoạt động của học sinh có tính chất nào trong việc thực hiện hoạt động giáo dục?",
        options: [
            "Chủ động, tự giác",
            "Thụ động, tự vấn",
            "Chăm chỉ, kiên trì",
            "Chủ động, an toàn"
        ],
        answer: 0 // A
    },
    {
        id: 40,
        question: "Đâu không phải là một thành tố thuộc nhóm năng lực hoạt động xã hội của người giáo viên?",
        options: [
            "Tự bồi dưỡng chuyên môn",
            "Phối hợp với các lực lượng giáo dục",
            "Giao tiếp, tham vấn, hỗ trợ học sinh",
            "Xử lí tình huống giáo dục"
        ],
        answer: 0 // A
    },
    {
        id: 41,
        question: "Nội dung hoạt động trải nghiệm được tiến hành theo:",
        options: [
            "quyết định của ban giám hiệu",
            "mạch nội dung",
            "định hướng của tổ chuyên môn",
            "chủ điểm từng tháng"
        ],
        answer: 1 // B
    },
    {
        id: 42,
        question: "Công cụ đánh giá kết quả hoạt động trải nghiệm, hướng nghiệp nào sau đây KHÔNG thuộc phương pháp đánh giá sản phẩm của học sinh?",
        options: [
            "Bảng khảo sát",
            "Thang đánh giá",
            "Bảng kiểm",
            "Phiếu đánh giá"
        ],
        answer: 0 // A
    },
    {
        id: 43,
        question: "Năng lực nghề nghiệp của giáo viên phổ thông là gì?",
        options: [
            "khả năng hoàn thành công việc, nhiệm vụ dạy học, giáo dục được hình thành và phát triển trên cơ sở vận dụng hệ thống kiến thức và kỹ năng sư phạm cần thiết.",
            "khả năng thực hiện công việc, nhiệm vụ dạy học, giáo dục được hình thành và phát triển trên cơ sở vận dụng hệ thống kiến thức và kỹ năng đời sống cần thiết.",
            "khả năng thực hiện công việc, nhiệm vụ giáo dục được hình thành và phát triển trên cơ sở vận dụng hệ thống kiến thức và kỹ năng sư phạm cần thiết.",
            "khả năng thực hiện công việc, nhiệm vụ dạy học, giáo dục được hình thành và phát triển trên cơ sở vận dụng hệ thống kiến thức và kỹ năng sư phạm cần thiết."
        ],
        answer: 3 // D
    },
    {
        id: 44,
        question: "Hoạt động trải nghiệm, hướng nghiệp được tổ chức bao nhiêu tiết trong một năm học?",
        options: [
            "35 tiết",
            "140 tiết",
            "105 tiết",
            "70 tiết"
        ],
        answer: 2 // C
    },
    {
        id: 45,
        question: "Theo số liệu thống kê, chất lượng việc làm của Việt Nam hiện nay như thế nào?",
        options: [
            "Thấp",
            "Có bước tiến triển",
            "Tương đối ổn định",
            "Chất lượng cao"
        ],
        answer: 2 // C
    },
    {
        id: 46,
        question: "Công cụ đánh giá kết quả hoạt động trải nghiệm, hướng nghiệp nào sau đây thuộc phương pháp trao đổi ý kiến của các bên liên quan?",
        options: [
            "Bảng khảo sát",
            "Thang đo",
            "Hồ sơ học tập",
            "Phiếu đánh giá theo tiêu chí"
        ],
        answer: 1 // B
    },
    {
        id: 47,
        question: "Cấp học nào trong giáo dục phổ thông giúp học sinh “có những hiểu biết ban đầu vể kỹ thuật và hướng nghiệp.”",
        options: [
            "Đại học",
            "Trung học phổ thông",
            "Trung học cơ sở",
            "Tiểu học"
        ],
        answer: 2 // C
    },
    {
        id: 48,
        question: "Điền từ thích hợp vào câu sau: “_________ thực hiện và chịu trách nhiệm trước hiệu trưởng về nhiệm vụ được hiệu trưởng được phân công, cùng với hiệu trưởng chịu trách nhiệm trước cấp trên về phần việc được giao.”",
        options: [
            "Phó Hiệu trưởng",
            "Tổ trưởng tổ chuyên môn",
            "Tổ trưởng tổ văn phòng",
            "Chủ tịch Hội đồng trường"
        ],
        answer: 0 // A
    },
    {
        id: 49,
        question: "Để hình thành và phát triển toàn diện của nhân cách của học sinh, họ cần được rèn luyện thông qua con đường chủ đạo, trọng yếu nào sau đây?",
        options: [
            "Giáo dục theo phương thức nhà trường",
            "Giáo dục đạo đức",
            "Giáo dục đời sống",
            "Giáo dục gia đình"
        ],
        answer: 0 // A
    },
    {
        id: 50,
        question: "Để trở thành một người quản lí – giáo dục toàn diện cho một lớp học, người giáo viên chủ nhiệm cần phải thực hiện điều gì?",
        options: [
            "Trau dồi một trái tim chân thành nhưng thiếu nhiệt huyết.",
            "Đảm bảo tính biện chứng giữa hoạt động truyền đạt và hoạt động quản lí.",
            "Dẫn dắt tập thể học sinh một cách bất định.",
            "Lựa chọn phương pháp quản lí – giáo dục tương thích với mỗi tập thể học sinh."
        ],
        answer: 1 // B
    },
    {
        id: 51,
        question: "Đâu là nhiệm vụ chung của giáo viên theo Luật Giáo dục 2019?",
        options: [
            "Tổ chức các hoạt động dạy học, giáo dục theo kế hoạch.",
            "Gương mẫu thực hiện nghĩa vụ công dân, các quy định của pháp luật và điều lệ nhà trường.",
            "Tham gia công tác phổ cập giáo dục THCS, THPT ở địa phương.",
            "Phối hợp với các tổ chức để tổ chức hoạt động giáo dục."
        ],
        answer: 1 // B
    },
    {
        id: 52,
        question: "Nhiệm vụ nào sau đây không phải là nhiệm vụ chung của giáo viên?",
        options: [
            "Giáo dục, giảng dạy theo mục tiêu, nguyên lí giáo dục.",
            "Giữ gìn phẩm chất, uy tín, danh dự của nhà giáo.",
            "Tham gia tập huấn, bồi dưỡng chuyên môn, nghiệp vụ.",
            "Không ngừng học tập, rèn luyện để nâng cao trình độ."
        ],
        answer: 2 // C
    },
    {
        id: 53,
        question: "Giáo viên THCS, THPT có nhiệm vụ đặc biệt nào so với giáo viên khác?",
        options: [
            "Tổ chức các hoạt động dạy học, giáo dục theo kế hoạch giáo dục của nhà trường và kế hoạch giáo dục của tổ chuyên môn.",
            "Gương mẫu thực hiện nghĩa vụ công dân, các quy định của pháp luật và điều lệ nhà trường.",
            "Giữ gìn phẩm chất, uy tín, danh dự của nhà giáo.",
            "Không ngừng học tập, rèn luyện để nâng cao trình độ."
        ],
        answer: 0 // A
    },
    {
        id: 54,
        question: "Đâu là một trong những nhiệm vụ của giáo viên THCS, THPT?",
        options: [
            "Tham gia công tác phổ cập giáo dục THCS, THPT ở địa phương.",
            "Giáo dục, giảng dạy theo mục tiêu, nguyên lí giáo dục.",
            "Giữ gìn phẩm chất, uy tín, danh dự của nhà giáo.",
            "Không ngừng học tập, rèn luyện để nâng cao trình độ."
        ],
        answer: 0 // A
    },
    {
        id: 55,
        question: "Giáo viên có được phép đối xử bất công với người học không?",
        options: [
            "Có",
            "Không"
        ],
        answer: 1 // B
    },
    {
        id: 56,
        question: "Giáo viên có trách nhiệm gì đối với việc nâng cao trình độ chuyên môn, nghiệp vụ?",
        options: [
            "Không ngừng học tập, rèn luyện để nâng cao trình độ.",
            "Chỉ cần hoàn thành chương trình đào tạo ban đầu.",
            "Không cần thiết phải tham gia tập huấn, bồi dưỡng.",
            "Tùy thuộc vào ý muốn cá nhân."
        ],
        answer: 0 // A
    },
    {
        id: 57,
        question: "Giáo viên có nhiệm vụ phối hợp với tổ chức nào để tổ chức hoạt động giáo dục?",
        options: [
            "Đội Thiếu niên Tiền phong Hồ Chí Minh, Đoàn Thanh niên Cộng sản Hồ Chí Minh, Hội Liên hiệp Thanh niên Việt Nam.",
            "Hội Phụ huynh học sinh.",
            "Ủy ban nhân dân địa phương.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 58,
        question: "Giáo viên có cần thiết phải tham gia tập huấn, bồi dưỡng chuyên môn, nghiệp vụ không?",
        options: [
            "Có",
            "Không"
        ],
        answer: 0 // A
    },
    {
        id: 59,
        question: "Giáo viên có trách nhiệm gì đối với sức khỏe của bản thân?",
        options: [
            "Học tập rèn luyện để nâng cao sức khỏe.",
            "Chỉ cần đảm bảo không bị bệnh nghiêm trọng.",
            "Không cần thiết phải quan tâm đến sức khỏe cá nhân.",
            "Tùy thuộc vào thể trạng từng người."
        ],
        answer: 0 // A
    },
    {
        id: 60,
        question: "Ngoài các nhiệm vụ đã nêu, giáo viên còn có nhiệm vụ nào khác không?",
        options: [
            "Không có nhiệm vụ nào khác.",
            "Các nhiệm vụ khác theo quy định của pháp luật.",
            "Chỉ có các nhiệm vụ được quy định trong Luật Giáo dục 2019.",
            "Tùy thuộc vào yêu cầu của từng trường học."
        ],
        answer: 1 // B
    },
    {
        id: 61,
        question: "Đâu là quyền hạn chung của giáo viên theo Luật Giáo dục 2019?",
        options: [
            "Được tự chủ thực hiện nhiệm vụ chuyên môn.",
            "Được đào tạo nâng cao trình độ, bồi dưỡng chuyên môn, nghiệp vụ.",
            "Được thay đổi chức danh nghề nghiệp.",
            "Được hưởng các quyền lợi về vật chất và tinh thần theo quy định."
        ],
        answer: 1 // B
    },
    {
        id: 62,
        question: "Quyền hạn nào sau đây không phải là quyền hạn chung của giáo viên?",
        options: [
            "Được giảng dạy theo chuyên ngành đào tạo.",
            "Được bảo vệ nhân phẩm, danh dự.",
            "Được hưởng lương, chế độ phụ cấp, chính sách ưu đãi (nếu có) theo quy định.",
            "Được nghỉ hè, nghỉ Tết âm lịch, nghỉ học kì theo quy định."
        ],
        answer: 2 // C
    },
    {
        id: 63,
        question: "Giáo viên THCS, THPT có quyền hạn đặc biệt nào so với giáo viên khác?",
        options: [
            "Được tự chủ thực hiện nhiệm vụ chuyên môn.",
            "Được giảng dạy theo chuyên ngành đào tạo.",
            "Được đào tạo nâng cao trình độ, bồi dưỡng chuyên môn, nghiệp vụ.",
            "Được bảo vệ nhân phẩm, danh dự."
        ],
        answer: 0 // A
    },
    {
        id: 64,
        question: "Đâu là một trong những quyền hạn của giáo viên THCS, THPT?",
        options: [
            "Được thay đổi chức danh nghề nghiệp.",
            "Được nghỉ hè, nghỉ Tết âm lịch, nghỉ học kì theo quy định.",
            "Được bảo vệ nhân phẩm, danh dự.",
            "Được giảng dạy theo chuyên ngành đào tạo."
        ],
        answer: 0 // A
    },
    {
        id: 65,
        question: "Giáo viên có được phép hợp đồng thỉnh giảng và nghiên cứu khoa học không?",
        options: [
            "Không",
            "Có, với điều kiện đảm bảo thực hiện đầy đủ nhiệm vụ nơi mình công tác."
        ],
        answer: 1 // B
    },
    {
        id: 66,
        question: "Giáo viên có quyền được nghỉ hè không?",
        options: [
            "Không",
            "Có, theo quy định của Bộ trưởng Bộ Giáo dục và Đào tạo và các ngày nghỉ khác theo quy định của Bộ luật Lao động."
        ],
        answer: 1 // B
    },
    {
        id: 67,
        question: "Giáo viên có quyền được bảo vệ nhân phẩm, danh dự không?",
        options: [
            "Không",
            "Có"
        ],
        answer: 1 // B
    },
    {
        id: 68,
        question: "Giáo viên THCS, THPT có được hưởng lương, chế độ phụ cấp, chính sách ưu đãi không?",
        options: [
            "Không",
            "Có, theo quy định."
        ],
        answer: 1 // B
    },
    {
        id: 69,
        question: "Giáo viên THCS, THPT có được học tập, bồi dưỡng nâng cao trình độ chính trị, chuyên môn, nghiệp vụ không?",
        options: [
            "Không",
            "Có, và được hưởng nguyên lương."
        ],
        answer: 1 // B
    },
    {
        id: 70,
        question: "Ngoài các quyền đã nêu, giáo viên còn có quyền nào khác không?",
        options: [
            "Không có quyền nào khác.",
            "Các quyền khác theo quy định của pháp luật.",
            "Chỉ có các quyền được quy định trong Luật Giáo dục 2019.",
            "Tùy thuộc vào yêu cầu của từng trường học."
        ],
        answer: 1 // B
    },
    {
        id: 71,
        question: "Cô Lan, giáo viên môn Toán, luôn tìm tòi các phương pháp giảng dạy mới, sử dụng hình ảnh trực quan sinh động để giúp học sinh dễ hiểu bài hơn. Điều này thể hiện rõ nét tính nào trong hoạt động sư phạm của cô?",
        options: [
            "Tính khoa học",
            "Tính nghệ thuật",
            "Tính sáng tạo",
            "Cả ba đáp án trên"
        ],
        answer: 2 // C
    },
    {
        id: 72,
        question: "Trong một buổi học, thầy Nam nhận thấy một học sinh có biểu hiện buồn bã, không tập trung. Thầy đã nhẹ nhàng hỏi han, tìm hiểu nguyên nhân và có biện pháp hỗ trợ kịp thời. Hành động này của thầy thể hiện điều gì?",
        options: [
            "Tính khoa học",
            "Tính nghệ thuật",
            "Tính sáng tạo",
            "Cả ba đáp án trên"
        ],
        answer: 1 // B
    },
    {
        id: 73,
        question: "Để chuẩn bị cho bài giảng về lịch sử Việt Nam, cô Hoa đã dày công nghiên cứu tài liệu, tìm kiếm thông tin mới nhất và thiết kế bài giảng một cách logic, khoa học. Điều này thể hiện rõ nhất tính nào trong hoạt động sư phạm của cô?",
        options: [
            "Tính khoa học",
            "Tính nghệ thuật",
            "Tính sáng tạo",
            "Cả ba đáp án trên"
        ],
        answer: 0 // A
    },
    {
        id: 74,
        question: "Thầy Bình, giáo viên môn Ngữ Văn, thường xuyên tổ chức các hoạt động thảo luận nhóm, đóng vai để học sinh được tự do thể hiện ý kiến, phát triển tư duy sáng tạo. Đây là biểu hiện của tính nào trong hoạt động sư phạm?",
        options: [
            "Tính khoa học",
            "Tính nghệ thuật",
            "Tính sáng tạo",
            "Cả ba đáp án trên"
        ],
        answer: 2 // C
    },
    {
        id: 75,
        question: "Trong quá trình giảng dạy, cô Mai nhận thấy một số học sinh gặp khó khăn trong việc tiếp thu kiến thức. Cô đã kiên nhẫn tìm hiểu, đưa ra các phương pháp hỗ trợ phù hợp với từng đối tượng. Điều này thể hiện điều gì?",
        options: [
            "Tính khoa học",
            "Tính nghệ thuật",
            "Tính sáng tạo",
            "Cả ba đáp án trên"
        ],
        answer: 1 // B
    },
    {
        id: 76,
        question: "Để giúp học sinh hiểu rõ hơn về các tác phẩm văn học, thầy Tùng thường xuyên tổ chức các buổi ngoại khóa, đưa học sinh đến tham quan bảo tàng, di tích lịch sử. Đây là một ví dụ về tính nào trong hoạt động sư phạm?",
        options: [
            "Tính khoa học",
            "Tính nghệ thuật",
            "Tính sáng tạo",
            "Cả ba đáp án trên"
        ],
        answer: 2 // C
    },
    {
        id: 77,
        question: "Cô Hà, giáo viên mầm non, luôn tạo ra không khí học tập vui vẻ, thân thiện, khuyến khích trẻ tự do khám phá, tìm hiểu thế giới xung quanh. Điều này thể hiện rõ nét tính nào trong hoạt động sư phạm của cô?",
        options: [
            "Tính khoa học",
            "Tính nghệ thuật",
            "Tính sáng tạo",
            "Cả ba đáp án trên"
        ],
        answer: 1 // B
    },
    {
        id: 78,
        question: "Trong một buổi sinh hoạt lớp, thầy Hùng đã tổ chức trò chơi \"Giải mã ô chữ\" để giúp học sinh ôn lại kiến thức đã học một cách thú vị. Đây là một ví dụ về tính nào trong hoạt động sư phạm?",
        options: [
            "Tính khoa học",
            "Tính nghệ thuật",
            "Tính sáng tạo",
            "Cả ba đáp án trên"
        ],
        answer: 2 // C
    },
    {
        id: 79,
        question: "Để đánh giá năng lực học sinh một cách toàn diện, cô Phương đã kết hợp nhiều hình thức kiểm tra, đánh giá khác nhau, như kiểm tra trắc nghiệm, tự luận, thuyết trình, làm dự án. Điều này thể hiện điều gì?",
        options: [
            "Tính khoa học",
            "Tính nghệ thuật",
            "Tính sáng tạo",
            "Cả ba đáp án trên"
        ],
        answer: 0 // A
    },
    {
        id: 80,
        question: "Thầy Long, giáo viên thể dục, luôn tìm tòi các bài tập mới, sáng tạo để giúp học sinh phát triển toàn diện về thể chất và tinh thần. Đây là biểu hiện của tính nào trong hoạt động sư phạm?",
        options: [
            "Tính khoa học",
            "Tính nghệ thuật",
            "Tính sáng tạo",
            "Cả ba đáp án trên"
        ],
        answer: 2 // C
    },
    {
        id: 81,
        question: "Năng lực nghề nghiệp của người giáo viên phổ thông được định nghĩa là gì?",
        options: [
            "Khả năng thực hiện các hoạt động vui chơi, giải trí cho học sinh.",
            "Khả năng thực hiện công việc, nhiệm vụ dạy học, giáo dục được hình thành và phát triển trên cơ sở vận dụng hệ thống kiến thức và kỹ năng sư phạm cần thiết.",
            "Khả năng quản lý lớp học và duy trì kỷ luật.",
            "Khả năng giao tiếp tốt với phụ huynh học sinh."
        ],
        answer: 1 // B
    },
    {
        id: 82,
        question: "Nhóm năng lực nào sau đây không thuộc năng lực nghề nghiệp của giáo viên phổ thông?",
        options: [
            "Năng lực tìm hiểu và nắm vững đặc điểm học sinh.",
            "Năng lực tổ chức các hoạt động ngoại khóa.",
            "Năng lực tổ chức dạy học và giáo dục học sinh.",
            "Năng lực nghiên cứu khoa học sư phạm ứng dụng."
        ],
        answer: 1 // B
    },
    {
        id: 83,
        question: "Mục đích của việc tìm hiểu và nắm vững đặc điểm học sinh là gì?",
        options: [
            "Để giáo viên có cái nhìn tổng quan về học sinh.",
            "Để giáo viên có thể áp dụng các phương pháp dạy học phù hợp.",
            "Để giáo viên có thể hỗ trợ và giúp đỡ học sinh một cách tốt nhất.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 84,
        question: "Đâu là một trong những cách thức để tìm hiểu, nắm vững học sinh?",
        options: [
            "Quan sát thái độ và hành vi của học sinh.",
            "Trao đổi trực tiếp với học sinh.",
            "Giao tiếp và trao đổi với phụ huynh.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 85,
        question: "Vì sao giáo viên cần lập kế hoạch cụ thể để tìm hiểu học sinh?",
        options: [
            "Để tránh gây ra cảm giác khó chịu cho học sinh.",
            "Để đảm bảo việc tìm hiểu học sinh diễn ra một cách hiệu quả.",
            "Để xây dựng mối quan hệ tốt đẹp với học sinh.",
            "Tất cả các đáp án trên."
        ],
        answer: 1 // B
    },
    {
        id: 86,
        question: "Kỹ năng nào sau đây giúp giáo viên có cái nhìn đa chiều khi xem xét, đánh giá về một học sinh?",
        options: [
            "Kỹ năng thu thập và xử lý thông tin học sinh.",
            "Kỹ năng giao tiếp sư phạm.",
            "Kỹ năng tổ chức hoạt động dạy học.",
            "Kỹ năng nghiên cứu khoa học."
        ],
        answer: 0 // A
    },
    {
        id: 87,
        question: "Trong nhóm năng lực tổ chức dạy học và giáo dục, yếu tố nào sau đây là quan trọng nhất?",
        options: [
            "Thiết kế kế hoạch dạy học và giáo dục học sinh.",
            "Tổ chức hoạt động dạy học và giáo dục học sinh theo kế hoạch.",
            "Đánh giá kết quả dạy học và giáo dục học sinh.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 88,
        question: "Mục tiêu của việc thiết kế kế hoạch dạy học và giáo dục là gì?",
        options: [
            "Xác định được nội dung cho buổi học.",
            "Đảm bảo tiến độ học tập và kiểm tra.",
            "Tạo ra một môi trường học tập tốt hơn.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 89,
        question: "Đâu là một trong những yêu cầu của kế hoạch dạy học và giáo dục?",
        options: [
            "Giúp học sinh làm chủ kiến thức phổ thông.",
            "Giúp học sinh hình thành nền móng cho sự phát triển toàn diện về nhân cách.",
            "Giúp học sinh tự điều chỉnh hành vi và hoàn thiện phẩm chất, năng lực.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 90,
        question: "Mô hình tổ chức hoạt động dạy học và giáo dục bao gồm những hoạt động nào?",
        options: [
            "Hoạt động khởi động.",
            "Hoạt động hình thành kiến thức.",
            "Hoạt động luyện tập.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 91,
        question: "Mục đích của việc đánh giá kết quả dạy học và giáo dục là gì?",
        options: [
            "Xác định mức độ hoàn thành nhiệm vụ rèn luyện của học sinh.",
            "Cung cấp thông tin chính xác, kịp thời cho phụ huynh và các bên liên quan.",
            "Giúp các tổ chức xã hội nắm bắt thông tin chính xác về tình hình giáo dục.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 92,
        question: "Hình thức đánh giá nào sau đây được sử dụng phổ biến trong giáo dục?",
        options: [
            "Đánh giá bằng nhận xét.",
            "Đánh giá bằng điểm số.",
            "Đánh giá bằng các bài kiểm tra, bài thi.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 93,
        question: "Nghiên cứu khoa học sư phạm ứng dụng là gì?",
        options: [
            "Là một loại hình nghiên cứu trong giáo dục nhằm thực hiện một tác động hoặc can thiệp sư phạm và đánh giá ảnh hưởng của nó.",
            "Là một loại hình nghiên cứu về tâm lý học sinh.",
            "Là một loại hình nghiên cứu về phương pháp dạy học.",
            "Là một loại hình nghiên cứu về lịch sử phát triển của giáo dục."
        ],
        answer: 0 // A
    },
    {
        id: 94,
        question: "Đâu là một trong những bước thực hiện nghiên cứu khoa học sư phạm ứng dụng?",
        options: [
            "Xác định hiện trạng và nguyên nhân gây ra hạn chế trong dạy học.",
            "Đề xuất giải pháp thay thế.",
            "Thiết kế nghiên cứu và thu thập dữ liệu.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 95,
        question: "Vì sao giáo viên cần phối hợp với các lực lượng giáo dục?",
        options: [
            "Để tạo ra một môi trường giáo dục thống nhất và hiệu quả.",
            "Để tận dụng được sức mạnh tổng hợp của các lực lượng giáo dục.",
            "Để nâng cao chất lượng giáo dục.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 96,
        question: "Đâu là một trong những hình thức phối hợp với các lực lượng giáo dục?",
        options: [
            "Phối hợp giữa giáo viên với giáo viên.",
            "Phối hợp giữa giáo viên với phụ huynh.",
            "Phối hợp giữa giáo viên với các cơ quan địa phương.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 97,
        question: "Giáo viên có vai trò gì trong việc tư vấn, tham vấn cho học sinh?",
        options: [
            "Định hướng nghề nghiệp cho học sinh.",
            "Giải quyết các vấn đề tâm lý của học sinh.",
            "Hỗ trợ học sinh trong học tập và cuộc sống.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 98,
        question: "Vì sao giáo viên cần tự học, tự bồi dưỡng và phát triển bản thân?",
        options: [
            "Vì kiến thức là vô tận và luôn thay đổi.",
            "Vì để đáp ứng yêu cầu ngày càng cao của xã hội đối với giáo viên.",
            "Vì để nâng cao năng lực chuyên môn và nghiệp vụ.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 99,
        question: "Đâu là một trong những cách thức tự học, tự bồi dưỡng của giáo viên?",
        options: [
            "Tham gia các lớp tập huấn, bồi dưỡng chuyên môn.",
            "Trao đổi kinh nghiệm với đồng nghiệp.",
            "Ứng dụng công nghệ thông tin vào giảng dạy.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 100,
        question: "Kỹ năng nào sau đây giúp giáo viên phát triển bản thân?",
        options: [
            "Kỹ năng giao tiếp.",
            "Kỹ năng làm việc nhóm.",
            "Kỹ năng giải quyết vấn đề.",
            "Tất cả các đáp án trên."
        ],
        answer: 3 // D
    },
    {
        id: 101,
        question: "Hiện tượng giáo dục xuất hiện trong xã hội loài người là nhờ và do yếu tố nào trong các yếu tố nào dưới đây?",
        options: [
            "Do con người có ý thức.",
            "Do con người có ngôn ngữ.",
            "Do con người có tư duy.",
            "Do con người có lao động.",
            "Do cả 4 yếu tố trên."
        ],
        answer: 4 // e
    },
    {
        id: 102,
        question: "Nêu đầy đủ các yếu tố tạo thành quá trình sư phạm.",
        options: [
            "Khách thể, chủ thể giáo dục.",
            "Mục đích giáo dục, nội dung giáo dục.",
            "Phương pháp giáo dục, hình thức tổ chức giáo dục.",
            "Kết quả giáo dục.",
            "Cả a,b,c,d."
        ],
        answer: 4 // e
    },
    {
        id: 103,
        question: "Giáo dục – với tư cách là một hiện tượng xã hội – là:",
        options: [
            "Hoạt động của thế hệ đi trước truyền lại cho thế hệ đi sau những kinh nghiệm về lao động sản xuất và sinh hoạt cộng đồng.",
            "Hoạt động của những người trẻ tuổi tiếp thu những kinh nghiệm về lao động sản xuất và sinh hoạt cộng đồng.",
            "Hoạt động của thế hệ đi trước truyền lại cho thế hệ đi sau những kinh nghiệm về lao động sản xuất và sinh hoạt cộng đồng và sự tiếp thu của những người trẻ tuổi về những kinh nghiệm đó.",
            "Tất cả các hoạt động trên."
        ],
        answer: 2 // c
    },
    {
        id: 104,
        question: "Giáo dục có đặc trưng cơ bản là:",
        options: [
            "Truyền đạt những kinh nghiệm đã tích luỹ trong quá trình lịch sử phát triển xã hội loài người.",
            "Lĩnh hội những kinh nghiệm đã tích luỹ trong quá trình lịch sử phát triển xã hội loài người.",
            "Truyền đạt và lĩnh hội nền văn hoá của xã hội loài người.",
            "Truyền đạt và lĩnh hội những kinh nghiệm đã tích luỹ trong quá trình lịch sử phát triển của xã hội loài người."
        ],
        answer: 3 // d
    },
    {
        id: 105,
        question: "Truyền đạt và lĩnh hội những kinh nghiệm đã tích luỹ trong quá trình lịch sử phát triển của xã hội loài người, đó là nét đặc trưng cơ bản của:",
        options: [
            "Quá trình sư phạm – đối tượng của giáo dục học.",
            "Quá trình giáo dục – 1 bộ phận của quá trình sư phạm.",
            "Quá trình dạy học - 1 bộ phận của quá trình sư phạm.",
            "Giáo dục – 1 hiện tượng của xã hội loài người."
        ],
        answer: 3 // d
    },
    {
        id: 106,
        question: "Nhờ được giáo dục mà cá thể trở thành:",
        options: [
            "Con người.",
            "Cá nhân.",
            "Nhân cách.",
            "Người lớn tuổi."
        ],
        answer: 2 // c
    },
    {
        id: 107,
        question: "Giáo dục làm cho:",
        options: [
            "Nhu cầu và năng lực của con người ngày càng phong phú và đa dạng.",
            "Nhân cách con người được phát triển ngày càng đầy đủ và hoàn thiện.",
            "Sức mạnh tinh thần và sức mạnh thể chất của con người ngày càng tăng lên.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 108,
        question: "Giáo dục là điều kiện không thể thiếu được để duy trì và phát triển đời sống của con người, của xã hội loài người vì:",
        options: [
            "Giáo dục tái sản xuất những nhu cầu và năng lực của con người.",
            "Giáo dục tái sản xuất những sức mạnh bản chất của con người.",
            "Giáo dục tái sản xuất những nhân cách, sức lao động cần thiết phù hợp với yêu cầu xã hội.",
            "Giáo dục tái sản xuất các hoạt động sống khác của xã hội."
        ],
        answer: 2 // c
    },
    {
        id: 109,
        question: "Ở đâu có con người, ở đó có giáo dục vì:",
        options: [
            "Giáo dục là một hoạt động có mục đích của con người.",
            "Giáo dục là một hoạt động có ý thức của con người.",
            "Giáo dục là một chức năng đặc trưng của xã hội loài người.",
            "Giáo dục là yêu cầu cần thiết của xã hội.",
            "Cả a, b, c."
        ],
        answer: 4 // e
    },
    {
        id: 101,
        question: "Giáo dục là một hiện tượng phổ biến của xã hội loài người vì:",
        options: [
            "GD là phương thức để tái sản xuất sức lao động xã hội.",
            "GD là phương thức để tái sản xuất những nhân cách phù hợp với yêu cầu xã hội.",
            "GD là chức năng đặc trưng của xã hội loài người.",
            "GD là phương thức để tái sản xuất những hoạt động sống của xã hội."
        ],
        answer: 2 // c
    },
    {
        id: 111,
        question: "GD là một tất yếu và không bao giờ mất đi (vĩnh hằng) vì:",
        options: [
            "GD ra đời sau sự ra đời của xã hội.",
            "GD ảnh hưởng to lớn đến sự phát triến của xã hội.",
            "GD là nhân tố tái sản xuất xã hội.",
            "Cả a, b, c."
        ],
        answer: 2 // c
    },
    {
        id: 112,
        question: "Mèo dạy con bắt chuột là một hiện tượng:",
        options: [
            "Bản năng.",
            "GD.",
            "Bắt chước."
        ],
        answer: 0 // a
    },
    {
        id: 113,
        question: "Trong thế giới động vật có hiện tượng GD không?",
        options: [
            "Có.",
            "Không."
        ],
        answer: 1 // b
    },
    {
        id: 114,
        question: "GD là một hiện tượng:",
        options: [
            "Tự nhiên.",
            "Xã hội.",
            "Xã hội đặc biệt.",
            "Tự nhiên – xã hội."
        ],
        answer: 2 // c
    },
    {
        id: 115,
        question: "Quá trình sư phạm có phải là hiện tượng GD không?",
        options: [
            "Có.",
            "Không."
        ],
        answer: 0 // a
    },
    {
        id: 116,
        question: "Mọi hiện tượng GD đều là đối tượng nghiên cứu của GDH:",
        options: [
            "Đúng.",
            "Sai."
        ],
        answer: 1 // b
    },
    {
        id: 117,
        question: "Những hiện tượng GD nào dưới đây là đối tượng nghiên cứu của GDH:",
        options: [
            "Các hiện tượng GD diễn ra ở các cung thiếu nhi.",
            "Các hiện tượng GD diễn ra ở các câu lạc bộ văn hoá.",
            "Các hiện tượng GD diễn ra ở các trường học.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 118,
        question: "Quá trình sư phạm là sự thống nhất của hai quá trình bộ phận, đó là:",
        options: [
            "Quá trình dạy và quá trình học.",
            "Quá trình DH và quá trình GD.",
            "Quá trình GD và quá trình tự GD.",
            "Quá trình truyền thụ kinh nghiệm xã hội và quá trình tiếp thu kinh nghiệm xã hội."
        ],
        answer: 1 // b
    },
    {
        id: 119,
        question: "Chức năng trội của quá trình DH là:",
        options: [
            "Võ trang cho người học những tri thức về tự nhiên, xã hội và tư duy.",
            "Trau dồi học vấn.",
            "Hình thành những kỹ năng, kỹ xảo nhận thức hoạt động."
        ],
        answer: 1 // b
    },
    {
        id: 120,
        question: "Chức năng trội của quá trình GD (nghĩa hẹp) là:",
        options: [
            "Xây dựng hệ thống niềm tin, lý tưởng, động cơ, thái độ, tính cách, thói quen.",
            "Hình thành và phát triển những phẩm chất về thế giới quan khoa học, chính trị, đạo đức, thẩm mỹ, .. của cá nhân người học.",
            "Cả a, b."
        ],
        answer: 2 // c
    },
    {
        id: 121,
        question: "Người sinh viên vừa phải học tri thức, vừa phải rèn luyện đạo đức vì:",
        options: [
            "Quá trình đào tạo ở đại học bao gồm cả quá trình dạy học và quá trình GD.",
            "Xã hội yêu cầu con người phải có cả tài và đức.",
            "Quá trình đào tạo ở đại học là quá trình hình thành nhân cách toàn diện cho người sinh viên.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 122,
        question: "Quá trình dạy học là sự thống nhất biện chứng của quá trình giảng dạy và quá trình học tập. Vì vậy, trong quá trình dạy học, người học đóng vai trò:",
        options: [
            "Chủ thể của quá trình dạy học.",
            "Khách thể của quá trình dạy học.",
            "Vừa là chủ thể, vừa là khách thể của quá trình dạy học."
        ],
        answer: 2 // c
    },
    {
        id: 123,
        question: "Nhiệm vụ nghiên cứu của GDH là:",
        options: [
            "Nghiên cứu bản chất, cấu trúc và những tính quy luật của quá trình GD.",
            "Nghiên cứu những đặc điểm của quá trình GD diễn ra với mọi khách thể GD khác nhau.",
            "Nghiên cứu những đặc điểm của quá trình GD ở trong những thể chế khác nhau.",
            "Xác định nhiệm vụ, nội dung, phương pháp, phương tiện và hình thức tổ chức GD để quá trình đó vận hành tối ưu.",
            "Cả a, b, c, d."
        ],
        answer: 4 // e
    },
    {
        id: 124,
        question: "Các quá trình hoạt động nhằm tạo ra cơ sở khoa học của thế giới quan, lý tưởng đạo đức, thái độ thẩm mỹ, đối với hiện thực của con người, kể cả việc phát triển nâng cao thể lực là:",
        options: [
            "Quá trình gd thể chất.",
            "Quá trình gd đạo đức.",
            "Quá trình gd thẩm mỹ.",
            "Quá trình gd (nghĩa hẹp).",
            "Cả a, b, c, d."
        ],
        answer: 3 // d
    },
    {
        id: 125,
        question: "Hãy ghép các khái niệm cho phù hợp:\n1. GD theo nghĩa hẹp\n2. GD theo nghĩa rộng\n3. Dạy học",
        options: [
            "Là khái niệm bao gồm cả giáo dưỡng, dạy học, và tất cả những yếu tố tạo nên những nét tính cách và phẩm chất của con người.",
            "Là các quá trình hoạt động nhằm tạo ra cơ sở khoa học của thế giới quan, lý tưởng đạo đức, thái độ thẩm mỹ đối với hiện thực của con người kể cả việc phát triển nâng cao thể lực.",
            "Là khái niệm chỉ hoạt động đan xen vào nhau của giáo viên và học sinh nhằm đạt được mục đích đã đề ra.",
            "Là khái niệm chỉ hoạt động chung của người dạy và người học, hai hoạt động này song song tồn tại và phát triển trong cùng một quá trình thống nhất."
        ],
        answer: "1b, 2a, 3d" // Ghép nối
    },
    {
        id: 126,
        question: "Trong quá trình dạy học, vai trò chủ đạo của người giáo viên thể hiện ở chỗ:",
        options: [
            "Định hướng việc truyền thụ tri thức, kỹ năng, kỹ xảo đến người học một cách hợp lý, khoa học.",
            "Tổ chức việc truyền thụ tri thức, kỹ năng, kỹ xảo đến người học một cách hợp lý, khoa học.",
            "Cả a và b."
        ],
        answer: 1 // b
    },
    {
        id: 127,
        question: "Trong quá trình dạy học, vai trò chủ thể của người học thể hiện ở chỗ:",
        options: [
            "Người học tiếp thu một cách có ý thức hệ thống kiến thức, kỹ năng và kỹ xảo hoạt động.",
            "Năng lực tiếp thu một cách độc lập và sáng tạo hệ thống kiến thức, kỹ năng và kỹ xảo hoạt động.",
            "Người học hình thành năng lực và thái độ học tập đúng đắn.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 128,
        question: "Vai trò chủ động, tích cực, năng động của người học trong quá trình học tập có ý nghĩa quyết định đối với:",
        options: [
            "Sự lĩnh hội kiến thức.",
            "Sự phát triển trí tuệ.",
            "Sự hoàn thiện nhân cách.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 129,
        question: "Phân ngành của GDH nghiên cứu về bản chất và những quy luật của quá trình sư phạm toàn vẹn, về mục đích và nội dung của quá trình đó, để từ đó tạo ra các ngành GDH khác đi sâu vào những vấn đề cụ thể, là:",
        options: [
            "Lý luận dạy học.",
            "GDH đại cương.",
            "Lý luận GD.",
            "Lý luận quản lý nhà trường.",
            "Lý luận về các phương pháp giảng dạy bộ môn."
        ],
        answer: 1 // b
    },
    {
        id: 130,
        question: "GDH đại cương có nhiệm vụ nghiên cứu:",
        options: [
            "Quá trình dạy học với tư cách là một quá trình sư phạm bộ phận, một phương tiện để trau dồi học vấn, phát triển năng lực trí tuệ và GD phẩm chất nhân cách.",
            "Các vấn đề lý luận chung, về phương pháp luận, về phương pháp của GDH.",
            "Quá trình GD với tư cách là một quá trình sư phạm bộ phận, nhằm hình thành niềm tin, lý tưởng, động cơ, thái độ, những nét tính cách và những thói quen hành vi XHCN cho học sinh.",
            "Xác định quy luật của việc giảng dạy và học tập từng môn học để từ đó xây dựng nội dung, phương pháp, phương tiện, hình thức tổ chức dạy và học bộ môn cho phù hợp."
        ],
        answer: 1 // b
    },
    {
        id: 131,
        question: "Việc học môn GDH đại cương có ý nghĩa như thế nào đối với sinh viên đại học?",
        options: [
            "Giúp sinh viên hình thành được kỹ năng tổ chức học tập hợp lý.",
            "Giúp sinh viên có được kỹ năng ứng xử đúng đắn trong các mối quan hệ ở nhà trường.",
            "Giúp sinh viên đại học xác định được vị trí, vai trò, trách nhiệm của người học sinh trong nhà trường và có ý thức học tập để rèn luyện để trở thành người sinh viên tốt.",
            "Góp phần hình thành ở sinh viên những phẩm chất và năng lực trí tuệ cơ bản ở giai đoạn đại cương."
        ],
        answer: 3 // d
    },
    {
        id: 132,
        question: "Sự phát triển cá nhân thường bao gồm những mặt nào?",
        options: [
            "Sự tăng trưởng về chiều cao, sự biến đổi các quá trình nhận thức, sự tham gia tích cực, tự giác, vào các mặt khác nhau của đời sống xã hội.",
            "Sự phát triển về mặt thể chất, sự phát triển về mặt tâm lý và xã hội.",
            "Sự hoàn thiện các giác quan, sự biến đổi cơ bản của các quá trình tình cảm, ý chí, nhu cầu, nếp sống, thói quen, sự thay đổi trong việc ứng xử với mọi người xung quanh."
        ],
        answer: 1 // b
    },
    {
        id: 133,
        question: "Sự phát triển cá nhân là:",
        options: [
            "Quá trình biến đổi về lượng trong mỗi con người.",
            "Quá trình biến đổi về chất trong mỗi con người.",
            "Quá trình biến đổi về lượng dẫn đến quá trình thay đổi về chất."
        ],
        answer: 2 // c
    },
    {
        id: 134,
        question: "Để có được nhân cách của con người lao động sáng tạo, năng động, có kỷ luật, có kỹ thuật, có đầy đủ phẩm chất tốt đẹp của con người Việt Nam truyền thống, ngay từ khi còn ngồi trên ghế nhà trường, người sinh viên đại học phải học tập và tu dưỡng như thế nào?",
        options: [
            "Người sinh viên phải là chủ thể có ý thức trong mọi hoạt động của nhà trường.",
            "Người sinh viên cần tự giác tích cực tham gia vào các hoạt động như học tập, lao động, giao lưu,…",
            "Người sinh viên cần chủ động tu dưỡng rèn luyện bản thân.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 135,
        question: "Sự hình thành và phát triển cá nhân chịu tác động của các yếu tố nào?",
        options: [
            "Bẩm sinh, di truyền.",
            "Môi trường.",
            "Giáo dục.",
            "Hoạt động cá nhân.",
            "Cả 4 yếu tố trên."
        ],
        answer: 4 // e
    },
    {
        id: 136,
        question: "Hãy ghép các yếu tố sau cho phù hợp với vai trò của nó đối với sự phát triển của cá nhân.\n1. Bẩm sinh, di truyền\n2. Môi trường\n3. Giáo dục\n4. Hoạt động cá nhân",
        options: [
            "Quyết định trực tiếp đến sự phát triển cá nhân.",
            "Là những tiền đề vật chất của sự phát triển cá nhân.",
            "Ảnh hưởng quan trọng đến sự phát triển cá nhân.",
            "Quyết định gián tiếp đến sự phát triển cá nhân.",
            "Giữ vai trò chủ đạo đối với sự phát triển cá nhân."
        ],
        answer: "1b, 2c, 3e, 4a" // Ghép nối
    },
    {
        id: 137,
        question: "Những đặc điểm nào của cha mẹ được di truyền cho thế hệ sau?",
        options: [
            "Những đặc điểm về giải phẫu sinh lý và đặc điểm hoạt động của hệ thần kinh.",
            "Những phẩm chất của trí tuệ.",
            "Những phẩm chất của nhân cách.",
            "Cả a, b, c."
        ],
        answer: 0 // a
    },
    {
        id: 138,
        question: "Trong điều kiện nào dưới đây thì con người sẽ trở thành tài năng trong một lĩnh vực nào đó?",
        options: [
            "Có những tư chất bẩm sinh di truyền thuận lợi.",
            "Có điều kiện xã hội thuận lợi.",
            "Có hoạt động cá nhân tích cực.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 139,
        question: "Trong những điều kiện dưới đây, thì điều kiện nào là điều kiện cần thiết để cá nhân trở thành tài năng trong một lĩnh vực nào đó?",
        options: [
            "Có điều kiện học tập thuận lợi.",
            "Có sự quan tâm đầu tư của gia đình.",
            "Có những tư chất, năng khiếu thuận lợi.",
            "Có sự hoạt động tích cực, tự giác của cá nhân."
        ],
        answer: 2 // c
    },
    {
        id: 140,
        question: "Môi trường xã hội bao gồm:",
        options: [
            "Các quan hệ xã hội trong một xã hội nhất định.",
            "Nền văn hoá vật chất và tinh thần của xã hội.",
            "Các thiết chế xã hội.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 141,
        question: "Nói “GD có vai trò chủ đạo đối với sự phát triển nhân cách”, điều đó có nghĩa là:",
        options: [
            "GD vạch ra mục đích, phương hướng cho nhân cách phát triển.",
            "GD tổ chức, hướng dẫn nhân cách phát triển theo mục đích, phương hướng đã vạch ra.",
            "GD điều chỉnh, can thiệp đến các yếu tố khác ảnh hưởng đến sự phát triển nhân cách.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 142,
        question: "GD có khả năng phát huy những nhân tố thuận lợi của bẩm sinh di truyền nhằm đảm bảo cho sự phát triển con người ngày càng hoàn hảo hơn. Điều đó thể hiện ở chỗ:",
        options: [
            "GD phát hiện và bồi dưỡng năng khiếu sẵn có ở con người.",
            "GD tạo ra năng khiếu và năng lực ở con người.",
            "Cả a và b."
        ],
        answer: 0 // a
    },
    {
        id: 143,
        question: "GD có khả năng hạn chế những ảnh hưởng không thuận lợi của bẩm sinh di truyền nhằm đảm bảo cho sự phát triển con người ngày càng hoàn hảo hơn. Điều đó thể hiện ở chỗ:",
        options: [
            "Dạy học cho những trẻ em bị mù.",
            "Dạy học cho những trẻ em bị câm.",
            "Dạy học cho những trẻ em bị điếc.",
            "Dạy học cho những trẻ em bị trí tuệ thiểu năng.",
            "Cả a, b, c, d."
        ],
        answer: 4 // e
    },
    {
        id: 144,
        question: "Hãy ghép các câu thơ, câu tục ngữ sau cho phù hợp với các yếu tố ảnh hưởng để sự phát triển nhân cách con người.\n1. Bẩm sinh di truyền\n2. Môi trường\n3. Giáo dục\n4. Hoạt động cá nhân",
        options: [
            "Ở bầu thì tròn, ở ống thì dài.",
            "Trứng rồng lại nở ra rồng. Liu điu lại nở ra dòng liu điu.",
            "Đi một ngày đàng học một sàng khôn.",
            "“… Hiền dữ phải đâu là tính sẵn / Phần nhiều do giáo dục mà nên”",
            "Nhiều áo thì ấm, nhiều người thì vui."
        ],
        answer: "1b, 2a, 3d, 4c"
    },
    {
        id: 145,
        question: "Hãy ghép các khái niệm cho phù hợp:\n1. Tư chất\n2. Năng lực\n3. Tài năng\n4. Thiên tài\n5. Thông minh\n6. Năng khiếu",
        options: [
            "Tổ hợp các năng lực cho phép con người đạt được những thành tựu sáng tạo trong thời kỳ mới của lịch sử.",
            "Một phức hợp các năng lực xác định mức độ và chất lượng của quá trình tư duy của một người, cho phép con người nhận ra trong tình huống, hoàn cảnh và các mối quan hệ của chúng...",
            "Tất cả những tiềm năng phát triển được di truyền và bẩm sinh của cá thể.",
            "Tổ hợp các năng lực tạo nên tiền đề thuận lợi để hoạt động có kết quả cao, nằm trong khuôn khổ của những thành tựu đạt được của xã hội loài người.",
            "Tổ hợp những đặc điểm tâm lý của con người đáp ứng được yêu cầu của một số hoạt động nhất định và là điều kiện cần thiết để hoàn thành xuất sắc một hoạt động nào đó."
        ],
        answer: "1c, 2e, 3d, 4a, 5b"
    },
    {
        id: 146,
        question: "Hệ thống tiền đề bên trong dựa trên những tư chất bẩm sinh di truyền được phát triển trong đời sống cá thể, cho con người năng lực giải quyết với chất lượng cao những yêu cầu đặt ra, là:",
        options: [
            "Tài năng.",
            "Thiên tài.",
            "Năng lực",
            "Tư chất",
            "Thông minh.",
            "Năng khiếu."
        ],
        answer: 5 // f
    },
    {
        id: 147,
        question: "Hãy ghép các tác giả cho phù hợp với tác phẩm:\n1. J.J.Rutxo\n2. J.A.Comexki\n3. A.X.Makarenko\n4. K.D.Usinxki",
        options: [
            "Lý luận dạy học vĩ đại",
            "Bài ca sư phạm",
            "Thép đã tôi thế đấy."
        ],
        answer: "2a, 3d"
    },
    {
        id: 148,
        question: "Những đặc điểm của cuộc cách mạng khoa học công nghệ trong thời đại ngày nay đã ảnh hưởng đến các lĩnh vực nào của đời sống xã hội?",
        options: [
            "Ảnh hưởng sâu sắc, toàn diện đến lĩnh vực kinh tế xã hội.",
            "Ảnh hưởng đến chất lượng giáo dục đào tạo.",
            "Tác động sâu sắc đến quá trình hình thành nhân cách của con người nói chung, thế hệ trẻ nói riêng.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 149,
        question: "Mặt tích cực của cơ chế thị trường là:",
        options: [
            "Phát huy cao độ tính năng động, sáng tạo của con người.",
            "Thúc đẩy con người áp dụng nhanh chóng những tiến bộ của khoa học, kỹ thuật vào sản xuất.",
            "Đưa ra những yêu cầu khách quan đối với thế hệ trẻ.",
            "Tạo điều kiện thuận lợi để sinh viên có thể hình thành và phát triển nhân cách theo yêu cầu khách quan.",
            "Cả a, b, c, d."
        ],
        answer: 4 // e
    },
    {
        id: 150,
        question: "Các nước phát triển trên thế giới đều khẳng định tác dụng to lớn của giáo dục đối với xã hội vì:",
        options: [
            "GD là phương thức tái sản xuất các hoạt động sống của xã hội.",
            "GD có các chức năng cơ bản, đó là: kinh tế - sản xuất, chính trị - xã hội, tư tưởng – văn hoá.",
            "GD làm cho sức lao động mới khéo léo hơn.",
            "GD là phương thức tái sản xuất sức lao động xã hội."
        ],
        answer: 1 // b
    },
    {
        id: 151,
        question: "Khoá họp lần thứ 27 của tổ chức UNESCO (1993) đã khẳng định vai trò của GD là:",
        options: [
            "Phát triển tiềm năng của con người.",
            "Điều kiện tiên quyết để thực hiện nhân quyền.",
            "Điều kiện để hợp tác trí tuệ, bình đẳng và tôn trọng lẫn nhau.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 152,
        question: "Những điều kiện mới để phát triển GD là:",
        options: [
            "Tăng cường đầu tư từ GD.",
            "Từng bước xã hội hoá GD.",
            "Từng bước dân chủ hoá GD.",
            "Cả a, b, c, d."
        ],
        answer: 3 // d
    },
    {
        id: 153,
        question: "Mục đích GD là:",
        options: [
            "Kiểu mẫu nhân cách con người mới cần GD đào tạo.",
            "Các phẩm chất, các yêu cầu về mô hình của “con người thời đại”, phản ánh tính quy định của xã hội.",
            "Cả a, b."
        ],
        answer: 2 // c
    },
    {
        id: 154,
        question: "Mô hình nhân cách con người mà mỗi thời đại cần GD đào tạo được phản ánh tập trung ở:",
        options: [
            "Mục đích GD.",
            "Mục tiêu GD.",
            "Nội dung GD.",
            "Phương pháp GD."
        ],
        answer: 0 // a
    },
    {
        id: 155,
        question: "Chuẩn mực cụ thể của một cấp học, bậc học, ở một giai đoạn GD đào tạo là:",
        options: [
            "Mục đích GD.",
            "Mục tiêu GD."
        ],
        answer: 1 // b
    },
    {
        id: 156,
        question: "Biểu hiện của con người phát triển toàn diện là:",
        options: [
            "Nhân cách được phát triển đầy đủ về các mặt cấu trúc xã hội, phong phú trong quan hệ và trong hoạt động xã hội.",
            "Hình thành các nhu cầu, năng lực phong phú, cần thiết để sống trong xã hội.",
            "Phát triển hài hoà giữa thể chất và tâm hồn.",
            "Phát triển hết mọi khả năng, cá tính con người trong xã hội mới.",
            "Cả a, b, c, d."
        ],
        answer: 4 // e
    },
    {
        id: 157,
        question: "Thời gian để hình thành và phát triển con người toàn diện phải là:",
        options: [
            "Cả đời người.",
            "Cả thế hệ.",
            "Thế hệ này sang thế hệ khác.",
            "Lâu dài và phát triển dần theo sự phát triển của xã hội."
        ],
        answer: 3 // d
    },
    {
        id: 158,
        question: "Tính giai cấp của GD thể hiện tập trung nhất ở:",
        options: [
            "Mục đích GD.",
            "Nội dung GD.",
            "Phương pháp GD.",
            "Hình thức tổ chức GD."
        ],
        answer: 0 // a
    },
    {
        id: 159,
        question: "Đối tượng của GD là:",
        options: [
            "Con người.",
            "Quá trình GD.",
            "Hoạt động GD.",
            "Sản phẩm GD."
        ],
        answer: 0 // a
    },
    {
        id: 160,
        question: "Mục đích GD do:",
        options: [
            "Các nhà GD định ra.",
            "Người được GD định ra.",
            "Nhà trường định ra.",
            "Yêu cầu khách quan của xã hội và yêu cầu phát triển cá nhân của người GD quy định."
        ],
        answer: 3 // d
    },
    {
        id: 161,
        question: "Mục tiêu GD là:",
        options: [
            "Sự cụ thể hoá mục đích GD vào trong các hoạt động GD.",
            "Sự cụ thể hoá mục đích GD vào các cấp học, ngành học.",
            "Sự cụ thể hoá mục đích GD vào nội dung, phương pháp GD.",
            "Tất cả những điều nói trên đều không đúng."
        ],
        answer: 1 // b
    },
    {
        id: 162,
        question: "Phân chia giai đoạn phát triển của con người là để:",
        options: [
            "Đoán trước xu thế phát triển tâm lý con người.",
            "Xác định mục đích, nội dung GD phù hợp với từng độ tuổi.",
            "Quy định tuổi đi học cho học sinh.",
            "Cả a, b, c."
        ],
        answer: 1 // b
    },
    {
        id: 163,
        question: "Đổi mới GD nước ta hiện nay là:",
        options: [
            "Đổi mới cách hiểu về vị trí, vai trò của GD.",
            "Đổi mới về mục tiêu, phương pháp, nội dung GD.",
            "Đổi mới về công tác đào tạo giáo viên, cán bộ quản lý GD.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 164,
        question: "Hãy ghép các mục đích GD sau cho phù hợp với các giai đoạn lịch sử:\n1. Hướng vào đào tạo những người công dân mới, những người công dân của một nước độc lập...\n2. Đào tạo những con người vừa phát triển hoàn toàn, vừa biết lao động trí óc, vừa biết lao động chân tay.\n3. Đào tạo những người lao động mới có ý thức và quan điểm XHCN, có trình độ văn hoá phổ thông và hiểu biết kỹ thuật...\n4. Nâng cao dân trí, đào tạo nhân lực, bồi dưỡng nhân tài, hình thành đội ngũ lao động có tri thức...",
        options: [
            "Nhà nước thống nhất, cả nước tiến lên CNXH (1975).",
            "Giai đoạn công nghiệp hoá, hiện đại hoá (1986 đến nay).",
            "Đất nước dành độc lập (1945).",
            "Miền Bắc tiến lên xây dựng CNXH (1960).",
            "Miền Bắc hoàn toàn giải phóng (1954)."
        ],
        answer: "1c, 2a, 3d, 4b"
    },
    {
        id: 165,
        question: "Nhiệm vụ GD là:",
        options: [
            "Chăm sóc, nuôi dạy thế hệ trẻ từ lọt lòng đến tuổi trưởng thành.",
            "Thực hiện phổ cập GD, nâng cao dân trí.",
            "Chuẩn bị nghề và đào tạo nghề cho thế hệ trẻ và những người lao động.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 166,
        question: "Phải chăm sóc, nuôi dạy thế hệ trẻ từ lọt lòng đến tuổi trưởng thành vì:",
        options: [
            "Lứa tuổi ấu thơ đang chứa đựng những mầm mống của tính cách con người tương lai.",
            "Lứa tuổi ấu thơ đang chứa đựng những năng khiếu của con người tương lai.",
            "Lứa tuổi ấu thơ đang chứa đựng những tiềm lực phát triển về trí tuệ và tình cảm của con người tương lai.",
            "Đây là lứa tuổi đặt nền móng cho sự phát triển nhân cách sau này."
        ],
        answer: 3 // d
    },
    {
        id: 167,
        question: "Con đường GD là:",
        options: [
            "Những hình thức tổ chức GD.",
            "Tổ chức các hoạt động GD cho trẻ.",
            "Cách thức tổ chức hoạt động GD dựa trên những hoạt động cụ thể."
        ],
        answer: 2 // c
    },
    {
        id: 168,
        question: "Việc chăm sóc, nuôi dạy thế hệ trẻ từ lọt lòng đến tuổi trưởng thành được thể hiện cụ thể ở những mặt nào?",
        options: [
            "Phải quan tâm đến những học sinh có năng khiếu đặc biệt.",
            "Phải quan tâm đến những học sinh có khuyết tật hay trí tuệ chậm phát triển.",
            "Phải làm sao cho tất cả thế hệ trẻ được học đầy đủ đến bậc phổ thông trung học và được chuẩn bị tốt để đi vào nghề nghiệp.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 169,
        question: "Phải thực hiện phổ cập GD, nâng cao dân trí vì:",
        options: [
            "Nhu cầu phát triển của nhân dân cao.",
            "Nhân dân ta vốn có truyền thống hiếu học.",
            "Do yêu cầu của công cuộc xây dựng đất nước.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 170,
        question: "Nội dung GD gồm những mặt nào?",
        options: [
            "GD trí tuệ.",
            "GD thẩm mỹ.",
            "GD thể chất.",
            "GD đạo đức.",
            "GD lao động.",
            "Cả a, b, c, d, e."
        ],
        answer: 5 // f
    },
    {
        id: 171,
        question: "Dạy học là hoạt động đặc trưng của nhà trường, là con đường cơ bản nhất để thực hiện các nhiệm vụ và nội dung GD trong nhà trường vì:",
        options: [
            "Dạy học là con đường thuận lợi nhất giúp người học trong khoảng thời gian ngắn nhất có thể nắm vững một khối lượng tri thức và hệ thống kỹ năng, kỹ xảo cần thiết.",
            "Dạy học là con đường quan trọng bậc nhất giúp người học phát triển có hệ thống năng lực hoạt động trí tuệ nói chung, đặc biệt là năng lực tư duy sáng tạo.",
            "Dạy học là con đường chủ yếu để góp phần hình thành thế giới quan khoa học, nhân sinh quan cách mạng và những phẩm chất đạo đức con người.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 172,
        question: "Trong nhà trường, hoạt động GD có vai trò quan trọng trong việc hình thành và phát triển nhân cách người học vì:",
        options: [
            "Hoạt động GD là hoạt động có tổ chức, có kế hoạch, có chương trình, có nội dung, phương tiện, phương pháp.",
            "Hoạt động GD là hoạt động giao lưu đặc biệt.",
            "Hoạt động GD được thể hiện trên khắp mọi lĩnh vực hoạt động của nhà trường.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 173,
        question: "Trong nhà trường hiện đại, hoạt động nghiên cứu khoa học của sinh viên là một con đường quan trọng để thực hiện các nhiệm vụ và nội dung GD vì:",
        options: [
            "Hoạt động nghiên cứu của người học có tác dụng phát huy tính tích cực, nâng cao tính độc lập, sáng tạo của người học.",
            "Hoạt động nghiên cứu khoa học có tác dụng hình thành kỹ năng, thói quen tự học, tự nghiên cứu để không ngừng nâng cao trình độ bản thân.",
            "Hoạt động nghiên cứu khoa học có tác dụng chuẩn bị cho người học thích ứng với yêu cầu thường xuyên đổi mới của tri thức, của thực tiễn đời sống xã hội.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 174,
        question: "Chiến lược phát triển GD có liên quan trực tiếp đến:",
        options: [
            "Chiến lược con người.",
            "Chiến lược phát triển văn hoá.",
            "Chiến lược phát triển kinh tế - xã hội.",
            "Chiến lược phát triển khoa học – kỹ thuật."
        ],
        answer: 2 // c
    },
    {
        id: 175,
        question: "Tự GD là một trong những con đường quan trọng để thực hiện nhiệm vụ và nội dung GD vì:",
        options: [
            "Nhờ tự GD mà người học sinh tích cực, tự giác học tập, rèn luyện theo yêu cầu GD của nhà trường, của tập thể và nỗ lực phấn đấu vượt qua mọi trở ngại.",
            "Nhờ tự GD mà người học biến những yêu cầu khách quan của xã hội thành yêu cầu chủ quan.",
            "Nhờ tự GD mà người học trở thành chủ thể tích cực, tự giác của quá trình GD.",
            "Cả a, b, c."
        ],
        answer: 0 // a
    },
    {
        id: 176,
        question: "Hoạt động tập thể là một trong những con đường quan trọng để thực hiện nhiệm vụ và nội dung GD trong nhà trường hiện đại, vì:",
        options: [
            "Hoạt động tập thể là môi trường quan trọng để hình thành và phát triển nhân cách người học.",
            "Hoạt động tập thể là phương tiện để hình thành và phát triển nhân cách người học.",
            "Hoạt động tập thể có tác dụng rèn luyện cho học sinh có ý thức và thói quen sống và làm việc có tổ chức, có kỷ luật, biết đoàn kết, tương trợ, quan tâm lẫn nhau.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 177,
        question: "Cơ cấu hệ thống GD quốc dân Việt Nam hiện nay bao gồm những ngành học nào?",
        options: [
            "Ngành GD mầm non.",
            "Ngành GD phổ thông.",
            "Ngành GD chuyên nghiệp.",
            "Ngành GD đại học.",
            "Cả a, b, c, d."
        ],
        answer: 4 // e
    },
    {
        id: 178,
        question: "Mục tiêu GD đại học trong giai đoạn hiện nay là gì?",
        options: [
            "Đào tạo nhân lực giỏi, cho các thành phần kinh tế, đáp ứng những đòi hỏi mới về chất lượng cho nền kinh tế thị trường.",
            "Bồi dưỡng tri thức tinh hoa, nhân tài cho đất nước.",
            "Nâng cao dân trí.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    },
    {
        id: 179,
        question: "Công nghệ GD có tác dụng:",
        options: [
            "Nâng cao năng suất của GD.",
            "Tạo cho GD những nền tảng khoa học mới.",
            "Cho phép cá thể hoá GD.",
            "Tăng cường sự bình đẳng trước GD.",
            "Cả a, b, c."
        ],
        answer: 4 // e
    },
    {
        id: 180,
        question: "Khi đánh giá kết quả dạy học cần dựa trên cơ sở nào?",
        options: [
            "Cần dựa vào mục tiêu đào tạo.",
            "Cần dựa và sự đánh giá định lượng và định tính kết quả đào tạo.",
            "Cần dựa vào sự đánh giá đúng đắn và diễn biến của quá trình giảng dạy, đào tạo để điều chỉnh kịp thời.",
            "Cả a, b, c."
        ],
        answer: 3 // d
    }
]