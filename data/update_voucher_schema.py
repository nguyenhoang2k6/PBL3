import json
import os

schema_path = 'database_schema.json'

with open(schema_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

existing_ids = [t['id'] for t in data['database']['tables']]

voucher_table = {
    "id": "tbl_khuyen_mai",
    "name": "Khuyến mãi",
    "description": "Quản lý Voucher giảm giá",
    "columns": [
        {"name": "ID", "type": "uuid", "primary_key": True},
        {"name": "Mã Voucher", "type": "text"},
        {"name": "Loại giảm giá", "type": "select", "options": ["Phan_Tram", "Tien_Mat"]},
        {"name": "Giá trị giảm", "type": "number"},
        {"name": "Số lượng", "type": "integer"}
    ]
}

if "tbl_khuyen_mai" not in existing_ids:
    data['database']['tables'].append(voucher_table)
    with open(schema_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print("Voucher table added to schema.")
else:
    print("Voucher table already exists.")
