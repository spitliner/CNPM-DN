# CNPM-DN

Kill port 3000, 4000

```
npx kill-port 3000
npx kill-port 4000
```

Mở 2 terminal một cái cd vô client, một cái vô server, cùng chạy lệnh

```
yarn install
yarn start
```

Cài trước mongodb và enable mongodb trước khi chạy: [Link install guide](https://docs.mongodb.com/manual/installation/)

# Note:

## Client:

- Gọi API cho reservation
- Form cho trang quên mật khẩu

* Field email, nút lấy token
* Field nhập token
* Field nhập password mới, nút submit

- Form quên mật khẩu, đổi info (2 nút nằm trong account route sang 2 trang)
- Order bấm submit --> Payment 2 nút: (Lưu thêm trong order paymentType)

* pay online
* pay trực tiếp --> Submit

- Thêm trang payment (Minh hoạ) (Nếu pay online, không thì route về menu):

* Ngân hàng
* Mã thẻ
* Nút submit
