import React from "react";
import '../../Styles/ProductDetail/Technical.css'

function TechnicalComponent() {
    return (
        <div className="technical-component">
            <h2>Thông số kỹ thuật</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Mô tả chi tiết</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Hãng sản xuất</td>
                        <td>Acer</td>
                    </tr>
                    <tr>
                        <td>Chủng loại</td>
                        <td>Aspire 7 A715-76G-59MW– model giải trí, gaming</td>
                    </tr>
                    <tr>
                        <td>Part Number</td>
                        <td>NH.QMYSV.001</td>
                    </tr>
                    <tr>
                        <td>Màu sắc, chất liệu</td>
                        <td>Đen (Charcoal Black); vỏ nhôm mặt A</td>
                    </tr>
                    <tr>
                        <td>Bộ vi xử lý</td>
                        <td>Intel® Core™ i5-12450H (3.3GHz upto 4.4Ghz/12MB cache)</td>
                    </tr>
                    <tr>
                        <td>Chipset</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Bộ nhớ trong</td>
                        <td>8GB DDR4 3200Mhz</td>
                    </tr>
                    <tr>
                        <td>Số khe cắm</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Dung lượng tối đa</td>
                        <td>32GB</td>
                    </tr>
                    <tr>
                        <td>VGA</td>
                        <td>NVIDIA® GeForce RTX™ 2050 4GB GDDR6</td>
                    </tr>
                    <tr>
                        <td>Ổ cứng</td>
                        <td>512GB SSD PCIe NVMe</td>
                    </tr>
                </tbody>
            </table>
            <button className="view-more">Xem thông số đầy đủ</button>
        </div>
    )
}

export default TechnicalComponent;