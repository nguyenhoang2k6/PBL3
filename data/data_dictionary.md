# Từ điển dữ liệu (Data Dictionary)

Bảng thiết kế dữ liệu tổng hợp dựa trên cấu trúc các thực thể trong dự án, tương tự như mẫu được cung cấp.

## Sản phẩm (`tbl_san_pham`)
**Mô tả:** Bảng quản lý sản phẩm

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Varchar | 36 ký tự | Primary key, Not null | Văn bản | Tự sinh |
| **ten_san_pham** | Nvarchar | 255 ký tự | Not null | Văn bản | Tên sản phẩm |
| **sku** | Nvarchar | 255 ký tự | Not null, Unique | Văn bản | SKU |
| **category_id** | Int |  | Not null, Foreign key | Số nguyên | Tham chiếu: tbl_danh_muc.ID |
| **thuong_hieu** | Nvarchar | 255 ký tự |  | Văn bản | Thương hiệu |
| **size** | Nvarchar | 255 ký tự |  | Văn bản | Size |
| **mau** | Nvarchar | 255 ký tự |  | Văn bản | Màu |
| **gia_nhap** | Decimal(18, 2) |  | Not null | Tiền tệ | Giá nhập |
| **gia_ban** | Decimal(18, 2) |  | Not null | Tiền tệ | Giá bán |
| **ton_kho** | Int |  | Not null | Số nguyên dương | Mặc định: 0 |
| **trang_thai** | Nvarchar | 100 ký tự | Not null | Văn bản | Tùy chọn: Nháp, Đang bán, Sắp về, Ngừng bán, Mặc định: Nháp |
| **link_san_pham** | Varchar | 255 ký tự |  | Văn bản | Link sản phẩm |
| **ghi_chu** | Text | Văn bản dài |  | Văn bản | Ghi chú |
| **ngay_tao** | Datetime |  | Not null | Thời gian | Mặc định: now(), Tự sinh |

---

## Khách hàng (`tbl_khach_hang`)
**Mô tả:** Bảng quản lý khách hàng

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Varchar | 36 ký tự | Primary key, Not null | Văn bản | Tự sinh |
| **ten_khach** | Nvarchar | 255 ký tự | Not null | Văn bản | Tên khách |
| **sdt** | Varchar | 15 ký tự | Not null | Văn bản | SĐT |
| **email** | Varchar | 100 ký tự |  | Văn bản | Email |
| **kenh** | Nvarchar | 100 ký tự |  | Văn bản | Tùy chọn: Facebook, Shopee, Website, Zalo, Khác |
| **nhan** | Nvarchar | 255 ký tự |  | Văn bản | Tùy chọn: VIP, Mới, Quay lại |
| **dia_chi** | Text | Văn bản dài |  | Văn bản | Địa chỉ |
| **ghi_chu** | Text | Văn bản dài |  | Văn bản | Ghi chú |
| **ngay_tao** | Datetime |  | Not null | Thời gian | Mặc định: now(), Tự sinh |

---

## Đơn hàng (`tbl_don_hang`)
**Mô tả:** Bảng quản lý đơn hàng

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Varchar | 36 ký tự | Primary key, Not null | Văn bản | Tự sinh |
| **ma_don** | Nvarchar | 255 ký tự | Not null, Unique | Văn bản | Tự sinh |
| **ngay_dat** | Date |  | Not null | Thời gian | Mặc định: now() |
| **customer_id** | Varchar | 36 ký tự | Not null, Foreign key | Văn bản | Tham chiếu: tbl_khach_hang.ID |
| **trang_thai_don** | Nvarchar | 100 ký tự | Not null | Văn bản | Tùy chọn: Chờ xác nhận, Đang chuẩn bị, Đang giao, Hoàn tất, Hủy, Mặc định: Chờ xác nhận |
| **thanh_toan** | Nvarchar | 100 ký tự | Not null | Văn bản | Tùy chọn: COD, Chuyển khoản, Ví điện tử |
| **da_thanh_toan** | Bit |  | Not null | Đúng/Sai | Mặc định: False |
| **tong_tien** | Decimal(18, 2) |  | Not null | Tiền tệ | Tổng tiền |
| **phi_ship** | Decimal(18, 2) |  |  | Tiền tệ | Mặc định: 0 |
| **giam_gia** | Decimal(18, 2) |  |  | Tiền tệ | Mặc định: 0 |
| **dia_chi_giao** | Text | Văn bản dài | Not null | Văn bản | Địa chỉ giao |
| **ghi_chu** | Text | Văn bản dài |  | Văn bản | Ghi chú |
| **ngay_tao** | Datetime |  | Not null | Thời gian | Mặc định: now(), Tự sinh |

---

## Danh mục (`tbl_danh_muc`)
**Mô tả:** Bảng quản lý danh mục sản phẩm

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Int |  | Primary key, Not null | Số nguyên dương | Tự sinh |
| **ten_danh_muc** | Nvarchar | 255 ký tự | Not null | Văn bản | Tên danh mục |
| **mo_ta** | Nvarchar | 255 ký tự |  | Văn bản | Mô tả |

---

## Nhà cung cấp (`tbl_nha_cung_cap`)
**Mô tả:** Bảng quản lý nhà cung cấp

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Int |  | Primary key, Not null | Số nguyên dương | Tự sinh |
| **ten_nha_cung_cap** | Nvarchar | 255 ký tự | Not null | Văn bản | Tên nhà cung cấp |
| **sdt** | Varchar | 15 ký tự | Not null | Văn bản | SĐT |
| **email** | Varchar | 100 ký tự |  | Văn bản | Email |
| **dia_chi** | Nvarchar | 255 ký tự |  | Văn bản | Địa chỉ |

---

## Phiếu nhập (`tbl_phieu_nhap`)
**Mô tả:** Bảng quản lý phiếu nhập kho

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Int |  | Primary key, Not null | Số nguyên dương | Tự sinh |
| **ma_phieu** | Nvarchar | 255 ký tự | Not null, Unique | Văn bản | Tự sinh |
| **ngay_nhap** | Date |  | Not null | Thời gian | Mặc định: now() |
| **supplier_id** | Int |  | Not null, Foreign key | Số nguyên | Tham chiếu: tbl_nha_cung_cap.ID |
| **user_id** | Int |  | Not null, Foreign key | Số nguyên | Tham chiếu: tbl_nguoi_dung.ID |
| **tong_tien** | Decimal(18, 2) |  | Not null | Tiền tệ | Tổng tiền |
| **ghi_chu** | Nvarchar | 255 ký tự |  | Văn bản | Ghi chú |

---

## Hóa đơn (`tbl_hoa_don`)
**Mô tả:** Bảng quản lý hóa đơn (chứng từ kế toán, VAT)

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Int |  | Primary key, Not null | Số nguyên dương | Tự sinh |
| **ma_hoa_don** | Nvarchar | 255 ký tự | Not null, Unique | Văn bản | Mã hóa đơn |
| **order_id** | Int |  | Not null, Foreign key | Số nguyên | Tham chiếu: tbl_don_hang.ID |
| **user_id** | Int |  | Not null, Foreign key | Số nguyên | Tham chiếu: tbl_nguoi_dung.ID |
| **ngay_xuat** | Datetime |  | Not null | Thời gian | Mặc định: now() |
| **tong_tien_truoc_thue** | Decimal(18, 2) |  | Not null | Tiền tệ | Tổng tiền trước thuế |
| **thue_vat** | Decimal(18, 2) |  | Not null | Tiền tệ | Thuế VAT |
| **tong_thanh_toan** | Decimal(18, 2) |  | Not null | Tiền tệ | Tổng thanh toán |
| **ma_so_thue** | Nvarchar | 255 ký tự |  | Văn bản | Mã số thuế |

---

## Người dùng (`tbl_nguoi_dung`)
**Mô tả:** Bảng quản lý tài khoản truy cập hệ thống

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Varchar | 36 ký tự | Primary key, Not null | Văn bản | Tự sinh |
| **username** | Nvarchar | 255 ký tự | Not null, Unique | Văn bản | Username |
| **password** | Varchar | 255 ký tự | Not null | Văn bản | Password |
| **role** | Nvarchar | 100 ký tự | Not null | Văn bản | Tùy chọn: Quản trị viên, Nhân viên, Khách hàng |
| **ho_ten** | Nvarchar | 255 ký tự | Not null | Văn bản | Họ tên |
| **email** | Varchar | 100 ký tự |  | Văn bản | Email |
| **ngay_tao** | Datetime |  | Not null | Thời gian | Mặc định: now(), Tự sinh |

---

## Thương hiệu (`tbl_thuong_hieu`)
**Mô tả:** Quản lý hãng sản xuất

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Int |  | Primary key, Not null | Số nguyên dương | ID |
| **ten** | Nvarchar | 255 ký tự |  | Văn bản | Tên |

---

## Kích thước (`tbl_kich_thuoc`)
**Mô tả:** Danh mục Size

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Int |  | Primary key, Not null | Số nguyên dương | ID |
| **ten** | Nvarchar | 255 ký tự |  | Văn bản | Tên |

---

## Màu sắc (`tbl_mau_sac`)
**Mô tả:** Danh mục Màu

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Int |  | Primary key, Not null | Số nguyên dương | ID |
| **ten** | Nvarchar | 255 ký tự |  | Văn bản | Tên |

---

## Biến thể sản phẩm (`tbl_bien_the_sp`)
**Mô tả:** Quản lý biến thể (Size/Màu) và Tồn kho

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Varchar | 36 ký tự | Primary key, Not null | Văn bản | ID |
| **product_id** | Varchar | 36 ký tự |  | Văn bản | product_id |
| **ton_kho** | Int |  |  | Số nguyên | Tồn kho |

---

## Ảnh sản phẩm (`tbl_anh_sp`)
**Mô tả:** Quản lý link ảnh

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Int |  | Primary key, Not null | Số nguyên dương | ID |
| **product_id** | Varchar | 36 ký tự |  | Văn bản | product_id |

---

## Sổ địa chỉ (`tbl_so_dia_chi`)
**Mô tả:** Địa chỉ giao hàng của khách

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Varchar | 36 ký tự | Primary key, Not null | Văn bản | ID |
| **customer_id** | Varchar | 36 ký tự |  | Văn bản | customer_id |

---

## Giỏ hàng (`tbl_gio_hang`)
**Mô tả:** Giỏ hàng đang chọn

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Varchar | 36 ký tự | Primary key, Not null | Văn bản | ID |
| **customer_id** | Varchar | 36 ký tự |  | Văn bản | customer_id |

---

## Đánh giá (`tbl_danh_gia`)
**Mô tả:** Đánh giá sản phẩm

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Varchar | 36 ký tự | Primary key, Not null | Văn bản | ID |
| **product_id** | Varchar | 36 ký tự |  | Văn bản | product_id |
| **rating** | Int |  |  | Số nguyên | Rating |

---

## Thanh toán (`tbl_thanh_toan`)
**Mô tả:** Lịch sử thanh toán

| Tên trường | Kiểu dữ liệu | Kích thước | Ràng buộc toàn vẹn | Khuôn dạng | Ghi chú |
| --- | --- | --- | --- | --- | --- |
| **id** | Int |  | Primary key, Not null | Số nguyên dương | ID |
| **order_id** | Varchar | 36 ký tự |  | Văn bản | order_id |

---

