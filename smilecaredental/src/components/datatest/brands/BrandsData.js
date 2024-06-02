const brandsData = [
  {
    id: "1",
    name: "Phòng Khám Nha Khoa Hoàn Mỹ",
    address: "123 Đường ABC, Quận XYZ, Thành phố ABC",
    imageUrl:
      "https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.15752-9/436546563_1110263806908522_4034378111701931395_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE1kzudH4StYIAkSRrvfP4hjC4kftU1VEeMLiR-1TVUR3iD0zdkXEb2TrtTLd6myPANls93km0UEJi33z7XPHIz&_nc_ohc=eVesQ4PDo0sQ7kNvgH9YxLV&_nc_ht=scontent.fsgn8-4.fna&oh=03_Q7cD1QFqW-grj0IkUCHKbXGWAjpG_ctZ7ByccspjwIcdCXuJCA&oe=6680D402",
    bannerUrl:
      "https://i.pinimg.com/originals/90/8e/f8/908ef8540020aba6f10370a8d91e6213.jpg", // Add your specific banner URL here
    info: "Thông tin chi tiết về phòng khám Hoàn Mỹ...",
    priceList: [
      { serviceName: "Chụp X-quang", price: "500.000 VND" },
      { serviceName: "Niềng Răng", price: "10.000.000 VND" },
      { serviceName: "Trám Răng", price: "1.000.000 VND" },
      // Thêm các dịch vụ khác nếu cần
    ],
    introduction: (
      <div>
        <p>
          Nhắc đến thương hiệu nha khoa chất lượng, được khách hàng tin tưởng
          đánh giá cao hiện nay không thể không kể đến phòng khám Nha khoa
          Paris. Để cung cấp dịch vụ tốt nhất cho khách hàng, Paris chú trọng
          tuyển chọn các bác sĩ tài giỏi, hệ thống máy móc thiết bị tối tân.
        </p>
        <p>
          Phòng khám Nha khoa Paris có nhiều lợi thế cạnh tranh so với các đơn
          vị khác, có thể kể đến như::
          <ul>
            Quy tụ đội ngũ y bác sĩ, chuyên gia giỏi hơn 20 năm kinh nghiệm,
            được đào tạo bài bản, nhiệt tình với bệnh nhân, có trách nhiệm với
            công việc, đã từng xử lý thành công hàng ngàn trường hợp từ đơn giản
            đến phức tạp.{" "}
          </ul>
          <ul>
            Nha khoa Paris đầu tư hệ thống cơ sở vật chất hiện đại, ứng dụng
            công nghệ thông minh trong quá trình thăm khám, điều trị răng miệng
            cho khách hàng: Công nghệ trồng răng Implant 4S, công nghệ niềng
            răng 3D Speed, bọc răng sứ Nano 5S,…
          </ul>
          <ul>
            Quy trình khám, điều trị bệnh, phục hình răng, thẩm mỹ răng cho
            khách hàng diễn ra nhanh chóng nhưng vẫn đảm bảo đúng chuẩn Y khoa.
            Đặc biệt các dụng cụ, thiết bị, phóng nha được vô trùng, khử khuẩn
            thường xuyên.
          </ul>
        </p>
        <img
          src="https://videntalkid.com/wp-content/uploads/2022/05/phong-kham-nha-khoa-da-lat.jpg"
          alt="mô_tả_ảnh"
          style={{
            maxWidth: "100%" /* Kích thước tối đa là 100% của phần tử chứa */,
            height:
              "auto" /* Chiều cao tự động điều chỉnh để giữ tỷ lệ khung hình */,
            display: "block" /* Đảm bảo hình ảnh căn giữa trong khung */,
            margin: "auto" /* Căn giữa hình ảnh trong khung */,
          }}
        />
        <p>
          Dịch vụ tại nha khoa Paris đạt tiêu chuẩn châu Âu, bởi vậy 100% khách
          hàng đến đây đều cảm thấy hài lòng vì được chăm sóc tận tình và có
          được hàm răng trắng sáng, đều đẹp, chắc khỏe. Tuy nhiên đây cũng là lý
          do các dịch vụ tại đây có giá thành cao hơn những đơn vị khác, vì vậy
          bạn nên cân nhắc khi có nhu cầu thăm khám, điều trị bệnh lý răng miệng
        </p>
      </div>
    ),
    reviews: "Đánh giá của bệnh nhân về phòng khám Hoàn Mỹ...",
    workingHours: {
      Monday: "9:00 - 16:45",
      Tuesday: "9:00 - 16:45",
      Wednesday: "9:00 - 16:45",
      Thursday: "9:00 - 16:45",
      Friday: "9:00 - 16:45",
      Saturday: "9:00 - 16:45",
      Sunday: "9:00 - 16:45",
    },

  
    customInfo:
      "Phòng khám Nha khoa Paris là hệ thống nha khoa hoạt động theo tiêu chuẩn Pháp đầu tiên ở Việt Nam, cung cấp dịch vụ chất lượng hàng đầu. Đơn vị này được thành lập từ năm 2014 cho đến hiện tại đã có nhiều chi nhánh trải dài khắp các tỉnh thành trên toàn quốc. Hiện tại, Nha khoa Paris đang ngày càng khẳng định mình, vượt qua nhiều trung tâm nha khoa lâu đời, nhận được sự đánh giá cao của giới chuyên gia và đông đảo khách hàng.",
    branch: [
      {
        city: "Hà Nội",
        addresses: [
          "Số nhà 43 – 45- 47 Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội",
        ],
      },
      {
        city: "Hồ Chí Minh",
        addresses: ["Chi nhánh A", "Chi nhánh B", "Chi nhánh C"],
      },
    ],
    promotionalBannerUrl:
      "https://i.pinimg.com/736x/fc/19/97/fc1997f4b12fd166aec387e95d63a32c.jpg",
  },
  // phòng khám đa khoa Hoàn An
  {
    id: "2",
    name: "Phòng Khám Nha Khoa Hoàn An",
    address: "123 Đường ABC, Quận XYZ, Thành phố ABC",
    imageUrl:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/436552682_1088993908829285_1636590915144132120_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFwWj_k4-8egBH2GJFZq9GC2LYnMTdNo2fYticxN02jZ6TPi6FlUC0S4dgKnLBqkAEpvRKHnpJ0KOILiKtrSxR8&_nc_ohc=MGGSFuXKrf0Q7kNvgFMNZuQ&_nc_ht=scontent.fsgn8-3.fna&oh=03_Q7cD1QHsGmBm1If33o8N7N-ypZHG58YLkBLsuB7aYn-wGuNL_A&oe=66823139",
    bannerUrl:
      "https://i.pinimg.com/originals/90/8e/f8/908ef8540020aba6f10370a8d91e6213.jpg", // Add your specific banner URL here
    info: "Thông tin chi tiết về phòng khám Hoàn Mỹ...",
    priceList: [
      { serviceName: "Chụp X-quang", price: "600.000 VND" },
      { serviceName: "Niềng Răng", price: "11.000.000 VND" },
      { serviceName: "Trám Răng", price: "1.500.000 VND" },
      { serviceName: "Nhổ Răng", price: "500.000 VND" },
      // Thêm các dịch vụ khác nếu cần
    ],
    introduction: (
      <div>
        <p>
          Nhắc đến thương hiệu nha khoa chất lượng, được khách hàng tin tưởng
          đánh giá cao hiện nay không thể không kể đến phòng khám Nha khoa
          Paris. Để cung cấp dịch vụ tốt nhất cho khách hàng, Paris chú trọng
          tuyển chọn các bác sĩ tài giỏi, hệ thống máy móc thiết bị tối tân.
        </p>
        <p>
          Phòng khám Nha khoa Paris có nhiều lợi thế cạnh tranh so với các đơn
          vị khác, có thể kể đến như::
          <ul>
            Quy tụ đội ngũ y bác sĩ, chuyên gia giỏi hơn 20 năm kinh nghiệm,
            được đào tạo bài bản, nhiệt tình với bệnh nhân, có trách nhiệm với
            công việc, đã từng xử lý thành công hàng ngàn trường hợp từ đơn giản
            đến phức tạp.{" "}
          </ul>
          <ul>
            Nha khoa Paris đầu tư hệ thống cơ sở vật chất hiện đại, ứng dụng
            công nghệ thông minh trong quá trình thăm khám, điều trị răng miệng
            cho khách hàng: Công nghệ trồng răng Implant 4S, công nghệ niềng
            răng 3D Speed, bọc răng sứ Nano 5S,…
          </ul>
          <ul>
            Quy trình khám, điều trị bệnh, phục hình răng, thẩm mỹ răng cho
            khách hàng diễn ra nhanh chóng nhưng vẫn đảm bảo đúng chuẩn Y khoa.
            Đặc biệt các dụng cụ, thiết bị, phóng nha được vô trùng, khử khuẩn
            thường xuyên.
          </ul>
        </p>
        <img
          src="https://videntalkid.com/wp-content/uploads/2022/05/phong-kham-nha-khoa-da-lat.jpg"
          alt="mô_tả_ảnh"
          style={{
            maxWidth: "100%" /* Kích thước tối đa là 100% của phần tử chứa */,
            height:
              "auto" /* Chiều cao tự động điều chỉnh để giữ tỷ lệ khung hình */,
            display: "block" /* Đảm bảo hình ảnh căn giữa trong khung */,
            margin: "auto" /* Căn giữa hình ảnh trong khung */,
          }}
        />
        <p>
          Dịch vụ tại nha khoa Paris đạt tiêu chuẩn châu Âu, bởi vậy 100% khách
          hàng đến đây đều cảm thấy hài lòng vì được chăm sóc tận tình và có
          được hàm răng trắng sáng, đều đẹp, chắc khỏe. Tuy nhiên đây cũng là lý
          do các dịch vụ tại đây có giá thành cao hơn những đơn vị khác, vì vậy
          bạn nên cân nhắc khi có nhu cầu thăm khám, điều trị bệnh lý răng miệng
        </p>
      </div>
    ),
    reviews: "Đánh giá của bệnh nhân về phòng khám Hoàn Mỹ...",
    workingHours: {
      Monday: "9:00 - 16:45",
      Tuesday: "9:00 - 16:45",
      Wednesday: "9:00 - 16:45",
      Thursday: "9:00 - 16:45",
      Friday: "9:00 - 16:45",
      Saturday:"9:00 - 16:45",
      Sunday:"9:00 - 16:45",
    },
    customInfo:
      "Phòng khám Nha khoa Paris là hệ thống nha khoa hoạt động theo tiêu chuẩn Pháp đầu tiên ở Việt Nam, cung cấp dịch vụ chất lượng hàng đầu. Đơn vị này được thành lập từ năm 2014 cho đến hiện tại đã có nhiều chi nhánh trải dài khắp các tỉnh thành trên toàn quốc. Hiện tại, Nha khoa Paris đang ngày càng khẳng định mình, vượt qua nhiều trung tâm nha khoa lâu đời, nhận được sự đánh giá cao của giới chuyên gia và đông đảo khách hàng.",
    branch: [
      {
        city: "Hà Nội",
        addresses: [
          "Số nhà 43 – 45- 47 Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội",
        ],
      },
      {
        city: "Hồ Chí Minh",
        addresses: ["Chi nhánh A", "Chi nhánh B", "Chi nhánh C"],
      },
    ],
    promotionalBannerUrl:
      "https://i.pinimg.com/736x/fc/19/97/fc1997f4b12fd166aec387e95d63a32c.jpg",
  },

   // phòng khám đa khoa Hoàn Đức

   {
    id: "3",
    name: "Phòng Khám Nha Khoa Hoàn Đức",
    address: "123 Đường ABC, Quận XYZ, Thành phố ABC",
    imageUrl:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/441970434_975078874086189_7018726492143132777_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHjPeVhY4amSbrttoVV9Y8kujdSh7j_z6S6N1KHuP_PpPw6mgY5DgFU4pCmVF-ucQZuezY3Nixsf2t6jx1W_9S8&_nc_ohc=uRh7dJjNU4MQ7kNvgGvdahp&_nc_ht=scontent.fsgn8-3.fna&oh=03_Q7cD1QF2Wgglb20fDo8ZqMjCi6vV_5jpuUN0X34PM99VbDbb3g&oe=6682194F",
    bannerUrl:
      "https://i.pinimg.com/originals/90/8e/f8/908ef8540020aba6f10370a8d91e6213.jpg", // Add your specific banner URL here
    info: "Thông tin chi tiết về phòng khám Hoàn Mỹ...",
    priceList: [
      { serviceName: "Chụp X-quang", price: "500.000 VND" },
      { serviceName: "Niềng Răng", price: "10.000.000 VND" },
      { serviceName: "Trám Răng", price: "1.000.000 VND" },
      // Thêm các dịch vụ khác nếu cần
    ],
    introduction: (
      <div>
        <p>
          Nhắc đến thương hiệu nha khoa chất lượng, được khách hàng tin tưởng
          đánh giá cao hiện nay không thể không kể đến phòng khám Nha khoa
          Paris. Để cung cấp dịch vụ tốt nhất cho khách hàng, Paris chú trọng
          tuyển chọn các bác sĩ tài giỏi, hệ thống máy móc thiết bị tối tân.
        </p>
        <p>
          Phòng khám Nha khoa Paris có nhiều lợi thế cạnh tranh so với các đơn
          vị khác, có thể kể đến như::
          <ul>
            Quy tụ đội ngũ y bác sĩ, chuyên gia giỏi hơn 20 năm kinh nghiệm,
            được đào tạo bài bản, nhiệt tình với bệnh nhân, có trách nhiệm với
            công việc, đã từng xử lý thành công hàng ngàn trường hợp từ đơn giản
            đến phức tạp.{" "}
          </ul>
          <ul>
            Nha khoa Paris đầu tư hệ thống cơ sở vật chất hiện đại, ứng dụng
            công nghệ thông minh trong quá trình thăm khám, điều trị răng miệng
            cho khách hàng: Công nghệ trồng răng Implant 4S, công nghệ niềng
            răng 3D Speed, bọc răng sứ Nano 5S,…
          </ul>
          <ul>
            Quy trình khám, điều trị bệnh, phục hình răng, thẩm mỹ răng cho
            khách hàng diễn ra nhanh chóng nhưng vẫn đảm bảo đúng chuẩn Y khoa.
            Đặc biệt các dụng cụ, thiết bị, phóng nha được vô trùng, khử khuẩn
            thường xuyên.
          </ul>
        </p>
        <img
          src="https://videntalkid.com/wp-content/uploads/2022/05/phong-kham-nha-khoa-da-lat.jpg"
          alt="mô_tả_ảnh"
          style={{
            maxWidth: "100%" /* Kích thước tối đa là 100% của phần tử chứa */,
            height:
              "auto" /* Chiều cao tự động điều chỉnh để giữ tỷ lệ khung hình */,
            display: "block" /* Đảm bảo hình ảnh căn giữa trong khung */,
            margin: "auto" /* Căn giữa hình ảnh trong khung */,
          }}
        />
        <p>
          Dịch vụ tại nha khoa Paris đạt tiêu chuẩn châu Âu, bởi vậy 100% khách
          hàng đến đây đều cảm thấy hài lòng vì được chăm sóc tận tình và có
          được hàm răng trắng sáng, đều đẹp, chắc khỏe. Tuy nhiên đây cũng là lý
          do các dịch vụ tại đây có giá thành cao hơn những đơn vị khác, vì vậy
          bạn nên cân nhắc khi có nhu cầu thăm khám, điều trị bệnh lý răng miệng
        </p>
      </div>
    ),
    reviews: "Đánh giá của bệnh nhân về phòng khám Hoàn Mỹ...",
    workingHours: {
      Monday: "9:00 - 16:45",
      Tuesday: "9:00 - 16:45",
      Wednesday: "9:00 - 16:45",
      Thursday: "9:00 - 16:45",
      Friday: "9:00 - 16:45",
      Saturday:"9:00 - 16:45",
      Sunday:"9:00 - 16:45",
    },
    customInfo:
      "Phòng khám Nha khoa Paris là hệ thống nha khoa hoạt động theo tiêu chuẩn Pháp đầu tiên ở Việt Nam, cung cấp dịch vụ chất lượng hàng đầu. Đơn vị này được thành lập từ năm 2014 cho đến hiện tại đã có nhiều chi nhánh trải dài khắp các tỉnh thành trên toàn quốc. Hiện tại, Nha khoa Paris đang ngày càng khẳng định mình, vượt qua nhiều trung tâm nha khoa lâu đời, nhận được sự đánh giá cao của giới chuyên gia và đông đảo khách hàng.",
    branch: [
      {
        city: "Hà Nội",
        addresses: [
          "Số nhà 43 – 45- 47 Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội",
        ],
      },
      {
        city: "Hồ Chí Minh",
        addresses: ["Chi nhánh A", "Chi nhánh B", "Chi nhánh C"],
      },
    ],
    promotionalBannerUrl:
      "https://i.pinimg.com/736x/fc/19/97/fc1997f4b12fd166aec387e95d63a32c.jpg",
  },
  // phòng khám nha khoa Việt Đức
  {
    id: "4",
    name: "Phòng Khám Nha Khoa Việt Đức",
    address: "123 Đường ABC, Quận XYZ, Thành phố ABC",
    imageUrl:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/441878691_992553398906654_3503001375719588665_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFJBYU69R5J36gdZHcp4yFBq47-2pg5Zv6rjv7amDlm_uVQL3MkPmpbTdYyqrQmNfbuINu9FAoI9fF7oR3dayVb&_nc_ohc=mZYP8zSpDnsQ7kNvgHPVHWu&_nc_ht=scontent.fsgn8-3.fna&oh=03_Q7cD1QGaKB8oczbkyfebxZwYphyvJNle0qVVIZ23D9cTAS8DOQ&oe=66821E5E",
    bannerUrl:
      "https://i.pinimg.com/originals/90/8e/f8/908ef8540020aba6f10370a8d91e6213.jpg", // Add your specific banner URL here
    info: "Thông tin chi tiết về phòng khám Hoàn Mỹ...",
    priceList: [
      { serviceName: "Chụp X-quang", price: "500.000 VND" },
      { serviceName: "Niềng Răng", price: "10.000.000 VND" },
      { serviceName: "Trám Răng", price: "1.000.000 VND" },
      // Thêm các dịch vụ khác nếu cần
    ],
    introduction: (
      <div>
        <p>
          Nhắc đến thương hiệu nha khoa chất lượng, được khách hàng tin tưởng
          đánh giá cao hiện nay không thể không kể đến phòng khám Nha khoa
          Paris. Để cung cấp dịch vụ tốt nhất cho khách hàng, Paris chú trọng
          tuyển chọn các bác sĩ tài giỏi, hệ thống máy móc thiết bị tối tân.
        </p>
        <p>
          Phòng khám Nha khoa Paris có nhiều lợi thế cạnh tranh so với các đơn
          vị khác, có thể kể đến như::
          <ul>
            Quy tụ đội ngũ y bác sĩ, chuyên gia giỏi hơn 20 năm kinh nghiệm,
            được đào tạo bài bản, nhiệt tình với bệnh nhân, có trách nhiệm với
            công việc, đã từng xử lý thành công hàng ngàn trường hợp từ đơn giản
            đến phức tạp.{" "}
          </ul>
          <ul>
            Nha khoa Paris đầu tư hệ thống cơ sở vật chất hiện đại, ứng dụng
            công nghệ thông minh trong quá trình thăm khám, điều trị răng miệng
            cho khách hàng: Công nghệ trồng răng Implant 4S, công nghệ niềng
            răng 3D Speed, bọc răng sứ Nano 5S,…
          </ul>
          <ul>
            Quy trình khám, điều trị bệnh, phục hình răng, thẩm mỹ răng cho
            khách hàng diễn ra nhanh chóng nhưng vẫn đảm bảo đúng chuẩn Y khoa.
            Đặc biệt các dụng cụ, thiết bị, phóng nha được vô trùng, khử khuẩn
            thường xuyên.
          </ul>
        </p>
        <img
          src="https://videntalkid.com/wp-content/uploads/2022/05/phong-kham-nha-khoa-da-lat.jpg"
          alt="mô_tả_ảnh"
          style={{
            maxWidth: "100%" /* Kích thước tối đa là 100% của phần tử chứa */,
            height:
              "auto" /* Chiều cao tự động điều chỉnh để giữ tỷ lệ khung hình */,
            display: "block" /* Đảm bảo hình ảnh căn giữa trong khung */,
            margin: "auto" /* Căn giữa hình ảnh trong khung */,
          }}
        />
        <p>
          Dịch vụ tại nha khoa Paris đạt tiêu chuẩn châu Âu, bởi vậy 100% khách
          hàng đến đây đều cảm thấy hài lòng vì được chăm sóc tận tình và có
          được hàm răng trắng sáng, đều đẹp, chắc khỏe. Tuy nhiên đây cũng là lý
          do các dịch vụ tại đây có giá thành cao hơn những đơn vị khác, vì vậy
          bạn nên cân nhắc khi có nhu cầu thăm khám, điều trị bệnh lý răng miệng
        </p>
      </div>
    ),
    reviews: "Đánh giá của bệnh nhân về phòng khám Hoàn Mỹ...",
    workingHours: {
      Monday: "9:00 - 16:45",
      Tuesday:"9:00 - 16:45",
      Wednesday: "9:00 - 16:45",
      Thursday: "9:00 - 16:45",
      Friday: "9:00 - 16:45",
      Saturday: "9:00 - 16:45",
      Sunday:"9:00 - 16:45",
    },
    customInfo:
      "Phòng khám Nha khoa Paris là hệ thống nha khoa hoạt động theo tiêu chuẩn Pháp đầu tiên ở Việt Nam, cung cấp dịch vụ chất lượng hàng đầu. Đơn vị này được thành lập từ năm 2014 cho đến hiện tại đã có nhiều chi nhánh trải dài khắp các tỉnh thành trên toàn quốc. Hiện tại, Nha khoa Paris đang ngày càng khẳng định mình, vượt qua nhiều trung tâm nha khoa lâu đời, nhận được sự đánh giá cao của giới chuyên gia và đông đảo khách hàng.",
    branch: [
      {
        city: "Hà Nội",
        addresses: [
          "Số nhà 43 – 45- 47 Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội",
        ],
      },
      {
        city: "Hồ Chí Minh",
        addresses: ["Chi nhánh A", "Chi nhánh B", "Chi nhánh C"],
      },
    ],
    promotionalBannerUrl:
      "https://i.pinimg.com/736x/fc/19/97/fc1997f4b12fd166aec387e95d63a32c.jpg",
  },

  // nha khoa an khang

  {
    id: "5",
    name: "Phòng Khám Nha Khoa An Khang",
    address: "123 Đường ABC, Quận XYZ, Thành phố ABC",
    imageUrl:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/441430100_1046394960398612_3144834902948941647_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHa796l-Ea4VWHtnIp66_qLMRnUZq2EwIwxGdRmrYTAjNUWHzgjiaolBKHrlgdwVF5AJD13sm1O7HZ4MUPXiOjA&_nc_ohc=9y8XKhVs4Q4Q7kNvgGNe0RK&_nc_ht=scontent.fsgn8-3.fna&oh=03_Q7cD1QHkloBApKqJdNlNWHbyp_6lBfjJCn0TL3k-avMVxTAohg&oe=668243D4",
    bannerUrl:
      "https://i.pinimg.com/originals/90/8e/f8/908ef8540020aba6f10370a8d91e6213.jpg", // Add your specific banner URL here
    info: "Thông tin chi tiết về phòng khám Hoàn Mỹ...",
    priceList: [
      { serviceName: "Chụp X-quang", price: "500.000 VND" },
      { serviceName: "Niềng Răng", price: "10.000.000 VND" },
      { serviceName: "Trám Răng", price: "1.000.000 VND" },
      // Thêm các dịch vụ khác nếu cần
    ],
    introduction: (
      <div>
        <p>
          Nhắc đến thương hiệu nha khoa chất lượng, được khách hàng tin tưởng
          đánh giá cao hiện nay không thể không kể đến phòng khám Nha khoa
          Paris. Để cung cấp dịch vụ tốt nhất cho khách hàng, Paris chú trọng
          tuyển chọn các bác sĩ tài giỏi, hệ thống máy móc thiết bị tối tân.
        </p>
        <p>
          Phòng khám Nha khoa Paris có nhiều lợi thế cạnh tranh so với các đơn
          vị khác, có thể kể đến như::
          <ul>
            Quy tụ đội ngũ y bác sĩ, chuyên gia giỏi hơn 20 năm kinh nghiệm,
            được đào tạo bài bản, nhiệt tình với bệnh nhân, có trách nhiệm với
            công việc, đã từng xử lý thành công hàng ngàn trường hợp từ đơn giản
            đến phức tạp.{" "}
          </ul>
          <ul>
            Nha khoa Paris đầu tư hệ thống cơ sở vật chất hiện đại, ứng dụng
            công nghệ thông minh trong quá trình thăm khám, điều trị răng miệng
            cho khách hàng: Công nghệ trồng răng Implant 4S, công nghệ niềng
            răng 3D Speed, bọc răng sứ Nano 5S,…
          </ul>
          <ul>
            Quy trình khám, điều trị bệnh, phục hình răng, thẩm mỹ răng cho
            khách hàng diễn ra nhanh chóng nhưng vẫn đảm bảo đúng chuẩn Y khoa.
            Đặc biệt các dụng cụ, thiết bị, phóng nha được vô trùng, khử khuẩn
            thường xuyên.
          </ul>
        </p>
        <img
          src="https://videntalkid.com/wp-content/uploads/2022/05/phong-kham-nha-khoa-da-lat.jpg"
          alt="mô_tả_ảnh"
          style={{
            maxWidth: "100%" /* Kích thước tối đa là 100% của phần tử chứa */,
            height:
              "auto" /* Chiều cao tự động điều chỉnh để giữ tỷ lệ khung hình */,
            display: "block" /* Đảm bảo hình ảnh căn giữa trong khung */,
            margin: "auto" /* Căn giữa hình ảnh trong khung */,
          }}
        />
        <p>
          Dịch vụ tại nha khoa Paris đạt tiêu chuẩn châu Âu, bởi vậy 100% khách
          hàng đến đây đều cảm thấy hài lòng vì được chăm sóc tận tình và có
          được hàm răng trắng sáng, đều đẹp, chắc khỏe. Tuy nhiên đây cũng là lý
          do các dịch vụ tại đây có giá thành cao hơn những đơn vị khác, vì vậy
          bạn nên cân nhắc khi có nhu cầu thăm khám, điều trị bệnh lý răng miệng
        </p>
      </div>
    ),
    reviews: "Đánh giá của bệnh nhân về phòng khám Hoàn Mỹ...",
    workingHours: {
      Monday: "9:00 - 16:45",
      Tuesday: "9:00 - 16:45",
      Wednesday:"9:00 - 16:45",
      Thursday: "9:00 - 16:45",
      Friday: "9:00 - 16:45",
      Saturday:"9:00 - 16:45",
      Sunday: "9:00 - 16:45",
    },
    customInfo:
      "Phòng khám Nha khoa Paris là hệ thống nha khoa hoạt động theo tiêu chuẩn Pháp đầu tiên ở Việt Nam, cung cấp dịch vụ chất lượng hàng đầu. Đơn vị này được thành lập từ năm 2014 cho đến hiện tại đã có nhiều chi nhánh trải dài khắp các tỉnh thành trên toàn quốc. Hiện tại, Nha khoa Paris đang ngày càng khẳng định mình, vượt qua nhiều trung tâm nha khoa lâu đời, nhận được sự đánh giá cao của giới chuyên gia và đông đảo khách hàng.",
    branch: [
      {
        city: "Hà Nội",
        addresses: [
          "Số nhà 43 – 45- 47 Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội",
        ],
      },
      {
        city: "Hồ Chí Minh",
        addresses: ["Chi nhánh A", "Chi nhánh B", "Chi nhánh C"],
      },
    ],
    promotionalBannerUrl:
      "https://i.pinimg.com/736x/fc/19/97/fc1997f4b12fd166aec387e95d63a32c.jpg",
  },

  // nha khoa Minh ANh

  {
    id: "6",
    name: "Phòng Khám Nha Khoa Minh Anh",
    address: "123 Đường ABC, Quận XYZ, Thành phố ABC",
    imageUrl:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/436598471_364760372847121_1673039326175247814_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEF-9AVMRKiWyZoP6Xh01ohyAqEuTs7AabICoS5OzsBppwbYgKOXTiTDlhYTHI7lgJcTjKAkwP8Sc6X_ek2oc64&_nc_ohc=_ci-HoYdw8AQ7kNvgHul1IK&_nc_ht=scontent.fsgn8-3.fna&oh=03_Q7cD1QEme-HjF6zX--eK22phTTCqoOzyeDHmT6O2gsH-51_bhg&oe=66821B1E",
    bannerUrl:
      "https://i.pinimg.com/originals/90/8e/f8/908ef8540020aba6f10370a8d91e6213.jpg", // Add your specific banner URL here
    info: "Thông tin chi tiết về phòng khám Hoàn Mỹ...",
    priceList: [
      { serviceName: "Chụp X-quang", price: "500.000 VND" },
      { serviceName: "Niềng Răng", price: "10.000.000 VND" },
      { serviceName: "Trám Răng", price: "1.000.000 VND" },
      // Thêm các dịch vụ khác nếu cần
    ],
    introduction: (
      <div>
        <p>
          Nhắc đến thương hiệu nha khoa chất lượng, được khách hàng tin tưởng
          đánh giá cao hiện nay không thể không kể đến phòng khám Nha khoa
          Paris. Để cung cấp dịch vụ tốt nhất cho khách hàng, Paris chú trọng
          tuyển chọn các bác sĩ tài giỏi, hệ thống máy móc thiết bị tối tân.
        </p>
        <p>
          Phòng khám Nha khoa Paris có nhiều lợi thế cạnh tranh so với các đơn
          vị khác, có thể kể đến như::
          <ul>
            Quy tụ đội ngũ y bác sĩ, chuyên gia giỏi hơn 20 năm kinh nghiệm,
            được đào tạo bài bản, nhiệt tình với bệnh nhân, có trách nhiệm với
            công việc, đã từng xử lý thành công hàng ngàn trường hợp từ đơn giản
            đến phức tạp.{" "}
          </ul>
          <ul>
            Nha khoa Paris đầu tư hệ thống cơ sở vật chất hiện đại, ứng dụng
            công nghệ thông minh trong quá trình thăm khám, điều trị răng miệng
            cho khách hàng: Công nghệ trồng răng Implant 4S, công nghệ niềng
            răng 3D Speed, bọc răng sứ Nano 5S,…
          </ul>
          <ul>
            Quy trình khám, điều trị bệnh, phục hình răng, thẩm mỹ răng cho
            khách hàng diễn ra nhanh chóng nhưng vẫn đảm bảo đúng chuẩn Y khoa.
            Đặc biệt các dụng cụ, thiết bị, phóng nha được vô trùng, khử khuẩn
            thường xuyên.
          </ul>
        </p>
        <img
          src="https://videntalkid.com/wp-content/uploads/2022/05/phong-kham-nha-khoa-da-lat.jpg"
          alt="mô_tả_ảnh"
          style={{
            maxWidth: "100%" /* Kích thước tối đa là 100% của phần tử chứa */,
            height:
              "auto" /* Chiều cao tự động điều chỉnh để giữ tỷ lệ khung hình */,
            display: "block" /* Đảm bảo hình ảnh căn giữa trong khung */,
            margin: "auto" /* Căn giữa hình ảnh trong khung */,
          }}
        />
        <p>
          Dịch vụ tại nha khoa Paris đạt tiêu chuẩn châu Âu, bởi vậy 100% khách
          hàng đến đây đều cảm thấy hài lòng vì được chăm sóc tận tình và có
          được hàm răng trắng sáng, đều đẹp, chắc khỏe. Tuy nhiên đây cũng là lý
          do các dịch vụ tại đây có giá thành cao hơn những đơn vị khác, vì vậy
          bạn nên cân nhắc khi có nhu cầu thăm khám, điều trị bệnh lý răng miệng
        </p>
      </div>
    ),
    reviews: "Đánh giá của bệnh nhân về phòng khám Hoàn Mỹ...",
    workingHours: {
      Monday: "9:00 - 16:45",
      Tuesday: "9:00 - 16:45",
      Wednesday: "9:00 - 16:45",
      Thursday: "9:00 - 16:45",
      Friday: "9:00 - 16:45",
      Saturday: "9:00 - 16:45",
      Sunday: "9:00 - 16:45",
    },
    customInfo:
      "Phòng khám Nha khoa Paris là hệ thống nha khoa hoạt động theo tiêu chuẩn Pháp đầu tiên ở Việt Nam, cung cấp dịch vụ chất lượng hàng đầu. Đơn vị này được thành lập từ năm 2014 cho đến hiện tại đã có nhiều chi nhánh trải dài khắp các tỉnh thành trên toàn quốc. Hiện tại, Nha khoa Paris đang ngày càng khẳng định mình, vượt qua nhiều trung tâm nha khoa lâu đời, nhận được sự đánh giá cao của giới chuyên gia và đông đảo khách hàng.",
    branch: [
      {
        city: "Hà Nội",
        addresses: [
          "Số nhà 43 – 45- 47 Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội",
        ],
      },
      {
        city: "Hồ Chí Minh",
        addresses: ["Chi nhánh A", "Chi nhánh B", "Chi nhánh C"],
      },
    ],
    promotionalBannerUrl:
      "https://i.pinimg.com/736x/fc/19/97/fc1997f4b12fd166aec387e95d63a32c.jpg",
  },

  //

  {
    id: "9",
    name: "Phòng Khám Nha Khoa KEITHSTON",
    address: "123 Đường ABC, Quận XYZ, Thành phố ABC",
    imageUrl:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/441624617_849700293684650_7981928198624493428_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG-MRDChMN_IOyvHmY3rF6bzspSCXMIBt7OylIJcwgG3lK-3gKI0glVek8yNhslZBRfdf8qp6S8DjCrS-dDz-sT&_nc_ohc=OaXIwXeq6k4Q7kNvgHQqG0H&_nc_ht=scontent.fsgn8-3.fna&oh=03_Q7cD1QG1LJYdTWLWR7klM6EOjfYOUHFpmmEUbSeVkifaC0EEFg&oe=668248CD",
    bannerUrl:
      "https://i.pinimg.com/originals/90/8e/f8/908ef8540020aba6f10370a8d91e6213.jpg", // Add your specific banner URL here
    info: "Thông tin chi tiết về phòng khám Hoàn Mỹ...",
    priceList: [
      { serviceName: "Chụp X-quang", price: "500.000 VND" },
      { serviceName: "Niềng Răng", price: "10.000.000 VND" },
      { serviceName: "Trám Răng", price: "1.000.000 VND" },
      // Thêm các dịch vụ khác nếu cần
    ],
    introduction: (
      <div>
        <p>
          Nhắc đến thương hiệu nha khoa chất lượng, được khách hàng tin tưởng
          đánh giá cao hiện nay không thể không kể đến phòng khám Nha khoa
          Paris. Để cung cấp dịch vụ tốt nhất cho khách hàng, Paris chú trọng
          tuyển chọn các bác sĩ tài giỏi, hệ thống máy móc thiết bị tối tân.
        </p>
        <p>
          Phòng khám Nha khoa Paris có nhiều lợi thế cạnh tranh so với các đơn
          vị khác, có thể kể đến như::
          <ul>
            Quy tụ đội ngũ y bác sĩ, chuyên gia giỏi hơn 20 năm kinh nghiệm,
            được đào tạo bài bản, nhiệt tình với bệnh nhân, có trách nhiệm với
            công việc, đã từng xử lý thành công hàng ngàn trường hợp từ đơn giản
            đến phức tạp.{" "}
          </ul>
          <ul>
            Nha khoa Paris đầu tư hệ thống cơ sở vật chất hiện đại, ứng dụng
            công nghệ thông minh trong quá trình thăm khám, điều trị răng miệng
            cho khách hàng: Công nghệ trồng răng Implant 4S, công nghệ niềng
            răng 3D Speed, bọc răng sứ Nano 5S,…
          </ul>
          <ul>
            Quy trình khám, điều trị bệnh, phục hình răng, thẩm mỹ răng cho
            khách hàng diễn ra nhanh chóng nhưng vẫn đảm bảo đúng chuẩn Y khoa.
            Đặc biệt các dụng cụ, thiết bị, phóng nha được vô trùng, khử khuẩn
            thường xuyên.
          </ul>
        </p>
        <img
          src="https://videntalkid.com/wp-content/uploads/2022/05/phong-kham-nha-khoa-da-lat.jpg"
          alt="mô_tả_ảnh"
          style={{
            maxWidth: "100%" /* Kích thước tối đa là 100% của phần tử chứa */,
            height:
              "auto" /* Chiều cao tự động điều chỉnh để giữ tỷ lệ khung hình */,
            display: "block" /* Đảm bảo hình ảnh căn giữa trong khung */,
            margin: "auto" /* Căn giữa hình ảnh trong khung */,
          }}
        />
        <p>
          Dịch vụ tại nha khoa Paris đạt tiêu chuẩn châu Âu, bởi vậy 100% khách
          hàng đến đây đều cảm thấy hài lòng vì được chăm sóc tận tình và có
          được hàm răng trắng sáng, đều đẹp, chắc khỏe. Tuy nhiên đây cũng là lý
          do các dịch vụ tại đây có giá thành cao hơn những đơn vị khác, vì vậy
          bạn nên cân nhắc khi có nhu cầu thăm khám, điều trị bệnh lý răng miệng
        </p>
      </div>
    ),
    reviews: "Đánh giá của bệnh nhân về phòng khám Hoàn Mỹ...",
    workingHours: {
      Monday: "9:00 - 16:45",
      Tuesday: "9:00 - 16:45",
      Wednesday: "9:00 - 16:45",
      Thursday: "9:00 - 16:45",
      Friday: "9:00 - 16:45",
      Saturday: "9:00 - 16:45",
      Sunday: "9:00 - 16:45",
    },
    customInfo:
      "Phòng khám Nha khoa Paris là hệ thống nha khoa hoạt động theo tiêu chuẩn Pháp đầu tiên ở Việt Nam, cung cấp dịch vụ chất lượng hàng đầu. Đơn vị này được thành lập từ năm 2014 cho đến hiện tại đã có nhiều chi nhánh trải dài khắp các tỉnh thành trên toàn quốc. Hiện tại, Nha khoa Paris đang ngày càng khẳng định mình, vượt qua nhiều trung tâm nha khoa lâu đời, nhận được sự đánh giá cao của giới chuyên gia và đông đảo khách hàng.",
    branch: [
      {
        city: "Hà Nội",
        addresses: [
          "Số nhà 43 – 45- 47 Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội",
        ],
      },
      {
        city: "Hồ Chí Minh",
        addresses: ["Chi nhánh A", "Chi nhánh B", "Chi nhánh C"],
      },
    ],
    promotionalBannerUrl:
      "https://i.pinimg.com/736x/fc/19/97/fc1997f4b12fd166aec387e95d63a32c.jpg",
  },

  //

  {
    id: "7",
    name: "Phòng Khám Nha Khoa Hạnh Phúc",
    address: "123 Đường ABC, Quận XYZ, Thành phố ABC",
    imageUrl:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/441675143_415176841417122_3312564799220751499_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGa0u_YulFCMzNBZlaGVGwxv3TCmx5Ltse_dMKbHku2x_92z_vqC-2hOK-niFzXBxN24mUZ03WsrPPVG1wUfO-A&_nc_ohc=ujYjJOVGKbwQ7kNvgFovOV0&_nc_ht=scontent.fsgn8-3.fna&oh=03_Q7cD1QEKLoNkWsDk6gyhBakN4WVD6ZwDux78CPFc-2Ky3EZESg&oe=66821949",
    bannerUrl:
      "https://i.pinimg.com/originals/90/8e/f8/908ef8540020aba6f10370a8d91e6213.jpg", // Add your specific banner URL here
    info: "Thông tin chi tiết về phòng khám Hoàn Mỹ...",
    priceList: [
      { serviceName: "Chụp X-quang", price: "500.000 VND" },
      { serviceName: "Niềng Răng", price: "10.000.000 VND" },
      { serviceName: "Trám Răng", price: "1.000.000 VND" },
      // Thêm các dịch vụ khác nếu cần
    ],
    introduction: (
      <div>
        <p>
          Nhắc đến thương hiệu nha khoa chất lượng, được khách hàng tin tưởng
          đánh giá cao hiện nay không thể không kể đến phòng khám Nha khoa
          Paris. Để cung cấp dịch vụ tốt nhất cho khách hàng, Paris chú trọng
          tuyển chọn các bác sĩ tài giỏi, hệ thống máy móc thiết bị tối tân.
        </p>
        <p>
          Phòng khám Nha khoa Paris có nhiều lợi thế cạnh tranh so với các đơn
          vị khác, có thể kể đến như::
          <ul>
            Quy tụ đội ngũ y bác sĩ, chuyên gia giỏi hơn 20 năm kinh nghiệm,
            được đào tạo bài bản, nhiệt tình với bệnh nhân, có trách nhiệm với
            công việc, đã từng xử lý thành công hàng ngàn trường hợp từ đơn giản
            đến phức tạp.{" "}
          </ul>
          <ul>
            Nha khoa Paris đầu tư hệ thống cơ sở vật chất hiện đại, ứng dụng
            công nghệ thông minh trong quá trình thăm khám, điều trị răng miệng
            cho khách hàng: Công nghệ trồng răng Implant 4S, công nghệ niềng
            răng 3D Speed, bọc răng sứ Nano 5S,…
          </ul>
          <ul>
            Quy trình khám, điều trị bệnh, phục hình răng, thẩm mỹ răng cho
            khách hàng diễn ra nhanh chóng nhưng vẫn đảm bảo đúng chuẩn Y khoa.
            Đặc biệt các dụng cụ, thiết bị, phóng nha được vô trùng, khử khuẩn
            thường xuyên.
          </ul>
        </p>
        <img
          src="https://videntalkid.com/wp-content/uploads/2022/05/phong-kham-nha-khoa-da-lat.jpg"
          alt="mô_tả_ảnh"
          style={{
            maxWidth: "100%" /* Kích thước tối đa là 100% của phần tử chứa */,
            height:
              "auto" /* Chiều cao tự động điều chỉnh để giữ tỷ lệ khung hình */,
            display: "block" /* Đảm bảo hình ảnh căn giữa trong khung */,
            margin: "auto" /* Căn giữa hình ảnh trong khung */,
          }}
        />
        <p>
          Dịch vụ tại nha khoa Paris đạt tiêu chuẩn châu Âu, bởi vậy 100% khách
          hàng đến đây đều cảm thấy hài lòng vì được chăm sóc tận tình và có
          được hàm răng trắng sáng, đều đẹp, chắc khỏe. Tuy nhiên đây cũng là lý
          do các dịch vụ tại đây có giá thành cao hơn những đơn vị khác, vì vậy
          bạn nên cân nhắc khi có nhu cầu thăm khám, điều trị bệnh lý răng miệng
        </p>
      </div>
    ),
    reviews: "Đánh giá của bệnh nhân về phòng khám Hoàn Mỹ...",
    workingHours: {
      Monday: "9:00 - 16:45",
      Tuesday: "9:00 - 16:45",
      Wednesday: "9:00 - 16:45",
      Thursday: "9:00 - 16:45",
      Friday: "9:00 - 16:45",
      Saturday: "9:00 - 16:45",
      Sunday: "9:00 - 16:45",
    },
    customInfo:
      "Phòng khám Nha khoa Paris là hệ thống nha khoa hoạt động theo tiêu chuẩn Pháp đầu tiên ở Việt Nam, cung cấp dịch vụ chất lượng hàng đầu. Đơn vị này được thành lập từ năm 2014 cho đến hiện tại đã có nhiều chi nhánh trải dài khắp các tỉnh thành trên toàn quốc. Hiện tại, Nha khoa Paris đang ngày càng khẳng định mình, vượt qua nhiều trung tâm nha khoa lâu đời, nhận được sự đánh giá cao của giới chuyên gia và đông đảo khách hàng.",
    branch: [
      {
        city: "Hà Nội",
        addresses: [
          "Số nhà 43 – 45- 47 Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội",
        ],
      },
      {
        city: "Hồ Chí Minh",
        addresses: ["Chi nhánh A", "Chi nhánh B", "Chi nhánh C"],
      },
    ],
    promotionalBannerUrl:
      "https://i.pinimg.com/736x/fc/19/97/fc1997f4b12fd166aec387e95d63a32c.jpg",
  },
  //

  {
    id: "8",
    name: "Phòng Khám Nha Khoa Khang",
    address: "123 Đường ABC, Quận XYZ, Thành phố ABC",
    imageUrl:
      "https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.15752-9/441624615_1000418768364244_5663026124341369403_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEz8l4PYea6eHpQMqEKlUPoWa81gBxZ9CtZrzWAHFn0K8sN9xQpReAeHfAnIL92XdlDVk8MeUqTrZfTUTlKVJs5&_nc_ohc=zwSflMUhDLAQ7kNvgHvVBNN&_nc_ht=scontent.fsgn8-3.fna&oh=03_Q7cD1QHD_HF4vyBqG21uMvlwXfd48c0V0R6tWeH8Pl-I0VaHWw&oe=66822B7E",
    bannerUrl:
      "https://i.pinimg.com/originals/90/8e/f8/908ef8540020aba6f10370a8d91e6213.jpg", // Add your specific banner URL here
    info: "Thông tin chi tiết về phòng khám Hoàn Mỹ...",
    priceList: [
      { serviceName: "Chụp X-quang", price: "500.000 VND" },
      { serviceName: "Niềng Răng", price: "10.000.000 VND" },
      { serviceName: "Trám Răng", price: "1.000.000 VND" },
      // Thêm các dịch vụ khác nếu cần
    ],
    introduction: (
      <div>
        <p>
          Nhắc đến thương hiệu nha khoa chất lượng, được khách hàng tin tưởng
          đánh giá cao hiện nay không thể không kể đến phòng khám Nha khoa
          Paris. Để cung cấp dịch vụ tốt nhất cho khách hàng, Paris chú trọng
          tuyển chọn các bác sĩ tài giỏi, hệ thống máy móc thiết bị tối tân.
        </p>
        <p>
          Phòng khám Nha khoa Paris có nhiều lợi thế cạnh tranh so với các đơn
          vị khác, có thể kể đến như::
          <ul>
            Quy tụ đội ngũ y bác sĩ, chuyên gia giỏi hơn 20 năm kinh nghiệm,
            được đào tạo bài bản, nhiệt tình với bệnh nhân, có trách nhiệm với
            công việc, đã từng xử lý thành công hàng ngàn trường hợp từ đơn giản
            đến phức tạp.{" "}
          </ul>
          <ul>
            Nha khoa Paris đầu tư hệ thống cơ sở vật chất hiện đại, ứng dụng
            công nghệ thông minh trong quá trình thăm khám, điều trị răng miệng
            cho khách hàng: Công nghệ trồng răng Implant 4S, công nghệ niềng
            răng 3D Speed, bọc răng sứ Nano 5S,…
          </ul>
          <ul>
            Quy trình khám, điều trị bệnh, phục hình răng, thẩm mỹ răng cho
            khách hàng diễn ra nhanh chóng nhưng vẫn đảm bảo đúng chuẩn Y khoa.
            Đặc biệt các dụng cụ, thiết bị, phóng nha được vô trùng, khử khuẩn
            thường xuyên.
          </ul>
        </p>
        <img
          src="https://videntalkid.com/wp-content/uploads/2022/05/phong-kham-nha-khoa-da-lat.jpg"
          alt="mô_tả_ảnh"
          style={{
            maxWidth: "100%" /* Kích thước tối đa là 100% của phần tử chứa */,
            height:
              "auto" /* Chiều cao tự động điều chỉnh để giữ tỷ lệ khung hình */,
            display: "block" /* Đảm bảo hình ảnh căn giữa trong khung */,
            margin: "auto" /* Căn giữa hình ảnh trong khung */,
          }}
        />
        <p>
          Dịch vụ tại nha khoa Paris đạt tiêu chuẩn châu Âu, bởi vậy 100% khách
          hàng đến đây đều cảm thấy hài lòng vì được chăm sóc tận tình và có
          được hàm răng trắng sáng, đều đẹp, chắc khỏe. Tuy nhiên đây cũng là lý
          do các dịch vụ tại đây có giá thành cao hơn những đơn vị khác, vì vậy
          bạn nên cân nhắc khi có nhu cầu thăm khám, điều trị bệnh lý răng miệng
        </p>
      </div>
    ),
    reviews: "Đánh giá của bệnh nhân về phòng khám Hoàn Mỹ...",
    workingHours: {
      Monday: "9:00 - 16:45",
      Tuesday: "9:00 - 16:45",
      Wednesday: "9:00 - 16:45",
      Thursday: "9:00 - 16:45",
      Friday: "9:00 - 16:45",
      Saturday: "9:00 - 16:45",
      Sunday: "9:00 - 16:45",
    },
    customInfo:
      "Phòng khám Nha khoa Paris là hệ thống nha khoa hoạt động theo tiêu chuẩn Pháp đầu tiên ở Việt Nam, cung cấp dịch vụ chất lượng hàng đầu. Đơn vị này được thành lập từ năm 2014 cho đến hiện tại đã có nhiều chi nhánh trải dài khắp các tỉnh thành trên toàn quốc. Hiện tại, Nha khoa Paris đang ngày càng khẳng định mình, vượt qua nhiều trung tâm nha khoa lâu đời, nhận được sự đánh giá cao của giới chuyên gia và đông đảo khách hàng.",
    branch: [
      {
        city: "Hà Nội",
        addresses: [
          "Số nhà 43 – 45- 47 Nguyễn Hoàng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội",
        ],
      },
      {
        city: "Hồ Chí Minh",
        addresses: ["Chi nhánh A", "Chi nhánh B", "Chi nhánh C"],
      },
    ],
    promotionalBannerUrl:
      "https://i.pinimg.com/736x/fc/19/97/fc1997f4b12fd166aec387e95d63a32c.jpg",
  },
];

export default brandsData;
