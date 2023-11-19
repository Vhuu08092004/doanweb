const btnDetail = document.querySelectorAll(".detail");
// const detail = document.querySelector(".detail-product");

const products = [
    {
        id: 0,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Classic/M5039-300x300.jpg",
        type: "Classic",
        description:
          "Giữ nguyên thiết kế của dòng Converse Classic cổ điển, kết hợp cùng tone màu full đen thời thượng và chất liệu vải Canvas mỏng nhẹ khiến đôi chân bạn luôn dễ chịu trong từng  bước đi. Sở hữu sản phẩm này bạn hoàn toàn có thể yên tâm về chất lượng cũng như khả năng mix-macth với nhiều phong cách từ dịu dàng, nhẹ nhàng đến chất chơi, bụi bặm.",
        price: 1450000,
        saleprice: 0,
      },
      {
        id: 1,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M9622C/M9622C_1-300x300.jpg",
        type: "Classic",
        description:
          "Converse Classic là dòng giày bán chạy nhất của Converse bởi tính chất cổ điển rất được ưa chuộng. Chất liệu vải canvas mềm mại, phần đế cao su với đường viền màu đặc trưng kết hợp với màu sắc đơn giản, năng động luôn kết hợp được nhiều ý tưởng thời trang, tạo ra nhiều phong cách khác nhau.",
        price: 1550000,
        saleprice: 0,
      },
      {
        id: 2,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M9696C/M9696C_1-300x300.jpg",
        type: "Classic",
        description:
          "Converse Classic rực rỡ với tone đỏ thời thượng, chắc chắn đây sẽ là lựa chọn cho những ai yêu thích sự nổi bật. Thiết kế đơn giản, tươi trẻ giúp những lựa chọn mix&match của bạn trở nên độc đáo và khác biệt hơn.",
        price: 1450000,
        saleprice: 0,
      },
      {
        id: 3,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M9621C/M9621C_1-300x300.jpg",
        type: "Classic",
        description:
          "Converse Classic cổ cao cá tính với tone màu đỏ rực rỡ, nổi bật. Sở hữu item này bạn hoàn toàn có thể chiếm được spotlight ở mọi lúc, mọi nơi. Đặc biệt khi kết hợp với những outfit quen thuộc vẫn tạo được điểm nhấn cho phong cách của bạn.",
        price: 1550000,
        saleprice: 0,
      },
      {
        id: 4,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Classic/Hi%CC%80nh%20chu%CC%89/121185-DRAKE-300x300.jpg",
        type: "Classic",
        description:
          "Converse Chuck Taylor Classic với thiết kế kinh điển phù hợp với mọi độ tuổi, giới tính, được ưa chuộng bởi sự đơn giản, thời trang, đặc biệt không kén người mang. Với gam màu kem lạ mắt tạo sự mới lạ cho tổng thể, thêm vào đó là chất liệu canvas thoáng mát cùng bộ đế cao su bền chắc tạo độ bám. Item “huyền thoại” này với sự đột phá về phong cách thời trang hứa hẹn sẽ mang lại cho bạn những outfit cực chất.",
        price: 1550000,
        saleprice: 0,
      },
      {
        id: 5,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Classic/Hi%CC%80nh%20chu%CC%89/135253-DRA%CC%A3E-300x300.jpg",
        type: "Classic",
        description:
          "Vẫn là thiết kế cổ điển của dòng Converse Classic cổ thấp, nay được làm mới hơn với chất liệu da mềm nhẹ cực kỳ cá tính, mạnh mẽ. Đây được xem là item được nhiều bạn trẻ yêu thích bởi độ chất chơi, bụi bặm, đặc biệt là kết hợp được nhiều style outfit khác nhau.",
        price: 1900000,
        saleprice: 900000,
      },
      {
        id: 6,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/M7650C/M7650C_1-300x300.jpg",
        type: "Classic",
        description:
          "Converse Chuck Taylor Classic với thiết kế kinh điển phù hợp với mọi độ tuổi, giới tính được ưa chuộng bởi sự đơn giản, thời trang, đặc biệt không kén người mang. Sở hữu phối màu basic đặc trưng, thêm vào đó là chất liệu canvas thoáng mát cùng bộ đế cao su bền chắc tạo độ bám. Item “huyền thoại” này với sự đột phá về phong cách thời trang hứa hẹn sẽ mang lại cho bạn những outfit cực chất.",
        price: 1550000,
        saleprice: 0,
      },
      {
        id: 7,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Classic/Hi%CC%80nh%20chu%CC%89/121184-DRAKE-300x300.jpg",
        type: "Classic",
        description:
          "Được xem là huyền thoại của dòng Converse Classic, phiên bản màu trắng cổ cao được nhiều bạn trẻ quan tâm và lựa chọn bởi chất liệu mềm nhẹ cùng kiểu dáng cực phong cách. Đây chính là sản phẩm làm bạn phải hài lòng về độ mix&match cực chuẩn, đặc biệt là khả năng làm bật lên cá tính dù bạn ở đâu, làm gì.",
        price: 1550000,
        saleprice: 950000,
      },
      {
        id: 8,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Classic/Hi%CC%80nh%20chu%CC%89/127440-DRAKE-300x300.jpg",
        type: "Classic",
        description:
          "Converse Classic là dòng giày bán chạy nhất của Converse bởi tính chất cổ điển rất được ưa chuộng. Chất liệu vải canvas mềm mại, phần đế cao su với đường viền màu đặc trưng kết hợp với màu sắc đơn giản, năng động luôn kết hợp được nhiều ý tưởng thời trang, tạo ra nhiều phong cách khác nhau.",
        price: 1550000,
        saleprice: 775000,
      },
      {
        id: 9,
        title: "CONVERSE CHUCK TAYLOR ALL STAR CLASSIC",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Classic/Hi%CC%80nh%20chu%CC%89/127441-DRAKE-300x300.jpg",
        type: "Classic",
        description:
          "Converse Classic cổ cao cá tính với tone màu đỏ rực rỡ, nổi bật. Sở hữu item này bạn hoàn toàn có thể chiếm được spotlight ở mọi lúc, mọi nơi. Đặc biệt khi kết hợp với những outfit quen thuộc vẫn tạo được điểm nhấn cho phong cách của bạn.",
        price: 1550000,
        saleprice: 775000,
      },
      {
        id: 10,
        title: "CONVERSE CHUCK 70 NAUTICAL TRI BLOCKED",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A04968C/A04968C_1-300x300.jpg",
        type: "Chuck 1970",
        description:
          "Hi Summer - Khám phá Converse Chuck 70 Nautical Tri Blocked với phong cách thiết kế hàng hải gây ấn tượng với những sắc màu tươi mát, nhã nhặn và phóng khoáng. Phối màu ở BST đại diện cho màu sắc ven biển, tàu thuyền, hàng hải và của đại dương sâu thẳm. BST hướng đến sự năng động đúng với tinh thần “Hi Summer cùng nhiều ưu điểm về chất lượng và độ bền cao, hứa hẹn mang đến cho bạn một mùa hè thật rực rỡ và hết mình với những chuyến đi trải nghiệm của tuổi trẻ. ",
        price: 2000000,
        saleprice: 200000,
      },
      {
        id: 11,
        title: "CONVERSE CHUCK 70 NAUTICAL TRI BLOCKED",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A04969C/A04969C_1-300x300.jpg",
        type: "Chuck 1970",
        description:
          "Hi Summer - Khám phá Converse Chuck 70 Nautical Tri Blocked với phong cách thiết kế hàng hải gây ấn tượng với những sắc màu tươi mát, nhã nhặn và phóng khoáng. Navy - Aqua Mist - Egret đại diện cho màu sắc ven biển, tàu thuyền, hàng hải và của đại dương sâu thẳm. BST hướng đến sự năng động đúng với tinh thần “Hi Summer cùng nhiều ưu điểm về chất lượng và độ bền cao, hứa hẹn mang đến cho bạn một mùa hè thật rực rỡ và hết mình với những chuyến đi trải nghiệm của tuổi trẻ. ",
        price: 2000000,
        saleprice: 200000,
      },
      {
        id: 12,
        title: "CONVERSE CHUCK TAYLOR 1970S HI",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A02755C/A02755C_1-300x300.jpg",
        type: "Chuck 1970",
        description:
          "Giữ nguyên form dáng cổ điển của dòng Chuck Taylor 70s quen thuộc, thiết kế Converse Chuck Taylor 1970S Hi đã mang tới một phiên bản ấn tượng hơn cùng phối màu Squirrel Friend/Egret/Black. Kết hợp cùng đệm lót OrthoLite êm ái và chất liệu Textile hứa hẹn sẽ giúp người dùng thoải mái trong suốt thời gian sử dụng. Một thiết kế trẻ trung, năng động cùng cảm giác kết nối về gu thời trang nổi bật mà bạn không thể bỏ lỡ trong năm nay.",
        price: 1900000,
        saleprice: 190000,
      },
      {
        id: 13,
        title: "CONVERSE CHUCK 70 SEASONAL COLOR",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A01448C/A01448C_PL12-300x300.jpg",
        type: "Chuck 1970",
        description:
          "Converse Chuck 70 Seasonal Color là “đứa con lai” giữa hai dòng giày đình đám Chuck 70S và Seasonal Color của nhà Converse. Đôi giày là sự kết hợp tinh túy giữa vẻ ngoài cổ điển của Chuck 70S cùng phối màu Dark Beetroot/Egret/Black thời thượng của Seasonal Color. Đặc biệt, màu đỏ rượu vang chủ đạo mang đến vẻ đẹp ấm áp, sang trọng và quyến rũ, rất phù hợp cho outfit mùa đông sắp đến.",
        price: 1900000,
        saleprice: 190000,
      },
      {
        id: 14,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/172591C/172591C_1-300x300.jpg",
        type: "Chuck 1970",
        description:
          "Quay trở lại với thiết kế mule linh hoạt, thoải mái, BST Converse Chuck 70 Mule Recycled Canvas ra mắt với phần gót thấp đặc biệt. Đồng thời sự thoải mái, tiện nghi còn thể hiện qua phần upper textile tái chế với tinh thần giảm thiểu ô nhiễm môi trường. Trình làng với 2 phối màu trắng đen kinh điển, đôi giày còn kế thừa các đặc điểm vốn có của dòng 70s, tuy nhiên, tiêu điểm chính vẫn là đường may cắt xẻ uốn lượn, chắp vá trên thân giày. ",
        price: 2000000,
        saleprice: 200000,
      },
      {
        id: 15,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 70 PLUS",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A00915C/A00915C_P1-300x300.jpg",
        type: "Chuck 1970",
        description:
          'Lấy cảm hứng từ dòng Chuck 70s, Chuck 70s Plus là một thiết kế "lệch pha" với sự kết hợp của hai loại vải 12oz và 16oz tái chế. Về tổng thể, đây là một kết cấu mới dựa trên sự tách rời - chắp vá - tái tạo đầy ấn tượng phá vỡ mọi quy tắc nhưng vẫn giữ được nét cổ điển của dòng giày kinh điển này.',
        price: 2500000,
        saleprice: 250000,
      },
      {
        id: 16,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S MULE RECYCLED CANVAS",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/172592C/172592C_P3-300x300.jpg",
        type: "Chuck 1970",
        description:
          "Quay trở lại với thiết kế mule linh hoạt, thoải mái, BST Converse Chuck 70 Mule Recycled Canvas ra mắt với phần gót thấp đặc biệt. Đồng thời sự thoải mái, tiện nghi còn thể hiện qua phần upper textile tái chế với tinh thần giảm thiểu ô nhiễm môi trường. Trình làng với 2 phối màu trắng đen kinh điển, đôi giày còn kế thừa các đặc điểm vốn có của dòng 70s, tuy nhiên, tiêu điểm chính vẫn là đường may cắt xẻ uốn lượn, chắp vá trên thân giày. ",
        price: 2000000,
        saleprice: 200000,
      },
      {
        id: 17,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S MY STORY",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/170282C/170282C%20-%20drake%20-%201-300x300.jpg",
        type: "Chuck 1970",
        description:
          "Converse My Story gây ấn tượng với các thiết kế độc đáo cùng họa tiết “My Story” graphics được in liền mạch đầy ấn tượng. Trên nền giày Canvas, các con chữ như nhảy múa, nối đuôi nhau một cách bất tận, mang đến phong cách mới lạ, thú vị cho người mang. Đặc biệt với phiên bản Chuck 70 cổ cao màu vàng, dòng chữ My Story như được highlight mang đến sắc thái nhấn mạnh càng làm bạn nổi bật hơn giữa đám đông.",
        price: 2000000,
        saleprice: 600000,
      },
      {
        id: 18,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S VALENTINE'S DAY",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/171117C/171117C-300x300.jpg",
        type: "Chuck 1970",
        description:
          "Trở lại vào một dịp rất đặc biệt với phiên bản Chuck 70s trong BST Converse Valentine’s Day, các nhà thiết kế đã truyền đi thông điệp yêu thương qua lời nhắn “Made With Love” được thêu nổi bật trên thân giày. Bên cạnh đó còn điểm xuyết thêm đường thêu những trái tim nối liền tạo cảm giác [Heart-linked-with-Heart] đầy ý nghĩa, hứa hẹn sẽ tạo nên một mùa Valentine tràn ngập ngọt ngào cho đôi lứa.",
        price: 2000000,
        saleprice: 600000,
      },
      {
        id: 19,
        title: "CONVERSE CHUCK TAYLOR ALL STAR 1970S LOVE FEARLESSLY",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/567153C/567153C-300x300.jpg",
        type: "Chuck 1970",
        description:
          "Kiểu dáng Converse 1970s Love Fearlessly có form cứng cáp, họa tiết chữ “LOVE” được sắp xếp linh hoạt hai bên thân giày tạo nên điểm nhấn rất riêng. Trung tâm lưỡi gà với hình trái tim đẹp mắt cộng thêm bộ đôi đường sọc đỏ chạy chạy quanh mũi và đế giày càng đánh bật lên nét cuốn hút cho thiết kế",
        price: 2200000,
        saleprice: 1400000,
      },
      {
        id: 20,
        title: "CONVERSE CHUCK TAYLOR ALL STAR KIDS INTERSTELLAR DINOS LOW TOP",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Kid/665392C-300x300.jpg",
        type: "Kid",
        description:
          "Hình ảnh của những chú khủng long được biến tấu đầy ngộ nghĩnh, tinh nghịch là một phần tuổi thơ của các bé nhà bạn. Nay Converse lại mượn hình ảnh này để áp dụng vào trong những thiết kế dành cho bé với công nghệ đế lót êm ái, giúp bé có được sự thoải mái hơn khi diện giày trên chân.",
        price: 1200000,
        saleprice: 600000,
      },
      {
        id: 21,
        title: "CONVERSE KIDS' CHUCK TAYLOR ALL STAR",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Kid/Trang%20ch%E1%BB%A7/326706C-300x300.jpg",
        type: "Kid",
        description:
          "Với chất liệu tốt từ Converse, mẫu mã vừa đơn giản mà không gây hại, kích ứng bàn chân của bé. Các gam màu tươi sáng sẽ làm các bé trở nên sành điệu và ngầu hơn.",
        price: 800000,
        saleprice: 400000,
      },
      {
        id: 22,
        title: "CONVERSE KIDS' CHUCK TAYLOR ALL STAR",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Kid/Trang%20ch%E1%BB%A7/327470C-300x300.jpg",
        type: "Kid",
        description:
          "Với chất liệu Canvas mềm mại và thiết kế hoàn toàn giống như phiên bản của người lớn. Nay sản phẩm được tối ưu cho các bạn nhỏ bằng 1 zip khóa cùng phía với logo Converse để các bé có thể dễ dàng mang - tháo giày.",
        price: 850000,
        saleprice: 425000,
      },
      {
        id: 23,
        title: "CONVERSE KIDS' CHUCK TAYLOR ALL STAR",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Kid/Trang%20ch%E1%BB%A7/326708C-DRAKE-300x300.jpg",
        type: "Kid",
        description:
          "Với chất liệu tốt từ Converse, mẫu mã vừa đơn giản, đẹp mà không gây hại, kích ứng bàn chân của bé. Các gam màu tươi sáng sẽ làm các bé trở nên sành điệu và ngầu hơn.",
        price: 800000,
        saleprice: 400000,
      },
      {
        id: 24,
        title: "CONVERSE KIDS' CHUCK TAYLOR ALL STAR",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Kid/Trang%20ch%E1%BB%A7/327468C-300x300.jpg",
        type: "Kid",
        description:
          "Với chất liệu Canvas mềm mại và thiết kế hoàn toàn giống như phiên bản màu đen Classic High Top của người lớn. Nay sản phẩm được tối ưu cho các bạn nhỏ bằng 1 zip khóa cùng phía với logo Converse để các bé có thể dễ dàng mang - tháo giày.",
        price: 850000,
        saleprice: 425000,
      },
      {
        id: 25,
        title: "CONVERSE KIDS' CHUCK TAYLOR ALL STAR",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Kid/Trang%20ch%E1%BB%A7/327443C-300x300.jpg",
        type: "Kid",
        description:
          "Với chất liệu tốt từ Converse, mẫu mã vừa đơn giản, đẹp mà không gây hại, kích ứng bàn chân của bé. Các gam màu tươi sáng sẽ làm các bé trở nên sành điệu và ngầu hơn.",
        price: 800000,
        saleprice: 400000,
      },
      {
        id: 26,
        title: "CONVERSE KIDS' CHUCK TAYLOR ALL STAR",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Kid/Trang%20ch%E1%BB%A7/327467C-300x300.jpg",
        type: "Kid",
        description:
          "Với chất liệu Canvas mềm mại và thiết kế hoàn toàn giống như phiên bản màu xanh Navy Classic High Top của người lớn. Nay sản phẩm được tối ưu cho các bạn nhỏ bằng 1 zip khóa cùng phía với logo Converse để các bé có thể dễ dàng mang - tháo giày.",
        price: 850000,
        saleprice: 425000,
      },
      {
        id: 27,
        title: "CONVERSE KIDS' CHUCK TAYLOR ALL STAR",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Kid/Trang%20ch%E1%BB%A7/327444C-300x300.jpg",
        type: "Kid",
        description:
          "Với chất liệu tốt từ Converse, mẫu mã vừa đơn giản, đẹp mà không gây hại, kích ứng bàn chân của bé. Các gam màu tươi sáng sẽ làm các bé trở nên sành điệu và ngầu hơn.",
        price: 800000,
        saleprice: 400000,
      },
      {
        id: 28,
        title: "CONVERSE KIDS' CHUCK TAYLOR ALL STAR",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/Kid/Trang%20ch%E1%BB%A7/327469C-300x300.jpg",
        type: "Kid",
        description:
          "Với chất liệu Canvas mềm mại và thiết kế hoàn toàn giống như phiên bản màu đỏ Classic High Top của người lớn. Nay sản phẩm được tối ưu cho các bạn nhỏ bằng 1 zip khóa cùng phía với logo Converse để các bé có thể dễ dàng mang - tháo giày.",
        price: 850000,
        saleprice: 425000,
      },
      {
        id: 29,
        title: "CONVERSE CHUCK TAYLOR ALL STAR SEASONAL COLOR",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/1J794C/1J794_1-300x300.jpg",
        type: "Seasonal",
        description:
          "Mang đến sự thoải mái cho mọi hoạt động thường ngày, Converse Chuck Seasonal Color là sự lựa chọn hoàn hảo cho bất kỳ trang phục nào. Với gam màu đơn sắc thời thượng sẽ tạo thêm phong cách hơn cho tổng thể trang phục. Với kiểu dáng cổ điển và kết cấu nội thất linh hoạt, đôi giày chính là sự kết hợp của thiết kế đơn giản nhưng không kém phần thời trang. Cùng với đó là chất liệu cao cấp, bền bỉ giúp bạn có được nhiều trải nghiệm thú vị nhất.",
        price: 1450000,
        saleprice: 435000,
      },
      {
        id: 30,
        title: "CONVERSE CHUCK TAYLOR ALL STAR SEASONAL COLOR",
        thumbnail:
          "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/1J793C/1J793C_PL1-300x300.jpg",
        type: "Seasonal",
        description:
          "Mang đến sự thoải mái cho mọi hoạt động thường ngày, Converse Chuck Seasonal Color là sự lựa chọn hoàn hảo cho bất kỳ trang phục nào. Với gam màu grey thời thượng sẽ tạo thêm phong cách hơn cho tổng thể trang phục. Nhờ kiểu dáng cổ điển và kết cấu nội thất linh hoạt, đôi giày chính là sự kết hợp của thiết kế đơn giản nhưng không kém phần thời trang. Cùng với đó là chất liệu cao cấp, bền bỉ giúp bạn có được nhiều trải nghiệm thú vị nhất.",
        price: 1550000,
        saleprice: 155000,
      },
];

for (let i = 0; i < btnDetail.length; i++) {
  btnDetail[i].addEventListener("click", (e) => {
    const idProduct = e.srcElement.id;
    console.log(idProduct);
    let arrayHTML = products.map((item, index) => {
      if (idProduct == index) {
        return `
                <div class="container">
                    <div class="row">
                        <div class="detail-innerwrap">
                            <div class="detail-product-left">
                                <img src="${item.thumbnail}" alt="">
                            </div>
                            <div class="detail-product-right">
                                <p><strong class="product-name"> ${item.title} </strong></p>
                                <div class="price">Price: ${item.price}đ</div>
                                <div class="saleprice">Sale Price: ${item.saleprice}đ</div>
                                <div class="desc">${item.description}</div>
                                <button onclick = "addToCard(${index})">Add To Card</button>
                            </div>
                        </div>
                    </div>
                </div>
              `;
      }
    });

    document.querySelector(".detail-product").innerHTML = arrayHTML.join("");
  });
}
